import React from 'react'
import Menu from '../menu/Menu'
import { Outlet } from 'react-router-dom'
import Last from '../last/Last'

const Rootlayout = () => {
  return (
   <>
   <Menu/>
   
   <Outlet/>
   <Last/>
   </>
  )
}

export default Rootlayout