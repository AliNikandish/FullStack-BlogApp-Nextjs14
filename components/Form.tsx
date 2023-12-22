"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@prisma/client";

type Form ={
    isEdit:boolean,
    id?: string;
    title?: string;
    content?: string;
    imageUrl?: string | null;
    publicId?: string | null;
    catName?: string | null;
    authorEmail?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
const Form = ({ isEdit,id,
    title:orgtitle,
    content:orgContent,
    imageUrl:orgImage,
    publicId:orgPublicId,
    catName,
    authorEmail,
    createdAt,
    updatedAt,}: Form) => {
        
  const [categories, setCategories] = useState<Category[]>([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publicId, setPublicId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchAllCategories = async () => {
      const res = await fetch("/api/categories");
      const catNames = await res.json();
      setCategories(catNames);
    };

    fetchAllCategories();

    if(isEdit){
        const initValues = () => {
        setTitle(orgtitle!);
        setContent(orgContent!);
        setImageUrl(orgImage!);
        setPublicId(orgPublicId!);
        setSelectedCategory(catName ? catName : '');
      };
  
      initValues();
    }
    

  }, [catName,isEdit,orgContent,orgImage,orgPublicId,orgtitle]);

  const handleImageUpload = (result: CldUploadWidgetResults) => {
    console.log("result: ", result);
    const info = result.info as object;

    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url as string;
      const public_id = info.public_id as string;
      setImageUrl(url);
      setPublicId(public_id);
      console.log("url: ", url);
      console.log("public_id: ", public_id);
    }
  };

  const removeImage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/removeImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });

      if (res.ok) {
        setImageUrl("");
        setPublicId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      const errorMessage = "Title and content are required";
      console.log(errorMessage);

      return;
    }

    if (!isEdit){

        try {
            const res = await fetch("/api/posts/", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                title,
                content,
                selectedCategory,
                imageUrl,
                publicId,
              }),
            });
      
            if (res.ok) {
              console.log("Post created successfully");
              router.push("/dashboard");
              router.refresh();
            } else {
              console.log("Something went wrong.");
            }
          } catch (error) {
            console.log(error);
          }

    } else{

        try {
            const res = await fetch(`/api/posts/${id}`, {
              method: "PUT",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                title,
                content,
                selectedCategory,
                imageUrl,
                publicId,
              }),
            });
      
            if (res.ok) {
              console.log("Post edited successfully");
              router.push("/dashboard");
              router.refresh();
            }
          } catch (error) {
            console.log("Something went wrong");
            console.log(error);
          }


    }

    
  };

  return (
    <div className="max-w-5xl mx-auto mt-5">
      <div className="bg-slate-200 rounded-md shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
          {isEdit ? "ویرایش پست" : "ایجاد پست جدید"}
        </h1>
        <form action="/" method="post" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              htmlFor="first_name"
            >
              عنوان
            </label>
            <input
              className="border py-2 px-3 text-grey-800 rounded"
              type="text"
              name="first_name"
              id="first_name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              htmlFor="last_name"
            >
              متن
            </label>
            <textarea
              className="border py-2 px-3 text-grey-800 min-h-36 rounded"
              name="last_name"
              id="last_name"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              htmlFor="email"
            >
              موضوع
            </label>
            <select
              className="border py-2 px-3 text-grey-800 rounded"
              name="email"
              id="email"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {!selectedCategory && (
                <option value="سایر">یک موضوع را انتخاب کنید</option>
              )}

              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.catName}>{category.catName}</option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              htmlFor="password"
            >
              عکس
            </label>
            {imageUrl ? (
              <div className="flex flex-col gap-y-2">
                <p>پیش نمایش عکس</p>
                <Image width={500} height={500} src={imageUrl} alt=""></Image>
              </div>
            ) :(

                <CldUploadButton
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              onUpload={handleImageUpload}
            >
              <input type="file" />
            </CldUploadButton>

            )}
            {publicId && (
              <button
                onClick={removeImage}
                className="mt-4 py-1 px-2 rounded-md font-bold w-fit bg-red-600 text-white mb-4"
              >
                حذف عکس
              </button>
            )}
          </div>

          {isEdit ? (
            <button
              className="block bg-blue-600 hover:bg-blue-800 text-white uppercase text-lg mx-auto px-2 py-1 rounded"
              type="submit"
            >
              ویرایش کردن
            </button>
          ) : (
            <button
              className="block bg-blue-600 hover:bg-blue-800 text-white uppercase text-lg mx-auto px-2 py-1 rounded"
              type="submit"
            >
              پست کردن
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
