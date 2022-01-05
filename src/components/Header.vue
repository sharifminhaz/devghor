<template>
    <div id="header">
        <div id="navbar">
            <nav :class="{ 'onScroll': !view.topOfPage}">
                <ul class="UL1">
                    <li><img alt="DGLOgo" src="/image/DG-Logo.png" class="DGlogo"></li>
                    <li class="Name">DevGhor</li>
                </ul>
                <ul>
                    <li><a href="#" style="text-decoration: none;">About Us</a></li>
                    <li>Services</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',


        data () {
            return {
                view: {
                    topOfPage: true
                }
            }
        },
        beforeMount() {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll(){
                if(window.pageYOffset>0){
                    if(this.view.topOfPage) this.view.topOfPage = false
                } else {
                    if(!this.view.topOfPage) this.view.topOfPage = true
                }
            }
        },
    }
</script>

<style lang="scss">

    body {
        height: 200vh;
        background: whitesmoke;
        nav {
            position: fixed;
            width: 100%;
            height: 130px;
            background: linear-gradient(to bottom, darkgray, lightgray, #ffffff);
            align-items: center;
            transition: all .2s ease-in-out;
            @media (min-width: 452px){
                display: flex;
                height: 90px;
                justify-content: space-around;
            }
            &.onScroll {
                box-shadow: 0 0 10px #aaa;
                background: #fff;
                ul li, a {
                    color: #10b761;
                }
            }
            ul {

                width: 35%;
                display: flex;
                justify-content: space-between;
                @media (min-width: 452px){
                    margin-left: 3em;
                }
                li, a {
                    cursor: pointer;
                    font-weight: 600;
                    list-style-type: none;
                    color: white;
                    padding-right: 10px;
                }
            }
            .UL1{
                width: 8% !important;
            }
        }

        .logo{
            font-size: xx-large;
            font-family: "Curlz MT";
        }
        .Name{
            font-family: "Century Gothic";
            margin-top: 5px;
            font-weight: 900;
            font-size: xx-large;
        }
        .DGlogo{
            width: 60px;
            height: auto;
        }
    }
</style>