import {Link} from "react-router-dom";

function Navbar(){
    return (
    <>
        <div className="flex justify-center mt-5">
            <ul className="flex gap-10 text-2xl">
                <li className="Navbar-page-link"><Link to="/" > Home </Link></li>
                <li className="Navbar-page-link"><Link to="/portfolio"> Portfolio </Link></li>
                <li className="Navbar-page-link"><Link to="/contact"> Contact </Link></li>
                <li className="Navbar-page-link"><Link to="/cats"> Cats </Link></li>
            </ul>
        </div>
    </>
    )
}
export default Navbar;