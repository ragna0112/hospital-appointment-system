import Hero from "../components/Hero"
import WhyCooseUs from "../components/WhyChooseUs"
import Departments from "../components/Departments"
import CallToAction from "../components/CallToAction"

function HomePage() {
    return (
        <main>
            <Hero />
            <WhyCooseUs />  
            <Departments />
            <CallToAction />
        </main>
    )
}

export default HomePage