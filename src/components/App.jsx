import { useEffect,useState } from 'react'

import '../styles/index.scss'

function App() {
  const [countryList, setCountryList] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
useEffect (()=>{
    fetch(" https://restcountries.com/v3.1/all?fields=name,capital,flag,continents")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        setCountryList(data)
        
    })
},[])

const renderCuntry =()=>{
    return countryList.filter((eachCountry)=> eachCountry.name.common.toLowerCase().includes(nameSearch.toLowerCase()))
    .map((eachCountry, i)=>(<li className='country_item'key={i}>
        <p>Nombre: {eachCountry.name.common}</p>
    </li>))
}
const handleInput = () =>{
  setNameSearch(ev.target.value)
}

 

  return (
    <>
           <header>
                <h1>Country Info App</h1>
                <h2>Explore information about countries, capitals and flgs. Add new countries and filter trough the list!</h2>
            </header>
            <main>
              <ul className='country_list'>
                {renderCuntry()}
                <li className='country_item'></li>
              </ul>
              <form action="">
                <legend>filters</legend>
                <input type="search" name="search_by_country" id="serach_by_country" onChange={handleInput} value={countryList} />
              </form>

            </main>
    </>
  )
}

export default App
