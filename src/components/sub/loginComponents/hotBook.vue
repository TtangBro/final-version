<template>
    <div>
        <section   id="lk_hot">
            <div class="title text-center">
            <h1><strong>热销书籍</strong></h1>
            <img src="../../../img/star-thr.png" class="img-responsive" width='20'>
            </div>

            <div class="container">
                <div class="row">
                <div class="col-md-6 lesson">
                    <div class="media">
                        <div class="media-left">
                            <a href="#" @click="pushBuy">
                            <img src="../../../IMG/client-1.jpg" alt="..." class="media-object img-responsive img-circle img-thumbnail" width="100">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">
                            <span class="text-danger">
                                [热]
                            </span>
                            玩转HTML5+跨平台
                            </h4>
                            <p leave-class="text-muted" style="margin-top: 10px">
                            从零基础入门大前端开发，So Easy, Too Happy!
                            </p>
                        </div>
                        <div class="media-right text-danger">
                            已售20666本
                        </div>
                    </div>
                </div>

                <div class="col-md-6 lesson">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                            <img src="../../../IMG/client-2.jpg" alt="..." class="media-object img-responsive img-circle img-thumbnail" width="100">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">
                            <span class="text-danger">
                                [热]
                            </span>
                            玩转JAVA
                            </h4>
                            <p leave-class="text-muted" style="margin-top: 10px">
                            从零基础入门大前端开发，So Easy, Too Happy!
                            </p>
                        </div>
                        <div class="media-right text-danger">
                            已售31000本
                        </div>
                    </div>
                </div>

                <div class="col-md-6 lesson">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                            <img src="../../../IMG/client-3.jpg" alt="..." class="media-object img-responsive img-circle img-thumbnail" width="100">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">
                            <span class="text-danger">
                                [热]
                            </span>
                            玩转Python
                            </h4>
                            <p leave-class="text-muted" style="margin-top: 10px">
                            从零基础入门大前端开发，So Easy, Too Happy!
                            </p>
                        </div>
                        <div class="media-right text-danger">
                            已售12066本
                        </div>
                    </div>
                </div>

                <div class="col-md-6 lesson">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                            <img src="../../../IMG/client-1.jpg" alt="..." class="media-object img-responsive img-circle img-thumbnail" width="100">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">
                            <span class="text-danger">
                                [热]
                            </span>
                            玩转Vue
                            </h4>
                            <p leave-class="text-muted" style="margin-top: 10px">
                            从零基础入门大前端开发，So Easy, Too Happy!
                            </p>
                        </div>
                        <div class="media-right text-danger">
                            已售12000本
                        </div>
                    </div>
                </div>

                <div class="col-md-6 lesson">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                            <img src="../../../IMG/client-2.jpg" alt="..." class="media-object img-responsive img-circle img-thumbnail" width="100">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">
                            <span class="text-danger">
                                [热]
                            </span>
                            玩转react
                            </h4>
                            <p leave-class="text-muted" style="margin-top: 10px">
                            从零基础入门大前端开发，So Easy, Too Happy!
                            </p>
                        </div>
                        <div class="media-right text-danger">
                            已售66888本
                        </div>
                    </div>
                </div>

                <div class="col-md-6 lesson">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                            <img src="../../../IMG/client-3.jpg" alt="..." class="media-object img-responsive img-circle img-thumbnail" width="100">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">
                            <span class="text-danger">
                                [热]
                            </span>
                            玩转Angular
                            </h4>
                            <p leave-class="text-muted" style="margin-top: 10px">
                            从零基础入门大前端开发，So Easy, Too Happy!
                            </p>
                        </div>
                        <div class="media-right text-danger">
                            已售3888本
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

    data(){
        return{

        }
    },
    methods: {
        pushBuy(){
            this.$router.push("/Catbuy");
        }
    },
}
</script>
<style scoped>
#lk_hot,
#lk_hot .title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
}
#lk_hot{
    padding:20px 0;
}
#lk_hot .lesson{
    padding: 15px 10px;
}
#lk_hot .lesson .media-left{
    width: 20%;
}
#lk_hot .lesson .media-body{
    width: 60%;
    vertical-align: middle;
}
#lk_hot .lesson .media-right{
    width: 20%;
    text-align: left;
    font-size: 16px;
    vertical-align: middle;
}
</style>
