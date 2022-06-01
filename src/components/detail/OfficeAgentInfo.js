import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Grid, Image, Text } from "../../elements/index";
import defaultImg from "../../assets/default.png";

const OfficeBasicInfo = () => {
  const getOneOffice = useSelector((state) => state.office.one_office);

  return (
    <React.Fragment>
      <Grid height="247px" bg="#fff" margin="10px 0 10px 0">
        <Grid
          bottom="0"
          padding="0 16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding="16px 0"
          >
            <Bp>중개사 소개</Bp>
          </Grid>

          <Grid
            width="100%"
            padding="16px 0"
            height="180px"
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
          >
            <Grid
              width="100%"
              display="flex"
              justifyContent="center"
              position="relative"
            >
              <Image
                border="2px solid #F3F3F3"
                type="circle"
                size="65"
                src={defaultImg}
              />
            </Grid>
            <Grid
              width="100%"
              display="flex"
              padding="12px 0"
              justifyContent="center"
            >
              <Text size="18px" cursor="pointer" bold>
                {getOneOffice?.agent ? getOneOffice?.agent : null}
              </Text>
            </Grid>
            <Grid width="100%" display="flex" justifyContent="center">
              <Text size="0.85rem" cursor="pointer" color="#999">
                {"담당자 : "}
                {getOneOffice?.personIncharge
                  ? getOneOffice?.personIncharge
                  : null}
              </Text>
            </Grid>
            <Grid width="100%" display="flex" justifyContent="center">
              <Text size="0.85rem" cursor="pointer" color="#999">
                {"대표번호 : "}
                {getOneOffice?.phoneNumber ? getOneOffice?.phoneNumber : null}
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const P = styled.p`
  font-weight: bold;
  width: 40%;
  color: #000;
  font-size: 0.975rem;
`;

const Bp = styled.p`
  font-weight: bold;
  width: 60%;
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

export default OfficeBasicInfo;
