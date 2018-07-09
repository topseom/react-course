export const PUSH_ITEM = 'push_item';
export const REMOVE_ITEM = 'remove_item';
export const EDIT_ITEM = 'edit_item';
export const FILTER_TITLE = 'filter_title';
export const FILTER_TYPE = 'filter_type';

export const pushItem = (item)=>{
    return{ type:PUSH_ITEM,item }
};

export const removeItem = (id)=>{
    return{ type:REMOVE_ITEM,id }
}

export const editItem = (item)=>{
    return { type:EDIT_ITEM,item }
}

export const filterTitle = (title)=>{
    return { type:FILTER_TITLE,title }
}
export const filterType = (filter)=>{
    return { type:FILTER_TYPE,typeFilter:filter }
}


export const getItemById = (state,id)=>{
    return state.items.find((item)=>item.id == id);
}

export const filterItem = (items,filter)=>{
    if(filter && filter.type && filter.type != "all"){
        items = items.filter(item=>item.type == filter.type)
    }
    if(filter && filter.title){
        items = items.filter(item=>item.title.indexOf(filter.title) > -1);
    }
    items.sort((a,b)=>b.created - a.created);
    return items;
}