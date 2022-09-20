import * as React from 'react';
import { createUseStyles } from 'react-jss';

var useStyles = createUseStyles(() => ({
    root:{
        flex:1,
        backgroundColor:'#00f',
    }
}));

const SideToolBar = () => {
    var cs = useStyles();
    return (
        <div className={cs.root}></div>
    )
}

export default SideToolBar;