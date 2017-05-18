import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		selected:'profile',
		user: {
			id:'',
			username:''
		},
			resume:{
				config:[
				{field:'profile',icon:'id'},
				{field:'workHistory',icon:'work'},
				{field:'education',icon:'book'},
				{field:'projects',icon:'heart'},
				{field:'awards',icon:'cup'},
				{field:'contacts',icon:'phone'},
				],
				profile:{
					name:'李xx',
					city:'重庆',
					title:'前端工程师',
					birthday:'1990-01-01'
				},
				'workHistory':[
				{company:'广达电脑制造公司',content:'我的第一个工作，没什么技术含量，就是给别人打下手'},
				{company:'肯德基快餐店',content:'后厨帮忙，一般就是在厨房炸薯条啦，炸鸡腿了，做汉堡的肉啦'}
				],
				education: [
				{school:'为难师范学院',content:'本科学历'},
				{school:'TX',content:'我的大学'}
				],
				projects: [
				{name:'AL',content:'我的大学'},
				{name:'TX',content:'我的大学'}
				],
				awards: [
				{name:'先进个人',content:'渭南师范学院先进个人'},
				{name:'TX',content:'我的大学'}
				],
				contacts: [
				{contact:'phone',content:'18512444432'},
				{contact:'QQ',content:'998778665'}
				],
			}
		},
	mutations: {
		initState(state, payload){
			Object.assign(state, payload)
		},
		switchTab(state, payload){
			state.selected = payload
			localStorage.setItem('state',JSON.stringify(state))
		},
		updateResume(state, {path, value}){
			objectPath.set(state.resume, path, value)
			localStorage.setItem('state',JSON.stringify(state))
		},
		setUser(state, payload){
			Object.assign(state.user, payload)
		},
		removeUser(state){
			state.user.id = ''
		}
	}
})


