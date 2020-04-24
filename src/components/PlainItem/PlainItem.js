import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import styles from './PlainItem.module.scss'

class PlainItem extends Component {
    render() {
        const {name} = this.props;
        return (
            <li className={styles.root}>
                {name}
            </li>
        );
    }
}

//PlainItem.propTypes = {};

export default PlainItem;