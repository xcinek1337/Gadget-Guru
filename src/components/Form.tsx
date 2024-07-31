'use client';

import createPost from '@/actions/createPost';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import z, { ZodError } from 'zod';

const Post = z.object({
	title: z.string().trim().min(1, 'Title is required'),
	body: z.string().trim().min(1, 'Body content is required'),
});

export default function Form() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const form = e.currentTarget;
		const formData = new FormData(form);
		const body = formData.get('body') as string;
		const title = formData.get('title') as string;

		try {
			Post.parse({
				title,
				body,
			});

			await createPost(formData);
			toast.success('Post published ');
			form.reset();
		} catch (error) {
			if (error instanceof ZodError) {
				toast.error(error.errors[0]?.message);
			} else {
				console.log(error);
			}
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
				placeholder='Title...'
				name='title'
			/>
			

			<textarea
				placeholder='Body content for new post...'
				className='border-2 bg-gray-100 border-gray-200 rounded px-3 py-2 focus:ring-0 focus:outline-none focus:border-2 focus:border-yellow-400 transition'
				rows={12}
				name='body'
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
