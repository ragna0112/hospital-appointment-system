function Hero() {
    return (
        <section className="mx-auto flex min-h-[80vh] max-w-7-xl items-center justify-between px-8">
            <div className="max-w-2xl">
                <p className="mb-4 text-lg font-semibold text-blue-600">
                    Welcome to CareConnect
                </p>

                <h1 className="mb-6 text-5xl font-bold leading-tight">
                    Connecting Patients to Better Healthcare.
                </h1>

                <p className="mb-8 text-lg text-gray-600">
                    Book appointments, skip the queues, and connect
                    with trusted healthcare professionals anytime,
                    anywhere.
                </p>

                <div className="flex gap-4">
                    <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                        Book Appointment
                    </button>

                    <button className="rounded-lg border-gray-300 px-6 py-3 font-medium hover:bg-gray-100">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex h-96 w-96 items-center justify-center rounded-full bg-blue-100">
                    <p className="text-blue-600 font-semibold">
                        Doctor Illustration
                    </p>
                </div>
        </section>
    );
}

export default Hero;