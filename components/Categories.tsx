import { Category } from "@/types";
import Link from "next/link";
import React from "react";


const getCategories = async (): Promise<Category[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};


const Categories = async () => {
  const categories = await getCategories();
  
  return (
    <div className="mt-5">
      <h3>موضوعات:</h3>

      <div className="flex gap-x-2 mt-2">

        {categories?.map(category =>{
          return(<Link key={category.id} href={`/categories/${category.catName}`} 
          className="bg-blue-500 text-blue-100 py-2 px-4 rounded-full text-xs font-bold flex items-center">
              {category.catName}
        </Link>
        )
        })}
      </div>
    </div>
  );
};

export default Categories;
