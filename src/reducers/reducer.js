import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

function getVideo (state=[], action) {
  if(action.type === 'GET_VIDEO_LIST'){
    return action.payload.data.items
  }
  return state;
}

const reducer = combineReducers({
  routing: routerReducer,
  movies: getVideo
});
export default reducer;