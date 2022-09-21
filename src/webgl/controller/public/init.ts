import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { WebGLController } from "../WebGLController";

export function init(this: WebGLController, canvContainer: HTMLDivElement) {
    this.canvContainer = canvContainer;
    var canvas = canvContainer.firstChild;
    var { clientWidth:width, clientHeight:height } = canvContainer;
    this.renderer = new WebGLRenderer({ antialias: true, canvas });
    this.renderer.setSize(width, height);
    this.camera = new PerspectiveCamera(70, width / height, 0.1, 2000);
    this.scene = new Scene();

    this.renderer.render(this.scene, this.camera);
}