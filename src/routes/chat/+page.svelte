<script>
  import { enhance } from "$app/forms";
  import ElizaBot from "elizabot";
  import "@picocss/pico";
  import { chatStore } from '$lib/stores.js'; // Lägg till import för chatStore

  let eliza = new ElizaBot();

  let chat;
  chatStore.subscribe(value => { // Använd chatStore för att hantera chatten
    chat = value;
  });

  async function write(message) {
    chat = [...chat, { user: "user", text: message }];
    let reply = eliza.transform(message);
    chat = [...chat, { user: "eliza", text: reply }];
    chatStore.set(chat); // Uppdatera chatStore

    var element = document.getElementById("visible");
    element.style.display= "flex";
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none";
  }

  function clearChat() {
    chat = [];
    chatStore.set(chat);
  }
</script>

<svelte:head>
  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
  {#each chat as message}
    <article class="{message.user === 'user' ? 'user-message' : 'eliza-message'}">
      <span>{message.user === 'user' ? 'You: ' : 'Eliza: '}{message.text}</span>
    </article>
  {/each}
  <article id="visible">
    <span class = "circle"></span>
    <span class = "circle"></span>
    <span class = "circle"></span>
  </article>
</div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);
      form.reset(); // TODO: reset the form
    }}
  >
    <input type="text" name="text" />
    <button type="submit">Skicka</button>
  </form>
  <button on:click={clearChat}>Rensa chatten</button>
</div>

<style>
  #visible{
    width: 100px;
    height: 60px;
    padding: 0;
    display:none;
    justify-content: center;
    align-items: center;
  }

  @keyframes typing {
    0%{transform:scale(1);}
    50%{transform:scale(1.4);}
    100%{transform:scale(1);}
  }

  .circle{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    animation-name:typing;
    animation-duration: 1000ms;
    animation-timing-function:ease;
    animation-iteration-count: infinite;
  }

  /* CSS-stilar för .circle med index 1 (den första cirkeln) */
  .circle:nth-child(1) {
  animation-delay: 0ms; /* Ingen fördröjning */
  }
  /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
  .circle:nth-child(2) {
  animation-delay: 333ms; /* Starta animationen efter 333 millisekunder
  (ms) */
  }
  /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
  .circle:nth-child(3) {
  animation-delay: 666ms; /* Starta animationen efter 666 ms */
  }
</style>