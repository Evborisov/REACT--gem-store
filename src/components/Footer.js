import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    style: {
        background: 'black',
        color: 'white',
        height: '48px',
    },

    styleF: {
        background: 'black',
        color: 'white',
        height: '200px',

    },

    styleListHeader: {
        color: "white",
    },
});



function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container border={2} className={classes.styleF} maxWidth="xl" >
                <div className="container d-flex" >

                    {/* Contacts list */}
                    <List subheader={
                        <ListSubheader className={classes.styleListHeader} component="div" id="nested-list-subheader">
                            Contact Us:
        </ListSubheader>
                    }>
                        <ListItem>
                            <ListItemText><a href="mailto:name@email.com">name@email.com</a></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><a href="callto:+49012345678900">+49012345678900</a></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><address>
                                Lindemann str 4.<br />
                                40237 Dusseldorf Germany</address></ListItemText>
                        </ListItem>
                    </List>

                    {/* Follow us list */}
                    <List subheader={
                        <ListSubheader className={classes.styleListHeader} component="div" id="nested-list-subheader">
                            Follow Us:
        </ListSubheader>
                    }>
                        <ListItem>

                        </ListItem>

                        <ListItem>

                        </ListItem>

                        <ListItem>

                        </ListItem>
                        <ListItem>
                            <ListItemText><address>
                                Lindemann str 4.<br />
                                40237 Dusseldorf Germany</address></ListItemText>
                        </ListItem>
                    </List>
                </div>
            </Container>
            <Container className={classes.style} maxWidth="xl">
                <Typography variant="body2" gutterBottom>
                    Copyright. All Rights Reserved.
      </Typography>
            </Container>
        </React.Fragment>
    )
}
export default Footer