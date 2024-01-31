import { browser } from "$app/environment";
import { writable } from "svelte/store";

const story_id = browser ? window?.localStorage.getItem('story_id') ?? "1" : "1";
export const story_id_store = writable(story_id);

// Skapa en writable store för chat
export const chatStore = writable(browser ? JSON.parse(window?.localStorage.getItem('chat') || '[]'):"[]");

if (browser) {
    story_id_store.subscribe((value) => {
        window?.localStorage.setItem('story_id', value);
    });

    // Uppdatera localStorage när chatStore ändras
    chatStore.subscribe((chat) => {
        window?.localStorage.setItem('chat', JSON.stringify(chat));
    });
}