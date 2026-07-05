import {
    HeartPulse,
    Brain,
    Bone,
    Baby,
} from "lucide-react"

function Departments() {
    return (
        <section className="mx-auto max-w-7xl px-8 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold">
                Our Departments
            </h2>

            <div className="grid gap-8 md:grid-cols-4">
                <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm">
                    <HeartPulse
                      size={42}
                      className="mx-auto mb-4 text-blue-600"
                    />

                    <h3 className="font-semibold">
                        Cardiology
                    </h3>
                </div>

                <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm">
                    <Brain
                      size={42}
                      className="mx-auto mb-4 text-blue-600"
                    />

                    <h3 className="font-semibold">
                        Neurology
                    </h3>
                </div>

                <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm">
                    <Bone
                      size={42}
                      className="mx-auto mb-4 text-blue-600"
                    />

                    <h3 className="font-semibold">
                        Orthoppedics
                    </h3>
                </div>

                <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm">
                    <Baby
                      size={42}
                      className="mx-auto mb-4 text-blue-600"
                    />

                    <h3 className="font-semibold">
                        Pediatrics
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Departments