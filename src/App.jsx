import  NavBar  from "./components/navBar/NavBar";
import  Hero  from "./components/hero/Hero";
import MeetBiom from "./components/meetBiom/MeetBiom"
import ReadyToStart from "./components/readyToStart/ReadyToStart";
import WhenYouNeedIt from "./components/whenYouNeedIt/WhenYouNeedIt";
import Reviews from "./components/reviews/Reviews";
import BetterForYou from "./components/betterForYou/BetterForYou";
import OceanWipes from "./components/oceanWipes/OceanWipes";
import InstagramSection from "./components/instagramSection/InstagramSection";
import EmailComponent from "./components/emailComponent/EmailComponent";
import FooterPage from "./components/FooterPage/FooterPage";




function App() {
  return (
    <div className="App">
      <NavBar/>     
      <Hero/>      
      <MeetBiom/> 
      <WhenYouNeedIt/>
      <ReadyToStart/>
      <Reviews/>
      <BetterForYou/>
      <OceanWipes/>
      <InstagramSection/>
      <EmailComponent/>
     
      <FooterPage/>
     
     
     

    </div>
  );
}

export default App;
