<script>
  let playerred = 0;
  let playerblue = 0;
  let turnblue = true;
  let cards = [];
  const images = [
    'DD_designs_21.jpg', 'DD_designs_21.jpg',
    'God Arvid.JPG', 'God Arvid.JPG',
    'God Axel.JPG', 'God Axel.JPG',
    'God Einar.JPG', 'God Einar.JPG',
    'God Ismael.JPG', 'God Ismael.JPG',
    'God Kasper.JPG', 'God Kasper.JPG'  
  ];

  function shufflearray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  shufflearray(images);
  
  for (let index = 0; index < 12; index++) {
    cards.push({
      id: Math.floor(index / 2),
      img: images[index], 
      flipped: false,  
      completed: false, 
    });
  }
  let flipcount = 0;
  let firstFlippedCard = null;

  function resetGame() {
  // Reset scores
  playerred = 0;
  playerblue = 0;
  
  // Reset turn
  turnblue = true;

  // Reset and shuffle cards
  shufflearray(images);
  cards = [];
  for (let index = 0; index < 12; index++) {
    cards.push({
      id: Math.floor(index / 2),
      img: images[index], 
      flipped: false,  
      completed: false, 
    });
  }
  document.body.style.backgroundColor = '';
  }

  function checkAllCardsMatched() {
    return cards.every(card => card.completed);
  }

  function celebrateWinner() {
    let winner = '';
    let backgroundColor = '';
    if (playerred > playerblue) {
      backgroundColor = 'red';
      winner = 'Red Player Wins!';
    } else if (playerblue > playerred) {
      backgroundColor = 'blue';
      winner = 'Blue Player Wins!';
    } else {
      backgroundColor = 'purple';
      winner = 'It\'s a Tie!';
    }

    document.body.style.backgroundColor = backgroundColor; // Change background color
    setTimeout(() =>{
      alert(winner); // Simple popup for the winner
  }, 500)
  }


  function flip(card) {
    if (!card.flipped && flipcount < 2) {
      card.flipped = true;
      flipcount++;

      if (flipcount === 1) {
        firstFlippedCard = card;
      } else if (flipcount === 2) {
        // Check for match
        if (card.img === firstFlippedCard.img) {
          // It's a match
          card.completed = true;
          firstFlippedCard.completed = true;
          if (turnblue) {
            playerblue++;
          } else {
            playerred++;
          }
        }
      
        // Reset logic
        setTimeout(() => {
          cards.forEach(c => {
            if (!c.completed) {
              c.flipped = false;
            }
          });
          flipcount = 0;
          firstFlippedCard = null;
          cards = cards;
          if (checkAllCardsMatched()) {
            celebrateWinner();    
            setTimeout(() =>{
            resetGame();
            }, 2000)    
            
          if (card.img === firstFlippedCard.img) {
          if (turnblue) {
            playerblue++;
          } else {
            playerred++;
          }
        }
          }
          turnblue = !turnblue;

        }, 1000);
      }
    } else if (!card.completed && flipcount >= 2) {
      alert("chill");
    }
    cards = cards;
  }
</script>

<main>

  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>

  <div class="box" id="red-box">
    <p>{playerred}</p>
  </div>
  
  <div class="box" id="blue-box">
    <p>{playerblue}</p>
  </div>

  <div class="box" id="green-box" style={turnblue?"right: 10px;":"left:10px"}></div>

  <div style="width:600px; height:800px; background-
  color:bisque;"></div>
</main>

<style>
  main {
    margin-top: 40px;
    margin-left: 540px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(5, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .front, .back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
  .box {
  width: 100px;
  height: 100px;
  position: fixed;
  text-align: center;
  font-size: 30px;
  }

  #green-box{
  bottom: 10px;
  z-index: 1;
  background-color: greenyellow;
  box-shadow: 0 0 20px 20px greenyellow;
  }

  #red-box {
  background-color: red;
  left: 0px;
  bottom: 0px;
  z-index: 2;
  }

  #blue-box {
  background-color: blue;
  right: 0px;
  bottom: 0px;  
  z-index: 2;
  }
</style>
