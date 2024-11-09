import solana from 'assets/solana.png'
import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from 'ui/Button/Button'
import './Wallet.sass'

export const Wallet = ({ title }: { title: string }) => {
  const [isConnect, setIsConnect] = useState<boolean>(false)
  return (
    <article className='wallet'>
      <Image src={solana} width={128} height={36} alt='Logo wallet' />
      <p>{title}</p>
      <Button
        // @ts-ignore
        variant={cn({ black: isConnect, grey: !isConnect })}
        onClick={() => setIsConnect(s => (s = !s))}
      >
        {isConnect ? 'Отвязать кошелёк' : 'Добавить кошелёк'}
      </Button>
    </article>
  )
}
