// ThreeScene.js
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import ThreeObject from './ThreeObject';
import Ground from './Ground';

class ThreeScene {
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.set(100, 100, -5);
        this.camera.lookAt(0, 0, 0); // Look at the center (0, 0, 0)
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.screenSpacePanning = false;

        this.objects = [];
        this.ground = new Ground(this.scene);

        this.animate();
    }

    addObject() {
        const newObject = new ThreeObject(this.scene, this.ground.ground);
        this.objects.push(newObject);
    }

    removeObject(index) {
        if (index >= 0 && index < this.objects.length) {
            const removedObject = this.objects.splice(index, 1)[0];
            removedObject.remove();
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

export default ThreeScene;
