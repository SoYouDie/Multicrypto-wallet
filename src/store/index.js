import Vue from 'vue'
import Vuex from 'vuex'

import mainPage from './mainPage/mainPage'
import signIn from './signIn/signIn'
import signUp from './signUp/signUp'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		mainPage: {
			...mainPage
		},
		signIn: {
			...signIn
		},
		signUp: {
			...signUp
		}
	}
})
