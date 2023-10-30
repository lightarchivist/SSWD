// @ts-nocheck
import { error, resolvePath } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load ({params}) {
    let name ='';
    let repeat = 1;
    // Check for params
    if (params.name && params.repeat) {
        name = params.name;
        //parse the string an an Int
        repeat = parseInt(params.repeat)
    }
    //check repeat if number
    if (!isNaN(repeat))
    {
        return{
            name : name,
            repeat: repeat
        }
    }
    throw error(404, 'Not Found')
}