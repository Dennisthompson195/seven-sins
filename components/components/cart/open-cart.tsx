import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="flex items-center justify-center rounded-md   text-black transition-colors dark:border-neutral-700">
      <ShoppingBagIcon
        className={clsx('absolute right-8 max-sm:right-3 top-6  h-8 w-8   mt-0 border-none px-1 py-1 border-black rounded-md   transition-all ease-in-out hover:scale-110 ', className)}
      />

      {quantity ? (
        <div className="absolute right-8 max-sm:right-3 top-7 -mr-2 -mt-2 h-4 w-4 pt-0 rounded bg-blue-600 text-[11px] font-medium text-black">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}