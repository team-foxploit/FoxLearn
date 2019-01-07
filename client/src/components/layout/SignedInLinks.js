import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends Component {

    state = {
        combination:''
    }

    componentDidMount(){
        // let combination = '';
        console.log(this.props);
    }

    // constructor(props){
    //     super(props);
    //     axios.post('/api/users', {
    //         "type":"namecombination",
    //         "id":this.props.id
    //     })
    //       .then(function (response) {              
    //         console.log(response.data.results);
    //         this.setState(state => ({
    //             combination:response.data.results
    //         }))
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }

    render(){
        return(
            <ul className="right">
                <li><NavLink to='/'>Discover</NavLink></li>
                <li><NavLink to='/'>Log out</NavLink></li>
                <li><NavLink to='/' className='btn btn-floating green lighten-1'>{this.state.combination}</NavLink></li>
            </ul>
        );
    }
}

export default SignedInLinks;