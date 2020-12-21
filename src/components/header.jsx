import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            openDrawer:false
        }
    }
    render() {


        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Weather Data
                        </Typography>
                    </Toolbar>
                    Search<input type="text" name="search"/>
                </AppBar>
                
            </div>
        );
    }
}

export default Header;