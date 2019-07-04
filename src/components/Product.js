import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';




const style = {
    paddingTop: "100px",
    width: "300px",
    margin: "40px"
};

const styleCardAction = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const styleCardMedia = {
    transform: "scale(0.6)",
}

class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;

        return (
            <ProductConsumer>

                {(value) => {
                    return (
                        <div style={style}>
                            <Card  >
                                <CardActionArea onClick={() => value.handleDetail(id)
                                }>
                                    <Link to="/details">
                                        <CardMedia style={styleCardMedia}
                                            component="img"
                                            alt={title}
                                            height="240"
                                            image={img}
                                            title={title}
                                        />
                                    </Link>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            A bracelet is an article of jewellery that is worn around the wrist.
                         </Typography>
                                        <Typography gutterBottom variant="h6" component="h4">
                                            <span>€</span> {price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={styleCardAction}>
                                    <Button size="small" color="primary" disabled={inCart ? true : false} onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart ? (<p disabled>In the Cart</p>) : (<p>Add to Cart</p>)}
                                    </Button>
                                </CardActions>
                            </Card>
                        </div >
                    )
                }}


            </ProductConsumer>

        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

export default Product;