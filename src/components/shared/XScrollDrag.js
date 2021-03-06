import React from "react";
import styled from "styled-components";

const XScrollDrag = ({ children, ...props }) => {
  const [isDrag, setIsDrag] = React.useState(false);
  const [startX, setStartX] = React.useState();

  const scrollRef = React.useRef(null);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
    // e.pageX : 문서의 왼쪽상단을 기준으로 마우스 위치의 X좌표 값
    // scrollRef.current.scrollLeft : 수평 스크롤바의 위치값
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
      // 실질적으로 움직여주는 부분
    }
  };
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 30;
  const onThrottleDragMove = throttle(onDragMove, delay);

  const onwheel = (event) => {
    scrollRef.current.scrollLeft += event.deltaY;
    event.preventDefault(); // 링크나 폼 전송과 같은 기본 동작을 방지
  };

  React.useEffect(() => {
    scrollRef.current.addEventListener("wheel", onwheel, { passive: false });
  }, []);

  return (
    <CategoryBox
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseLeave={onDragEnd}
      style={{ ...props }}
    >
      {children}
    </CategoryBox>
  );
};

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap; // 넘쳐도 줄바꿈 X, white-space: no-wrap과 같은 효과
  overflow-x: scroll; // x축 넘치면 스크롤 생성
`;

export default XScrollDrag;