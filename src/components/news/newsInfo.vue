<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.knowledge_title}}</h3>
        <p class="subtitle">
            <span>发表时间：2019-09-08 12:12:22</span><span>点击：2次</span>
        </p>
        <hr>
        <div class="content">
            dsdsdsdsdsdsd
        </div>
        <comment :id="this.id"></comment>
    </div>
</template>
<script>
import comment from '../comment/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
   
    components:{comment},
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.axios.get("index/knowledge/showKnoConList",{params:{
                id: this.id}
            }).then(res=>{
                if(res.status==200){
                    
                    this.newsinfo=res.data.showList[0];
                    console.log(this.newsinfo)
                }else{
                    Toast("获取新闻详情失败");
                }
            })
        }
    }
}
</script>
<style  lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        text-align: center;
        margin: 15px 0;
        color: red;
        font-size: 14px;
    }
    .subtitle{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        color: #226aff
    }
}
</style>


