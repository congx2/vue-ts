<template>
	<div class="checkbox">
		<label class="label" :style="css">
			<input
				class="input"
				type="checkbox"
				:disabled="disable"
				:checked="checkedStatus"
				@change="onChange"
			/>
			<svg
				v-if="checkedStatus"
				t="1631889255690"
				class="icon"
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				p-id="18824"
				width="128"
				height="128"
			>
				<path
					d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474c-6.1-7.7-15.3-12.2-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1 0.4-12.8-6.3-12.8z"
					p-id="18825"
					:fill="svgColor"
				/>
			</svg>
			<svg
				v-else-if="indeterminateStatus"
				t="1631891330474"
				class="icon"
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				p-id="38373"
				width="32"
				height="32"
			>
				<path
					d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
					p-id="38374"
					:fill="svgColor"
				></path>
			</svg>
			<span class="txt" :style="{ paddingLeft: txtPaddingLeft }"><slot></slot></span>
		</label>
	</div>
</template>

<script lang="ts">
	import { Vue, Component, Prop, PropSync } from 'vue-property-decorator'

	type ModeType = 'fill' | 'stroke'

	@Component({
		name: 'Checkbox'
	})
	export default class Checkbox extends Vue {
		@PropSync('checked', { type: Boolean, default: false })
		checkedStatus!: boolean

		@PropSync('indeterminate', { type: Boolean, default: false })
		indeterminateStatus!: boolean

		@Prop({ type: Boolean, default: false })
		disable: boolean

		@Prop({ type: String, default: 'fill' })
		mode: ModeType

		@Prop({ type: String, default: '#000' })
		color: string

		@Prop({ type: String, default: '#999' })
		disableColor: string

		@Prop({ type: [String, Number], default: 16 })
		size: string | number

		@Prop({ type: [String, Number], default: 'auto' })
		border: string | number

		@Prop({ type: [String, Number], default: 'auto' })
		radius: string | number

		get isFill(): boolean {
			return this.mode.toLowerCase() !== 'stroke'
		}

		get svgColor(): string {
			const { isFill, disable, color, disableColor } = this
			return isFill ? '#ffffff' : disable ? disableColor : color
		}

		get txtPaddingLeft(): string {
			return this.boxSize
		}

		get boxSize(): string {
			return this.getValueWithUnit(this.size, 16)
		}

		get borderWidth(): string {
			return this.getAutoValue(this.border, 1, 1 / 15)
		}

		get borderRadius(): string {
			// const reg = /([a-z]+)$/
			// const match: string[] | null = reg.exec(this.boxSize)
			// const unit = match ? match[1] : 'px'
			// const defaultRatio = 1 / 4
			// const ratio = unit === '%' ? parseFloat(this.radius) / 100 : defaultRatio
			return this.getAutoValue(this.radius, 4, 1 / 4)
		}

		get css() {
			const { disable, color, disableColor } = this
			const size = this.getValueWithUnit(this.size, 16)
			const css = {
				width: size,
				height: size,
				fontSize: this.boxSize,
				borderWidth: this.borderWidth,
				borderRadius: this.borderRadius,
				borderColor: disable ? disableColor : color
			}
			if (this.isFill && (this.checkedStatus || this.indeterminateStatus)) {
				;(css as any).backgroundColor = disable ? disableColor : color
			}
			return css
		}

		onChange(e: InputEvent): void {
			const checked = (e.target as HTMLInputElement).checked
			this.checkedStatus = checked
			this.indeterminateStatus = false
			this.$emit(e.type, e)
		}

		getValueWithUnit(val: number | string, defaultValue = 16): string {
			if (typeof val === 'number') {
				return (Number.isNaN(val) ? defaultValue : val) + 'px'
			}
			const valWithUnitReg = /^\d+(?:\.\d+)?([a-z]+)$/i
			const match: string[] | null = valWithUnitReg.exec(val)
			val = parseFloat(val)
			val = Number.isNaN(val) ? defaultValue : val
			return val + (match ? match[1] : 'px')
		}

		getAutoValue(val: number | string, defaultValue: number, ratio: number): string {
			if (typeof val === 'string' && /^\d+(?:\.\d+)?%$/.test(val)) {
				const p = parseFloat(val)
				if (Number.isNaN(p)) {
					return '0'
				}
				return p < 0 ? '0' : p > 100 ? '100%' : `${p}%`
			}
			if (val.toString().toLowerCase() !== 'auto') {
				return this.getValueWithUnit(val, defaultValue)
			}
			const reg = /([a-z]+)$/
			const match: string[] | null = reg.exec(this.boxSize)
			const unit = match ? match[1] : 'px'
			const size = parseFloat(this.boxSize)
			const value = ratio * size
			return (value < 0 ? 0 : value.toFixed(2)) + unit
		}
	}
</script>

<style lang="stylus" scoped>
	.label
	  position relative
	  display inline-flex
	  justify-content flex-start
	  align-items center
	  box-sizing border-box
	  width 16px
	  height 16px
	  border-radius 4px
	  border 1px solid #000
	  cursor pointer
	  user-select none

	.input
	   position absolute
	   z-index 0
	   width 0
	   height 0
	   opacity 0
	   visibility hidden
	   overflow hidden

	 .icon
	   position absolute
	   top 0
	   left 0
	   width 100%
	   height 100%

	 .txt
	   display inline-block
	   padding-left 16px
</style>
