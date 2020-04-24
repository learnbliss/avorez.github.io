import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import styles from './AccordionHeader.module.scss'
import ru from '../../img/rus.png'
import CIS from '../../img/cis.png'
import EU from '../../img/euro.png'
import rest from '../../img/rest.png'
import {connect} from "react-redux";
import {getNameAccordionThunk, getNameInputThunk} from "../../actions/accordion";

class AccordionHeader extends Component {
    render() {
        const {id, countryGroups} = this.props;
        const AccordionHeaderArr = countryGroups.find((item) => {
            if (item.id === id) {
                return item
            }
        });
        const getFlag = () => {
            let flag = AccordionHeaderArr.code;
            switch (flag) {
                case 'ru':
                    return ru;
                case 'CIS':
                    return CIS;
                case 'EU':
                    return EU;
                case 'rest':
                    return rest;
                default:
                    console.log('Флаги не найдены');
            }
        };
        return (
            <div className={styles.main__list}>
                <span
                    className={AccordionHeaderArr.name !== this.props.isSelect ? styles.main__list_view : `${styles.main__list_view} + ${styles.rotate}`}
                    onClick={this.handleClick}
                    id={AccordionHeaderArr.name}
                />
                <img src={getFlag()} alt={`${AccordionHeaderArr.code}Icon`}/>
                <span>{AccordionHeaderArr.name}</span>
            </div>
        );
    }

    handleClick = (event) => {
        if (event.target.id === this.props.isSelect) {
            event = null;
        } else {
            event = event.target.id
        }
        this.props.getNameAccordionThunk(event)
    }
}

//AccordionHeader.propTypes = {};

export default connect(
    (state) => {
        return {
            countryGroups: state.locationsReducer.countryGroups, // initialState, reducer
            isSelect: state.accordionReducer.isSelect, // initialState, reducer
            inputName: state.accordionReducer.inputName, // initialState, reducer
        }
    }, {
        getNameAccordionThunk,
        getNameInputThunk,
    })(AccordionHeader); // component;