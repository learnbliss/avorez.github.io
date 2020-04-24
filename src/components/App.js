import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import LocationSearch from "./LocationSearch/LocationSearch";

class App extends Component {
    render() {
        return (
            <div className={'rootApp'}>
                <div/>
                <div>
                    <LocationSearch/>
                </div>
                <div/>
            </div>
        );
    }
}

export default App;
