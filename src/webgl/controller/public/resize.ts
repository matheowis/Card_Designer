import { WebGLController } from "../WebGLController";

export function resize(this: WebGLController) {
    var { clientWidth:width, clientHeight:height } = this.canvContainer;
    this.renderer.setSize(width,height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
}