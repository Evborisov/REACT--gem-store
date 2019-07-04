import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';



class Default extends Component {
    render() {
        return (
            <div>

                <Typography variant="h4" gutterBottom>
                    Page not Found
      </Typography>
                <Footer></Footer>
            </div>
        )
    }
}
export default Default