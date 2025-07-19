import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/icon1.png';
// import background from '../../assets/bg.jpg';
import background1 from "../../assets/background1.jpg"
import "./Navbar.css"

const Navbar = () => {
    // const navigate = useNavigate();
    const location = useLocation();

    // Check if current page is Home
    const isHome = location.pathname === "/";
    return (
        <>
            {/* <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md navi">
                <div>
                    <img src={logo} alt="Logo" className="h-25 w-25" />
                </div>

                <div>
                    <ul className="flex gap-6 font-medium ml-140">
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/explore" >Search</NavLink></li>
                        <li><NavLink to="/how-it-works" >How It Works</NavLink></li>
                        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                        <li><NavLink to="/login">Log In</NavLink></li>
                    </ul>
                </div>

                <NavLink to="/signup">
                    <button className="Button">Sign Up</button>
                </NavLink>
            </nav> */}

            <div
                className={isHome ? "navi" : ""}
            // style={isHome ? { backgroundImage: `url(${background1})` } : {}}
            >
                <nav className=" p-4 text-xl flex justify-between items-center">
                    <div>
                        <img src={logo} alt="Logo" className="w-25 h-25 mr-130" />
                    </div>
                    <div>
                        <ul className={`flex gap-6 ${isHome ? "" : ""}`}>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/explore">Search</NavLink>
                            <NavLink to="/how-it-works">How it Works</NavLink>
                            <NavLink to="/testimonials">About</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </ul>
                    </div>
                    <div>
                        <button className="Button ml-110 text-xl">Sign Up</button>
                    </div>
                </nav>
            </div>

        </>
    );
};

export default Navbar;
