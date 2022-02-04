import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
       <Countries></Countries>
 
    </div>
  );
}

function Countries(){
  const[countries,setCountries]=useState([])
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return(
    <div>
      <h3>Traveling Around the World</h3>
      <h6>{countries.length}</h6>
      {
        countries.map(country=><Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}
function Country(props){
  return(
   <div>
      <h3>name:{props.name}</h3>
      <p>capital:{props.capital}</p>
    </div>
  )
}

export default App;
