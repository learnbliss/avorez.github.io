import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import styles from './SearchInput.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import {getDataSearch} from "../../actions/search";
import {connect} from "react-redux";

// import CloseIcon from '@material-ui/icons/Close';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.inputRef = React.createRef();
    }

    render() {
        return (
            <div className={styles.search__wrapper}>
                <input
                    className={styles.input}
                    type="text"
                    autoFocus={true}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    placeholder=""
                    maxLength="30"
                    ref={this.inputRef}
                />
                <div className={styles.searchIcon}>
                    <SearchIcon
                        onClick={this.filterIt}
                    />
                    {/*{this.state.inputValue ? <CloseIcon onClick={this.resetFilter}/> : null}*/}
                </div>
            </div>
        );
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.filterIt()
        }
    };

    handleChange = async (event) => {
        await this.setState({
            inputValue: event.target.value
        });
        this.filterIt()
    };

    filterIt = () => {
        this.props.getDataSearch(this.state.inputValue)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('this.props.isSelect: ', this.props.isSelect);
        console.log('prevProps.inputName: ', prevProps.inputName);
        console.log('this.props.inputName: ', this.props.inputName);
        if (prevProps.inputName !== this.props.inputName) {
            this.props.getDataSearch('');
            this.setState((state) => {
                return {inputValue: ''}
            });
            this.inputRef.current.focus();
            this.inputRef.current.value = '';
        }
    }

    // resetFilter = () => {
    //     this.props.onFilterChange('');
    //     this.setState({
    //         inputValue: ''
    //     })
    // }
}

//SearchInput.propTypes = {};

export default connect(
    (state) => {
        return {
            dataSearch: state.searchReducer.dataSearch,
            inputName: state.accordionReducer.inputName,
        }
    }, {
        getDataSearch, // action function
    })(SearchInput); // component;