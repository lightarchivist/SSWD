// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ fetch, params }) {	
    
    const products_URL = 'https://dummyjson.com/products';

    const response = await fetch (products_URL);

    if (response.ok) {

        const json = await response.json();

        return {

            products: json.products

        }
    }

    return {

        status: response.status,
        error: new Error(`could not log data`)
    }
}

