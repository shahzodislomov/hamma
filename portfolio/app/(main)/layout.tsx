import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

interface ChildProps {
  children: ReactNode
}

const layout = ({children}: ChildProps) => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <nav>
      <Navbar />
      </nav>
      {children}
    </div>
  )
}

export default layout
