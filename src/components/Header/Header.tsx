import { Popover } from '@headlessui/react'
import { Nav } from '@/components/Header/Nav'
import Logo from '@/components/Header/Logo'
import NavMobile from '@/components/Header/NavMobile'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export default async function Header() {
	const { isAuthenticated } = getKindeServerSession()
	const isLogged = await isAuthenticated()

	return (
		<Popover className=' broder-b-2 bg-white'>
			<div className='max-w-[1200px] mx-auto px-6 py-2 h-24 flex justify-between items-center'>
				{/* LOGO *mobile navi = is label need on mobile width* */}
				<Logo mobileNavi={false} />

				{/* mobile */}
				<NavMobile />

				{/* desktop */}
				<Nav isLogged={isLogged} className={'hidden sm:flex items-center justify-center gap-2 md:gap-8'} />
			</div>
		</Popover>
	)
}
