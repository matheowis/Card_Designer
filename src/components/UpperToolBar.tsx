import * as React from 'react';
import { createUseStyles } from 'react-jss';

var useStyles = createUseStyles(() => ({
    toolbar:{
        display:'flex',
        backgroundColor:'#f00',
        height:30
    }
}));

const UpperToolBar = () => {
    var cs = useStyles();
    return (
        <div className={cs.toolbar}></div>
    )
}

export default UpperToolBar;