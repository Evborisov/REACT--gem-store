import React, { Component } from 'react'
import Footer from './Footer';


const style = {
    paddingTop: "100px",
};

export default class Cart extends Component {
    render() {
        return (
            <div>
                <h3 style={style}>Hello from cart</h3>
                <Footer></Footer>
            </div>
        )
    }
}
