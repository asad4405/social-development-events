import Banner from "@/components/home/Banner";
import FeaturesSection from "@/components/home/FeaturesSection";
import Gallery from "@/components/home/Gallery";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";
import UpcommingEvents from "@/components/home/UpcommingEvents";

export default function Home() {
  return (
    <div>
        <Banner/>
        <FeaturesSection/>
        <UpcommingEvents/>
        <Gallery/>
        <Testimonials/>
        <Newsletter/>
    </div>
  );
}
