import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';


function Details() {
    return (
        <ProductConsumer>
            {(value) => {
                const { id, company, img, info, price, title, inCart } = value.detailProduct;
                return (
                    <div className="container py-5">
                        {/* title */}
                        <div className="row pt-5">
                            <div className="col-10 mx-auto text-center my-5">
                                <Typography variant="h3" gutterBottom>
                                    {title}
                                </Typography>
                            </div>

                        </div>
                        {/* end of title */}
                        {/* product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img src={img} className="img-fluid" alt="product" />
                            </div>
                            {/* Product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <Typography variant="h4" gutterBottom>
                                    model: {title}
                                </Typography>
                                <Typography variant="h5" gutterBottom className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by: <span className="text-uppercase"> {company}</span>
                                </Typography>
                                <Typography variant="h5" gutterBottom className="primary">
                                    Price: <span>€</span> {price}
                                </Typography>
                                <Typography variant="body1" gutterBottom className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Some info about product:
                                 </Typography>
                                <Typography variant="body1" gutterBottom className="text-muted lead">
                                    {info}
                                </Typography>
                                {/*Buttons */}
                                <div className="pt-3">
                                    <Link to='/shop' className="pr-3" >
                                        <Button variant="outline-primary" className="font-weight-bold" >Back to Shop</Button>
                                    </Link>
                                    <Button
                                        variant="outline-success"
                                        className="pr-3 font-weight-bold"
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id)
                                        }}>
                                        {inCart ? "in the Cart" : "Add to Cart"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }}
        </ProductConsumer>
    )
}


export default Details