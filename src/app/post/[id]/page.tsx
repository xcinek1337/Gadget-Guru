import prisma from '@/db';
import Link from 'next/link';

export default async function PostPage({ params }: { params: { id: number } }) {
	const data = await prisma.post.findUnique({
		where: {
			id: Number(params.id),
		},
	});
	const time = data?.createdAt;
	return (
		<section className='max-w-[1200px] mx-auto px-6 my-6'>
			<article className='relative'>
				<h1 className='text-center font-logoFont text-xl font-bold'>{data?.title}</h1>
				<span className='absolute text-gray-500 text-sm top-8 right-1'>Posted in {time?.toLocaleDateString()}</span>
				<p className='mt-10 tracking-tight leading-7 '>{data?.body}</p>
			</article>
			<Link
				className='w-full mt-4 flex flex-row-reverse'
				href={'/posts'}
			>
				<button className='px-4 py-2  rounded-lg shadow-sm bg-yellow-300'>Back to Posts</button>
			</Link>
		</section>
	);
}
