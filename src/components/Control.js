import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus : PropTypes.func,
    onSubtract : PropTypes.func,
    onRandomizeColor : PropTypes.func
};

function createWarning(funcName) {
    return () => console.warn(`${funcName} is not defined`);
}

const defaultProps = {
    onPlus : createWarning('onPlus'),
    onSubtract : createWarning('onSub'),
    onRandomizeColor : createWarning('onRandomColor'),
};

class Control extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;