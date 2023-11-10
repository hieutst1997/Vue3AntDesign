// Ground.js
import * as THREE from 'three';

class Ground {
    constructor(scene) {
        this.scene = scene;

        const geometry = new THREE.PlaneGeometry(100, 100);
        const material = new THREE.MeshBasicMaterial({ color: '#fff', side: THREE.DoubleSide });
        this.ground = new THREE.Mesh(geometry, material);
        this.ground.rotation.x = -Math.PI / 2; // Rotate to make it horizontal

        this.scene.add(this.ground);
    }

    setPosition(y) {
        // Set the position of the ground
        this.ground.position.setY(y);
    }
}

export default Ground;
