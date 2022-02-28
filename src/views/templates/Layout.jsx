import React from 'react'
import { Navbar } from '../organisms/Navbar'

export const Layout = ({children}) => {
    return(
        <>
            <Navbar>
                {children}
            </Navbar>
        </>
    )
};