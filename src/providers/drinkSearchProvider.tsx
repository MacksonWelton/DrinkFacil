import React, { createContext, useState } from "react";


type SearchResult = {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
  strInstructions: string;
}

interface ContextProps {
  resultSearch: SearchResult[];
  setResultSearch: Function;
}

const DrinkSearchContext = createContext<ContextProps>({
  resultSearch: [{ idDrink: "", strDrinkThumb: "", strDrink: "", strInstructions: "" }],
  setResultSearch: () => null
});

interface Props {
  children: any;
}

const DrinkSearchContextProvider: React.ComponentType<Props> = props => {
  const [resultSearch, setResultSearch] = useState<SearchResult[]>([])

  return (
      <DrinkSearchContext.Provider value={{ 
        resultSearch, 
        setResultSearch }}>
          {props.children}
      </DrinkSearchContext.Provider>
  );
};


export { DrinkSearchContextProvider };
export default DrinkSearchContext;