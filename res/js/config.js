(function(w) {
	// ------ 机顶盒号
	var stb;
	try {
		stb = hardware.STB.serialNumber;
	} catch (error) {
		stb = "81150119450105892";
	}
	// cms版本
	var isCmsVersion3 = true; // 默认为cms3.0

	// function getPageConfig() {
	//   var townName = utils.getStorage("townName");
	//   // 一镇一屏配置项
	//   var town = {
	//     shiQiu: {
	//       rootCategoryId: "4945309689485312", // 根栏目id
	//       cssConfig: {
	//         listBgColor: "rgba(11, 15, 38, 0.6)", // 列表背景色
	//         themeBgColor: "#16162E",
	//       }
	//     },
	//     yongYang: {
	//       rootCategoryId: "4961873996421120", // 根栏目id
	//       cssConfig: {
	//         listBgColor: "rgba(0, 51, 57, 0.6)", // 列表背景色
	//         themeBgColor: "#002F34",
	//       }
	//     },
	//     hongLan: {
	//       rootCategoryId: "4961874760636416", // 根栏目id
	//       cssConfig: {
	//         listBgColor: "rgba(9, 16, 51, 0.6)", // 列表背景色
	//         themeBgColor: "#091033",
	//       }
	//     },
	//   };

	//   // 页面图片配置项
	//   var pageConfig = {
	//     indexBg: "./images/" + townName + "/bg.png", // 首页背景图
	//     indexLogo: "./images/" + townName + "/logo.png", // 首页logo
	//     indexTips: "./images/" + townName + "/index-tips.png", // 首页按键提示图
	//     news: "./images/" + townName + "/dong-tai-bg.png", // 首页新闻动态背景图
	//     more: "./images/" + townName + "/more.png", // 首页更多背景图
	//     myself: "./images/" + townName + "/center.png", // 首页个人中心
	//     myselfFocus: "./images/" + townName + "/center-focus.png", // 首页个人中心焦点
	//     combinePageBg: "./images/" + townName + "/combine-page-bg.png", // 集合页面背景图
	//   }
	//   return {
	//     pageConfig: pageConfig,
	//     town: town[townName],
	//     townName: townName,
	//   };
	// }

	// // 判断跳转视频或者播放页
	// function switchInfo(obj) {
	//   var contentType = obj.contentType;
	//   if (contentType == 2) {
	//     var playUrl = "http://172.31.220.167:9004/vod/" + obj.assetId + ".mp4";
	//     window.location.href = "../fullPlay/fullPlay.html?playUrl=" + encodeURI(playUrl);
	//   } else {
	//     window.location.href = "../detail.html?id=" + obj.id;
	//   }
	// }

	var config = {
		stb: stb,
		isCmsVersion3: isCmsVersion3,
		// getPageConfig: getPageConfig,
		// switchInfo: switchInfo,
	};
	w.config = config;
})(window);
