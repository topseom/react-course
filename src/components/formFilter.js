import React from 'react';
import { filterType,filterTitle } from '../actions/items';
import { connect } from 'react-redux';

class FormFilter extends React.Component{
    selectChange = (e)=>{
        this.props.filterType(e.target.value);
    }
    inputChange = (e)=>{
        this.props.filterTitle(e.target.value);
    }
    render(){
        return(
            <div className="card card__item">
                <input defaultValue={this.props.filter.title} onChange={this.inputChange} className="filter__input" placeholder="Enter Title" />
                <select defaultValue={this.props.filter.type} onChange={this.selectChange} className="filter__input filter__input_select">
                    <option>all</option>
                    <option>income</option>
                    <option>expense</option>
                </select>
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return{
        filter:state.filter
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        filterTitle:(title)=>{ dispatch(filterTitle(title)) },
        filterType:(type)=>{ dispatch(filterType(type)) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormFilter);