/* import * as moment from 'moment'; */
export class AppSettings {
    static getAvatar(user, size = 'sm') {
        if (!user || !user.avatar_hash) {
            return this.IMAGES.UNKNOWN_FACE;
        }
        const [hash, extension] = user.avatar_hash.split('.');
        return `${this.STATIC_AVATAR_ENDPOINT}${user.uid}/${hash}${size}.${extension}`;
    }
}
AppSettings.APP_NAME = 'PoliJob';
AppSettings.APP_LOCALSTORAGE_TOKEN = 'PoliJob_Token';
AppSettings.APP_VERSION = '0.1.0';
AppSettings.API_ENDPOINT = 'api/';
AppSettings.STATIC_ENDPOINT = AppSettings.API_ENDPOINT + 'static/';
AppSettings.STATIC_AVATAR_ENDPOINT = AppSettings.STATIC_ENDPOINT + 'images/avatar/';
AppSettings.API_ENDPOINT_APP = AppSettings.API_ENDPOINT + 'app/';
AppSettings.API_ENDPOINT_USER = AppSettings.API_ENDPOINT + 'user';
AppSettings.API_ENDPOINT_USERS = AppSettings.API_ENDPOINT + 'users';
AppSettings.API_ENDPOINT_OFFERS = AppSettings.API_ENDPOINT + 'offers';
AppSettings.API_ENDPOINT_USER_ME = AppSettings.API_ENDPOINT + 'user-me';
AppSettings.API_ENDPOINT_USER_CREATE = AppSettings.API_ENDPOINT_USER + '/create';
AppSettings.API_ENDPOINT_CONFIRM_USER = AppSettings.API_ENDPOINT_USER + '/confirm-user';
AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/remember-password';
AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/request-remember-password';
AppSettings.API_ENDPOINT_USER_REQUEST_USER_AVATAR = AppSettings.API_ENDPOINT_USER + '/request-avatar-user';
AppSettings.API_ENDPOINT_USER_UPLOAD_AVATAR = AppSettings.API_ENDPOINT_USER + '/upload-avatar';
AppSettings.API_ENDPOINT_USER_SENDMAIL = AppSettings.API_ENDPOINT_USER + '/sendmail';
AppSettings.API_ENDPOINT_AUTH = AppSettings.API_ENDPOINT + 'auth/';
AppSettings.API_ENDPOINT_AUTH_LOCAL = AppSettings.API_ENDPOINT + 'auth/local/';
AppSettings.APP_QUILL_EDITOR_CONFIGURATION = {
    toolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ direction: 'rtl' }],
        ['clean'],
        ['link']
    ]
};
AppSettings.APP_DEFAULT_MOMENT_LOCALE = 'es';
AppSettings.GUESS_ROL = {
    value: 'guess',
    text: 'settings.rol.GUESS'
};
AppSettings.STUDENT_ROL = {
    value: 'student',
    text: 'settings.rol.STUDENT'
};
AppSettings.ADMINISTRATOR_ROL = {
    value: 'admin',
    text: 'settings.rol.ADMINISTRATOR'
};
AppSettings.COMPANY_ROL = {
    value: 'company',
    text: 'settings.rol.COMPANY'
};
AppSettings.ROLES = [
    AppSettings.GUESS_ROL,
    AppSettings.STUDENT_ROL,
    AppSettings.COMPANY_ROL,
    AppSettings.ADMINISTRATOR_ROL
];
AppSettings.USER_STATUS_PENDING = {
    value: 'pending',
    text: 'settings.status.PENDING'
};
AppSettings.USER_STATUS_ACTIVE = {
    value: 'active',
    text: 'settings.status.ACTIVE'
};
AppSettings.USER_STATUS_INACTIVE = {
    value: 'inactive',
    text: 'settings.status.INACTIVE'
};
AppSettings.USER_STATUS = [
    AppSettings.USER_STATUS_PENDING,
    AppSettings.USER_STATUS_ACTIVE,
    AppSettings.USER_STATUS_INACTIVE
];
AppSettings.FORMAT_DATE = 'MM/DD/YYYY';
AppSettings.IMAGES = {
    UNKNOWN_IMAGE: 'assets/images/image-not-found.png',
    UNKNOWN_FACE: 'assets/images/face-unknown.png',
    UNKNOWN_TEAM: 'assets/images/image-not-found.png'
};
AppSettings.NOTIFICATIONS = {
    DEFAULT_TIME: 2000
};
//# sourceMappingURL=app.settings.js.map