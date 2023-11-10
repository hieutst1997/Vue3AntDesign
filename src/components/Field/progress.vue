<template>
	<div class="w-full">
		<div class="mb-3">
			<h4 class="leading-8 text-base text-black-2 pl-1">
				{{ dataValue.title }}
			</h4>
			<div class="flex items-center justify-between">
				<div
					class="relative h-8 w-full rounded-2xl"
					:style="{
						backgroundColor: dataValue.backgroundBox,
						border: `4px solid ${dataValue.backgroundBox}`,
					}"
				>
					<div
						class="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 rounded-2xl transition-all duration-700"
						:style="{
							width: progressBarWidth,
							backgroundColor: dataValue.backgroundBar,
						}"
					></div>
				</div>

				<div class="w-11 ml-3 text-lg font-semibold">
					<p>{{ dataValue.percentCurrent }}%</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
	name: "ProgressBar",
	props: {
		data: {
			title: "",
			percentCurrent: 0,
			backgroundBox: "",
			backgroundBar: "",
		},
	},
	setup(props) {
		const dataValue = ref(props.data);
		const progressBarWidth = ref(0);

		onMounted(() => {
			setTimeout(() => {
				progressBarWidth.value = `${props.data.percentCurrent}%`;
			}, 250);
		});

		return {
			dataValue,
			progressBarWidth,
		};
	},
});
</script>
<style lang="scss" scoped></style>
