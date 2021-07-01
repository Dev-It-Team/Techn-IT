import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios';
import { User } from '@/interfaces/IUser';

const getDefaultState = () => {
    return {
        token: '',
        user: {} as User
    };
};

export default createStore({
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        isLoggedIn: state => {
            return state.token;
        },
        getUser: state => {
            return state.user;
        }
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        setToken: ({ commit, dispatch }, token: string) => {
            commit('SET_TOKEN', token);
            // set auth header
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        setUserInfo: ({ commit, dispatch }, user: User) => {
            commit('SET_USER', user);
        },
        logout: ({ commit }) => {
            commit('RESET', '');
        }
    },
    modules: {
    }
})
