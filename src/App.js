import logo from './logo.svg';
import './App.css';
import { FirstPage } from './components/FirstPage';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import { Third } from './components/Third';
import { Fourth } from './components/Fourth';
import { Fifth } from './components/Fifth';
import { Sixth } from './components/Sixth';
import { Seventh } from './components/Seventh';
import { Eight } from './components/Eight';
import { Ninth } from './components/Ninth';
import { Tenth } from './components/Tenth';
import { Eleventh } from './components/Eleventh';
import { Twelth } from './components/Twelth';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <FirstPage/>
    <Header/>
    <Slider/>
    <Third/>
    <Fourth fourthData1="Featured" fourthData2="Cars" fourthData3="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"/>
    <Fifth/>
    <Sixth/>
    <Fourth fourthData1="Latest" fourthData2="Offers" fourthData3="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"/>
    <Seventh/>
    <Eight/>
    <Fourth fourthData1="Executive" fourthData2="Team" fourthData3="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"/>
    <Ninth/>
    <Tenth/>
    <Fourth fourthData1="Latest" fourthData2="Blog Post" fourthData3="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"/>
    <Eleventh/>
    <Twelth/>
    <Footer/>
    </>
  );
}

export default App;
