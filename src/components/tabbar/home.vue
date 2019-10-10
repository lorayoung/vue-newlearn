<template>
	<div class="">

		<!-- 轮播图区域 -->
		<mt-swipe :show-indicators="false"
							:auto="4000">
			<mt-swipe-item v-for="item in swipeList"
										 :key="item.knowledge_id">
				<img :src="item.cover"
						 alt="">
			</mt-swipe-item>
			<!-- 六宫格 -->

		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">新闻资讯</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
					<div class="mui-media-body">图片分享</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">商品购买</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">留言反馈</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">视频专区</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">联系我们</div>
				</a></li>

		</ul>
		首页
	</div>
</template>

<script>
export default {
	name: "",
	data() {
		return {
			swipeList: []
		};
	},
	created() {
		this.getSwipe();
	},
	methods: {
		getSwipe() {
			this.axios.get("index/knowledge/knoSystem?page=1&practice=").then(res => {
				console.log(res);
				if (res.status == 200) {
					this.swipeList = res.data.data[0].KnoList.slice(0, 3);
					console.log(this.swipeList);
				} else {
					Toast("加载失败");
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.mint-swipe {
	height: 200px;
	.mint-swipe-item {
		img {
			width: 100%;
			height: 100%;
		}
	}
}
.mui-grid-view.mui-grid-9 {
	background-color: #fff !important;
	border: none;
	li {
		.mui-media-body {
			font-size: 12px;
		}
	}
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
	border: 0;
}
</style>
<style >
</style>