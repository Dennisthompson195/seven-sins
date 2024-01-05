import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <>
    <div
      className={clsx('absolute -bottom-8 left-0 flex w-full mx-auto items-center text-center justify-center px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex-none items-center  bg-white p-1 text-base xs:text-xs font-semibold text-black backdrop-blur-md">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        
      </div>
    </div>
    <div
    className={clsx('absolute -bottom-16 left-0 flex-none w-full mx-auto items-center text-center justify-center px-4 pb-4 @container/label', {
      'lg:px-20 lg:pb-[35%]': position === 'center'
    })}
  >
    <Price
          className="flex-none rounded-full  p-2 text-black"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
  </div>
  </>
  );
};

export default Label;