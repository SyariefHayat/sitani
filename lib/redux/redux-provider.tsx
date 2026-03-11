"use client"

import { useEffect } from "react"
import { Provider, useDispatch } from "react-redux"
import { store } from "./store"
import { initializeCart } from "./cart-slice"

const CartInitializer = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeCart())
    }, [dispatch])

    return <>{children}</>
}

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <CartInitializer>
                {children}
            </CartInitializer>
        </Provider>
    )
}

export default ReduxProvider
