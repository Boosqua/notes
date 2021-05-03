export const SET_LOADED = "SET_LOADED";
export const SET_DATA_FETCH = "SET_DATA_FETCH";

export const setLoaded = (loaded) => ({
   type: SET_LOADED,
   loaded
})
export const setDataFetch = (dataFetch) => ({
   type: SET_DATA_FETCH,
   dataFetch
})