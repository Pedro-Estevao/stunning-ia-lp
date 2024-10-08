import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Testimonials from "@/components/Testimonials";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<LogoTicker />
			<Features />
			<Testimonials />
			<CTA />
			<Footer />
		</>
  	);
};

export default Home;