<template>
	<div>
		<MainLayout v-if="componentData.component !== 'BlankLayout'" />
		<BlankLayout v-else />
	</div>
</template>

<script>
import { defineComponent, onBeforeMount, reactive, watch} from "vue";
import MainLayout from "@/components/Layout/mainLayout.vue";
import BlankLayout from '@/components/Layout/blankLayout.vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
	name: "App",
	components: {
		MainLayout,
		BlankLayout
	},

	setup() {
		const router = useRouter();
		const route = useRoute();

		const componentData = reactive({
			component: 'MainLayout',
		})

		watch(route, (newValue) => {
			if(newValue.name == '3DEdit'){
				componentData.component = 'BlankLayout'
			}else{
				componentData.component = 'MainLayout'
			}
		})

		onBeforeMount(() =>{
			if(route.name == '3DEdit'){
				componentData.component = 'BlankLayout'
			}else{
				componentData.component = 'MainLayout'
			}
		})

		return {
			componentData
		};
	},
});
</script>

<style></style>
