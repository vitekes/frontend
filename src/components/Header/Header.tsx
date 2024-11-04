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
    <header className='header'>
      <div className='container'>
        <Link href={'/'}>
          <Image alt='Logo' src={logo} width={160} height={50} />
        </Link>
        <HeaderNav />
        <HeaderActions />
      </div>
    </header>
  )
}
