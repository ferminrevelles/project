export class MockData {
    static fakeIncreaseID(collection, object) {
        const _object = Object.assign({}, object);
        const uid = collection[collection.length - 1].uid + 1;
        _object['uid'] = uid;
        return _object;
    }
}
MockData.VOCATIONAL_INSTITUTION = [
    { uid: 1, name: 'IES Belén' },
    { uid: 2, name: 'IES Politécnico Jesús Marín' },
    { uid: 3, name: 'IES Rosaleda' }
];
MockData.VOCATIONAL_CATEGORY = [
    { uid: 1, name: 'Artes Gráficas' },
    { uid: 2, name: 'Informática y comunicaciones' },
    { uid: 3, name: 'Imagen y sonido' },
    { uid: 4, name: 'Comercio y Marketing' },
    { uid: 5, name: 'Administración y Gestión' }
];
MockData.VOCATIONAL_TITLE = [
    { uid: 1, name: 'Desarrollo de Aplicaciones Web' },
    { uid: 2, name: 'Administración de Sistemas Informáticos y Redes ' },
    { uid: 3, name: 'VideoDJ' },
    { uid: 4, name: 'Desarrollo Aplicaciones Multiplataforma' },
    { uid: 5, name: 'Gestión Comercial y Empresarial' },
    { uid: 6, name: 'Empresariales' }
];
MockData.VOCATIONAL_GRADES = [
    { uid: 1, name: 'FP Básica' },
    { uid: 2, name: 'Ciclo Formativo de Grado Medio' },
    { uid: 3, name: 'Ciclo Formativo de Grado Superior' }
];
MockData.TYPE_STUDIES = [
    { uid: 1, name: 'Ciclo formativo' },
    { uid: 2, name: 'Título Universitario' },
    { uid: 3, name: 'Otro título' }
];
MockData.LANGUAGES_LEVEL = [
    { uid: 1, name: 'A1' },
    { uid: 2, name: 'A2' },
    { uid: 3, name: 'B1' },
    { uid: 4, name: 'B2' },
    { uid: 5, name: 'C1' },
    { uid: 6, name: 'C2' }
];
MockData.LANGUAGES_NAME = [
    { uid: 1, name: 'Inglés' },
    { uid: 2, name: 'Francés' },
    { uid: 3, name: 'Alemán' },
    { uid: 4, name: 'Espaol' }
];
MockData.DOCUMENTS_TYPE = [
    { uid: 1, name: 'NIF' },
    { uid: 2, name: 'Pasaporte' },
    { uid: 3, name: 'Otro' }
];
MockData.MUNICIPES = [
    { uid: 1, name: 'Málaga' },
    { uid: 2, name: 'Fuengirola' },
    { uid: 3, name: 'Rincón de la victoria' },
    { uid: 4, name: 'Dos hermanas' },
    { uid: 5, name: 'Sevilla' },
    { uid: 6, name: 'Chiclana de la Frontera' },
    { uid: 7, name: 'Estepona' },
    { uid: 8, name: 'Campanillas (PTA)' },
    { uid: 9, name: 'Motril' },
    { uid: 10, name: 'Osuna' }
];
MockData.PROVINCES = [
    { uid: 1, name: 'Málaga' },
    { uid: 2, name: 'Sevilla' },
    { uid: 3, name: 'Huelva' },
    { uid: 4, name: 'Cádiz' },
    { uid: 5, name: 'Granada' }
];
//# sourceMappingURL=mock-data.js.map