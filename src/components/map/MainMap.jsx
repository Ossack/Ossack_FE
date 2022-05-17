/*global kakao*/
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as mapActions } from "../../redux/modules/map";
//아이콘
import { TiPlus, TiMinus } from "react-icons/ti";
import Spinner from "../shared/Spinner";

import { history } from "../../redux/configStore";

import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import { ReactComponent as Location } from "../../assets/location.svg";
import { Position, Overlay } from "./index";

const MainMap = (props) => {
  const dispatch = useDispatch();
  const name = useParams().mapname;
  const getOffice = useSelector((state) => state.map.office_list);
  const is_loaded = useSelector((state) => state.map.is_loaded);
  //console.log(is_loaded)
  //console.log("getOffice : ", getOffice);
  const OverLavel = getOffice?.level;

  const { kakao } = window;
  const [level, setLevel] = useState(3); //지도레벨
  const [map, setMap] = useState(); //지도
  const [pos, setPos] = useState(); //경도 위도

  const [state, setState] = useState({
    //기본 설정값
    center: {
      lat: 37.5173319258532,
      lng: 127.047377408384,
    },
  });
  const po = {
    swLatLng: {
      lat: map?.getBounds().getSouthWest().getLat(),
      lng: map?.getBounds().getSouthWest().getLng(),
    },
    neLatLng: {
      lat: map?.getBounds().getNorthEast().getLat(),
      lng: map?.getBounds().getNorthEast().getLng(),
    },
  };
  useEffect(() => {
    if (map) {
      dispatch(mapActions.getOfficeData(po, level));
    }
  }, [map]);

  const setLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        map.setCenter(
          new kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          )
        );
      });
    }
  };

  return (
    <React.Fragment>
      <MainContent>
        <Map
          center={state.center}
          onCreate={(map) => setMap(map)}
          onZoomChanged={(map) => setLevel(map.getLevel())}
          onDragEnd={(map) =>
            setPos({
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
              swLatLng: {
                lat: map.getBounds().getSouthWest().getLat(),
                lng: map.getBounds().getSouthWest().getLng(),
              },
              neLatLng: {
                lat: map.getBounds().getNorthEast().getLat(),
                lng: map.getBounds().getNorthEast().getLng(),
              },
            })
          }
          style={{ width: "100%", height: "inherit" }}
          level={level}
          minLevel={5}
          maxLevel={10}
        >
          {is_loaded ? (
            <>
              {getOffice?.cityResponseDtoList?.length === 0
                ? null
                : getOffice?.cityResponseDtoList?.map((position, index) => {
                    return (
                      <CustomOverlayMap
                        key={`${position.title}-${position.coordinate}`}
                        position={position.coordinate} // 마커를 표시할 위치
                      >
                        <div
                          onClick={() =>
                            history.push(
                              `/search/office?query=${position.title}`
                            )
                          }
                        >
                          <Overlay
                            position={position}
                            OverLavel={OverLavel}
                            index={index}
                          />
                        </div>
                      </CustomOverlayMap>
                    );
                  })}
            </>
          ) : (
            <Spinner />
          )}
          <Lev>
            <button onClick={setLocation}>
              <Location />
            </button>
            <button onClick={() => (level > 5 ? setLevel(level - 1) : null)}>
              <TiPlus size="21px" />
            </button>
            <button onClick={() => (level < 10 ? setLevel(level + 1) : null)}>
              <TiMinus size="21px" />
            </button>
          </Lev>
        </Map>
        {pos && <Position pos={pos} map={map} level={level} />}
      </MainContent>
    </React.Fragment>
  );
};
const MainContent = styled.div`
  height: inherit;
  position: relative;
`;

const Lev = styled.div`
  width: 40px;
  height: 205px;
  position: absolute;
  bottom: 96px;
  left: 16px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & button {
    width: 40px;
    height: 40px;
    background: #ffffff;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
export default MainMap;
