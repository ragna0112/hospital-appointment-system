import Hero from "../components/Hero"
import WhyCooseUs from "../components/WhyChooseUs"
import Departments from "../components/Departments"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"

function HomePage() {
    return (
        <main>
            <Hero />
            <WhyCooseUs />  
            <Departments />
            <CallToAction />
            <Footer />
        </main>
    )
}

export default HomePage