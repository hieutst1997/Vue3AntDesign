<template>
  <div id = "sceneContainer" ref="sceneContainer"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  mounted() {
    const container = this.$refs.sceneContainer;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(100, 100, -5);
    camera.lookAt(0, 0, 0); // Look at the center (0, 0, 0)

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    let hoverMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Replace with your desired hover material

    let selectedObject = null;
    const loader = new THREE.ObjectLoader();

    // Replace 'path/to/your/exported-scene.json' with the actual path to your exported JSON file.
    loader.load(
      '/scene.json',
      (loadedScene) => {
        scene.copy(loadedScene); // Copy the loaded scene into your main scene

        // Optional: Adjust camera position based on the loaded scene
        const boundingBox = new THREE.Box3().setFromObject(loadedScene);
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);
        camera.lookAt(center);

        // Optional: Set camera position based on bounding box
        const size = boundingBox.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        const cameraDistance = maxDim / (2 * Math.tan(fov / 2));
        camera.position.z = cameraDistance * 1.5;

        this.animate(scene, camera, renderer, controls);
      },
      undefined,
      (error) => {
        console.error('Error loading exported scene', error);
      }
    );
  },
  methods: {
    animate(scene, camera, renderer, controls) {
      const animate = () => {
        requestAnimationFrame(animate);

        // Ensure controls are updated in the animation loop
        controls.update();

        // Render the scene
        renderer.render(scene, camera);
      };
      animate();
    },
    setupHoverEvents(scene, renderer, camera) {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      const hoveredObjects = [];

      window.addEventListener('mousemove', (event) => {
        // Calculate normalized device coordinates
        mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Check for intersections
        const intersects = raycaster.intersectObjects(hoveredObjects);

        // Handle hover effect
        hoveredObjects.forEach((object) => {
          if (object.userData.originalMaterial && object.material) {
            object.material.copy(object.userData.originalMaterial);
          }
        });

        if (intersects.length > 0) {
          const hoveredObject = intersects[0].object;

          if (hoveredObject.userData.hoverable) {
            hoveredObject.material.copy(hoverMaterial);
          }

          selectedObject = hoveredObject;
        } else {
          selectedObject = null;
        }
      });
    },
  },
};
</script>

<style>
#sceneContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 81px);
  width: 100%;
}
</style>
