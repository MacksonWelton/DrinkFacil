import { useContext } from "react";
import { Search, SelectCategory } from "../../components";
import DrinkSearchContext from "../../providers/drinkSearchProvider";

import { Card } from "./components";

import * as S from "./styled";

const SearchResult = () => {
  const { resultSearch } = useContext(DrinkSearchContext);

  return (
    <S.Container>
      <S.SearchContainer>
        <Search />
        <SelectCategory />
      </S.SearchContainer>
      {resultSearch.map((res) => (
        <Card
          key={res.idDrink}
          idDrink={res.idDrink}
          imgSrc={res.strDrinkThumb}
          title={res.strDrink}
        />
      ))}
    </S.Container>
  );
};

export default SearchResult;
