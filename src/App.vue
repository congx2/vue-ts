<template>
	<div id="app">
		<p>123</p>
		<SimulationTable />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import SimulationTable from './components/SimulationTable.vue'

	@Component({
		name: 'App',
		components: {
			SimulationTable
		}
	})
	export default class App extends Vue {}
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
