import React, { PureComponent } from "react";
// import { Redirect } from "react-router-dom";
import Input from './Input/Input';
import Aux from '../../hoc/Auxiliary';
import axios from "axios";
import Footer from "../UI/Footer/Footer";
// import Spinner from '../UI/Spinner/Spinner';

class SignUp extends PureComponent {
  state = {
      orderForm: {
          firstname: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  label: 'First Name',
                  placeholder: 'Your first name',
                  error: 'This field is required.'
              },
              value: '',
              touched: false,
              rules: {
                required: true,
                valid: false
              }
          },
          lastname: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  label: 'Last Name',
                  placeholder: 'Your last name',
                  error: 'This field is required.'
              },
              value: '',
              touched: false,
              rules: {
                required: true,
                valid: false
              }
          },
          username: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  label: 'Username',
                  placeholder: 'Your username',
                  hint: 'Username should be unique.',
                  error: 'This username is taken! Try another one.'
              },
              value: '',
              touched: false,
              rules: {
                required: true,
                valid: false
              }
          },
          email: {
              elementType: 'input',
              elementConfig: {
                  type: 'email',
                  label: 'Email Address',
                  placeholder: 'Your email address',
                  error: 'This email is invalid!'
              },
              value: '',
              touched: false,
              rules: {
                required: true,
                valid: false
              }
          },
          accounttype: {
              elementType: 'input',
              elementConfig: {
                  type: 'select',
                  label: 'Account Type',
                  options: [
                      { value: 'student', displayValue: 'Student' },
                      { value: 'teacher', displayValue: 'Teacher' }
                  ]
              },
              value: 'student',
              touched: false,
              rules: {
                valid: true
              }
          },
          password: {
              elementType: 'input',
              elementConfig: {
                  type: 'password',
                  label: 'Password',
                  placeholder: 'Your password',
                  error: 'Password should be at least 8 characters long.'
              },
              value: '',
              touched: false,
              rules: {
                minLength: 8,
                valid: false
              }
          },
          confirmpassword: {
              elementType: 'input',
              elementConfig: {
                  type: 'password',
                  label: 'Confirm Password',
                  placeholder: 'Retype your password',
                  error: 'Passwords should be matched!'
              },
              value: '',
              touched: false,
              rules: {
                valid: false
              }
          }
      },
      formValidity: false,
      usernames: null
  }

  // triggered on change of states
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.touched = true;
    updatedFormElement.rules.valid = this.validateField(inputIdentifier, updatedFormElement.value);
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let validity = true;
    for (const key in this.state.orderForm) {
      validity = validity && this.state.orderForm[key].rules.valid;
    }
    this.setState({
      orderForm: updatedOrderForm,
      formValidity: validity
    }, () => {
      console.log(this.state);
    });
  }

  validateField = (id, value) => {
    switch(id){
      case "username":
        return !this.state.usernames.includes(value);
      case "email":
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return emailTest.test(value) && !this.state.usernames.includes(value);
      case "password":
        return value.length >= 8;
      case "confirmpassword":
        return (this.state.orderForm.password.value === value);
      case "accounttype":
        return true;
      default:
        return (value.trim() !== '');
    }
  }

  // triggered on Submit
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.formValidity) {
      const user = {
        firstName:this.state.orderForm.firstname.value,
        lastName:this.state.orderForm.lastname.value,
        userName:this.state.orderForm.username.value,
        email:this.state.orderForm.email.value,
        password: this.state.orderForm.password.value,
        userType: this.state.orderForm.accounttype.value
      };
      console.log(user);
      axios
        .put(`https://foxlearn-api.herokuapp.com/api/users/auth`, user)
        .then(res => {
          if (res.data.status === "success") {
            console.log("success!");            
          }
        });
    }
  };

  componentDidMount(){
    // TODO : Load usernames and emails from server
      this.setState({
        loading: true,
        usernames: [
          "namal",
          "sunil"
        ]
      });
  }

  render() {
    const formElements = [];
    for (const key in this.state.orderForm) {
      formElements.push({
          id:key,
          config: this.state.orderForm[key]
      });
    }
    let Form = (
        <form onSubmit={this.handleSubmit.bind(this)}>
          {formElements.map((formElement) => {
              return <Input 
                      key={formElement.id}
                      id={formElement.id}
                      type={formElement.config.elementConfig.type}
                      placeholder={formElement.config.elementConfig.placeholder}
                      label={formElement.config.elementConfig.label}
                      error={formElement.config.elementConfig.error}
                      hint={formElement.config.elementConfig.hint}
                      valid={formElement.config.rules.valid}
                      touched={formElement.config.touched}
                      options={formElement.config.elementConfig.options}
                      changedHandler={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
          })}
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
      </form>
    );

    // TODO : load the username from back-end
    // if(this.state.loading){
    //   Form = <h1>Form loading</h1>;
    // }

    return (
      <Aux>
        <div className="container">
          <div className="row centText">
            <div id="block-1">
              <h2 className="yellow-text text-darker-3">Sign Up</h2>
              <br />
              <h6 className="blue-text text-accent-1">
                Your account is your portal to all things FoxLearn: <br />
                your classroom, quizes, progress and more!
              </h6>
              <br />
            </div>
          </div>
          <div className="row">
            {Form}
          </div>
        </div>
        <Footer />
      </Aux>
    );
  }
}

export default SignUp;
