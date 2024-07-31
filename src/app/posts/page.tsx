import prisma from '@/db';
import Link from 'next/link';
import React from 'react';

export default async function Page() {
	const posts = await prisma.post.findMany();



	return (
		<div className='max-w-4xl mx-auto w-full px-4 my-10'>
			<ul className='flex flex-col gap-4 md:gap-5'>
				{posts.map((post) => {
					return (
						<Link
							href={`/post/${post.id}`}
							key={post.id}
							className='bg-slate-50 px-4 py-5 shadow-md hover:bg-slate-200'
						>
							<h2 className='font-bold mb-2'>{post.title}</h2>
							<p className='px-2'>{post.body.split(' ').slice(0, 30).join(' ')}...</p>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}
