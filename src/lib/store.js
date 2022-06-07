import { writable } from "svelte/store";
export default writable(0);

export const darkmode = writable(true);
export const userLoggedIn = writable(true);
export const loggedInUserObj = writable(true);
