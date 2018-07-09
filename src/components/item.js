import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/items';
import { withRouter } from 'react-router-dom';
class Item extends React.Component{
    onRemove = ()=>{
        this.props.removeItem(this.props.id);
    }
    onEdit = ()=>{
        this.props.history.push('/edit/'+this.props.id);
    }
    render(){
        return(
            <div className="card__item">
                <h3>Title : {this.props.title}</h3>
                <p>Number : {this.props.number}</p>
                <p>Type : {this.props.type}</p>
                <button className="button button__edit" onClick={this.onEdit}>Edit</button>
                <button className="button button__remove" onClick={this.onRemove} >Remove</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem:(id)=>{ dispatch(removeItem(id)) }
    }
};
export default connect(null,mapDispatchToProps)(withRouter(Item));