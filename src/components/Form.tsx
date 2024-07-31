'use client';

import createPost from '@/actions/createPost';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Form() {
	const notify = () => toast.success('Post published ');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			await createPost(formData);
			notify();
			form.reset();
		} catch (error) {
			toast.error('Failed to publish post');
			console.error('Error creating post:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className=' max-w-[500px] flex flex-col px-4 py-8 gap-2 mx-auto mt-8 rounded-xl bg-white md:text-lg'
		>
			<input
				id='title'
				className='border-2 bg-gray-100 border-gray-200 rounded px-3 h-10 focus:ring-0 focus:outline-none focus:border-2 focus:border-yellow-400 transition md:py-7 '
				type='text'
				name='title'
				placeholder='Title...'
				required
			/>

			<textarea
				name='body'
				placeholder='Body content for new post...'
				className='border-2 bg-gray-100 border-gray-200 rounded px-3 py-2 focus:ring-0 focus:outline-none focus:border-2 focus:border-yellow-400 transition'
				rows={12}
				required
			/>
			<button
				className={`py-2 bg-yellow-500 px-5 rounded text-gray-50 font-bold tracking-widest transition ${
					isSubmitting ? 'cursor-not-allowed' : 'hover:bg-yellow-600'
				}`}
				disabled={isSubmitting}
			>
				{isSubmitting ? 'Submitting...' : 'Submit'}
			</button>
			<Toaster />
		</form>
	);
}
