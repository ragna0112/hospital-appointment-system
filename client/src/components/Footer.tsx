import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-8 py-12 md:flex-row">
                <div>
                    <h2 className="mb-3 text-2xl font-bold text-blue-600">
                        CareConnect
                    </h2>

                    <p className="max-w-sm text-gray-600">
                        Connecting Patients to Better Healthcare.
                    </p>
                </div>

                <div>
                    <h3 className="mb-3 font-semibold">
                        Quick Links
                    </h3>
                    
                    <div className="flex flex-col gap-2 text-gray-600">
                        <Link to="/">Home</Link>
                        <a href="#departments">Departments</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
                © 2026 CareConnect. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer