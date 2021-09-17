<template>
	<div id="app">
		<p>123</p>
		<div>
			<checkbox
				size="30"
				:checked="checkedAll"
				:indeterminate="indeterminateAll"
				@change="allChange"
			>
				All
			</checkbox>
		</div>
		<div>
			<checkbox
				size="30"
				v-for="item in items"
				:key="item.id"
				:checked="item.checked"
				@change="itemChange($event, item)"
			>
				{{ item.label }}
			</checkbox>
		</div>
		<SimulationTable />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import SimulationTable from './components/SimulationTable.vue'
	import Checkbox from './components/Checkbox.vue'

	@Component({
		name: 'App',
		components: {
			SimulationTable,
			Checkbox
		}
	})
	export default class App extends Vue {
		checkedAll = false
		checkedSet = new Set()
		setSize = 0
		items: any[] = [
			{ id: 1, checked: false, label: 'A' },
			{ id: 2, checked: false, label: 'B' },
			{ id: 3, checked: false, label: 'C' }
		]

		get indeterminateAll(): boolean {
			return this.setSize > 0
		}

		itemChange(e: MouseEvent, item: any): void {
			const checked = (e.target as HTMLElement).checked
			checked ? this.checkedSet.add(item.id) : this.checkedSet.delete(item.id)
			item.checked = checked
			this.setSize = this.checkedSet.size
			if (!checked) {
				this.checkedAll = false
			}
			if (this.setSize === this.items.length) {
				this.checkedAll = true
			}
		}

		allChange(e: MouseEvent): void {
			const checked = (e.target as HTMLElement).checked
			this.checkedAll = checked
			this.items.forEach(item => this.itemChange(e, item))
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
