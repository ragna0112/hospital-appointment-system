import { Link } from "react-router-dom";
 
function HomePage() {
    return (
        <>
            <main>
                <h1>Hospital Appointment System</h1>
                <p>Book hospital appointments online quickly and conveniently</p>
                <br/>
                <Link to="/login">
                    <button>Login</button>
                </Link>

                {" "}

                <Link to="/register">
                    <button>Register</button>
                </Link>
            </main>
        </>
    );
}

export default HomePage;