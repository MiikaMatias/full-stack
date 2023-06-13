import React, { useEffect, useState} from "react"
import axios from "axios"
import SearchBox from './components/SearchBox'
import Responder from './components/Responder'

function App() {
  const [filterTerm, setFilterTerm] = useState("")
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState(countries)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://studies.cs.helsinki.fi/restcountries/api/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, 
  []);

  const handleFilterTermChange = (event) => {
    event.preventDefault();
    const newFilterTerm = event.target.value;
    setFilterTerm(newFilterTerm);
  
    if (newFilterTerm.length !== 0) {
      const filteredCountries = countries.filter(
        (item) =>
          item.name.common.toLowerCase().includes(newFilterTerm.toLowerCase())
      );
      setFilteredCountries(filteredCountries);
    } else {
      setFilteredCountries([]);
    }
  };
  

  return (
    <div>
      <SearchBox filterTerm = {filterTerm} filterChange = {handleFilterTermChange}></SearchBox>
      <Responder countries = {filteredCountries} filterChange = {handleFilterTermChange}></Responder>
    </div>
  );
}

export default App;
