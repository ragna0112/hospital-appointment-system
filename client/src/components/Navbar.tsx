import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
            <Link
                to="/"
                className="text-3xl font-bold text-blue-600">
                CareConect
            </Link>

            <div className="flex items-center gap-8">
                <Link
                    to="/"
                    className="text-gray-700 hover:text-blue-600 transition">
                    Home
                </Link>
                    
                <a
                    href="#departments"
                    className="text-gray-700 hover:text-blue-600 transition">
                    Departments
                </a>

                <a
                    href="#contact"
                    className="text-gray-700 hover:text-blue-600 transition">
                    Contact
                </a>

                <Link
                    to="/login"
                    className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition">
                    Login
                </Link>
            </div>
        </nav>
    )
}

export default Navbar