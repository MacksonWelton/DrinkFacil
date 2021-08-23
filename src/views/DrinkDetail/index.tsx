import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Search, SelectCategory } from "../../components";
import api from "../../services/api";
import * as S from "./styled";

const DrinkDetail = () => {
  let { id }: any = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    strDrink: "",
    strDrinkThumb: "",
    strInstructions: "",
    strInstructionsES: "",
    strInstructionsDE: "",
    strInstructionsFR: "",
    strInstructionsIT: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
  });

  useEffect(() => {
    if (id && !loading) {
      api
        .get(`lookup.php?i=${id}`)
        .then((res) => {
          if (res.data.drinks) {
            setData(res.data.drinks[0]);
            setLoading(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id, loading]);

  return (
    <S.Container>
      <S.SearchContainer>
        <Search />
        <SelectCategory />
      </S.SearchContainer>
      <S.Content>
        <S.ContentTitle>
          <S.Title>{data.strDrink}</S.Title>
        </S.ContentTitle>
        <S.ContentImg>
          <S.Img src={data.strDrinkThumb} alt={data.strDrink} />
        </S.ContentImg>
        <S.ContentInstructions>
          <S.TitleInstructions>Instruções</S.TitleInstructions>
          {data.strInstructions && <p>{data.strInstructions}</p>}
          {data.strInstructionsES && <p>{data.strInstructionsES}</p>}
          {data.strInstructionsDE && <p>{data.strInstructionsDE}</p>}
          {data.strInstructionsIT && <p>{data.strInstructionsIT}</p>}
        </S.ContentInstructions>
        <S.ContentIngredient>
          <S.TitleIngredient>Ingredientes</S.TitleIngredient>
          <ul>
          {data.strIngredient1 && <li>{data.strIngredient1}</li>}
          {data.strIngredient2 && <li>{data.strIngredient2}</li>}
          {data.strIngredient3 && <li>{data.strIngredient3}</li>}
          {data.strIngredient4 && <li>{data.strIngredient4}</li>}
          {data.strIngredient5 && <li>{data.strIngredient5}</li>}
          {data.strIngredient6 && <li>{data.strIngredient6}</li>}
          {data.strIngredient7 && <li>{data.strIngredient7}</li>}
          {data.strIngredient8 && <li>{data.strIngredient8}</li>}
          {data.strIngredient9 && <li>{data.strIngredient9}</li>}
          {data.strIngredient10 && <li>{data.strIngredient10}</li>}
          {data.strIngredient11 && <li>{data.strIngredient11}</li>}
          {data.strIngredient12 && <li>{data.strIngredient12}</li>}
          {data.strIngredient13 && <li>{data.strIngredient13}</li>}
          {data.strIngredient14 && <li>{data.strIngredient14}</li>}
          {data.strIngredient15 && <li>{data.strIngredient15}</li>}
          </ul>
        </S.ContentIngredient>
      </S.Content>
    </S.Container>
  );
};

export default DrinkDetail;
