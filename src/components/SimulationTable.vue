<template>
	<div class="simulation-table">
		<div class="panel">
			<div class="row">
				<div class="col col-icon">
					<div class="icon-box">
						<div class="icon">寄</div>
						<div class="icon"></div>
					</div>
				</div>
				<div class="col col-name">
					<div class="name">Tesla</div>
					<div class="tel ellipsis">12345678987</div>
				</div>
				<div class="col col-addr">
					<div class="summary ellipsis">广东省深圳市南山区</div>
					<div class="details ellipsis">广东省深圳市南山区天下街道桃源路96号</div>
				</div>
				<div class="col col-cost">
					<div class="title">预计总运费</div>
					<div>
						&yen;
						<span class="cost-val">8848.99</span>
					</div>
				</div>
			</div>
		</div>
		<div class="panel">
			<div class="row">
				<div class="col col-icon">
					<div class="icon-box">
						<div class="icon">寄</div>
						<div class="icon"></div>
					</div>
				</div>
				<div class="col col-name">
					<div class="name">Tesla</div>
					<div class="tel ellipsis">12345678987</div>
				</div>
				<div class="col col-addr">
					<div class="summary ellipsis">广东省深圳市南山区</div>
					<div class="details ellipsis">广东省深圳市南山区天下街道桃源路96号</div>
				</div>
				<div class="col col-cost">
					<div class="title">预计总运费</div>
					<div>
						&yen;
						<span class="cost-val">8848.99</span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col col-icon"></div>
				<div class="col mg0">
					<div class="summary ellipsis">运单号：xxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
					<div class="row inner-row">
						<div class="col">
							<div class="icon-box">
								<div class="icon col-title">托寄物品信息</div>
								<div class="icon col-value">48码大脚人字拖鞋</div>
							</div>
						</div>
						<div class="col">
							<div class="name col-title">付款方式</div>
							<div class="tel ellipsis col-value">寄付现结</div>
						</div>
						<div class="col">
							<div class="summary ellipsis col-title">保价</div>
							<div class="details ellipsis col-value">未保价</div>
						</div>
						<div class="col">
							<div class="title col-title">增值服务</div>
							<div class="col-value">无</div>
						</div>
						<div class="col col-edit">编辑</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Vue, Component } from 'vue-property-decorator'

	@Component({
		name: 'SimulationTable'
	})
	export default class SimulationTable extends Vue {
		tesla = 'nikola'
	}
</script>

<style lang="stylus" scoped>
	 .simulation-table
	   position relative
	   width 80%
	   margin 0 auto

	 .ellipsis
	   width 100%
	   white-space nowrap
	   text-overflow ellipsis
	   overflow hidden

	 .mg0
	   margin 0

	 .panel
	   position relative
	   text-align left
	   box-sizing border-box
	   padding 25px
	   border-bottom 1px solid #f1f1f1

	.row
	  position relative
	  display flex
	  justify-content flex-start
	  align-items center

	.col
	  flex 1 1 auto

	 .inner-row
	   margin-top 15px
	   flex-wrap nowrap
	   justify-content flex-start
	   align-items flex-start

	  .col-edit
	    width 20%
	    text-align right
	    align-self flex-end

	   .col-title
	     font-size 12px
	     color #999
	     line-height 16px

	   .col-value
	     font-size 14px
	     color #333

	.col-icon
	.col-name
	.col-cost
	  white-space nowrap
	  width 20%
	  white-space nowrap
	  text-overflow ellipsis
	  overflow hidden

	.col-icon
	  max-width 12%

	.col-name
	  max-width 26%

	.col-cost
	  max-width 20%
	  text-align right

	 .cost-val
	   font-size 24px
	   color red

	.col-addr
	  flex 1 1 auto
	  min-width 40%
	  max-width 62%
	  margin 0 20px
	  &.mg0
	    margin 0
</style>
