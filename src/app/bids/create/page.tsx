import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import * as actions from './actions';

export default async function Home() {
  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold mb-8">Post an Item to Sell</h1>
      <form
        className="p-8 border rounded-xl space-y-4 max-w-lg shadow"
        action={actions.createItemAction}
      >
        <Input
          required
          className="max-w-lg "
          name="name"
          placeholder="Name your item"
        />
        <Input
          required
          className="max-w-lg "
          name="startingPrice"
          step={'.01'}
          type="number"
          placeholder="What to start your auvtion at"
        />

        <Button type="submit">Post Item</Button>
      </form>
    </main>
  );
}
