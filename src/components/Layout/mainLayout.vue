<template>
	<div>
		<main class="flex overflow-hidden">
			<div class="flex-col-2">
				<SideBar />
			</div>
			<div class="flex-col-10">
				<div class="relative h-screen overflow-auto">
					
                    <div class = "mt-2">
                        <Loading v-if="store.getters.getLoading" />
					    <router-view></router-view>
                    </div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import SideBar from "@/components/Controls/sideBar.vue";
import Loading from "@/components/Loading/loadingStyleOne.vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from 'vue-router';
export default defineComponent({
	components: {
		SideBar,
		Loading,
	},
	name: "mainLayout",
	setup() {
		const store = useStore();
		const router = useRouter();

		function back() {
			router.back()
		}

		return {
			store,
			back
		};
	},
});
</script>

<style scoped>
.content-view {
	width: 100%;
	height: calc(100vh - 76px);
	overflow-y: auto;
	background-color: #fcfcfc;
	padding-bottom: 40px;
	position: relative;
}
</style>
