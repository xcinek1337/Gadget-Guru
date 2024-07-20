'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
	{ href: '/', label: 'Home', style: '' },
	{ href: '/posts', label: 'Posts', style: '' },
	{ href: '/create-post', label: 'Create Post', style: '' },
	{ href: '/login', label: 'Login', style: '' },
	{ href: '/register', label: 'Register', style: '' },
];
const navLinksLogged = [
	{ href: '/', label: 'Home', style: '' },
	{ href: '/posts', label: 'Posts', style: '' },
	{ href: '/logout', label: 'Log Out', style: '' },
	,
];

export const Nav = ({ className }: { className: string }) => {
	const pathname = usePathname();
	let logged = false;
	return (
		<nav className={className}>
			{logged
				? navLinksLogged.map((link) => {
						return (
							<Link
								className={`${pathname === link?.href ? 'font-bold' : ''} ${className} `}
								href={link?.href!}
								key={link?.label}
							>
								{link?.label}
							</Link>
						);
				  })
				: navLinks.map((link) => {
						return (
							<Link
								className={`${pathname === link.href ? 'font-bold' : ''} ${className} `}
								href={link.href}
								key={link.label}
							>
								{link.label}
							</Link>
						);
				  })}
		</nav>
	);
};
