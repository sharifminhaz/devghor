<template>
  <div>
    <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            indicators
            background="#ababab"
            img-width="1024"
            img-height="320"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="/image/slider_01.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
              caption="Second slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="/image/slider_02.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
              caption="Second slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="/image/slider_03.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->

    </b-carousel>

  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss">
  .carousel-item img {
    height:80vh!important ;
  }
</style>