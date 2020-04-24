import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import RadioList from "../RadioList/RadioList";
import SearchInput from "../SearchInput/SearchInput";
import PlainList from "../PlainList/PlainList";
import {connect} from "react-redux";

class AccordionBody extends Component {
    render() {
        const {id} = this.props;
        return (
            <div>
                <RadioList id={id}/>
                {this.props.inputName && <SearchInput id={id}/>}
                <PlainList id={id}/>
            </div>
        );
    }
}

//AccordionBody.propTypes = {};

export default connect(
    (state) => {
        return {
            inputName: state.accordionReducer.inputName, // initialState, reducer
        }
    },)(AccordionBody); // component;