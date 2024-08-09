import React from 'react'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    </>
  )
}
