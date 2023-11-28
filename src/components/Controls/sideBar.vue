<template>
	<div>
		<div class="h-screen shadow-sm">
			<div>
				 <a-menu :theme="theme" :mode="mode" class="h-full shadow-sm">
					<a-menu-item :key="item.key" v-for="item in menuItems">
						<router-link :to="item.to">{{ item.title }}</router-link>
					</a-menu-item>
				</a-menu>
			</div>
		</div>
	</div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
	name: "SideBar",
	setup(){
		return {
			theme: 'light', // or 'light' for a light theme
			mode: 'inline', // or 'vertical' for a vertical sidebar
			menuItems: [
				{ key: '1', title: 'Home', to: '/' },
				{ key: '2', title: 'Solution 1 - Basic Three', to: '/ThreeJS' },
				{ key: '3', title: 'Solution 2 - Andvance Theatre', to: '/3DEdit' },
				// Add more menu items with corresponding routes
			],
		};
	}
})

</script>
