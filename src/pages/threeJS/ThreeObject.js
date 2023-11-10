// ThreeObject.js
import * as THREE from 'three';

class ThreeObject {
    constructor(scene, ground) {
        this.scene = scene;
        this.ground = ground;

        // Create a simple cube as an example
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
        this.object = new THREE.Mesh(geometry, material);

        // Set the object position relative to the ground
        this.object.position.set(Math.random() * 10 - 5, 0, Math.random() * 10 - 5);

        // Add the object to the scene
        this.scene.add(this.object);

        // Update the ground to include the object's position
        this.ground.position.setY(this.object.position.y);
    }

    setPosition(x, z) {
        // Set the position of the object relative to the ground
        this.object.position.set(x, 0, z);
        this.ground.position.setY(this.object.position.y);
    }

    remove() {
        // Remove the object from the scene
        this.scene.remove(this.object);
    }
}

export default ThreeObject;
