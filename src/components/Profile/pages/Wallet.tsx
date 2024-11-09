import { Heading } from 'ui/Heading/Heading'
import { Wallet } from '../components/Wallet/Wallet'

export const WalletProfilePage = () => {
  return (
    <div className='profile__wallet'>
      <Heading>Кошелёк</Heading>
      <div className='profile__wallets'>
        {[
          { title: '0xCC188d88bf74ABF492F75c267370a850FAE03Eea' },
          { title: '0xCC188d88bf74ABF492F75c267370a850FAE03Eea' },
          { title: '0xCC188d88bf74ABF492F75c267370a850FAE03Eea' },
        ].map(({ title }, i) => (
          <Wallet title={title} key={i} />
        ))}
      </div>
    </div>
  )
}
