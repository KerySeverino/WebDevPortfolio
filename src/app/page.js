import HomeHeader from "./components/HomeHeader";
import Navbar from "./components/Navbar";
import HomeAboutMeSection from "./components/HomeAboutMeSection";

export default function Home() {
  return (
    <main>
        <Navbar />
        <HomeHeader/>
        <HomeAboutMeSection />
    </main>
  );
}
