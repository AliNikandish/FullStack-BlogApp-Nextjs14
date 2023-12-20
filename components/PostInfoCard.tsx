import React from 'react'

const PostInfoCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 mt-8">
    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="tailwind logo"
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <div className="flex  item-center">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
            سرگرمی
          </div>
        </div>
        <h3 className="font-black text-gray-800 md:text-3xl text-xl">
          عنوان
        </h3>
        <p className="md:text-lg text-gray-500 text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است
        </p>
        <div className="flex gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p>نویسنده : علی</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PostInfoCard