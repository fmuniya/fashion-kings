import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {

    const { isCartOpen, useIsCartOpen} = useContext(CartContext);
    const toggleCartState = () => {

    }
    return(
        <div className='cart-icon-container' onClick={toggleCartState}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;