import React, { Component } from 'react';
import Footer from './Footer';


const style = {
    paddingTop: "100px",
};


class Collections extends Component {
    render() {
        return (
            <div>
                <h3 style={style}>hello from Collections</h3>
                <Footer></Footer>
            </div>
        )
    }
}
export default Collections