<template>
	<div>
		<MainLayout />
	</div>
</template>

<script>
import { defineComponent } from "vue";
import MainLayout from "@/components/Layout/mainLayout.vue";

export default defineComponent({
	name: "App",
	components: {
		MainLayout,
	},

	setup() {
		return {};
	},
});
</script>

<style></style>
