<template lang="">
	<div>
		This is home
	</div>
</template>
<script>
import { defineComponent } from "vue";
import CardLogin from "@/components/User/cardLogin.vue";
import MenuHome from "@/components/Controls/menuHome.vue";
import services from "@/services";
import { useStore } from "vuex";
export default defineComponent({
	name: "Home",
	components: {
		CardLogin,
		MenuHome,
	},

	setup() {
		const store = useStore();
		async function test() {
			store.dispatch("setLoading", true);
			console.log(store.getters);
			const response = await services.ZALO.test();
			store.dispatch("setLoading", false);
		}

		return {
			test,
		};
	},
});
</script>

<style lang=""></style>
