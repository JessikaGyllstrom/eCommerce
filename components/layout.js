import { Navbar } from './navbar';
import { Footer } from './footer';
import { productlist } from '../pages/list';
import { Roboto } from '@next/font/google';

function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout;