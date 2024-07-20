import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ mobileNavi }: { mobileNavi: boolean }) {
	return (
		<Link
			className='flex items-end'
			href={'/'}
		>
			<Image
				className='w-[40px] h-[40px]'
				width={100}
				height={100}
				src={'/logo2.png'}
				alt='logo'
			/>
			<span
				className={`${
					mobileNavi ? 'visible' : 'hidden'
				} sm:block ml-2 pb-1 font-bold font-logoFont text-xl md:text-2xl lg:text-3xl lg:pb-0`}
			>
				GadgetGuru
			</span>
		</Link>
	);
}
