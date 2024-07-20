'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

type LinkProps = {
	href: string;
	label: string;
	className?: string;
};

export default function NavLink({ href, className, label }: LinkProps) {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className={`${pathname === href ? 'font-bold' : ''} ${className} `}
		>
			{label}
		</Link>
	);
}
