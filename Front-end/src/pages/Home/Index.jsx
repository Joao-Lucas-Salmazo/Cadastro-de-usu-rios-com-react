import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
} from "./styles";

import Button from "../../components/Button";
import TopBackGroud from "../../components/TopBackgroud";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });

    navigate("/lista-de-usuarios");
  }

  return (
    <Container>
      <TopBackGroud />
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input
              type="text"
              placeholder="Nome do usuário"
              ref={inputName}
            ></Input>
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            ></Input>
          </div>
        </ContainerInputs>

        <div>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input
            type="e-mail"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          ></Input>
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
        Lista de usuários
      </Button>
    </Container>
  );
}

export default Home;
