import { init,resize } from "./public/";
import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class WebGLController {
    public renderer: WebGLRenderer;
    public camera: PerspectiveCamera;
    public scene: Scene;
    public controls: OrbitControls;
    public canvContainer: HTMLDivElement



    public init = init;
    public resize = resize;
}