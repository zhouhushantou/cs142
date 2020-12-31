import React from 'react';

import States from '../states/States';
import Example from '../example/Example';

class SelectView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.value > 0) {
            this.setState({ value: 0 })
        }
        else {
            this.setState({ value: 1 })
        }

    }

    render() {
        if (this.state.value == 0) {
            return (
                <div>
                    <button onClick={this.handleClick}>Change to States</button>
                    <Example />
                </div>
            );
        }
        else {
            return (
                <div>
                    <button onClick={this.handleClick}>Change to Example</button>
                    <States />
                </div>

            );
        }
    }
}

export default SelectView