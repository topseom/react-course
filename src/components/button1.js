import React from 'react';
class Button1 extends React.Component{
    state = {text:"clickMe"};
    func1 = ()=>{
        this.setState({
            text:"clicked!"
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.func1}>{ this.state.text }</button>
            </div>
        )
    }
}
export default Button1;