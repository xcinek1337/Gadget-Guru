'use client'
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
	{ href: '/', label: 'Home', style: '' },
	{ href: '/posts', label: 'Posts', style: '' },
	{ href: '/create-post', label: 'Create Post', style: '' },
]
const navLinksLogged = [
	{ href: '/', label: 'Home', style: '' },
	{ href: '/posts', label: 'Posts', style: '' },
	{ href: '/create-post', label: 'Create Post', style: '' },
]

export const Nav = ({ className }: { className: string }) => {
	const { isAuthenticated } = useKindeBrowserClient()
	const pathname = usePathname()
	return (
		<nav className={className}>
			{isAuthenticated ? (
				<>
					{navLinksLogged.map(link => (
						<Link
							className={`${pathname === link?.href ? 'font-bold' : ''} ${className}`}
							href={link?.href!}
							key={link?.label}>
							{link?.label}
						</Link>
					))}
					<LogoutLink className={className}>Log Out</LogoutLink>
				</>
			) : (
				<>
					{navLinks.map(link => (
						<Link
							className={`${pathname === link.href ? 'font-bold' : ''} ${className}`}
							href={link.href}
							key={link.label}>
							{link.label}
						</Link>
					))}
					<LoginLink className={className}>Login</LoginLink>
				</>
			)}
		</nav>
	)
}
