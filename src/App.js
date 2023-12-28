import "./App.css";
import Section1 from './components/section_1'
// import Section2 from './components/section_2'
import Section3 from './components/section_3'
import Section4 from './components/section_4'
import Section5 from './components/section_5'
import Section6 from './components/section_6'
import Section7 from './components/section_7'
import Accordion from './components/accordion'
import Subscribe from './components/subscribe _section'
import Footer from './components/footer'
import Logos from "./components/companyLogo";
function App() {

 

  return (
    <main>
      <Section1 />
      <Logos />
      <Section3 />
      {/* <Section2 /> */}
      
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Accordion />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
