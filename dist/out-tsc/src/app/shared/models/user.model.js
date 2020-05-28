export function createNewUser(user) {
    return Object.assign(Object.assign({}, user), { name: '', surname: '', id: -1, email: '', roles: [''], 
        /*  avatar_hash: this.avatar_hash || null, */
        experiencies: [], studies: [], languages: [], offers: [] });
}
//# sourceMappingURL=user.model.js.map