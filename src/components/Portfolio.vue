<template>
    <div class="portfolio">
        <h2> Our Portfolio</h2>
        <b-row align-h="center" class="my-3">
            <b-col class="col-sm-2" >
                <div>
                    <b-img src="/image/portfolio_01.jpg" class="pImage"></b-img>
                </div>
            </b-col>
            <b-col class="col-sm-2">
                <div>
                    <b-img src="/image/portfolio_02.jpg" class="pImage"></b-img>
                </div>
            </b-col>
            <b-col class="col-sm-2">
                <div>
                    <b-img src="/image/portfolio_03.jpg" class="pImage"></b-img>
                </div>
            </b-col>
            <b-col class="col-sm-2">
                <div>
                    <b-img src="/image/portfolio_04.jpg" class="pImage"></b-img>
                </div>
            </b-col>
            <b-col class="col-sm-2">
                <div>
                    <b-img src="/image/portfolio_05.jpg" class="pImage"></b-img>
                </div>
            </b-col>
        </b-row>
        <b-row align-h="center" class="my-3">
            <b-col class="col-sm-2">
                <div>
                    <b-img src="/image/portfolio_06.jpg" class="pImage"></b-img>
                </div>
            </b-col>
            <b-col class="col-sm-2">
                <div>
                    <b-img src="/image/portfolio_07.jpg" class="pImage"></b-img>
                </div>
            </b-col>
            <b-col class="col-sm-2">
                <div>
                    <b-img src="/image/portfolio_08.jpg" class="pImage"></b-img>
                </div>
            </b-col>
            <b-col class="col-sm-2">
                <div>
                    <b-img src="/image/portfolio_09.jpg" class="pImage"></b-img>
                </div>
            </b-col>
            <b-col class="col-sm-2">
                <div>
                    <b-img src="/image/portfolio_10.jpg" class="pImage"></b-img>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name:'Portfolio',
    }
</script>
<style lang="scss">
    .portfolio{
        padding-top: 3em;
        min-height: 30vh;
        background: white;
        margin-bottom: 3em;
    }
    .pImage{
        width: -webkit-fill-available;
        height: auto;
    }
    @media (min-width: 992px) {
        .col-sm-2 {
            flex: 0 0 auto;
            width: 19.66666667% !important;
        }
    }
</style>