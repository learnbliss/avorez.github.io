import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import styles from './RadioList.module.scss'
import RadioItem from "../RadioItem/RadioItem";
import {connect} from "react-redux";

const radioItem = {
    ru: ['Вся Россия', 'Область', 'Город'],
    CIS: ['Все страны СНГ', 'Отдельная страна'],
    rest: ['Все страны', 'Отдельная страна'],
    EU: ['Все страны Евросоюза', 'Отдельная страна'],
};

class RadioList extends Component {
    render() {
        const {id, countryGroups} = this.props;
        const getNameRadioInput = () => {
            let name = [];
            countryGroups.map((item) => {
                if (item.id === id) {
                    for (let key in radioItem) {
                        if (key === item.code) {
                            name = radioItem[key]
                        }
                    }
                }
            });
            return name
        };
        return (
            <ul className={styles.root}>
                {getNameRadioInput().map((item) => {
                    return <RadioItem key={item} name={item}/>
                })}
            </ul>
        );
    }
}

//RadioList.propTypes = {};

export default connect(
    (state) => {
        return {
            countryGroups: state.locationsReducer.countryGroups, // initialState, reducer
        }
    },)(RadioList); // component;