import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let GoogleBooksService = class GoogleBooksService {
    constructor(http) {
        this.http = http;
        this.API_PATH = 'https://www.googleapis.com/books/v1/volumes';
    }
    searchBooks(queryTitle) {
        return this.http
            .get(`${this.API_PATH}?orderBy=newest&q=${queryTitle}`)
            .pipe(map(books => books.items || []));
    }
    retrieveBook(volumeId) {
        return this.http.get(`${this.API_PATH}/${volumeId}`);
    }
};
GoogleBooksService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], GoogleBooksService);
export { GoogleBooksService };
//# sourceMappingURL=google-books.service.js.map