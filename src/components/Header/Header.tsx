import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { Fragment } from 'react';
import { Nav } from '@/components/Header/Nav';

export default function Header() {
	return (
		<Popover className=' broder-b-2 bg-white'>
			<div className='max-w-[1200px] mx-auto px-6 py-2 h-24 flex justify-between items-center'>
				<h1 className='font-bold'>logo</h1>
				{/* mobile */}
				<div className='flex grow items-center justify-end sm:hidden'>
					<PopoverButton
						className={
							'inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
						}
					>
						<span className='sr-only'>open menu</span>
						<Bars3Icon
							className='h-6 w-6'
							aria-hidden='true'
						/>
					</PopoverButton>
				</div>
				<PopoverBackdrop className={'sm:hidden z-20 fixed inset-0 bg-black opacity-30'} />
				<Transition
					as={Fragment}
					enter='duration-200 ease-out'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='duration-100 ease-in'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<PopoverPanel
						className={'absolute bg-white z-20 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'}
					>
						<div className={'rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'}>
							<div className='px-5 pt-5 pb-6'>
								<div className='flex items-center justify-between'>
									<h1 className='font-bold'>logo</h1>
									<div className='-mr-2'>
										<PopoverButton>
											<span className='sr-only'>Close menu</span>
											<XMarkIcon
												className='h-6 w-6'
												aria-hidden='true'
											/>
										</PopoverButton>
									</div>
								</div>
								<div className='mt-6'>
									<Nav className={'flex flex-col gap-8'} />
								</div>
							</div>
						</div>
					</PopoverPanel>
				</Transition>
				{/* desktop */}

				<Nav className={'hidden sm:flex items-center justify-center gap-2 md:gap-8'} />
			</div>
		</Popover>
	);
}
