<template lang="html">
	<div class="content-table">
		<table class="table-auto w-full">
			<thead
				:style="{
					backgroundColor: `${dataValue.backgroundHeader}`,
					color: `${dataValue.theadTitleColor}`,
				}"
			>
				<tr class="text-center">
					<th
						v-for="(item, index) in dataValue.headContent"
						:key="index"
						class="p-1"
					>
						{{ item }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(item, index) in dataValue.dataContent"
					:key="index"
					class="text-center"
				>
					<td
						v-for="(value, indexValue) in dataValue.headContent"
						:key="indexValue"
						class="p-1"
						:style="{
							border: `1px solid ${dataValue.borderColor}`,
							color: `${dataValue.tbodyTitleColor}`,
						}"
					>
						{{ item?.[value] }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
	name: "Table",
	props: {
		data: {
			headContent: [],
			dataContent: [],
			backgroundHeader: "",
			borderColor: "",
			theadTitleColor: "",
			tbodyTitleColor: "",
		},
	},
	setup(props) {
		const dataValue = ref(props.data);
		return {
			dataValue,
		};
	},
});
</script>
<style lang="scss" scoped>
.content-table {
	table {
		thead {
			tr {
				th:first-child {
					width: 40px;
				}
			}
		}
	}
}
</style>
