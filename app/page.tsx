import Categories from '@/components/Categories'
import PostCard from '@/components/PostCard'
import Image from 'next/image'

export default function Home() {
  return (
     <div className='max-w-7xl mx-auto px-2'>
      <Categories/>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      </div>
     </div>
  )
}
