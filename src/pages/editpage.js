import React from 'react';
import FormItem from '../components/formItem';
import { connect } from 'react-redux';
import { getItemById,editItem } from '../actions/items';

class EditPage extends React.Component{
    onSubmit = (item)=>{
        this.props.editItem(item);
        alert("update success!");
    }
    render(){
        return(
            <div className="block">
                {
                    this.props.item?
                    <div>
                        <h2 className="create__input_head">Edit List</h2>
                        <FormItem { ...this.props.item } onSubmit={this.onSubmit} btnTitle="update" />
                    </div>
                    :<div className="card card__item">not found item by id</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state,props)=>{
    return{
        item:getItemById(state,props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        editItem:(item)=>{ dispatch(editItem(item)) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditPage);