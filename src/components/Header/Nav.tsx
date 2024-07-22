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
							className={`${
								pathname === link?.href ? 'font-bold' : ''
							} border-b-2-transparent sm:hover:font-bold sm:hover:border-b-2 hover:border-b-orange-200 transition `}
							href={link?.href!}
							key={link?.label}>
							{link?.label}
						</Link>
					))}
					<LogoutLink
						className={`border-2 border-gray-400 px-5 py-2 bg-gray-100 font-semibold rounded-full hover:bg-gray-200 transition text-center `}>
						Log Out
					</LogoutLink>
				</>
			) : (
				<>
					{navLinks.map(link => (
						<Link
							className={`${
								pathname === link.href ? 'font-bold' : ''
							}  border-b-2-transparent hover:font-bold sm:hover:border-b-2 sm:hover:border-b-orange-200 transition `}
							href={link.href}
							key={link.label}>
							{link.label}
						</Link>
					))}
					<LoginLink
						className={`border-2 border-yellow-500 px-5 py-2 bg-yellow-300 font-semibold rounded-full hover:bg-yellow-200 transition text-center `}>
						Login
					</LoginLink>
				</>
			)}
		</nav>
	)
}
