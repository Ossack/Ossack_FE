import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as mapActions } from "../../redux/modules/map";

const Position = (props) => {
  const dispatch = useDispatch();

  const { pos, level, name, router } = props;

  useEffect(() => {
    if (name === "share") {
      dispatch(mapActions.getShareData(pos, level));
    } else {
      dispatch(mapActions.getOfficeData(pos, level, router));
    }
  }, [pos, level]);

  return <React.Fragment></React.Fragment>;
};

export default Position;
