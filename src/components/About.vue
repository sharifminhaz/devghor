<template>
    <div class="about container">
        <div class="row pt-lg-5 ">
            <b-col class="text-start">
                <h4 class="passage2">About Us</h4>
                <h2 class="psg2ttl">Welcome To DevGhor</h2>
                <p >Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>
                <a class="btn btn-new" href="/about">Learn More</a>
            </b-col>
            <b-col >
                <b-img src="/image/about_01.jpg" alt="About Us" class="rounded abt-img"></b-img>
            </b-col>
        </div>
        <div class="row abt-row" style="justify-content: center;">
            <b-col >
                <b-img src="/image/about_02.jpg" alt="About Us" class="rounded abt-img"></b-img>
            </b-col>
            <b-col class="text-start">
                <h4 class="passage2">WHO WE ARE</h4>
                <h2 class="psg2ttl">Welcome To DevGhor</h2>
                <p>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>
                <a class="btn btn-new" href="/about">Learn More</a>
            </b-col>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                url: 'http://anywhere.com'
            }
        }
    }
</script>

<style lang="scss">
    .about{
        margin-top: 4em;
        margin-bottom: 3em;
    }
    .abt-row{
        padding-top: 5em;
    }
    .abt-img{
        width: 85%;
    }
    .passage2{
        text-transform: uppercase;
        padding: 0;
        margin: 0 0 5px;
        font-weight: 600;
        letter-spacing: 0.5px;
        font-size: 15px;
        color: #999;
    }
    .psg2ttl{
        font-size: 28px;
        font-weight: 500;
        padding: 0 0 10px;
        margin: 0;
        line-height: 50px;
        margin-top: 0;
        text-transform: none;
        @media (max-width: 452px){
            font-size: 18px;
            line-height: normal;
        }
    }
     p{
        text-align: justify;
    }
    @media (max-width: 452px) {
        p {
            font-size: 12px;
            text-align: justify;
        }
    }
    .btn-new{
        color: #ffffff !important;
        box-shadow: 0 10px 20px 0 rgb(5 16 44 / 15%) ;
        border-radius: 25px 0px 25px 0px !important;
        background: grey !important;
        padding: 15px 15px !important;
    }
</style>