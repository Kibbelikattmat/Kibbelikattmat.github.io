<script>
  let colors = [
        { id: 'blue', url: "https://static-cdn.sr.se/images/411/e8bd1706-e4d8-40dc-a720-029374d11386.jpg" },
        { id: 'red', url: "https://shop12051.sfstatic.io/upload_dir/shop/_thumbs/729_vinylgulv-uni-roed.w913.h683.jpg" },
        { id: 'purple', url: "https://atlasscreen.se/wp-content/uploads/2017/07/admin-ajax-1_2-8.jpg" },
        { id: 'green', url: "https://nfportalen.nordfarm.se/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/d/0/d04016.jpg" },
        { id: 'yellow', url: "https://static-cdn.sr.se/images/2794/3653700_1024_576.jpg?preset=2048x1152" },
        { id: 'orange', url: "https://www.farg.nu/wp-content/uploads/2016/10/16202_Graphic_Opak_1kg_Orange.png" },
        { id: 'black', url: "https://d3dnwnveix5428.cloudfront.net/eyJrZXkiOiJzdG9yZV84NmFmYjlkNS0yMjY4LTRmOGItYTc2Mi1iZDRlY2I1ZGZkNzlcL2ltYWdlc1wvZ2NMNTB4RHA5bHpKWDhaMTY2MzM0NzAwMC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDAsImhlaWdodCI6ODAwLCJmaXQiOiJpbnNpZGUifX19" },
        { id: 'white', url: "https://www.svenskakakel.se/images/made/images/pim_import/lowres_image_article/2010-8-001_web_1200_606.jpg" },
        { id: 'pink', url: "https://static-cdn.sr.se/images/2794/02a3460b-fdf0-4ab0-86c6-dd4e8317338a.jpg?preset=2048x1152" }
    ];

  let korgen = [];
  let korgmängd = 0;
  let xPos = 82;
  let yPos = 7;
  let RedX = 88.3;
  let RedY = 5;
  let redbutton;

  function Redbuttonshow() {
        redbutton.style.opacity = 1;
        setTimeout(() => redbutton.style.opacity = 0, 500);
    }

    function buyColor(colorId) {
        Redbuttonshow();

        const colorIndex = colors.findIndex(color => color.id === colorId);
        if (colorIndex !== -1) {
            colors[colorIndex].köpt = true; 
            korgen.push(colors[colorIndex].id); 
            korgmängd += 1;
        }
    } 

    function checkout() {
        if (korgen.length === 0) {
            alert("Your shopping cart is empty");
            return;
        }

        let köptaFärger = korgen.join(", ");

        alert(`You have succesfully bought these colors: ${köptaFärger}`);
        korgen = [];
        korgmängd = 0;
        let container = document.getElementsByClassName("cont")
    }
</script>


<main class="cont">
    {#each colors as color}
        <button class="shopitem"  on:click={() => {buyColor(color.id)}}>
            <img src="{color.url}">
        </button>
    {/each}
</main>
<div class="varukorg" style="left: {xPos}%; top: {yPos}%;  position:absolute;" on:click={() => {checkout();}}><img src="https://cdn.pixabay.com/photo/2014/05/21/13/25/shopping-cart-349544_960_720.png"></div>
<div id="redbutton" bind:this={redbutton} style="left: {RedX}%; top: {RedY}%; position: absolute; opacity: 0;">
    <img src="https://ael.se/wp-content/uploads/2019/01/red-button-1426817_960_720.png">
</div>
<div class="mängd" style="left: {xPos+2.5}%; top: {yPos-1}%; position: absolute;">{korgmängd}</div>
<div class="resetknapp" style="left: {xPos+7}%; top: {yPos+3}%; position: absolute;" on:click={() => {korgen = []; korgmängd = 0;}}><img src="https://cdn-icons-png.flaticon.com/256/5632/5632370.png"></div>

<style>
  .shopitem {
  border: none; 
  padding: 0; 
  outline: none; 
  background: none; 
  }

  .resetknapp img{
    width: 50px;
    height: 50px;
  }

  .shopitem img {
  width: 200px;
  height: 200px;
  display: block; 
  }
  main{
    background-image: url('https://img.freepik.com/free-vector/pride-gradient-1_78370-282.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: repeat(3, 300px);
    gap: 100px;
  }

  .varukorg img{
    width: 100px;
    height: 100px;
  }

  #redbutton img{
    width: 30px;
    height: 30px;
  }
</style>