import React from 'react';

import States from '../states/States';
import Example from '../example/Example';
import { HashRouter, Route, Link } from "react-router-dom";


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
        <HashRouter>
            <Route path="/states" component={States} />
            <Route path="/example" component={Example} />
        </HashRouter>
    }
}

export default SelectView