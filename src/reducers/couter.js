import { INCREASE,DECREASE } from '../actions/counter';
const defaultState = { count:0 };
const reducerCounter = (state=defaultState,action)=>{
    switch(action.type){
        case INCREASE:
            return { count:state.count + 1 }
        case DECREASE:
            return { count:state.count - 1 }
        default :
            return state;
    }
}
export default reducerCounter;

