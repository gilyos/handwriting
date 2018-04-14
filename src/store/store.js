import Vue from 'vue';
import Vuex from 'vuex';

import questionsModule from './modules/questionsModule';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        questionsModule
    }
});