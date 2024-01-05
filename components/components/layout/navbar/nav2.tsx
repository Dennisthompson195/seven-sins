import { getMenu } from 'lib/shopify';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar2() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className=" flex absolute items-center lg:-left-8 justify-between p-4 -top-2 lg:px-6">
      <div className="flex-none">
        <MobileMenu menu={menu} />
      </div>
     
    </nav>
  );
}