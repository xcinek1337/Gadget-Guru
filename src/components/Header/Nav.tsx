
import NavLink from '@/components/Header/NavLink';
import React from 'react';

const navLinks = [
	{ href: '/', label: 'Home', style: '' },
	{ href: '/posts', label: 'Posts', style: '' },
	{ href: '/login', label: 'Login', style: '' },
	{ href: '/register', label: 'Register', style: '' },
];
const navLinksLogged = [];

export const Nav = ({ className }: { className: string }) => {
	
	let logged = false;
	return (
		<nav className={className}>
			{logged ? (
				<div>hah</div>
			) : (
				navLinks.map((link) => {
					return (
						<NavLink
							className={link.style}
							href={link.href}
							label={link.label}
							key={link.label}
						/>
					);
				})
			)}
		</nav>
	);
};
