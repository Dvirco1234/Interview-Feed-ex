import { storageService } from './async-storage.service'
import { utilService } from './util-service.js'

export const itemService = {
    query,
    getById,
    getEmptyItem,
    save,
    remove,
}

const ITEMS_KEY = 'itemsDB'

async function query(filterBy = '') {
    try {
        let items = await storageService.query(ITEMS_KEY)
        if (!items || !items.length) {
            items = _getDemoItems()
            localStorage.setItem(ITEMS_KEY, JSON.stringify(items))
        }
        return items
    } catch (err) {
        console.error('service couldnt get items')
        throw (err)
    }
}

async function getById(itemId) {
    try {
        const item = await storageService.get(ITEMS_KEY, itemId)
        return item
    } catch (err) {
        console.error('service couldnt get item')
        throw (err)
    }
}

async function remove(itemId) {
    try {
        return storageService.remove(ITEMS_KEY, itemId)
    } catch (err) {
        console.error('service couldnt remove item')
        throw (err)
    }
}

async function save(item) {
    try {
        const savedItem = await item._id ? storageService.put(ITEMS_KEY, item) : storageService.post(ITEMS_KEY, item)
        return savedItem
    } catch (err) {
        console.error('service couldnt save item')
        throw (err)
    }
}

function getEmptyItem() {
    return {}
}