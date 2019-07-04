import React, { Component } from 'react';
import Product from './Product';
import Footer from './Footer';
import { ProductConsumer } from '../context';



class Product_list extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        { /*<Title name="our" title="products"></Title>*/}
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>


        )
    }
}
export default Product_list;