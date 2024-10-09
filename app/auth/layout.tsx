import Navbar from '@/components/auth/navbar'
import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className='w-full'>
      <Navbar />
      <div className='h-screen flex items-center justify-center'>
          {children}
      </div>
    </section>
  )
}

export default AuthLayout