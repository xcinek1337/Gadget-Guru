'use client';

import Link from 'next/link';

type PaginationProps = {
	totalPages: number;
	currentPage: number;
};

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	return (
		<nav
			aria-label='pagination'
			className='w-full mt-4 flex justify-center gap-5'
		>
			{pageNumbers.map((pageNumber) => (
				<Link
				className={`border-2 bg-slate-300 px-3 py-2 cursor-pointer ${currentPage === pageNumber ? "bg-red-300" : ""}` }
					href={`/posts/${pageNumber}`}
					key={pageNumber}
				>
					{pageNumber}
				</Link>
			))}
		</nav>
	);
}
