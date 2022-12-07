
import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CustomerContext } from "../../context/customer.contexts";
import "./navigation.styles.scss";


const Navigation = () => {
    
    const { currentCustomer, setCurrentCustomer } = useContext(CustomerContext);
    //console.log(currentCustomer);
    const signoutHandler = () => {
        setCurrentCustomer(null);
    }
    return (
        <Fragment>
            <div className="navigation">

                <Link className="logo-container" to={'/'}>
                    Logo
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to={'Shop'}>Shop</Link>
                    <Link className="nav-link" to={'Contact'}>Contact</Link>
                    {
                        currentCustomer ?
                        (<span onClick={signoutHandler} className="nav-link">sign out</span>) : 
                        (<Link className="nav-link" to={'auth'}>Sign in</Link>)
                    }
                    
                </div>
            </div>
            <div className="page-content">
                <Outlet />
            </div>
        </Fragment>
    )

}

export default Navigation;