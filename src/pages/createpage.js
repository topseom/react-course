import React from 'react';
import FormItem from '../components/formItem';
import { connect } from 'react-redux';
import { pushItem } from '../actions/items'; 

class CreatePage extends React.Component{
    onSubmit = (item)=>{
        this.props.pushItem(item);
    }
    render(){
        return(
            <div className="block">
                <h2 className="create__input_head">Enter List</h2>
                <FormItem onSubmit={this.onSubmit} btnTitle="create" />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        pushItem:(item)=>{ dispatch(pushItem(item)) }
    }
}
export default connect(null,mapDispatchToProps)(CreatePage);