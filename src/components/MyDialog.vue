<template>
	<div class='DialogWrapper' v-show='visible'>
		<div class='dialog'>
			<header>{{title}}
				<span class='close' @click='close'>X</span>
			</header>
			<main>
				<slot></slot>
			</main>
		</div>
	</div>
</template>


<script>
export default {
	name: 'MyDialog',
	props: ['title','visible'],
	methods: {
		close(){
			this.$emit('close')
		}
	}
}
</script>

<style scoped lang='scss'>
	.DialogWrapper{
		position: fixed;
		background: hsla(0,0%,0%,.25);
		top: 0;left: 0;bottom: 0;right: 0;margin: 0;
		display: flex;align-items: center;
		justify-content: center;
	}
	.dialog{
		background: #233;min-height: 12em;min-width: 15em;
		> header{padding: 16px;color:#fff;display: flex;justify-content: space-between;}
		> main{padding: 16px;}
	}
</style>