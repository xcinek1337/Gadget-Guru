'use server'

import prisma from '@/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function createPost(FormData: FormData) {
	const { isAuthenticated } = getKindeServerSession()
	const body = FormData.get('body') as string
	const title = FormData.get('title') as string

    // check if user is already logged
	if (!(await isAuthenticated())) {
		redirect('/api/auth/login')
	}
	await prisma.post.create({
		data: {
			title,
			body,
		},
	})

    revalidatePath('/posts')
}
