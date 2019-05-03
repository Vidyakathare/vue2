<template>
  <div class="Home page">
    <div class="grid">
      <div class="box1">
        <h3>Integrity</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi consequatur quo nobis blanditiis, nemo ab veritatis obcaecati, praesentium dicta, quisquam a omnis ullam. Nihil sint soluta minus asperiores sapiente.</p>
      </div>
      <div class="box2">
        <h3>Value</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi consequatur quo nobis blanditiis, nemo ab veritatis obcaecati, praesentium dicta, quisquam a omnis ullam. Nihil sint soluta minus asperiores sapiente.</p>
      </div>
      <div class="box3">
        <h3>Passion</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sequi consequatur quo nobis blanditiis, nemo ab veritatis obcaecati, praesentium dicta, quisquam a omnis ullam. Nihil sint soluta minus asperiores sapiente.</p>
      </div>
    </div>
  </div>
</template>
<style>
.navbar {
  background: transparent !important;
}
.grid {
  padding-top: 50px;
  text-align: center;
  display: grid;
  width: 700px;
  margin: auto;
  grid-gap: 20px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    "box1 box2"
    "box1 box3";
}
.box1 {
  grid-area: box1;
}
.box2 {
  grid-area: box2;
}
.box3 {
  grid-area: box3;
}
.grid > div {
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
}
</style>