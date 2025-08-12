const StorageHandler = {
    saveStorageItems(key, items) {
        localStorage.setItem(key, JSON.stringify(items));
    },

    readStorageItems(key) {
        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        }
        catch {
            return [];
        }
    },
}

export default StorageHandler;