import logo from 'assets/logo.svg'
import Image from 'next/image'
import './Header.sass'
import { HeaderActions } from './HeaderActions'
import { HeaderNav } from './HeaderNav'
export function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <Image alt='Logo' src={logo} width={160} height={50} />
        <HeaderNav />
        <HeaderActions />
      </div>
    </header>
  )
}
