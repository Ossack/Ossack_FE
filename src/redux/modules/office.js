import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../shared/api";
import { RESP } from "../../response";

import Swal from "sweetalert2";

const GET_MAIN_OFFICE = "GET_MAIN_OFFICE";
const GET_HOT = "GET_HOT";
const CLICK_LIKE = "CLICK_LIKE"; //좋아요
const DELETE_LIKE = "DELETE_LIKE"; //좋아요 취소

const getMainOffice = createAction(GET_MAIN_OFFICE, (list) => ({ list }));
const getHot = createAction(GET_HOT, (hot_list) => ({ hot_list }));
const clickLike = createAction(CLICK_LIKE, (estate_id) => ({ estate_id }));
const deleteLike = createAction(DELETE_LIKE, (estate_id) => ({ estate_id }));

const initialState = {
  list: [],
  hot_list: [],
};
/* 맛집근처 역근처 */
const getMainOfficeDB = (dong) => {
  console.log(dong);
  return (dispatch) => {
    instance
      .get(`/api/list?query=${dong}`)

      // const res=RESP.OFFICE
      // dispatch(getMainOffice(res));
      .then((res) => {
        console.log(res.data, "나는 메인 오피스 DB");
        dispatch(getMainOffice(res.data));
      })
      .catch((err) => {
        console.log(err.response, "나는 메인 오피스 DB 오류");
        console.log(err, "나는 메인 오피스 DB 오류");
      });
  };
};
/* 핫한 오피스 조회 */
const getHotDB = () => {
  return (dispatch) => {
    instance
      .get(`/api/list/hot`)

      // const res=RESP.HOT
      // dispatch(getHot(res));
      .then((res) => {
        console.log(res.data, "나는 메인 오피스 DB");
        dispatch(getHot(res.data));
      })
      .catch((err) => {
        console.log(err.response, "나는 핫한 오피스 DB 오류");
        console.log(err, "나는 핫한 오피스 DB 오류");
      });
  };
};

/* 좋아요 조회 */
const clickLikeDB = (estateid) => {
  console.log("estateId", estateid);
  return (dispatch) => {
    instance
      .post(`/api/favorite/${estateid}`)
      .then((res) => {
        console.log("res : ", res);
        Swal.fire("좋아요를 누르셨습니다.");
        dispatch(clickLike(estateid));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};

/* 좋아요 취소 */
const deleteLikeDB = (estateId) => {
  console.log("estateId", estateId);
  return (dispatch) => {
    instance
      .delete(`/api/favorite/${estateId}`)
      .then((res) => {
        console.log("res : ", res);

        Swal.fire("좋아요를 취소하셨습니다.");
        dispatch(deleteLike(estateId));
      })
      .catch((err) => {
        console.log("Error Message: ", err.message);
      });
  };
};

// Reducer
export default handleActions(
  {
    [GET_MAIN_OFFICE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [GET_HOT]: (state, action) =>
      produce(state, (draft) => {
        draft.hot_list = action.payload.hot_list;
      }),
    [CLICK_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let numArr = [];
        draft.list.filter((val, idx) => {
          if (val.estateid === action.payload.estate_id) {
            return numArr.push(idx);
          }
        });
        draft.list[numArr[0]].mylike = true;
      }),
    [DELETE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let numArr = [];
        draft.list.filter((val, idx) => {
          if (val.estateid === action.payload.estate_id) {
            return numArr.push(idx);
          }
        });
        draft.list[numArr[0]].mylike = false;
      }),
  },
  initialState
);

const actionCreators = {
  getMainOfficeDB,
  getHotDB,
  clickLikeDB,
  deleteLikeDB,
};

export { actionCreators };
