"use client"

import { Provider } from "react-redux"
import { FooterWithSitemap } from "./Footer"
import { NavbarDefault } from "./Navbar"
import { store } from "@/redux/store"

const NavAndFootProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <NavbarDefault />
            {children}
            <FooterWithSitemap />
        </Provider>
    )
}

export default NavAndFootProvider