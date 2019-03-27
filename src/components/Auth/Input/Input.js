import React from 'react';
import propTypes from 'prop-types';
import lifecycle from 'react-pure-lifecycle';
import Aux from '../../../hoc/Auxiliary';
import M from 'materialize-css';

const methods = {
    componentDidMount(){
        M.FormSelect.init(document.querySelectorAll('select'));
    }
}

const Input = (props) => {
    let inputElement = null;
    switch (props.type) {
        case 'text':
            inputElement = <Aux>
                <input
                    placeholder={props.placeholder}
                    id={props.id}
                    type={props.type}
                    className="validate"
                    onChange={props.changedHandler}
                />
                {(!props.valid && props.touched) ? 
                    <span
                        className="red-text left helper-text"
                    >
                    {props.error}
                    </span>
                    :
                    null
                }
                {props.touched ?
                    null
                    :
                    <span
                        className="blue-text left helper-text"
                    >
                    {props.hint}
                    </span>
                }
                <label htmlFor={props.id}>
                    {props.label}
                </label>
            </Aux>;
            break;
        case 'email':
            inputElement = <Aux>
                <input
                    placeholder={props.placeholder}
                    id={props.id}
                    type={props.type}
                    className="validate"
                    onChange={props.changedHandler}
                />
                <label htmlFor={props.id}>
                    {props.label}
                </label>
                {(!props.valid && props.touched) ? 
                    <span
                        className="red-text left helper-text"
                    >
                    {props.error}
                    </span>
                    :
                    null
                }
            </Aux>;
            break;
        case 'select':
            inputElement = <Aux>
                <select 
                    className="icons m12"
                    onChange={props.changedHandler}
                    value={props.value}
                >
                    {props.options.map((option) => {
                        return(
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.displayValue}
                            </option>
                        )
                    })}
                </select>
                <label>
                    {props.label}
                </label>;
            </Aux>
            
            break;
        case 'password':
        inputElement = <Aux>
                <input
                    placeholder={props.placeholder}
                    id={props.id}
                    type={props.type}
                    className="validate"
                    onChange={props.changedHandler}
                />
                <label htmlFor={props.id}>
                    {props.label}
                </label>
                {(!props.valid && props.touched) ? 
                    <span
                        className="red-text left helper-text"
                    >
                    {props.error}
                    </span>
                    :
                    null
                }
            </Aux>;
            break;    
        default:
            break;
    }
    return (
        <div className="input-field col s12 m6">
            {inputElement}
        </div>
    )

}

Input.propTypes = {
    id: propTypes.string,
    type: propTypes.string,
    placeholder: propTypes.string,
    label: propTypes.string,
    error: propTypes.string,
    hint: propTypes.string,
    valid: propTypes.bool,
    touched: propTypes.bool,
    options: propTypes.array,
    changedHandler: propTypes.func
}

export default lifecycle(methods)(Input);