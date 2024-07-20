export default function Home() {
	return (
		<main>
			<div className='relative bg-center bg-no-repeat bg-cover bg-hero-small md:bg-hero-big h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] 2xl:h-[92vh]'>
				<div className='w-5/6 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-700 rounded-lg p-4 bg-gray-300/70'>
					<h1 className="font-bold text-lg ">Welcome to GadgetGuru!</h1>
					<p className="text-[14px]">
						Welcome to GadgetGuru, the blog dedicated to bringing you the freshest updates on electronic gadgets and
						tools. Whether you&#39;re a tech novice or a seasoned pro, our detailed reviews, insightful articles, and
						practical tips will help you navigate the ever-evolving world of electronics. Stay ahead of the curve with
						GadgetGuru!
					</p>
				</div>
			</div>
		</main>
	);
}
