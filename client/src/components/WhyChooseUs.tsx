function WhyChooseUs() {
    return (
        <section className="mx-auto max-w-7xl px-8 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold">
                Why Choose CareConnect?
            </h2>

            <div className="grid gap-8 md: grid-cols-3">
                <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm">
                    <div className="mb-4 text-5xl">🩺</div>
                    
                    <h3 className="mb-3 text-xl font-semibold">
                        Certified Doctors
                    </h3>

                    <p className="text-gray-600">
                        Connect with licensed healthcare professionals you can trust.
                    </p>
                </div>
                
                <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm">
                    <div className="mb-4 text-5xl">🔒</div>

                    <h3 className="mb-3 text-xl font-semibold">
                        Secure Records
                    </h3>

                    <p className="text-gray-600">
                        Your medical information is protected with secure technology.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs



