import { Search, SelectCategory } from "../../components";

import * as S from "./styled";

const Home = () => {
  return (
    <S.Container>
      <Search />
      <SelectCategory />
    </S.Container>
  );
};

export default Home;
