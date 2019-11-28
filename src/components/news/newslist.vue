<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.knowledge_id" >
					<router-link :to="'/home/newsinfo/'+item.knowledge_id">
						<img class="mui-media-object mui-pull-left" :src="item.cover">
						<div class="mui-media-body">
							<h1>{{item.knowledge_name}}</h1>  
							<p class='mui-ellipsis'><span>发表时间：2019-12-12 09:08:08</span><span>点击次数：14次</span></p>
						</div>
					</router-link>
				</li>
				

			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
    mounted(){
        this.getNews()
    },
    methods:{
        getNews () {
			this.axios.get("index/knowledge/knoSystem?page=1&practice=").then(res => {
				if (res.status == 200) {
					this.newsList = res.data.data[0].KnoList;
				} else {
					Toast("获取新闻列表失败");
				}
			});
		}
    }
    
}
</script>

<style>
.mui-media-body h1{font-size: 14px;}
.mui-ellipsis{
    color: #226aff;
    display: flex;
    font-size: 12px;
    /* 两端对齐 */
    justify-content: space-between;

}
</style>

