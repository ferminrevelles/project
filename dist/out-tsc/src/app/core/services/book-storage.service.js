import { __decorate, __param } from "tslib";
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
export function storageFactory() {
    return typeof window === undefined || typeof localStorage === undefined
        ? null
        : localStorage;
}
export const LOCAL_STORAGE_TOKEN = new InjectionToken('example-app-local-storage', { factory: storageFactory });
let BookStorageService = class BookStorageService {
    constructor(storage) {
        this.storage = storage;
        this.collectionKey = 'books-app';
    }
    supported() {
        return this.storage !== null
            ? of(true)
            : throwError('Local Storage Not Supported');
    }
    getCollection() {
        return this.supported().pipe(map(_ => this.storage.getItem(this.collectionKey)), map((value) => (value ? JSON.parse(value) : [])));
    }
    addToCollection(records) {
        return this.getCollection().pipe(map((value) => [...value, ...records]), tap((value) => this.storage.setItem(this.collectionKey, JSON.stringify(value))));
    }
    removeFromCollection(ids) {
        return this.getCollection().pipe(map((value) => value.filter(item => !ids.includes(item.id))), tap((value) => this.storage.setItem(this.collectionKey, JSON.stringify(value))));
    }
    deleteCollection() {
        return this.supported().pipe(tap(() => this.storage.removeItem(this.collectionKey)));
    }
};
BookStorageService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(LOCAL_STORAGE_TOKEN))
], BookStorageService);
export { BookStorageService };
//# sourceMappingURL=book-storage.service.js.map