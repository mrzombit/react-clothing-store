import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payLoad: item //item = item that we want to add it to our cartItem array
})
