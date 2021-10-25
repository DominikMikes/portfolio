import './App.scss';
import NavBar from './components/navbar/navbar';
import Section from '@components/section/section';
import { Typography } from '@mui/material';
import Welcome from '@components/welcome/welcome';

function App() {
  return (
    <div className="App">
      <section className="header flex-box center">        
        <Typography gutterBottom variant="h4" component="div">DM</Typography>
        <NavBar></NavBar>
      </section>      
      <Welcome></Welcome>
      <Section type="skill" headline="skills"></Section>
      <Section type="project" headline="projects"></Section>
      <Section type="blog" headline="blog"></Section>
      <Section type="contact" headline="contact"></Section>      
    </div>
  );
}

export default App; 
