import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import styles from './LocationSearch.module.scss'
import Accordion from "../Accordion/Accordion";
import {connect} from "react-redux";
import {getLocationsThunk} from "../../actions/locations";

class LocationSearch extends Component {
    render() {
        const {countryGroups} = this.props;
        return (
            <div className={styles.root}>
                <div className={styles.root__head}>
                    Выбор региона
                    <button/>
                </div>
                <div className={styles.main}>
                    <div><b>Регионы работы</b></div>
                    {countryGroups.map((item) => {
                        return (
                            <Accordion key={item.name} id={item.id} name={item.name}/>
                        );
                    })}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.getLocationsThunk();
    }
}

//LocationSearch.propTypes = {};

export default connect(
    (state) => {
        return {
            // console1: console.log('state', state.accordionReducer),
            // console2: console.log('state', state.searchReducer),
            countryGroups: state.locationsReducer.countryGroups,
        }
    }, {
        getLocationsThunk, // action function
    })(LocationSearch); // component;