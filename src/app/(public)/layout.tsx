import React, { Fragment } from 'react'
import NavMenu from '@/components/navmenu'

type Props = {
  children: React.ReactNode
}


const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <NavMenu />
      <main className="p-2 lg:p-4">
        {children}
      </main>
    </Fragment>
  )
}

export default Layout