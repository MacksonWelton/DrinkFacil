import { useHistory } from "react-router-dom";
import * as S from "./styled";

interface CardProps {
  idDrink: string;
  imgSrc: string;
  title: string;
}

const Card = (props: CardProps) => {
  const history = useHistory()

  return (
    <S.Container>
      <S.Content>
        <S.Image src={props.imgSrc} />
        <S.ContentTitle>
          <S.Title onClick={() => history.push(`/detail/${props.idDrink}`)}>{props.title}</S.Title>
        </S.ContentTitle>
      </S.Content>
    </S.Container>
  );
};

export default Card;
