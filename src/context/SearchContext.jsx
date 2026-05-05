import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

function SearchProvider({ children }) {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;