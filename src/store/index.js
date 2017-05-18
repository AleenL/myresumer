import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		selected:'profile',
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
				{name:'AL',content:'我的大学'},
				{name:'TX',content:'我的大学'}
				],
				contacts: [
				{contact:'AL',content:'我的大学'},
				{contact:'TX',content:'我的大学'}
				],
			}
		},
	mutations: {
		switchTab(state, payload){
			state.selected = payload
		}
	}
})


