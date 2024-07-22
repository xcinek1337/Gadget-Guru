'use client'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
	{ href: '/', label: 'Home', style: '' },
	{ href: '/posts', label: 'Posts', style: '' },
	{ href: '/create-post', label: 'Create Post', style: '' },
	{ href: '/api/auth/login?', label: 'Login', style: '' },
]
const navLinksLogged = [
	{ href: '/', label: 'Home', style: '' },
	{ href: '/posts', label: 'Posts', style: '' },
	{ href: '/logout', label: 'Log Out', style: '' },
	,
]

export const Nav = ({ className, isLogged }: { className: string; isLogged: boolean }) => {
	const pathname = usePathname()
	return (
		<nav className={className}>
			{isLogged
				? navLinksLogged.map(link => {
						return (
							<Link
								className={`${pathname === link?.href ? 'font-bold' : ''} ${className} `}
								href={link?.href!}
								key={link?.label}>
								{link?.label}
							</Link>
						)
				  })
				: navLinks.map(link => {
						return (
							<Link
								className={`${pathname === link.href ? 'font-bold' : ''} ${className} `}
								href={link.href}
								key={link.label}>
								{link.label}
							</Link>
						)
				  })}
		</nav>
	)
}
