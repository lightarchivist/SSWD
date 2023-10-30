// @ts-nocheck
import { error } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load({ params }) {
    if (params.name) {
        return {
            name: params.name
        }
    }
    throw error(404, 'Not found');
}