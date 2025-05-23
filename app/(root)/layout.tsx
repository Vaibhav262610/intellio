import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const RootLayout = ({children} : { children : ReactNode}) => {
  return (
    <div className='root-layout'>
      <Link href='/' className='cursor-pointer'>
        <nav className='flex  gap-3'>
          <Link href='/' className='flex items-center gap-2' />
          <Image src='/logo.svg'  alt='logo' width={38} height={32}/>
          <h2 className='text-primary-100'>Intellio</h2>
        </nav>
      </Link>
        {children}
    </div>
  )
}

export default RootLayout