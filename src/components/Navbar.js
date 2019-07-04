
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {

        textDecoration: "none",
        color: "green",
        display: "flex",
        justifyContent: "center",

    },

    position: {
        position: "absolute",
        width: "100%",
        zIndex: 2,
        backgroundColor: "transparent",
        padding: "20px",
    },

    font: {
        fontSize: "17px",
        letterSpacing: "0.1em"
    }
});



function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Paper className={classes.position} >
            <Tabs className={classes.root}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"


            >
                <Tab className={classes.font} label="Home" component={Link} to="/home" />
                <Tab className={classes.font} label="Our Company" component={Link} to="/about" />
                <Tab className={classes.font} label="Shop" component={Link} to="/shop" />
                <Tab className={classes.font} label="Collections" component={Link} to="/collections" />
                <Tab className={classes.font} label="Contact us" component={Link} to="/contact" />
                <Tab className={classes.font} label={<Badge color="secondary" badgeContent={4}>
                    Your cart
              </Badge>} component={Link} to="/cart" />
            </Tabs>
        </Paper>
    );
}

export default Navbar