import React from 'react';
import axios from 'axios';
const GET_METHOD = "https://jsonplaceholder.typicode.com/posts/1";
const POST_METHOD = "";
class AboutPage extends React.Component{
    getMethod = ()=>{
        axios(GET_METHOD,{method:'GET'}).then(response=>{
            console.log(response.data);
        }).catch(err=>{
            console.log(err.response);
        });
    }
    postMethod = ()=>{
        axios(POST_METHOD,{method:'POST',data:{}}).then(response=>{
            console.log(response.data);
        }).catch(err=>{
            console.log(err.response);
        });
    }
    render(){
        this.getMethod();
        return(<div>hello about page</div>)
    }
}
export default AboutPage;