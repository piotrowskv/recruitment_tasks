const URL = 'https://mocki.io/v1/350fe141-ddbf-4ec4-9dfa-48033d8ca7da'

export const getProducts = async () => {
    try {
        let response = await fetch(URL);
        if (response.ok) {
            let tmp = await response.json();
            return tmp;
        } else {
            throw {
                ok: false,
                status: 400,
                statusText: 'Internal Server Error',
            };
        }
    } catch (e) {
        throw e;
    }
};
export const getAllManufacturers = async () => {
    let all_manufacturers: any[] = []
    try {
        let response = await fetch(URL);
        if (response.ok) {
            let tmp = await response.json();
            for (var i = 0; i < tmp.products.length; ++i) {
                all_manufacturers.push(tmp.products[i].manufacturer)
            }
            var unique = all_manufacturers.filter((value, index, array) => array.indexOf(value) === index);
            return unique
        } else {
            throw {
                ok: false,
                status: 400,
                statusText: 'Internal Server Error',
            };
        }
    } catch (e) {
        throw e;
    }
}