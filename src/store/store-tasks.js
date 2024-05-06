import Vue from 'vue';

const state = {
    tasks: {
        'ID1': {
            name: 'Go to Shop',
            completed: false,
            dueDate: '2024/05/15',
            dueTime: '18:30'
        },
        'ID2': {
            name: 'Get bananas',
            completed: false,
            dueDate: '2024/06/05',
            dueTime: '14:00'
        },
        'ID3': {
            name: 'Get apples',
            completed: false,
            dueDate: '2024/05/14',
            dueTime: '16:10'
        },
    }
};

const mutations = {
    updateTask(state, payload) {
        console.log('Updating task with ID:', payload.id);
        Object.assign(state.tasks[payload.id], payload.updates);
    },
    deleteTask(state, id) {
        console.log('Deleting task with ID:', id);
        Vue.delete(state.tasks, id);
    }
};

const actions = {
    updateTask({ commit }, payload) {
        console.log('updateTask action');
        commit('updateTask', payload);
    },
    deleteTask({ commit }, id) {
        console.log('deleteTask action');
        commit('deleteTask', id);
    }
};

const getters = {
    tasks: (state) => {
        return state.tasks;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
