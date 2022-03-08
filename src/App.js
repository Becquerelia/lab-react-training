//import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';

function App() {
  return (
    <div>
    
      <h2><b>IdCard</b></h2>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

    <h2><b>Greetings</b></h2>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

    <h2><b>Random</b></h2>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

    <h2><b>BoxColor</b></h2>

    <h2><b>CreditCard</b></h2>

    <h2><b>Rating</b></h2>

    <h2><b>DriverCard</b></h2>

    <h2><b>ClickablePicture</b></h2>

    <h2><b>Dice</b></h2>

    <h2><b>Carousel</b></h2>

    <h2><b>NumbersTable</b></h2>

    </div>
  );
}

export default App;
