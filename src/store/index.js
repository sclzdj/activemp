import Vuex from '@wepy/x';
import wxUtil from '../util/wx.js';

export default new Vuex.Store({
    state: {
        slides: [],
        homeEvents: [],
        events: [],
        event: {},
        me: {}
    },
    mutations: {
        setSlides: (state, param) => {
            state.slides = param.slides;
        },
        getSlides: (state, param) => {
            state.slides = param.slides;
        },
        setHomeEvents: (state, param) => {
            state.homeEvents = param.homeEvents;
        },
        getHomeEvents: (state, param) => {
            state.homeEvents = param.homeEvents;
        },
        setEvents: (state, param) => {
            state.events = param.events;
        },
        setAppendEvents: (state, param) => {
            param.events = param.events.filter(item => !state.events.some(ele => ele.id === item.id));//删除id重复的数据
            state.events = state.events.concat(param.events);
        },
        getEvents: (state, param) => {
            state.events = param.events;
        },
        setEvent: (state, param) => {
            state.event = param.event;
        },
        getEvent: (state, param) => {
            state.event = param.event;
        },
        setMe: (state, param) => {
            state.me = param.me;
        },
        getMe: (state, param) => {
            state.me = param.me;
        }
    },
    actions: {
        getSlides: async ({commit}, {limit}) => {
            let response = await wxUtil.wxGetRequest('/slide/getData', {limit});
            if (response) {
                commit('setSlides', {slides: response});
            }
        },
        getHomeEvents: async ({commit}, {limit}) => {
            let response = await wxUtil.wxGetRequest('/event/getHomeData', {limit});
            if (response) {
                commit('setHomeEvents', {homeEvents: response});
            }
        },
        getEvents: async ({commit}, {type, keywords, page, pageSize}) => {
            let response = await wxUtil.wxGetRequest('/event/getPageData', {type, keywords, page, pageSize});
            if (response) {
                commit('setEvents', {events: response});
            }
        },
        getAppendEvents: async ({commit}, {type, keywords, page, pageSize}) => {
            let response = await wxUtil.wxGetRequest('/event/getPageData', {
                type,
                keywords,
                page,
                pageSize
            }, {}, 'json', 'text', false);
            if (response) {
                commit('setAppendEvents', {events: response});
                return response.length;
            }
            return 0;
        },
        getEvent: async ({commit}, {id}) => {
            let response = await wxUtil.wxGetRequest('/event/getOne', {id});
            if (response) {
                commit('setEvent', {event: response});
                return response;
            }
            return {};
        },
        getMe: async ({commit}) => {
            let response = await wxUtil.wxGetAuthRequest('/me');
            if (response) {
                commit('setMe', {me: response});
                return response;
            }
            return {};
        }
    }
})
