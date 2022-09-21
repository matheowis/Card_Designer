import * as React from 'react';
import {createUseStyles} from 'react-jss';
import SideToolBar from '../components/SideToolBar';
import UpperToolBar from '../components/UpperToolBar';
import {Globals} from '../Globals'
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
        flex:10,
        position:'relative',
    }
    
}));

const MainPage = () => {
    var cs = useStyles();
    var canvContainerRef = React.useRef<HTMLDivElement>();
    // var canvRef = React.useRef<HTMLCanvasElement>();

    React.useLayoutEffect(() => {
        if(!canvContainerRef.current) return;

        Globals.webGLController.init(canvContainerRef.current);
    })

    return (
        <div className={cs.column}>
            <UpperToolBar />
            <div className={cs.row}>
                <div className={cs.canvasContainer} ref={canvContainerRef}>
                    <canvas id='main-canvas' style={{position:'absolute',left:0,top:0}}/>
                </div>
                <SideToolBar />
            </div>
        </div>
    )
}

export default MainPage;