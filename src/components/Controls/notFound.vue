<template lang="">
	<div
		class="absolute w-full h-full top-0 left-0 z-30 flex flex-col items-center justify-center"
	>
		<p>Not found 404</p>

		<button
			type="button"
			class="flex items-center justify-center w-max px-3 h-10 bg-main text-white text-base font-bold rounded-md mt-3"
		>
			<router-link to="/"> 
                Go to Home
            </router-link>
		</button>
	</div>
</template>
<script>
export default {
	name: "notFound",
};
</script>
<style lang=""></style>
