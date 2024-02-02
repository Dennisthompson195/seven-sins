import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';

export function GridTileImageTwo({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <>
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden',
        {
          relative: label,
          'border-2 border-none': active,
          'border-none ': !active
        }
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx('relative h-fit w-fit', {
            'transition duration-300 ease-in-out group-hover:scale-105 bg-black': isInteractive
          })}
          {...props}
        />
      ) : null}
      
    </div>
    <div className='relative -top-4 pb-6'>
    {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
      </div>
    </>
  );
}