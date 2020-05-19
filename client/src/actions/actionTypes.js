export const AUTH_ACTION_TYPES = {
  LOGIN_REQUEST: "USER_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USER_LOGIN_FAILURE",

  LOGOUT: "USER_LOGOUT",

  LOGOUT_REQUEST: "USER_LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "USER_LOGOUT_SUCCESS",
  LOGOUT_FAILURE: "USER_LOGOUT_FAILURE",

  SESSION_EXPIRED: "SESSION_EXPIRED"
};

export const USER_ACTION_TYPES = {
  REGISTER_REQUEST: "USER_REGISTER_REQUEST",
  REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
  REGISTER_FAILURE: "USER_REGISTER_FAILURE"
};

export const MODAL_ACTION_TYPES = {
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_MODAL: "OPEN_MODAL",
  CHANGE_CONTENT: "CHANGE_CONTENT"
};

export const COMMENT_ACTION_TYPES = {
  FETCH_REQUEST: "COMMENTS_FETCH_REQUEST",
  FETCH_SUCCESS: "COMMENTS_FETCH_SUCCESS",
  FETCH_FAILURE: "COMMENTS_FETCH_FAILURE",

  ADD_REQUEST: "COMMENT_ADD_REQUEST",
  ADD_SUCCESS: "COMMENT_ADD_SUCCESS",
  ADD_FAILURE: "COMMENT_ADD_FAILURE",

  DELETE_REQUEST: "COMMENT_DELETE_REQUEST",
  DELETE_SUCCESS: "COMMENT_DELETE_SUCCESS",
  DELETE_FAILURE: "COMMENT_DELETE_FAILURE"
};

export const POST_ACTION_TYPES = {
  FETCH_REQUEST: "POST_FETCH_REQUEST",
  FETCH_SUCCESS: "POST_FETCH_SUCCESS",
  FETCH_FAILURE: "POST_FETCH_FAILURE",

  ADD_REQUEST: "POST_ADD_REQUEST",
  ADD_SUCCESS: "POST_ADD_SUCCESS",
  ADD_FAILURE: "POST_ADD_FAILURE",

  EDIT_REQUEST: "POST_EDIT_REQUEST",
  EDIT_SUCCESS: "POST_EDIT_SUCCESS",
  EDIT_FAILURE: "POST_EDIT_FAILURE",

  DELETE_REQUEST: "POST_DELETE_REQUEST",
  DELETE_SUCCESS: "POST_DELETE_SUCCESS",
  DELETE_FAILURE: "POST_DELETE_FAILURE"
};

export const DIARY_ACTION_TYPES = {
  FETCH_REQUEST: "DIARY_FETCH_REQUEST",
  FETCH_SUCCESS: "DIARY_FETCH_SUCCESS",
  FETCH_FAILURE: "DIARY_FETCH_FAILURE",

  ADD_REQUEST: "DIARY_ADD_REQUEST",
  ADD_SUCCESS: "DIARY_ADD_SUCCESS",
  ADD_FAILURE: "DIARY_ADD_FAILURE",

  EDIT_REQUEST: "DIARY_EDIT_REQUEST",
  EDIT_SUCCESS: "DIARY_EDIT_SUCCESS",
  EDIT_FAILURE: "DIARY_EDIT_FAILURE",

  DELETE_REQUEST: "DIARY_DELETE_REQUEST",
  DELETE_SUCCESS: "DIARY_DELETE_SUCCESS",
  DELETE_FAILURE: "DIARY_DELETE_FAILURE"
};

export const NOTE_ACTION_TYPES = {
  FETCH_REQUEST: "NOTE_FETCH_REQUEST",
  FETCH_SUCCESS: "NOTE_FETCH_SUCCESS",
  FETCH_FAILURE: "NOTE_FETCH_FAILURE",

  ADD_REQUEST: "NOTE_ADD_REQUEST",
  ADD_SUCCESS: "NOTE_ADD_SUCCESS",
  ADD_FAILURE: "NOTE_ADD_FAILURE",

  EDIT_REQUEST: "NOTE_EDIT_REQUEST",
  EDIT_SUCCESS: "NOTE_EDIT_SUCCESS",
  EDIT_FAILURE: "NOTE_EDIT_FAILURE",

  DELETE_REQUEST: "NOTE_DELETE_REQUEST",
  DELETE_SUCCESS: "NOTE_DELETE_SUCCESS",
  DELETE_FAILURE: "NOTE_DELETE_FAILURE"
};
