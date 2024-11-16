import logo from 'assets/logo.svg'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import './Header.sass'
import { HeaderNav } from './HeaderNav'
const HeaderActions = dynamic(() =>
  import('./HeaderActions').then(mod => mod.HeaderActions),
)
export function Header() {
  return (
    <header
      className='header'
      itemScope
      itemType='http://schema.org/Organization'
    >
      <div className='container'>
        <Link aria-label='Link to home page' href={'/'} itemProp='logo'>
          <Image alt='Logo' src={logo} width={160} height={50} />
        </Link>
        <HeaderNav />
        <HeaderActions />
      </div>
    </header>
  )
}
