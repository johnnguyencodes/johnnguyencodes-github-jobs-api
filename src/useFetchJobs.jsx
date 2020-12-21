import { useReducer, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error'
}

const BASE_URL = '/positions.json';

let totalJobs = [];

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: false, jobs: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, jobs: [] }
    default:
      return state
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: false, error: false})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      params.lat = position.coords.latitude;
      params.long = position.coords.longitude;
    }, (error) => {
      console.error(`Error Code = ${error.code} - ${error.message}.`);
    })
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With"
      },
      cancelToken: cancelToken.token,
      params: { markdown: true, page: page, ...params }
    }).then (res => {
      const sortedJobs = res.data.sort(
        (a, b) =>
        moment(new Date(b.created_at)) - moment(new Date(a.created_at))
      );
      totalJobs.push(sortedJobs);
      let flatTotalJobs = totalJobs.flat();
      dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: flatTotalJobs } })
    }).catch(error => {
      if (axios.isCancel(error)) return
      dispatch({ type: ACTIONS.ERROR, payload: { error: error } })
    })

    return () => {
      cancelToken.cancel();
    }
  }, [params, page])

  return state;
}
