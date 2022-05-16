const colors = {
  //font
  title: "#000000",
  subTitle: "#626262",
  blueTitle: "#718AFF",
  buttonTitle: "#FFFFFF",
  //main col
  main: "#3E00FF",
  brightMain: "#9CAEFF",
  darkerMain: "#4F66D2",
  moreDarkerMain: "#323C6E",
  subMain: "#BCC8FF",
  //white col
  white: "#FFFFFF",
  whiteHover: "#F4F4F4",
  whiterActive: "#E1E1E1",
  //base
  base: "#F4F4F4",
  hoverBase: "#E1E1E1",
  activeBase: "#B8B8B8",
  //sub
  sub: "#D2D2D2",
  subHover: "#C7C5C5",
  subActive: "#B9B9B9",
  //calendar pointer
  pointer: "rgba(0, 0, 0, 0.5);",
  //signout
  signOut: "#F73535",
  signoutHover: "#FB1616",
  //reject
  reject: "#D97E7E",
  //scroll bar
  scroll: "#EBEBEB",
  scrollHover: "#D6D6D6",
  //kakaoBg
  kakaoBg: "#fee500;",
  brightKakao: "#FFEC3B",
  darkerKakao: "#ceb900",
  kakaoTitle: "#3c1e1e;",
  //background
  subBackground: "F8F8F8",
  background: "#FFFFFF",
};

const darkColors = {
  //font
  title: "#000000",
  subTitle: "#3E00FF",
  blueTitle: "#5886FE",
  buttonTitle: "#FFFFFF",
  //main col
  main: "#3E00FF",
  brightMain: "rgba(62, 0, 255, 0.1);",
  darkerMain: "#0E3FF2",
  subMain: "#FF5151",
  darkersubMain: "#FF2727",
  //white col
  white: "#FFFFFF",
  whiteHover: "#F4F4F4",
  whiterActive: "#E1E1E1",
  //base
  base: "#F4F4F4",
  hoverBase: "#E1E1E1",
  activeBase: "#B8B8B8",
  //sub
  sub: "#D2D2D2",
  subHover: "#C7C5C5",
  subActive: "#B9B9B9",

  pointer: "rgba(0, 0, 0, 0.5);",

  signOut: "#F73535",
  signoutHover: "#FB1616",

  reject: "#D97E7E",

  scroll: "#EBEBEB",
  scrollHover: "#D6D6D6",

  background: "#FFFFFF",
};

const fontSizes = {
  titleSize: "24px",
  xxlg: "20px",
  xlg: "18px",
  large: "16px",
  base: "14px",
  small: "12px",
  xs: "10px",
};

const commons = {
  backgroundImage: `
    background-position: center center;
      background-repeat: no-repeat;
    `,
  mainButton: `
    background-color: ${colors.main};
      &:hover {
          background-color: ${colors.brightMain};
      }
      &:active {
          background-color:${colors.darkerMain};
      }
    `,
  subButton: `
    background-color: ${colors.sub};
      &:hover {
          background-color: ${colors.subHover};
      }
      &:active {
          background-color:${colors.subActive};
      }
    `,
};

const theme = {
  colors,
  darkColors,
  fontSizes,
  commons,
};

export default theme;
