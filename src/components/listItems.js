import React from 'react';
import Item from './item';
class ListItems extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.items.length?
                    <ul className="card">
                        <h1 className="card__head">Total : {this.props.total}</h1>
                        {
                            this.props.items.map((item,index)=>{
                                return(<Item key={index} {...item} />);
                            })
                        }
                    </ul>
                    :<div className="card card__item">not have item</div>
                }
            </div>
        )
    }
}
export default ListItems;