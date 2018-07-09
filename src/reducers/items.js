import { PUSH_ITEM,REMOVE_ITEM,EDIT_ITEM,FILTER_TITLE,FILTER_TYPE } from '../actions/items';

const defaultState = {
    items:[],
    total:0,
    filter:{}
}

const reducerItems = (state=defaultState,action)=>{
    switch(action.type){
        case PUSH_ITEM:
            return pushItem(state,action.item);
        case REMOVE_ITEM:
            return removeItem(state,action.id);
        case EDIT_ITEM:
            return editItem(state,action.item);
        case FILTER_TITLE:
            return { ...state,filter:{ ...state.filter,'title':action.title } }
        case FILTER_TYPE:
            return { ...state,filter:{ ...state.filter,'type':action.typeFilter } }
        default:
            return state;
    }
}

const updateTotal = (array)=>{
    if(array.length){
        return array.map(item=>item.number).reduce((item,total)=>{
            return Number(item)+Number(total);
        });
    }
    return 0;
}

const pushItem = (state,item)=>{
    let items = state.items.concat([{ ...item,id:state.items.length+1,created:Date.now() }]);
    return { ...state,items,total:updateTotal(items) };
}

const removeItem = (state,id)=>{
    let items = state.items.filter((item)=>item.id !== id);
    return { ...state,items,total:updateTotal(items) };
}

const editItem = (state,item)=>{
    let items = state.items;
    let id = items.findIndex(i=>i.id == item.id);
    items[id] = item;
    return{ ...state, items, total:updateTotal(items) }
 }
 
export default reducerItems;