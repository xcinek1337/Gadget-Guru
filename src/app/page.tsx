import prisma from '@/db';
import Link from 'next/link';

export default async function Home() {
	const posts = await prisma.post.findMany({
		take: 3,
	});
	return (
		<main>
			<div className='relative bg-center bg-no-repeat bg-cover bg-hero-small md:bg-hero-big h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] 2xl:h-[92vh]'>
				<article className='w-5/6 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-700 rounded-lg  p-4 lg:p-8 bg-gray-300/70'>
					<h1 className='font-bold text-lg lg:text-4xl lg:text-center lg:mb-2 '>Welcome to GadgetGuru!</h1>
					<p className='text-sm md:text-base lg:text-xl tracking-wide'>
						The blog dedicated to bringing you the freshest updates on electronic gadgets and tools. Whether you&#39;re
						a tech novice or a seasoned pro, our detailed reviews, insightful articles, and practical tips will help you
						navigate the ever-evolving world of electronics. Stay ahead of the curve with GadgetGuru!
					</p>
				</article>
				<Link href='/posts'>
					<button className='hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-[12%] border-2 px-6 py-4 rounded-xl bg-yellow-400/80 font-mono hover:bg-yellow-500/70 text-xl border-orange-400 font-semibold text-gray-800 transition'>
						Our technological news
					</button>
				</Link>
			</div>

			<section className='mt-6 px-4'>
				<h2 className='text-center text-gray-700 font-semibold text-2xl'>Featured Posts</h2>
				<ul className='flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-14 my-7 md:mb-10 '>
					{posts.map((post, i) => {
						return (
							<li
								key={post.id}
								className={` ${i === 1 ? 'md:pt-10' : 'md:pb-10'}`}
							>
								<Link href={`/post/${post.id}`}>
									<article className='border-2 border-gray-700 rounded-full bg-yellow-300'>
										<h3 className='text-center px-6 py-2.5 md:py-3 font-semibold text-lg md:text-xl xl:text-2xl text-gray-800'>{post.title}</h3>
									</article>
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
}
