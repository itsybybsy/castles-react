import "./styles/app.css";
import "/src/styles/header.css" // for responsive App Bar

import {CssBaseline} from  "@mui/material";

import {ThemeProvider} from "@mui/material/styles";
import  {globalTheme}  from "./styles/globalTheme.js";

import ResponsiveAppBar from "./components/ResponsiveAppBar.js";
import LandingPage from "./components/LandingPage.js";
import HighlightContent from "./components/HighlightContent.js";
import SideContent from "./components/SideContent.js";
import HeroLinks from "./components/HeroLinks.js";
import EventsCards from "./components/EventsCards.js";
import Footer from "./components/Footer.js";
import Accordion from "./components/FAQ.js";

import visit1 from "./images/bojnice_visit_2.jpg";
import visit2 from "./images/garden.jpg";
import outdoor from "./images/castle.jpg";
import indoor2 from "./images/saint.jpg";

// This file arranges and displays all main components of the app

function App() {

  return (

      <ThemeProvider theme={globalTheme}>
        
        <CssBaseline />

        <ResponsiveAppBar />

        <LandingPage />

        <HeroLinks />

        <EventsCards/>
        
        <SideContent 
          image={outdoor}
          title="Beautiful Bojnice Castle"
          description="Bojnice Castle belongs among the oldest and most significant monuments in Slovakia. 
          It stands on a travertine hill above the town. The first written record of the castle’s
          existence dates back to 1113, in a document from the Zobor Abbey. Originally, it was a wooden
          castle that developed from an older fort. During the course of the 13th century, it was gradually
          rebuilt in stone as the property of the Poznan family."
          extraText="Part of Bojnice Castle is also a natural travertine cave with a diameter of 22 meters and a height
          of 6 meters. Surrounding the castle is a landscaped natural park."
        />

        <HighlightContent
          image={visit1}
          title="Tour of the castle and cave"
          description="Visit the most desirable and interesting areas of Bojnice Castle."
        />

        <SideContent 
          image={indoor2}
          title="History of the Museum"
          description="The idea of establishing a museum in Bojnice Castle was considered by its last noble owner, 
          Count Ján Pálfi. In his will dated November 14, 1907, he expressed the wish that the castle be opened to 
          the public, that the artworks remain in their original locations, and that tours be made available to all 
          interested visitors."
          extraText="Today, the Bojnice Museum is a specialized art-historical museum with a nationwide scope.
           Bojnice Castle is among the oldest and most significant monuments..."
          reverse
       />

      <HighlightContent
          image={visit2}
          title="Explore the beautiful gardens"
          description="Walk through the stunning gardens surrounding the castle."
      />

      <Accordion />

      <Footer/>

      </ThemeProvider>
  );
}

export default App;
