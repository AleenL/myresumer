import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		count:0,
		selected:'profile',
			resume:{
				config:[
				{field:'profile',icon:'id'},
				{field:'work history',icon:'work'},
				{field:'education',icon:'book'},
				{field:'projects',icon:'heart'},
				{field:'awards',icon:'cup'},
				{field:'contacts',icon:'phone'},
				],
				profile:{
					name:'李子豪',
					city:'中国',
					title:'简'
				},
				'work history':[
				{company:'AL',content:'我的第一个工作'},
				{company:'TX',content:'我的第一个工作'}
				],
				education: [
				{school:'AL',content:'我的大学'},
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
		increment (state){
			state.count ++
		}
	}
})


