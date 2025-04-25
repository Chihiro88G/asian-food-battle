import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Images from "./Pages/Images";
import Intro from "./Pages/Intro";
import PastEvents from "./Pages/PastEvents";
import TicketSale from "./Pages/TicketSale";
import Top from "./Pages/Top";

function App() {
  return (
    <div>
      <Top />
      <Intro />
      <Images />
      <TicketSale />
      <PastEvents />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
