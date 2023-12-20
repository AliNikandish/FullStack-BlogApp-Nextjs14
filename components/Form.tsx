import { CldUploadButton } from 'next-cloudinary'
import React from 'react'

const Form = () => {
  return (
    <div className='max-w-5xl mx-auto mt-5'>
    <div className="bg-slate-200 rounded-md shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">ایجاد پست جدید</h1>
        <form action="/" method="post">
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="first_name">عنوان</label>
                <input className="border py-2 px-3 text-grey-800 rounded" type="text" name="first_name" id="first_name"/>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="last_name">متن</label>
                <textarea className="border py-2 px-3 text-grey-800 min-h-36 rounded"  name="last_name" id="last_name"/>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="email">موضوع</label>
                <select className="border py-2 px-3 text-grey-800 rounded" name="email" id="email">
                    <option value="">سرگرمی</option>
                    <option value="">ورزشی</option>
                    <option value="">برنامه نویسی</option>
                </select>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="password">عکس</label>
                <CldUploadButton >
                    <input type="file" />
                </CldUploadButton>
            </div>
        <button className="block bg-blue-600 hover:bg-blue-800 text-white uppercase text-lg mx-auto px-2 py-1 rounded" type="submit">پست کردن</button>
        </form>
    </div>
    </div>
  )
}

export default Form