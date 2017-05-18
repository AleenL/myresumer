<template>
	<div id="resumePreview">
		{{resume.profile.name}}
		{{resume.profile.city}}
		{{resume.profile.title}}
	</div>
</template>

<script>
export default {
	name: "ResumePreview",
	computed:{
		resume(){
			return this.$store.state.resume
		}
	}
}
</script>

<style>
	#resumePreview{
		background:#fff;
		box-shadow:0 1px 3px 0 rgba(0,0,0,.25)
	}
</style>