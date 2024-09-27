import UsersImg from "../../assets/users.png";
import { Background } from "./styles";

function TopBackGroud() {
  return (
    <Background>
      <img src={UsersImg} alt="imagem-usuarios"></img>
    </Background>
  );
}

export default TopBackGroud;
