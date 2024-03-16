import React, { Fragment } from 'react'
import Nav from '@/components/navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Nav />
      <main className="p-2 lg:p-4">
        {children}
      </main>
    </Fragment>
  )
}

export default Layout