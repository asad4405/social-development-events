import Banner from "@/components/home/Banner";
import FeaturesSection from "@/components/home/FeaturesSection";
import Gallery from "@/components/home/Gallery";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
        <Banner/>
        <FeaturesSection/>
        <Gallery/>
        <Testimonials/>
        <Newsletter/>
    </div>
  );
}
