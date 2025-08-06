

import HeroGradient from './components/navbar/hero/HeroGradient';
import SubHeroo from './components/navbar/hero/SubHeroo';
import HeroMain from './components/navbar/hero/HeroMain';
import NavBarMain from './components/navbar/NavBarMain';
import AboutUsMain from './components/navbar/about/AboutUsMain';
import HelpSection from './components/navbar/HelpSection';
import ServicesMain from './components/navbar/services/ServicesMain';
import FooterMain from './components/navbar/footer/FooterMain';
import SubServices from './components/navbar/services/SubServices';
import ExperienceMain from './components/navbar/Experience/ExperienceMain';
import ContactUsMain from './components/navbar/ContactUs/ContactUsMain';
//import ContactUsMain from './components/navbar/ContactUs/ContactUsMain';



function App() {

  return (<main className='font-body'>
      <NavBarMain />
      <HeroMain/>
      <SubHeroo />
      <HeroGradient />
      <AboutUsMain/>
      
      <ServicesMain/>
      <SubServices/>
      <ExperienceMain/>
      <ContactUsMain/>
      <FooterMain/>
      
    </main> 
    )
    
  
}


export default App
