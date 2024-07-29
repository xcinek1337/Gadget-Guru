import prisma from '@/db'
import React from 'react'


export default async function Page() {
   const posts = await prisma.post.findMany()
  return (
    <div>
      {posts.map((post) => {
        return (
          <p key={post.id} className='text-center'>{post.id} {post.title}</p>
        )
      })}
    </div>
  )
}
