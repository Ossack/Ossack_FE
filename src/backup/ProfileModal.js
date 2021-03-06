import React, { useState } from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../elements/index";
import defaultImg from "../../assets/default.png";
import Swal from "sweetalert2";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const ProfileModal = (props) => {
  const dispatch = useDispatch();
  const { isOpen, setIsOpen } = props;
  const ModalClose = () => {
    setIsOpen(!isOpen);
  };

  const user_info = useSelector((state) => state.user.user);

  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);

  //사진 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setPreview(reader.result);
        resolve();
      };
    });
  };
  const editProfile = () => {
    let maxSize = 3 * 1024 * 1024;
    let fileSize = image.size;
    if (fileSize > maxSize) {
      Swal.fire("첨부파일 사이즈는 3MB 이내로 등록 가능합니다.");
      setImage("");
      return false;
    }

    dispatch(userActions.userImgDB(image));
    ModalClose();
  };
  return (
    <React.Fragment>
      {isOpen ? (
        <Outter>
          <Grid
            width="100%"
            height="311px"
            padding="16px 0"
            bg="#fff"
            borderRadius="4px"
            position="relative"
          >
            <Grid
              width="100%"
              height="24px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text bold size="16px">
                프로필 이미지 변경
              </Text>
            </Grid>
            <Button
              is_close
              position="absolute"
              right="16px"
              top="16px"
              _onClick={ModalClose}
            />
            <Grid
              display="flex"
              height="132px"
              flexDirection="column"
              alignItems="center"
            >
              <Grid
                width="132px"
                height="132px"
                margin="16px 0"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  border="2px solid #F3F3F3"
                  shape="circle"
                  size="132"
                  radius="30px"
                  src={
                    preview
                      ? preview
                      : user_info?.imageUrl
                      ? user_info?.imageUrl
                      : defaultImg
                  }
                ></Image>
              </Grid>

              <Grid
                width="100%"
                height="200px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Label htmlFor="file_input" className="upload-box">
                  <Text
                    bold
                    size="14px"
                    borderBottom="1px solid #5886FE"
                    color="#5886FE"
                  >
                    사진업로드
                  </Text>
                </Label>
                <Button
                  width="100%"
                  margin="24px 0 0 0"
                  borderRadius=" 0 0 4px 4px"
                  padding="none"
                  height="58px"
                  fontSize="14px"
                  color="#fff"
                  _onClick={editProfile}
                >
                  저장하기
                </Button>
              </Grid>
              <input
                type="file"
                id="file_input"
                accept="image/jpeg, image/png, image/jpg"
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                  setImage(e.target.files[0]);
                }}
                style={{ display: "none" }}
              />
            </Grid>
          </Grid>
        </Outter>
      ) : null}
    </React.Fragment>
  );
};
const Outter = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  z-index: 99999;
  display: flex;
  padding: 0 40px;
`;
const Label = styled.label`
  width: 230px;
  height: 42px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export default ProfileModal;
