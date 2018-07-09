import React from 'react';
class FormItem extends React.Component{
    submit = (e)=>{
        e.preventDefault();
        let title = e.target.title.value;
        let number = e.target.number.value;
        if(number && title){
            let type = "income";
            if(number < 0){
                type="expense";
            }
            this.props.onSubmit({title,number,type,id:this.props.id});
            this.clear();
        }
    }
    clear = ()=>{
        this.form.reset();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submit} ref={(el)=>this.form = el}>
                    <input defaultValue={this.props.title} className="create__input create__input_title" autoComplete="off" placeholder="Enter Title" name="title" type="text" />
                    <input defaultValue={this.props.number} className="create__input create__input_number" autoComplete="off" placeholder="Enter number" name="number" type="number" />
                    <br/>
                    <button type="submit" className="button button__create">{this.props.btnTitle}</button>
                    <button type="button" className="button button__clear" onClick={this.clear}>Clear</button>
                </form>
            </div>
        )
    }
}
export default FormItem;