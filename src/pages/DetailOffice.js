import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { MyHeader } from "../components/my/index";
import { OneMap } from "../components/map/index";
import { Grid, Image, Text, Button } from "../elements/index";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import { SlickSlider } from "../components/shared/home";
import Bar from "../components/shared/Bar";
import { actionCreators as officeActions } from "../redux/modules/office";

const DetailOffice = () => {
  const dispatch = useDispatch();
  const estateid = useParams().estateId;
  const getOneOffice = useSelector((state) => state.office.one_office);
  console.log("getOneOffice : ", getOneOffice);

  const contentRef = useRef(null);
  const onClick = (e) => {
    contentRef.current.classList.add("show");
    e.currentTarget.classList.add("hide");
  };

  // const getImage = getOneOffice.images.map((images) => images);
  // console.log("getImage : ", getImage);

  //const list = useSelector((state) => state.search.list);
  // console.log("list : ", list);
  //   const officeData = list?.filter((a) => a.estateid === +estateid);

  // const buildingDetail = getOneOffice?.buildingDetail.split("\n").map((v) => v);
  // console.log("buildingDetail : ", buildingDetail);

  useEffect(() => {
    console.log(estateid);
    dispatch(officeActions.getOneOfficeDB(estateid));
  }, [estateid]);

  return (
    <React.Fragment>
      <MyHeader>매물번호 {estateid}</MyHeader>
      <Grid bg="#F5F5F5" minHeight="1540px" paddingBottom="90px">
        <Grid height="400px" bg="#fff" margin="0 0 10px 0">
          <Grid
            width="100%"
            margin="16px 0"
            height="235px"
            bg="#999"
            position="relative"
            overflow="hidden"
          >
            <Grid>
              <SlickSlider>
                {getOneOffice?.images &&
                  getOneOffice?.images?.map((image, idx) => {
                    return (
                      <Image
                        key={idx}
                        padding="235px"
                        bottom="0"
                        src={image}
                        shape="rectangle"
                        position="absolute"
                      />
                    );
                  })}
              </SlickSlider>
              {/* {getOneOffice?.mylike ? (
                <Button
                  fill_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#FF0000"
                  _onClick={() =>
                    dispatch(officeActions.deleteLikeDB(estateid))
                  }
                />
              ) : (
                <Button
                  is_like
                  position="absolute"
                  right="8px"
                  top="8px"
                  color="#fff"
                  _onClick={() => dispatch(officeActions.clickLikeDB(estateid))}
                />
              )} */}
            </Grid>
          </Grid>

          <Grid
            padding="0 16px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
            height="70px"
          >
            <Grid
              width="56px"
              height="22px"
              borderRadius="100px"
              border="1px  solid #3E00FF"
              bg="#3E00FF"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Sp style={{ color: "#fff" }}>오피스</Sp>
            </Grid>
            <Text color="#111" size="0.875rem">
              <Span>
                {getOneOffice?.monthly !== "매매"
                  ? getOneOffice?.monthly
                  : null}
                {getOneOffice?.rent_fee !== "0"
                  ? getOneOffice?.rent_fee + "만 /"
                  : null}
              </Span>
              <Span>
                {getOneOffice?.monthly === "월세" ? "보증금" : null}
                {getOneOffice?.deposit ? getOneOffice?.deposit : " 3,000만"}
              </Span>
            </Text>
            <Text color="#3E00FF" size="18px" bold>
              권리금 없음
            </Text>
          </Grid>
          <Grid
            padding="16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="75px"
          >
            <Grid>
              <Ssp>
                {getOneOffice?.subwayInfo ? getOneOffice?.subwayInfo : null}
              </Ssp>
              <Grid>
                <Ssp>매물번호 {estateid ? estateid : null}</Ssp>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 상세정보 */}
        <Grid height="340px" bg="#fff" margin="0 0 10px 0">
          <Grid
            bottom="0"
            padding="0 16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="300px"
          >
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              padding="16px 0"
            >
              <Bp>기본정보</Bp>
            </Grid>
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <CenterInner>
                <P>📐공급면적</P>
                <Sp>{getOneOffice?.area ? getOneOffice?.area : null}</Sp>
              </CenterInner>
              <CenterInner>
                <P>😀가용인원</P>
                <Sp>
                  {getOneOffice?.capacity ? getOneOffice?.capacity : null}
                </Sp>
              </CenterInner>
              <CenterInner>
                <P>💸 관리비</P>
                <Sp>
                  {getOneOffice?.management_fee
                    ? getOneOffice?.management_fee
                    : null}
                </Sp>
              </CenterInner>
              <CenterInner>
                <P>🏢 오피스 타입</P>
                <Sp>{getOneOffice?.type ? getOneOffice?.type : null}</Sp>
              </CenterInner>
              <CenterInner>
                <P>🚽 화장실</P>
                <Sp>{getOneOffice?.toilet ? getOneOffice?.toilet : null}</Sp>
              </CenterInner>
              <CenterInner>
                <P>📌건물층 / 해당층</P>
                <Sp>
                  {getOneOffice?.buildingFloor
                    ? getOneOffice?.buildingFloor
                    : "15층"}
                  / {getOneOffice?.roomFloor ? getOneOffice?.roomFloor : "2층"}
                </Sp>
              </CenterInner>
              <CenterInner>
                <P>🚗 주차장</P>
                <Sp>{getOneOffice?.parking ? getOneOffice?.parking : null}</Sp>
              </CenterInner>
            </Grid>
          </Grid>
        </Grid>

        {/* 중개사 코멘트 */}
        <Grid height="500px" bg="#fff" margin="0 0 10px 0" overflow="scroll">
          <Grid
            bottom="0"
            padding="0 16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="auto"
          >
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              padding="16px 0"
              height="84px"
            >
              <Bp>중개사 코멘트</Bp>
            </Grid>
            <Grid display="flex" flexDirection="column" justifyContent="center">
              <Grid height="60px">
                <Text size="16px" color="#111">
                  {getOneOffice?.subwayInfo ? getOneOffice?.subwayInfo : null}
                </Text>
                <Ssp>
                  {getOneOffice?.buildingInfo
                    ? getOneOffice?.buildingInfo
                    : null}
                </Ssp>
              </Grid>
              <Grid height="40px">
                <Text size="16px" color="#111">
                  ◎해당 사무소는 공인중개사 자격증을 갖춘 인원으로만 구성되어
                  있습니다.
                </Text>
              </Grid>
              <Grid height="40px">
                <Text size="16px" color="#111">
                  ◎직접 방문 후 촬영한 100% 실매물 현장사진
                </Text>
              </Grid>

              <Grid>
                <Text>
                  {/* {" "} */}
                  <Ellipsis ref={contentRef}>
                    {/* Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum. */}
                    {getOneOffice?.buildingDetail
                      ?.split("\n")
                      .map((line, idx) => {
                        return (
                          <div key={idx}>
                            {line} <br />
                          </div>
                        );
                      })}{" "}
                    <Btn onClick={onClick}>
                      <Text size="16px" color="#3E00FF">
                        더보기
                      </Text>
                    </Btn>
                  </Ellipsis>
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 위치 */}

        <Grid
          bottom="0"
          //padding="0 16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="340px"
          bg="#fff"
        >
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding="16px 0"
            bg="#fff"
            minHeight="330px"
          >
            <Grid margin="0 0 10px" height="55px">
              <Bp style={{ padding: "3px 16px" }}>위치</Bp>
              <Sp style={{ padding: "0 16px" }}> {getOneOffice?.address} </Sp>
            </Grid>

            <OneMap />
          </Grid>
        </Grid>
      </Grid>
      <Bar />
    </React.Fragment>
  );
};
const CenterInner = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  /* margin: 0 0 13px; */
  align-items: center;
`;

const Span = styled.span`
  //font-size: 0.625rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

const P = styled.p`
  font-weight: bold;
  width: 40%;
  color: #000;
  font-size: 0.975rem;
`;

const Sp = styled.p`
  width: 60%;
  color: #000;
  //font-size: 0.975rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Bp = styled.p`
  font-weight: bold;
  width: 60%;
  color: #000;
  font-size: ${({ theme }) => theme.fontSizes.xlg};
`;

const Ssp = styled.p`
  padding: 5px 0;
  width: 90%;
  color: #999;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Ellipsis = styled.div`
  position: relative;
  display: -webkit-box;
  max-height: 55rem;
  line-height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  &.show {
    display: block;
    max-height: none;
    overflow: auto;
    -webkit-line-clamp: unset;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  //max-height: 2rem;
  line-height: 48px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 18%
  );
  &.hide {
    display: none;
  }
`;

export default DetailOffice;
