<script>
    let currentIndex = 0;
    const columns = 9;
    let username = '';
    let password = '';
    let typing = true;
    let movementPoints = 0;
    let numberofrolls = 10;
    $: movementDisplay = `Movement Points: ${movementPoints}`;
    $: rollsdisplay = `Number of rolls: ${numberofrolls}`;


    const keyboardCharsLower = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "a", "s", "d", "f", "g", "h", "j", "k", "l",
        "z", "x", "c", "v", "b", "n", "m", 
    ];

    const keyboardCharsUpper = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M",
    ];

    let keyboardChars = keyboardCharsLower; 
    let shiftActive = false;

    function rollDice() {
        return Math.floor(Math.random() * 20) + 1;
    }

    function onKeyDown(e) {
        if ([87, 83, 65, 68, 13].includes(e.keyCode) && movementPoints <= 0) {
            return; 
        }
        switch (e.keyCode) {
            case 87: // Up (W)
                if (currentIndex - columns >= 0) {
                    currentIndex -= columns;
                    movementPoints--;
                }
                break;
            case 83: // Down (S)
                if (currentIndex + columns < keyboardChars.length) {
                    currentIndex += columns;
                    movementPoints--;
                }
                break;
            case 65: // Left (A)
                if (currentIndex % columns > 0) {
                    currentIndex -= 1;
                    movementPoints--;
                }
                break;
            case 68: // Right (D)
                if (currentIndex % columns < columns - 1 && currentIndex + 1 < keyboardChars.length) {
                    currentIndex += 1;
                    movementPoints--;
                }
                break;
            case 13: // Enter
                movementPoints--;
                if (typing) {
                    username += keyboardChars[currentIndex];
                } else {
                    password += keyboardChars[currentIndex];
                }
                break;
            case 16: // Shift
                shiftActive = !shiftActive;
                keyboardChars = shiftActive ? keyboardCharsUpper : keyboardCharsLower;
                break;
            case 32: // Space
                typing = !typing;
                break;
            case 82: // R for roll
                movementPoints += rollDice();
                numberofrolls -= 1;
                if (numberofrolls < 0){
                    alert("No more rolls, start over");
                    username = '';
                    password = '';
                    numberofrolls = 10;
                    movementPoints = 0;
                }
                break;
        }
    }
</script>

<main>
    <div class="grid">
        {#each keyboardChars as char, index}
            <div class="key {index === currentIndex ? 'active' : ''}">{char}</div>
        {/each}
    </div>
    <div>{movementDisplay}</div>
    <div>{rollsdisplay}</div>
    <h5>Space = change typing row <br /> R = roll dice <br /> WASD = move <br /> Enter = type grey square <br /> Shift = change cases</h5>
<form>
<label for="email">Username:</label>
<input id="email" type="email" name="email" bind:value={username}/>

<label for="password">Password:</label>
<input id="password" type="password" name="password" bind:value={password}/>
</form>
</main>

<style>
    main {display:grid;
        background-image: url('https://i.pinimg.com/originals/62/d3/ce/62d3ce2e16000586faf6d7cea85dd5c4.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 719px;
      }

    form{display: grid;
    width: 60vw;
    max-width: 100px;
    min-width: 300px;
    margin: auto;
    gap: 10px;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    }   

    .grid {
        display: grid;
        grid-template-columns: repeat(9, 50px);
        grid-template-rows: repeat(auto-fill, 50px);
        gap: 10px;
    }

    .key {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        background-color: rgb(107, 125, 183);
    }

    .active {
        background-color: rgb(245, 4, 4); 
    }
</style>

<svelte:window on:keydown|preventDefault={onKeyDown} />