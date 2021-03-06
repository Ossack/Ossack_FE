import React from "react";
import styled from "styled-components";
import { Accordion, Bar, NotUser } from "../components/shared/home";
import { MyHeader } from "../components/my/index";
import { useSelector } from "react-redux";

const QNA = () => {
  const login = useSelector((state) => state.user.is_login);

  const contents = [
    {
      title: "π‘ μ€μΉμ μ΄λ€ μλΉμ€μΈκ°μ?",
      content:
        "μ€μΉμ μ¬λ¬΄μ€κ³Ό κ³΅μ  μ€νΌμ€ λ§€λ¬Όμ μ§λμμ λͺ¨μλ³Ό μ μλλ‘ λμμ£Όλ μλΉμ€μλλ€.π",
    },
    {
      title: "π‘ κ³΅μ  μ€νΌμ€λ λ¬΄μ μΈκ°μ?",
      content:
        "κ³΅μ  μ€νΌμ€λ μλ¬΄ κ³΅κ°μ κ΅¬λΆμ§μ΄ μ¬μ©νλ, νμμ€, λ―Ένλ£Έ, νμ₯μ€, ν΄κ²κ³΅κ° λ±μ κ³΅μ©μΌλ‘ λμ΄ κ΄λ¦¬λΉ, ν΅μ λΉ λ± λΆλλΉμ©μ μ μ½νκ³ μ κ³ μλ κ³΅κ° μλ μμ€νμλλ€.",
    },
    {
      title: "π‘ νμκ°μμ νλ©΄ μ΄λ€ μ μ΄ μ’λμ?",
      content: "μ ν¬ μ€μΉ μλΉμ€λ₯Ό μ΄μ©νμ€ μ μμ΅λλ€.π",
    },
    {
      title: "π‘ νμνν΄λ μ΄λ»κ² νλμ?",
      content:
        "λ§μ΄νμ΄μ§ ν­μ κ°μμ νλ¨μ λ³΄μλ©΄ νμμ νν΄ν  μ μλ λ²νΌμ΄ μμ΅λλ€.π",
    },
  ];

  const is_session = localStorage.getItem("token");

  if (!login || !is_session) {
    return (
      <React.Fragment>
        <NotUser />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <MyHeader is_my> μμ£Ό λ¬»λ μ§λ¬Έ</MyHeader>
        <Wrap>
          {contents.map((c, idx) => {
            return (
              <Outter key={idx}>
                <Accordion title={c.title} contents={c.content} />
              </Outter>
            );
          })}
        </Wrap>
        <Bar />
      </React.Fragment>
    );
  }
};
const Wrap = styled.div`
  width: 100%;
  padding-bottom: 180px;
`;
const Outter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
  top: 80px;
`;
export default QNA;
