<template>
	<div class='SignUpBox'>
		<form @submit.prevent="signUp">
			<div class='row'>
				<input type="text" placeholder="请输入用户名" v-model='formData.username'required >
			</div>
			<div class='row'>
				<input type="password" placeholder="请输入密码" v-model='formData.password'required >
			</div>
			<div class='actions'>
				<input type="submit" value='提交'>
				 <span class="errorMessage">{{errorMessage}}</span>
			</div>
		</form>
	</div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
	name: 'SignUpForm',
	data() {
		return {
			formData:{
				username: '',
				password: ''
			},
			errorMessage: ''
		}
	},
	created(){

	},
	methods:{
		signUp(){
			let {username, password} = this.formData
			var user = new AV.User();
			user.setUsername(username);
			user.setPassword(password);
			user.signUp().then(() => {
				this.$emit('success',getAVUser())
			},(error) =>{
				this.errorMessage = getErrorMessage(error)
			});
		}
	}
}	
</script>

<style lang='scss'>
.SignUpBox{
	width: 100%;
	.row div{background-color: #233}
	.row input{width:100%;height:3em; margin-bottom:.3em;border-radius: 3px;border: 0;}
	.actions input{width:100%;height:3em;border-radius: 3px;margin-top:.2em;font-size: 16px}
}
</style>
