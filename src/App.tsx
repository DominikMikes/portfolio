import './App.scss';
import NavBar from '@components/navbar/navbar';
import Section from '@components/section/section';
import { Typography } from '@mui/material';
import Welcome from '@components/welcome/welcome';
import SideNav from '@components/navbar/sidenav';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  return (
    <div className="App dark">
      <section className="header-container">
        <div className="header flex-box center">
          <Typography gutterBottom variant="h4" component="div">
            <a href="#welcome" className="link name">DM</a>
          </Typography>
          <NavBar></NavBar>
        </div>
      </section>
      <SideNav></SideNav>
      <div className="anchor" id="welcome"></div>
      <Welcome></Welcome>
      <div className="anchor" id="skill"></div>
      <Section type="skill" headline="skills"></Section>
      <div className="anchor" id="history"></div>
      <Section type="history" headline="history"></Section>
      {/* <div className="anchor" id="project"></div>
      <Section type="project" headline="projects"></Section>
      <div className="anchor" id="blog"></div>
      <Section type="blog" headline="blog"></Section> */}
      <div className="anchor" id="contact"></div>
      <Section type="contact" headline="contact"></Section>
      <div className="scroll-up">
        <a href="#welcome">
          <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
        </a>
      </div>
    </div>
  );
}

export default App; 
