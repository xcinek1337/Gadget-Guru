'use client';

import Link from 'next/link';

type PaginationProps = {
	totalPages: number;
	currentPage: number;
};

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
	const delta = 3;
	const range: number[] = [];
	for (let i = 1; i <= totalPages; i++) {
		if (i === 1 || i === totalPages || (i > currentPage - delta && i < currentPage + delta)) {
			range.push(i);
		}
	}

	const paginationItems = range.reduce<(number | string)[]>((acc, number, index) => {
		if (index > 0) {
			const prevNumber = range[index - 1];
			if (number - prevNumber > 1) {
				acc.push('...');
			}
		}
		acc.push(number);
		return acc;
	}, []);

	return (
		<nav
			aria-label='pagination'
			className='w-full bg-white py-4 border-y-2 mt-4 flex justify-center min-[400px]:gap-0.5 min-[500px]:gap-2  md:gap-5'
		>
			<Link
				className={`font-logoFont ${currentPage === 1 ? 'cursor-default text-gray-500' : ''}`}
				href={`${currentPage === 1 ? '' : `/posts/${currentPage - 1}`}`}
			>
				{'<'}
			</Link>
			{paginationItems.map((item, index) => (
				<ul key={index}>
					{item === '...' ? (
						<span className='px-3 py-2'>{item}</span>
					) : (
						<Link
							className={`font-logoFont rounded-full px-3.5 py-2 cursor-pointer ${
								currentPage === item ? 'bg-gray-400' : ''
							} hover:bg-gray-300 transition`}
							href={`/posts/${item}`}
						>
							{item}
						</Link>
					)}
				</ul>
			))}
			<Link
				className={`font-logoFont ${currentPage === totalPages ? 'cursor-default text-gray-500' : ''}`}
				href={`${currentPage === totalPages ? '' : `/posts/${currentPage + 1}`}`}
			>
				{'>'}
			</Link>
		</nav>
	);
}
