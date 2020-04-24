import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import styles from './PlainList.module.scss'
import PlainItem from "../PlainItem/PlainItem";
import {connect} from "react-redux";

class PlainList extends Component {
    render() {
        return (
            <ul className={styles.root}>
                {this.props.dataSearch.map((item) => {
                    return (
                        <PlainItem key={item} name={item}/>
                    )
                })}
            </ul>
        );
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.inputName !== this.props.inputName) {
    //
    //     }
    // }
}

//PlainList.propTypes = {};

export default connect(
    (state) => {
        return {
            dataSearch: state.searchReducer.dataSearch, // initialState, reducer
            // inputName: state.accordionReducer.inputName, // initialState, reducer
        }
    },{

    })(PlainList); // component;