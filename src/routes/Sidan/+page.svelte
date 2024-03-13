<script>
    let loggainknapp = "Logga In";
    let intervalID;
    let email;
    let password;

    function youvefoundit() {
        alert("Bra jobbat, du är nu inloggad");
        loggainknapp = "Logga In"; 
        clearInterval(intervalID);
        const realbutton = document.getElementById('realbutton');
        password = "";
        email = "";
    }

    function moveAndShowButton(realbutton) {
        // Beräkna en slumpmässig position inom fönstret
        const maxX = window.innerWidth - realbutton.offsetWidth;
        const maxY = window.innerHeight - realbutton.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Flytta knappen till den slumpmässiga positionen
        realbutton.style.left = `${randomX}px`;
        realbutton.style.top = `${randomY}px`;

        realbutton.style.opacity = 1;
        setTimeout(() => realbutton.style.opacity = 0, 200);
    }
</script>
<main>
    <h1>Logga in (om du kan)</h1>
    
    <div>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" bind:value={email}/>

        <label for="password">Lösenord:</label>
        <input id="password" type="password" name="password" bind:value={password}/>

        <button type="submit" on:click={() => {
            loggainknapp = "Försöker logga in dig...";
            intervalID = 1;
            setTimeout(() => {
             loggainknapp = "Något gick fel, du klickade nog på fel knapp"
             intervalID = setInterval(() => {
                moveAndShowButton(document.getElementById('realbutton'));
             }, 500);
            }, 10000);
          }}
          >{loggainknapp}</button>

          <button id="realbutton" on:click={()=>{youvefoundit();}}>Logga In</button>
    </div>
</main>

<style> 
    div {
        display: grid;
        width: 60vw;
        max-width: 550px;
        margin: auto;
        gap: 20px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.8);
    }

    input, button {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }

    main {
        background-image: url('https://img.freepik.com/free-photo/organized-desk-with-copy-space_23-2148219270.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #realbutton {
        position: absolute;
        opacity: 0;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
    }
</style>