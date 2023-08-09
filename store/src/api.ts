const URL = 'https://mocki.io/v1/350fe141-ddbf-4ec4-9dfa-48033d8ca7da'

export const getProducts = async () => {
    try {
        let response = await fetch(URL);
        if (response.ok) {
            let tmp = await response.json();
            console.log(tmp);
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