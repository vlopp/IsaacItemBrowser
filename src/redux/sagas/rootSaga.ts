import {
  cancelled,
  take,
  takeEvery,
  takeLatest,
  delay,
  fork,
  cancel,
  call,
  all,
  spawn
} from "redux-saga/effects";

export default function* rootSaga() {
  const sagas = [
    /*sagas*/
  ];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
