<script>
    let image ="https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"
    let images = [image, photo, picture]
</script>
<title>Photo App</title> 
<h1>Photo App</h1>


<div class="photos">
<div class="photos">
  <div class="image-wrapper">
  <img src={images[0]} alt="flexbox
  rules">
  </div>
  <div class="image-wrapper">
  <img src={images[1]} alt="flexbox
  rules">
  </div>
  <div class="image-wrapper">
  <img src={images[2]} alt="flexbox vs
  gridbox">
  </div>
  </div> 
</div>
<style>
.photos{
display:flex;
/*Sätter att bredden på vår box enbart får vara 90% av webbfönstrets
bredd*/
max-width: 90vw;
overflow:hidden;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
}
.photos img {
/*Den maximala bredden på en bild, som ligger inom vår flex
container,photos, är 100% av containers storlek (dess förälder)*/
max-width: 100%;
}
.image-wrapper img{
  max-width: 100%;
  flex:1;
  padding: 5px;
}
</style>