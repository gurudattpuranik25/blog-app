import HeroSection from "./components/HeroSection/HeroSection";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className=" bg-gray-100 ">
        <div className="w-[90%] m-auto">
          <HeroSection />
          {/* <Main /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
