import * as React from "react";


export const Search: React.FC = () => {
  const [query, setQuery] = React.useState<string>('')
  const [countries, setCountries] = React.useState<string[]>([])

  React.useEffect(()=> {
    if (query) {
      fetch(`https://restcountries.eu/rest/v2/name/${query}`)
        .then(res => res.json())
          .then(data => {
            setCountries(data.map(i => i.name))
          })
    }
    else {
      setCountries([])
    }
  },[query]);

    return (
      <div>
        <h1>Search</h1>
          <input
            type="search"
            placeholder="Enter your text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
        <ul>
          { countries.map(country => 
            <li key={country}> {country} </li>)
          }
        </ul>
      </div>
    );
}