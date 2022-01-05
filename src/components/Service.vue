<template>
    <div :style="{'background-image':'url(../image/parallax_04.jpg)'}" class="service">
    <div id="Service" class="container" >
        <div class="row">
            <h3 class="service-title">Service</h3>
        </div>
        <b-row>
            <carousel-3d>
                <slide :index="0" :style="{'background-image':'url(../image/service.png)'}">
                    <h4 class="slide-title"> E-Commerce Website</h4>
                </slide>
                <slide :index="1" :style="{'background-image':'url(../image/service_01.jpg)'}">
                    <h4 class="slide-title">Inventory Management System</h4>
                </slide>
                <slide :index="2" :style="{'background-image':'url(../image/portfolio.jpg)'}">
                    <h4 class="slide-title">Portfolio</h4>
                </slide>
                <slide :index="3" :style="{'background-image':'url(../image/service_03.jpg)'}">
                    <h4 class="slide-title">Slide 4 Content</h4>
                </slide>
                <slide :index="4" :style="{'background-image':'url(../image/service_02.jpg)'}">
                    <h4 class="slide-title">Web UI Design</h4>
                </slide>
            </carousel-3d>
        </b-row>
    </div>
    </div>
</template>

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';
    export default {
        name: 'Service',
        components: {
            Carousel3d,
            Slide
        }
    }


</script>

<style lang="scss">
    .service{
        margin-top: 4em;
        margin-bottom: 3em;
    }
    #Service{
        margin-bottom: 4em;
    }
    .service-title{
        margin-top:2em !important;
        color:white;
    }
    .slide-title{
        position: absolute;
        bottom: 100px;
        color: black;
        margin: auto;
        width: 100%;
        text-align: center;
    }
</style>