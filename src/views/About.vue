<template>
  <div class="about page">
    <div class="grid1">
      <div class="box11">
        <h1>A DIGITAL MARKETING COMPANY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum harum reprehenderit voluptas veritatis similique? Odio cumque iusto ex magnam.</p>
      </div>
      <div class="box22">
        <h1>WHO WE ARE</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis consequatur fugit consectetur molestiae sequi iure. Rem harum quos, porro perspiciatis libero debitis assumenda nihil quam hic! Labore, recusandae. Quas, incidunt.</p>
      </div>
      <div class="box33">
        <h1>WHAT WE DO</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum corporis, at illo temporibus delectus debitis maiores eligendi nemo facilis praesentium vitae recusandae iusto tenetur natus! At et sapiente reprehenderit?.</p>
      </div>
    </div>
  </div>
</template>
<style>
h1 {
  font-size: 20px;
}
.grid1 {
  padding-top: 50px;
  text-align: center;
  display: grid;
  width: 700px;

  margin: auto;
  grid-gap: 20px;
  grid-template-columns: 50% 50%;
  /* grid-template-rows: ; */
  grid-template-areas:
    "box11 box11"
    "box22 box33";
}
.box11 {
  grid-area: box11;
}
.box22 {
  grid-area: box22;
}
.box33 {
  grid-area: box33;
}
.grid1 > div {
  padding: 20px;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
