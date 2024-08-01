import Pagination from '@/components/Pagination';
import prisma from '@/db';
import Link from 'next/link';
import React from 'react';

type PostsPageProps = {
	params: {
		pageNumber: string;
	};
};

export default async function PostPage({ params }: PostsPageProps) {
	const postsPerPage = 4;
	const currentPage = Number(params.pageNumber) || 1;
	const totalPosts = await prisma.post.count();
	const totalPages = Math.ceil(totalPosts / postsPerPage);
	const posts = await prisma.post.findMany({
		skip: currentPage * postsPerPage - postsPerPage,
		take: postsPerPage,
	});

	return (
		<section className='max-w-4xl mx-auto w-full px-4 my-10'>
			<ul className='flex flex-col gap-4 md:gap-5'>
				{posts.map((post) => {
					return (
						<li className='border-4 border-green-500' key={post.id}>
							<Link
								href={`/post/${post.id}`}
								className=''
							>
								<h2 className='font-bold mb-2'>{post.title}</h2>
								<p className='px-2'>{post.body.split(' ').slice(0, 30).join(' ')}...</p>
							</Link>
						</li>
					);
				})}
			</ul>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</section>
	);
}
