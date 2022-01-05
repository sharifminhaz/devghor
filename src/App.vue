<template>
  <div id="app">
    <div style="width: 100%" class="header-div">
      <Header></Header>
    </div>
    <div class="body-div">
      <HelloWorld class="middle"/>
    </div>
    <About></About>
    <Service></Service>
    <Portfolio></Portfolio>
    <Footer class="foot"></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";

export default {
  name: 'App',
  components: {
    Header,
    HelloWorld,
    About,
    Service,
    Portfolio,
    Footer,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
}
  .foot{
    position: relative;
  }
  .middle{
    position: relative;
  }
  .header-div{
    z-index: 100;
  }
  .body-div{
    z-index: 1;
    width: 100%;
    margin-top: 0px;
        @media (max-width: 452px){
            margin-top: 0px;
}
  }
</style>
