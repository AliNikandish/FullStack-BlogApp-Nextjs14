"use client";

import React from 'react'
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: { id: string }) => {
    const router = useRouter();
    const deleteImage = async (publicId: string) => {
      const res = await fetch("/api/removeImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });
    };
  
    const handleDelete = async () => {
      const confirmed = window.confirm(
        "آیا مطمئن به حذف هستید ؟"
      );
  
      if (confirmed) {
        try {
          const res = await fetch(`/api/posts/${id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });
  
          if (res.ok) {
            console.log("Post deleted");
            const post = await res.json();
            const { publicId } = post;
            await deleteImage(publicId);
  
            console.log("Post deleted successfully");
            router.push('/dashboard')
            router.refresh();
          }
        } catch (error) {
            console.log("Something went wrong");
          console.log(error);
        }
      }
    };
  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded">حذف پست</button>
  )
}

export default DeleteButton