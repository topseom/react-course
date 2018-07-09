import React from 'react';
class DetailPage extends React.Component{
    render(){
        return(
            <div>
                Detail id : {this.props.match.params.id}
            </div>
        )
    }
}
export default DetailPage;