
import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";
import { CustomerContext } from "../../context/customer.contexts";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import "./navigation.styles.scss";


const Navigation = () => {
    
    const { currentCustomer, setCurrentCustomer } = useContext(CustomerContext);
    const { isCartOpen } = useContext(CartContext);
    //console.log(currentCustomer);
    const signoutHandler = () => {
        setCurrentCustomer(null);
    }
    return (
        <Fragment>
            <div className="navigation">

                <Link className="logo-container" to={'/'}>
                    <CrownLogo className="logo"/>
                    <span className="site-name">Fashion Kings</span>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={'Shop'}>Shop</Link>
                    <Link className="nav-link" to={'Contact'}>Contact</Link>
                    {
                        currentCustomer ?
                        (<span onClick={signoutHandler} className="nav-link">sign out</span>) : 
                        (<Link className="nav-link" to={'auth'}>Sign in</Link>)
                    }
                    <CartIcon />
                    
                </div>
                { isCartOpen && <CartDropdown /> }
            </div>
            <div className="page-content">
                <Outlet />
            </div>
        </Fragment>
    )

}

export default Navigation;