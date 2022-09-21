import { Globals } from "./Globals"

window.addEventListener('resize', () => {
    Globals.webGLController.resize();
})