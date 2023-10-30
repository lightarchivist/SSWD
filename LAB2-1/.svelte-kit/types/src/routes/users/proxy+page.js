// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ fetch, params }) {	
    
    const users_URL = 'https://dummyjson.com/users';

    const response = await fetch (users_URL);

    if (response.ok) {

        const json = await response.json();

        return {

            users: json.users

        }
    }

    return {

        status: response.status,
        error: new Error(`could not log data`)
    }
}

