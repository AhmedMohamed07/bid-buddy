'use server';

import { revalidatePath } from 'next/cache';
import { database } from '@/db/database';
import { items } from '@/db/schema';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export async function createItemAction(formData: FormData) {
  const session = await auth();
  if (!session) {
    throw new Error('Unonthorized');
  }

  const user = session.user;

  if (!user || !user.id) {
    throw new Error('Unonthorized');
  }

  const startingPrice = formData.get('startingPrice') as string;

  const priceParsed = Math.floor(parseFloat(startingPrice) * 100);

  await database.insert(items).values({
    name: formData.get('name') as string,
    startingPrice: priceParsed,
    userId: user.id,
  });
  redirect('/');
}
