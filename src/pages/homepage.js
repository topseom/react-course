import React from 'react';
import ListItems from '../components/listItems';
import FormFilter from '../components/formFilter';
import { filterItem } from '../actions/items';
import { connect } from 'react-redux';
class HomePage extends React.Component{
    render(){
        return(<div className="block">
            <FormFilter />
            <ListItems items={this.props.items} total={this.props.total} onRemove={this.onRemove} />
        </div>)
    }
}
const mapStateToProps = (state,props)=>{
    return{
        items:filterItem(state.items,state.filter),
        total:state.total
    }
}
export default connect(mapStateToProps)(HomePage);