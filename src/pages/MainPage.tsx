import * as React from 'react';
import {createUseStyles} from 'react-jss';
import SideToolBar from '../components/SideToolBar';
import UpperToolBar from '../components/UpperToolBar';

var useStyles = createUseStyles(() => ({
    column:{
        width:'100%',
        height:'100%',
        // backgroundColor:'#f0f',
        display:'flex',
        flexDirection:'column',
    },
    row:{
        display:'flex',
        flex:1,
        backgroundColor:'#f0f',
    },
    canvasContainer:{
        flex:10
    }
    
}));

const MainPage = () => {
    var cs = useStyles();
    var canvRef = React.useRef<HTMLCanvasElement>();

    React.useLayoutEffect(() => {
        console.dir(canvRef.current);
    })

    return (
        <div className={cs.column}>
            <UpperToolBar />
            <div className={cs.row}>
                <div className={cs.canvasContainer}>
                    <canvas id='main-canvas' ref={canvRef}/>
                </div>
                <SideToolBar />
            </div>
        </div>
    )
}

export default MainPage;