import { itemService } from '../../services/item-service'
import { utilService } from '../../services/util-service.js'

export default {
    state: {
        items: [],
    },
    getters: {
        items({ items }) {
            return items
        },
    },
    mutations: {
        setItems(state, { items }) {
            state.items = items
        },
        removeUser(state, { userId }) {
            state.users = state.users.filter(user => user._id !== userId)
        },
        setUserScore(state, { score }) {
            state.loggedinUser.score = score
        },
    },
    actions: {
        async loadItems({ commit }) {
            try {
                const items = await itemService.getItems()
                commit({ type: 'setItems', items })
            } catch (err) {
                console.log('itemStore: Error in loadItems', err)
                throw err
            }
        },
    },
}
