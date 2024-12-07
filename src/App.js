import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MainPage from "./pages/mainPage";
import About from './pages/About';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import ListingSection from "./pages/Listing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PestControlPage from "./pages/PestControl";
import PackersMovers from "./pages/PackersMovers";
import WaterProofing from "./pages/WaterProofing";
import InteriorDesign from "./pages/InteriorDesign";
import Modular from "./pages/ModularKitchen";
import Architect from "./pages/Architect";
import ACService from "./pages/ACService";
import Generator from "./pages/Generator";
import UPSRepair from "./pages/UPSRepair";
import Entrance from "./pages/EntranceExam";
import College from "./pages/CollegeTuition";
import DistanceEdu from "./pages/DistanceEdu";
import AddListing from "./pages/AddListing";
import LoginModal from "./components/LoginModal";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/listing' element={<ListingSection />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path="/pestcontrol" element={<PestControlPage/>}/>
        <Route path='/packersMovers' element={<PackersMovers/>}/>
        <Route path="/waterproofing" element={<WaterProofing/>}/>
        <Route path="/interiorDesign" element={<InteriorDesign/>}/>
        <Route path="/modular" element={<Modular/>}/>
        <Route path='/architect' element={<Architect/>}/>
        <Route path="/acservice" element={<ACService/>}/>
        <Route path='/generator' element={<Generator/>}/>
        <Route path="/upsRepair" element={<UPSRepair/>}/>
        <Route path="/entrance" element={<Entrance/>}/>
        <Route path='/college' element = {<College/>}/>
        <Route path="/distanceEdu" element={<DistanceEdu/>}/>
        <Route path="/addListing" element={<AddListing/>}/>
        <Route path="/login" element={<LoginModal/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;