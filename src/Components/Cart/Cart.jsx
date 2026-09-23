import { Component } from "react";
import "./Cart.css";

class Cart extends Component {
    render() {
        const { cartItems, removeItemFromCart } = this.props;

        return (
            <div className="cart-page">
                <div className="cart-header">
                    <h1>🛒 My Cart</h1>
                    <p>
                        {cartItems.length}{" "}
                        {cartItems.length === 1 ? "Book" : "Books"} in your cart
                    </p>
                </div>

                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <div className="empty-icon">📚</div>
                        <h2>Your Cart is Empty</h2>
                        <p>Add some amazing books to your cart!</p>
                    </div>
                ) : (
                    <div className="cart-container">
                        {cartItems.map((eachItem, index) => (
                            <div className="cart-card" key={index}>
                                <div className="book-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="book-icon">
                                    📖
                                </div>

                                <div className="book-details">
                                    <h2>{eachItem.book_name}</h2>

                                    <p className="author">
                                        ✍️ {eachItem.author_name}
                                    </p>

                                    <div className="book-bottom">
                                        <span className="price">
                                            ₹{eachItem.book_cost}
                                        </span>

                                        <button className="remove-btn" onClick={()=>{
                                            removeItemFromCart(eachItem.bookid)
                                        }}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {cartItems.length > 0 && (
                    <div className="cart-summary">
                        <div>
                            <span>Total Books</span>
                            <strong>{cartItems.length}</strong>
                        </div>

                        <div>
                            <span>Total Price</span>
                            <strong>
                                ₹
                                {cartItems.reduce(
                                    (total, item) =>
                                        total + Number(item.book_cost),
                                    0
                                )}
                            </strong>
                        </div>

                        <button className="checkout-btn">
                            Proceed to Checkout →
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default Cart;