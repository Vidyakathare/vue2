<template>
  <div id="app">
    <video src="./assets/v1.mp4" autoplay="true" loop="true"></video>
    <Navbar></Navbar>

    <!-- <transition name="router-anim" enter-active-class="animated flipInX" leave-active-class="animated flipInY"> -->
    <transition name="router-anim">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

body {
  background: #f4f4f4;
  overflow: hidden;
  color: white;
  font-family: arial;
}
html,
body {
  height: calc(100% - 50px);
}
video {
  position: absolute;
}
.page {
  padding-top: 100px;
  /* background: url("https://images.pexels.com/photos/2117938/pexels-photo-2117938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"); */
  position: fixed;
  width: 100%;
  height: 100vh;
}
.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-150px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
