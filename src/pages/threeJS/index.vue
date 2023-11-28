<template>
	<div>
		<div>
			<div
				class="p-3 flex items-center rounded-lg mx-3"
				style="border: 1px solid #dee1e6"
			>
				<label class="block">
					<span class="sr-only">Choose File</span>
					<input
						type="file"
						class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
						accept=".json, .glb, .gltf"
						@change="handleInput($event)"
					/>
				</label>
			</div>

			<div class="mt-2 relative">
				<Loading v-if="loading" />
				<div id="sceneContainer" ref="sceneContainer"></div>
			</div>
		</div>
	</div>
</template>

<script>
import loadingStyleOne from "@/components/Loading/loadingStyleOne.vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
export default {
	data() {
		return {
			stateJson: null,
			loading: false,
		};
	},

	components: {
		Loading: loadingStyleOne,
	},

	async mounted() {
		await this.fetchData();
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

		async loadObject(jsonFile) {
			const container = this.$refs.sceneContainer;
			const scene = new THREE.Scene();

			const camera = new THREE.PerspectiveCamera(
				75,
				container.clientWidth / container.clientHeight,
				0.1,
				1000
			);
			camera.position.set(100, 100, -5);
			camera.lookAt(0, 0, 0);

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(container.clientWidth, container.clientHeight);
			

			const controls = new OrbitControls(camera, renderer.domElement);
			controls.enableDamping = true;
			controls.dampingFactor = 0.25;
			controls.screenSpacePanning = false;

			// Optional: Initial loading of the scene
			await this.updateScene(jsonFile, scene, camera, controls, renderer, container);
		
		},

		async updateScene(jsonFile, scene, camera, controls, renderer, container) {
			if (jsonFile) {
				const loader = new THREE.ObjectLoader();
				const loadedScene = loader.parse(JSON.parse(jsonFile));
				
				container.appendChild(renderer.domElement);

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
				console.error("JSON data not found or invalid");
			}
		},

		async fetchData() {
			let dataFake = null;
			this.loading = true;
			await fetch("https://hieutst1997.github.io/Json3D/demo2.json")
				.then((response) => response.json())
				.then((data) => {
					dataFake = JSON.stringify(data);
				})
				.catch((error) => console.error(error));

			this.loading = false;

			this.stateJson = dataFake;
		},

		async handleInput(event) {
			const input = event.target;

			if (!input.files || input.files.length === 0) {
				console.error("No file selected");
				return;
			}

			const file = input.files[0];
			try {
				const jsonData = await this.readFileAsync(file);
				if (jsonData) {
					this.stateJson = jsonData;
				}
			} catch (error) {
				console.error("Error reading or parsing JSON file:", error);
			}
		},

		readFileAsync(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = (e) => resolve(e.target.result);
				reader.onerror = (e) =>
					reject(new Error("Error reading file", e));
				reader.readAsText(file);
			});
		},
	},

	watch: {
		stateJson(newValue) {
			if (newValue) {
				const container = this.$refs.sceneContainer;
				const canvasElement = document.querySelector("canvas");
				if(canvasElement){
					container.removeChild(canvasElement);
				}
				this.loading = true;
				this.loadObject(newValue);
				this.loading = false;
				
				console.log('change')
			}
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
