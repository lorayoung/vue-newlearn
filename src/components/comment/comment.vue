<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" cols="30" rows="3" placeholder="请输入要评论的内容（最多120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in commentList" :key="item.id">
                <div class="cmt-title">
                    第{{index+1}}楼 &nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12
                </div>
                <div class="cmt-body">
                    {{item.exper_name}}
                </div>
            </div>
            
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            commentList:[]
        }
    },
     props:["id"],
     created(){
         this.getComments()
     },
     methods:{
         getComments(){
             this.axios.get("index/knowledge/getExperList?id="+this.id).then(res=>{
                 if(res.status==200){
                     this.commentList=res.data.data
                 }else{
                     Toast("获取评论是吧")
                 }
             })
         }
     }
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{font-size: 18px;}
    textarea{font-size: 14px;margin: 0}
    .cmt-list{
        margin: 5px 0px;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                background-color: #ccc;
                line-height: 30px;
            }
            .cmt-body{
                line-height: 30px;
                text-indent: 2em
            }
        }
    }
}
</style>


