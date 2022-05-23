import React, { useState } from "react";
import { Grid, Button } from "../../elements/index";
import { history } from "../../redux/configStore";
import styled from "styled-components";
import filterIcon from "../../assets/filter.svg";
import { Filter } from "../map/index";

const Search = (props) => {
  const { name } = props;
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Grid
        width="100%"
        height="80px"
        bg="#fff"
        padding="0 16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          is_back
          _onClick={() => {
            history.push("/main");
          }}
        />
        <Button
          height="48px"
          width={name === "office" ? "248px" : "277px"}
          margin="16px 5%"
          fontSize="16px"
          borderRadius="8px"
          color="#767676"
          backgroundColor="#F5F5F5"
          _onClick={() => {
            history.push("/search");
          }}
        >
          시, 구, 동으로 검색어를 입력하세요.
        </Button>
        {name === "office" ? (
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={openModalHandler}
          >
            <img src={filterIcon} alt="필터아이콘" />
          </button>
        ) : null}

        {isOpen ? (
          <>
            <ModalBackdrop onClick={openModalHandler}></ModalBackdrop>
            <Filter isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : null}
      </Grid>
    </React.Fragment>
  );
};
const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`;

export default Search;
