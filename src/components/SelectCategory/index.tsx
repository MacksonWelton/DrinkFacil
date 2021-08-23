import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DrinkSearchContext from "../../providers/drinkSearchProvider";
import api from "../../services/api";
import * as S from "./styled";

const SelectCategory = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([{ strCategory: "" }]);
  const [category, setCategory] = useState()

  const { setResultSearch } = useContext(DrinkSearchContext);

  useEffect(() => {
    api
      .get("list.php?c=list")
      .then((res) => {
        if (res.data.drinks) setCategories(res.data.drinks);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSelectCategory = (e: any) => {
    const search = e.target.value;
    setCategory(search)
    history.push(`search?category=${search}`);
    if (search) {
      history.push(`/search?search=${search}`);
      api
        .get(`filter.php?c=${search}`)
        .then((res) => {
          if (res.data.drinks) {
            setResultSearch(res.data.drinks);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <S.Select value={category} onChange={handleSelectCategory}>
      <option hidden>Selecione uma categoria</option>
      {categories.map((category, i) => (
        <option key={i} value={category.strCategory}>
          {category.strCategory}
        </option>
      ))}
    </S.Select>
  );
};

export default SelectCategory;
