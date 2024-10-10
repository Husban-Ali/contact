import Link from "next/link";
import HeroSection from '../components/HeroSection.jsx'
import ContactForm from "../components/ContactForm.jsx";

export default function Home() {
    return (
        <div className="App">
        <HeroSection/>
        <ContactForm/>
          {/* <Link href={''}></Link>   */}
        </div>
    )

}
