<template>
	<div class='SignInBox'>
		<form @submit.prevent = 'signIn'>
			<div class="row">
				<input type="text" placeholder="请输入用户名" v-model='formData.username' required>
			</div>
			<div class="row">
				<input type="password" placeholder="请输入密码" v-model='formData.password' required>
			</div>
			<div class="actions">
				<input type="submit" value='提交'>
				<span>{{errorMessage}}</span>
			</div>
		</form>
	</div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
	name: 'SignInForm',
	data(){
		return {
			formData: {
				username: '',
				password: ''
			},
			errorMessage: ''
		}
	},
	methods:{
		signIn(){
			let {username, password} = this.formData
			AV.User.logIn(username,password).then(()=>{
				this.$emit('success',getAVUser())
			},(error)=>{
				this.errorMessage = getErrorMessage(error)
			});
		}
	}
}
</script>

<style lang="scss">
	.SignInBox{
	width: 100%;
	.row div{background-color: #233}
	.row input{width:100%;height:3em; margin-bottom:.3em;border-radius: 3px;border: 0;}
	.actions input{width:100%;height:3em;border-radius: 3px;margin-top:.2em;font-size: 16px}
}
</style>