import { useContext, useState } from "react";
import { useHistory } from "react-router";
import DrinkSearchContext from "../../providers/drinkSearchProvider";
import api from "../../services/api";
import * as S from "./styled";

const Search = () => {
  const history = useHistory();
  const [search, setSearch] = useState();

  const {setResultSearch} = useContext(DrinkSearchContext)

  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    if (search) {
      history.push(`/search?search=${search}`);
      api
      .get(`search.php?s=${search}`)
      .then((res) => {
        if (res.data.drinks) {
          setResultSearch(res.data.drinks);
        }
      })
      .catch((err) => console.log(err));
    }
  };

  return (
    <S.Container onSubmit={onSubmitSearch}>
      <S.Input
        onChange={(e: any) => setSearch(e.target.value)}
        type="text"
        name="search"
        placeholder="Pesquisar..."
      />
    </S.Container>
  );
};

export default Search;
