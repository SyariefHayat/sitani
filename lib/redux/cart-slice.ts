"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CartItem {
    slug: string
    title: string
    image: string
    price: string
    unit: string
    qty: number
    seller: string
}

interface CartState {
    items: CartItem[]
}

const loadCartFromStorage = (): CartItem[] => {
    if (typeof window === "undefined") return []
    try {
        const stored = localStorage.getItem("sitani-cart")
        return stored ? JSON.parse(stored) : []
    } catch {
        return []
    }
}

const saveCartToStorage = (items: CartItem[]) => {
    if (typeof window === "undefined") return
    try {
        localStorage.setItem("sitani-cart", JSON.stringify(items))
    } catch {
        // ignore storage errors
    }
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        initializeCart(state) {
            state.items = loadCartFromStorage()
        },
        addToCart(state, action: PayloadAction<CartItem>) {
            const existing = state.items.find((item) => item.slug === action.payload.slug)
            if (existing) {
                existing.qty += action.payload.qty
            } else {
                state.items.push(action.payload)
            }
            saveCartToStorage(state.items)
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item.slug !== action.payload)
            saveCartToStorage(state.items)
        },
        updateQty(state, action: PayloadAction<{ slug: string; qty: number }>) {
            const item = state.items.find((item) => item.slug === action.payload.slug)
            if (item) {
                item.qty = Math.max(1, action.payload.qty)
            }
            saveCartToStorage(state.items)
        },
        clearCart(state) {
            state.items = []
            saveCartToStorage(state.items)
        },
    },
})

export const { initializeCart, addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items
export const selectCartCount = (state: { cart: CartState }) =>
    state.cart.items.reduce((total, item) => total + item.qty, 0)
export const selectCartTotal = (state: { cart: CartState }) =>
    state.cart.items.reduce((total, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ""))
        return total + price * item.qty
    }, 0)

export default cartSlice.reducer
