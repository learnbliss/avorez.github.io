import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import styles from './RadioItem.module.scss'
import {getNameInputThunk} from "../../actions/accordion";
import {connect} from "react-redux";
import {getDataSearch} from "../../actions/search";

class RadioItem extends Component {
    render() {
        const {name, code, inputName} = this.props;
        return (
            <li>
                <label className={styles.container}>
                    <input
                        id={code}
                        name={name}
                        type="radio"
                        onChange={this.handleChange}
                        checked={inputName === name && true}
                    /><span className={styles.checkMark}/>
                    {name}
                </label>
            </li>
        );
    }

    handleChange = (event) => {
        this.props.getNameInputThunk(event.target.name);
    }
}

//RadioItem.propTypes = {};

export default connect(
    (state) => {
        return {
            inputName: state.accordionReducer.inputName,
        }
    }, {
        getNameInputThunk,
        getDataSearch,
    })(RadioItem);