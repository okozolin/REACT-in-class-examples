import * as React from "react";
import { List } from "./List";
import { SearchButton } from "./SearchButton";

export const Search: React.FC = () => {
  const [query, setQuery] = React.useState<string>("");
  const [countries, setCountries] = React.useState<string[]>([]);

  const doSearch = React.useCallback(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${query}`)
      .then(res => res.json())
      .then(data => {
        setCountries(data.map(i => i.name));
      });
  }, [query]);

  // React.useEffect(() => {
  //   if (query) {
  //     fetch(`https://restcountries.eu/rest/v2/name/${query}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         setCountries(data.map(i => i.name));
  //       });
  //   } else {
  //     setCountries([]);
  //   }
  // }, [query]);

  return (
    <div>
      <h1>Search</h1>
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <SearchButton onSearch={doSearch} />

      <List items={countries} />
    </div>
  );
};
