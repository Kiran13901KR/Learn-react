import React from "react";
import { useSelector } from "react-redux";
import { clearCart } from "../reduxStore/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.itemCart || []);
    console.log("cartItems", cartItems);

    const clearRestoCart = () => {
        dispatch(clearCart());
    }
    const proceedPayment = () => {
        const totalAmount = cartItems.reduce((total, item) => total + (item.price || 0), 0);
        alert(`Proceeding to payment for ₹${totalAmount / 100}`);

    }
    return (
        <div className="cart-container">
            {
                cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <div style={{ fontSize: "60px" }}>🛒</div>
                        <h2>Your Cart is Empty</h2>
                        <p>🍔 🍕 🍜 Add your favorite dishes and enjoy a delicious meal!</p>
                    </div>
                ) : (
                    <h2>🛒 Your Cart</h2>
                )
            }
            


            {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                    <div className="cart-item-header">
                        <h3>{item?.name}</h3>
                        <span className="price">
                            ₹{item?.price ? item.price / 100 : 0}
                        </span>
                    </div>

                    <p className="description">{item?.description}</p>

                    <div className="details">
                        <span>{item?.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}</span>
                        <span>⭐ {item?.avgRating || "N/A"}</span>
                    </div>
                </div>
            ))}
            {cartItems.length > 0 && (
                <div className="cart-actions">
                    <button className="checkout-button" onClick={clearRestoCart}>Clear Cart</button>
                    <button className="checkout-button" onClick={proceedPayment}>Proceed to Checkout</button>
                </div>
            )}

        </div>
    );
};

export default Cart;
