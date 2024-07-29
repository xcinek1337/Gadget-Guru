import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='absolute bottom-0 border-t-2 py-2 bg-white border-gray-200 w-full text-center left-0'>
			<span className='font-serif'> Copyright © {new Date().getFullYear()}. All rights reserved. </span>
            <hr className='border-none' />
			<Link className='font-logoFont text-orange-400' href={'https://github.com/xcinek1337'}>made by xcinek1337</Link>
		</footer>
	);
}
