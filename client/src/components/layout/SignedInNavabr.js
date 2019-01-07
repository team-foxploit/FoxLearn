import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import axios from 'axios';

class Navbar extends Component {
    state = {
        combination:''
    }

    componentDidMount(){
        console.log(this.props.details.Student_ID);
        axios.post('/api/users', {
            "type":"namecombination",
            "id":this.props.details.Student_ID
        })
          .then(function (response) {              
            console.log(response.data.results);
            this.state.setState(state => ({
                combination:response.data.results
            }));
          })
          .catch(function (error) {
            console.log(error);
          });
          console.log(this.state);
    }

    render() {
        return (
          <div className="wrapper">
            <nav className="nav-wrapper blue lighten-2 hoverable">
              <Link to="/" className="brand-logo">
                FoxLearn
              </Link>
              <div className="hide-on-med-and-down">
                <SignedInLinks className="right" id={this.props.details.Student_ID} />
              </div>
            </nav>
          </div>
        );
    }
};

export default Navbar;
