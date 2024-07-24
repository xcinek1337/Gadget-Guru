import createPost from '@/actions/action';
import React from 'react';

export default function Form() {
	return (
		<form
			action={createPost}
			className=' max-w-[400px] flex flex-col px-2 py-4 gap-2 mx-auto my-10 border-8 border-gray-300 rounded-lg bg-white'
		>
			<h1 className='border-2 w-fit mx-auto px-3.5 py-2 text-3xl bg-yellow-300 text-slate-500 font-semibold rounded-full'>
				Create Post
			</h1>
			<input
				className='border bg-gray-100 border-gray-500 rounded px-3 h-10'
				type='text'
				name='title'
				placeholder='title for new post...'
				required
			/>
			<textarea
				name='body'
				placeholder='Body  content for new post'
				className='border bg-gray-100 border-gray-500 rounded px-3 py-2'
				rows={9}
				required
			/>
			<button className='h-10 bg-blue-500 px-5 rounded text-white'>suybbmit</button>
		</form>
	);
}
