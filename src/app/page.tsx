import { auth } from '@/auth';

import { database } from '@/db/database';
import { items } from '@/db/schema';

export default async function Home() {
  const allItems = await database.query.items?.findMany();
  console.log(items);
  return (
    <main className="container mx-auto py-12 space-y-8">
      <h2 className="text-4xl font-bold">Items for Sell</h2>
      <div className="grid grid-cols-4 gap-8">
        {allItems?.map((item) => (
          <div key={item.id} className="border rounded-xl p-8">
            {item.name}${item.startingPrice / 100}
          </div>
        ))}
      </div>
    </main>
  );
}
