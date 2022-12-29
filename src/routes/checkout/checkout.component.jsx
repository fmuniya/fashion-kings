import { useContext } from 'react';
import CartItem from '../../components/cart-item/cart-item.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';


const Checkout = () => {
    const {cartItems} = useContext(CartContext)
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Name</span>
                </div>

                <div className='header-block'>
                    <span>Quantity</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {
                    cartItems.map((item, index) => {
                        return <CheckoutItem key={index} item = {item} />
                    })
                }
        </div>
    )
}

export default Checkout