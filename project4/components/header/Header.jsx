import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            < div >
                <p1>Xiangxian Zhou</p1>
                <img src="./components/header/eagle.jfif" />
            </div >
        );
    }
}

export default Header;