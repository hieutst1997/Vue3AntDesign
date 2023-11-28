import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class ThreeScene {
    constructor(container, jsonFile) {
        this.container = container;
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            75,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(100, 100, -5);
        this.camera.lookAt(0, 0, 0);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.screenSpacePanning = false;
        this.loader = new THREE.ObjectLoader();

        // Gọi phương thức updateScene để xử lý scene ban đầu
        this.updateScene(jsonFile, this.container);
    }

    updateScene(jsonFile, container) {
        if (jsonFile) {
            this.scene.clear();
            const loadedScene = this.loader.parse(JSON.parse(jsonFile));
            container.appendChild(this.renderer.domElement);

            this.scene.copy(loadedScene);

            this.boundingBox = new THREE.Box3().setFromObject(loadedScene);
            this.center = new THREE.Vector3();
            this.boundingBox.getCenter(this.center);
            this.camera.lookAt(this.center);

            this.size = this.boundingBox.getSize(new THREE.Vector3());
            this.maxDim = Math.max(this.size.x, this.size.y, this.size.z);
            const fov = this.camera.fov * (Math.PI / 180);
            this.cameraDistance = this.maxDim / (2 * Math.tan(fov / 2));
            this.camera.position.z = this.cameraDistance * 1.5;

            // Gọi lại animate để cập nhật
            this.animate(this.scene, this.camera, this.renderer, this.controls);
        } else {
            console.error("JSON data not found or invalid");
        }
    }

    animate(scene, camera, renderer, controls) {
        const animate = () => {
            requestAnimationFrame(animate);

            // Ensure controls are updated in the animation loop
            controls.update();

            // Render the scene
            renderer.render(scene, camera);
        };
        animate();
    }
}

export default ThreeScene;
