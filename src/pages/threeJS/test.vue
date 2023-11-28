<template>
	<div 
		id="sceneContainer" 
		ref="sceneContainer"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
	data() {
		return {
			stateJson: null,
		};
	},

	async mounted() {
		await this.loadObject();
		this.fetchData();
		if (this.stateJson) {
			console.log(this.stateJson);
		}
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

		async loadObject() {
			await this.fetchData();
			const container = this.$refs.sceneContainer;
			const scene = new THREE.Scene();

			const camera = new THREE.PerspectiveCamera(
				75,
				container.clientWidth / container.clientHeight,
				0.1,
				1000
			);
			camera.position.set(100, 100, -5);
			camera.lookAt(0, 0, 0); // Look at the center (0, 0, 0)

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(container.clientWidth, container.clientHeight);
			container.appendChild(renderer.domElement);

			const controls = new OrbitControls(camera, renderer.domElement);
			controls.enableDamping = true;
			controls.dampingFactor = 0.25;
			controls.screenSpacePanning = false;
			const loader = new THREE.ObjectLoader();

			if (this.stateJson) {
				const loadedScene = loader.parse(JSON.parse(this.stateJson));

				// Copy the loaded scene into your main scene
				scene.copy(loadedScene);

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
			} else {
				console.error("JSON data not found in local storage");
			}

			// if(this.stateJson){
			// 	loader.load(
			// 		"/demo2.json",
			// 		(loadedScene) => {
			// 			scene.copy(loadedScene); // Copy the loaded scene into your main scene

			// 			// Optional: Adjust camera position based on the loaded scene
			// 			const boundingBox = new THREE.Box3().setFromObject(loadedScene);
			// 			const center = new THREE.Vector3();
			// 			boundingBox.getCenter(center);
			// 			camera.lookAt(center);

			// 			// Optional: Set camera position based on bounding box
			// 			const size = boundingBox.getSize(new THREE.Vector3());
			// 			const maxDim = Math.max(size.x, size.y, size.z);
			// 			const fov = camera.fov * (Math.PI / 180);
			// 			const cameraDistance = maxDim / (2 * Math.tan(fov / 2));
			// 			camera.position.z = cameraDistance * 1.5;

			// 			this.animate(scene, camera, renderer, controls);
			// 		},
			// 		undefined,
			// 		(error) => {
			// 			console.error("Error loading exported scene", error);
			// 		}
			// 	);
			// }

			
		},

		async fetchData() {
			let dataFake = null;
			await fetch("https://hieutst1997.github.io/Json3D/demo2.json")
				.then((response) => response.json())
				.then((data) => {
					dataFake = JSON.stringify(data);
				})
				.catch((error) => console.error(error));

			this.stateJson = dataFake;
		},

		initThreeScene(jsonFile){
			this.threeScene = new ThreeScene(this.$refs.threeContainer, jsonFile);
		}
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
