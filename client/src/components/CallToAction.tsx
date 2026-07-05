import { Link } from "react-router-dom"

function CallToAction() {
    return (
        <section className="bg-blue-600 py-20 text-center text-white">
            <div className="mx-auto max-w-3xl px-8">
                <h2 className="mb-8 text-4xl font-bold">
                    Ready to Book Your Appointment?
                </h2>

                <p className="mb-8 texet-lg text-blue-100">
                    Join CareConnect today and schedule appointments
                    with trusted healthcare professionals in minutes.
                </p>

                <Link
                    to="/register"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
                >
                    Get Started
                </Link>
            </div>
        </section>
    )
}

export default CallToAction