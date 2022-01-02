<template>
    <div :style="{'background-image':'url(../image/parallax_04.jpg)'}" class="service">
    <div id="Service" class="container" >
        <div class="row">
            <h3>Service</h3>
            <div class="row">E-commerce, Portfolio, Web UI, Web APIs, Inventory Management System</div>
        </div>
        <b-row>
            <carousel-3d>
                <slide :index="0" :style="{'background-image':'url(../image/service.png)'}">
                    E-Commerce Website
                </slide>
                <slide :index="1" :style="{'background-image':'url(../image/service_01.jpg)'}">
                    Slide 2 Content
                </slide>
                <slide :index="2" :style="{'background-image':'url(../image/service_04.jpg)'}">
                    Slide 3 Content
                </slide>
                <slide :index="3" :style="{'background-image':'url(../image/service_03.jpg)'}">
                    Slide 4 Content
                </slide>
                <slide :index="4" :style="{'background-image':'url(../image/service_02.jpg)'}">
                    Web UI Design
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

    }
    #Service{
        margin-bottom: 4em;
    }

</style>