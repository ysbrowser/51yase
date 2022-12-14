var app = new Vue({
	el:"#app",
	data: {
		title:'亚瑟浏览器常见问题排查',
		notice:'快速反馈问题请进QQ群：1019280543',
		activeName:'1',
		show: false,
		questions:[
			{
				title: "卸载-换手机, 会员权益是否还在?",
				content: '会员权益还在，会员与自己的Apple Id绑定，卸载换手机后点击Pro页面右上角恢复购买即可恢复会员权益。',
				id:1,
				select: false
			},
			{
				title: "网页视频先播放广告如何下载正片?",
				content: '可将【设置-播放设置-强制小窗播放】开关关闭。这样可以让网页内嵌套播放器播放完广告，再长按播放器或者点击左上角小窗进行播放和下载',
				id:2,
				select: false
			},
			{
				title: "如何选择清晰度播放?",
				content: '可将【设置-播放设置-强制小窗播放】开关关闭。这样可以在网页内嵌套播放器中选择清晰度，然后再长按播放器或者点击左上角小窗进行播放和下载',
				id: 3,
				select: false
			},
			{
				title: "网页视频下载有几种方式?",
				content: '1. 点击左上角小窗可触发播放下载。<br/> 2.长按网页中正在播放的视频可触发下载提示。<br/> 3. 网页右上角触发资源嗅探可手动触发。',
				id: 4,
				select: false
			},
			{
				title: "为什么有的视频会下载中断?",
				content: '大概率是因为视频地址过期了，建议一次性下载完成，不要超过4小时以上。',
				id: 5,
				select: false
			},
			{
				title: "有些视频QQ能打开，浏览器打不开?",
				content: '可切换浏览器标识（UA）试试。',
				id: 6,
				select: false
			},
		]
	},
	methods: {
		handelItemChange: function(id) {
			console.log('当前的value');
			for (var i = 0; i < this.questions.length; i++) {
				let item = this.questions[i];
				if (item.id === id) {
					item.select = !item.select;
				} else {
					item.select = false;
				}
			}
		},

		// 公告toast
		handleNoticeClick: function(){
			this.show = true;
		},
		handleThemeChange() {
      const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
 
      // 判断是否匹配深色模式
      if (darkMode && darkMode.matches) {
        document.body.classList.add('dark');
      }
 
      // 监听主题切换事件
      darkMode && darkMode.addEventListener('change', (e) => {
        console.log('=====>change mode:', e);
        if (e.matches) {
          console.log('=====>e.matches:dark');
          document.body.classList.add('dark');
        } else {
          console.log('=====>e.matches:light');
          document.body.classList.remove('dark');
        }
      });
    }
	}
})