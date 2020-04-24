import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import AccordionHeader from "../AccordionHeader/AccordionHeader";
import AccordionBody from "../AccordionBody/AccordionBody";
import {connect} from "react-redux";

class Accordion extends Component {
    render() {
        const {id, name} = this.props;

        return (
            <div>
                <AccordionHeader id={id}/>
                {name === this.props.isSelect && <AccordionBody id={id}/>}
            </div>
        );
    }
}

//Accordion.propTypes = {};

export default connect(
    (state) => {
        return {
            isSelect: state.accordionReducer.isSelect, // initialState, reducer
        }
    },)(Accordion); // component;