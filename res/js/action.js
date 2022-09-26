(function(v) {
	var DMX = {
		Version: '1.0',
		Browser: {
			IE: navigator.userAgent.indexOf('MSIE') >= 0 && navigator.userAgent.indexOf("iPanel") == -1 &&
				navigator.userAgent.indexOf("Coship") == -1 && navigator.userAgent.indexOf("DVN") == -
				1, //!!(window.attachEvent && !window.opera),
			Firefox: (navigator.userAgent.indexOf('Firefox/14') >= 0 || navigator.userAgent.indexOf(
					'Firefox/15') >= 0) && navigator.userAgent.indexOf("iPanel") == -1 && navigator.userAgent
				.indexOf("Coship") == -1 && navigator.userAgent.indexOf("DVN") == -1,
			Chrome: navigator.userAgent.indexOf('Chrome') >= 0,

			dvn: navigator.userAgent.indexOf("DVNBrowser") >= 0 && (navigator.userAgent.indexOf("Coship") == -
				1 && navigator.userAgent.indexOf("iPanel") == -1), //天柏
			tvos: navigator.userAgent.indexOf("DVNBrowser") >= 0 && navigator.userAgent.indexOf("Coship") >= 0,
			dvn_IPanel: navigator.userAgent.indexOf("DVNBrowser") >= 0 && navigator.appName.indexOf("iPanel") >=
				0,

			coship: navigator.userAgent.indexOf("Coship") >= 0 && navigator.userAgent.indexOf("DVNBrowser") == -
				1, //同州

			androidSkyworth: navigator.userAgent.indexOf("Android") >= 0 && navigator.userAgent.indexOf(
				"Skyworth Box") >= 0 && navigator.userAgent.indexOf("Skyworth") >= 0, //创维安卓盒子（镇江淮安）
			androidSkyworth2: navigator.userAgent.indexOf("Android") >= 0 && navigator.userAgent.indexOf(
				"Skyworth Box") == -1 && navigator.userAgent.indexOf("Skyworth") >= 0, //创维安卓盒子（酷开银河）

			iPanel20: navigator.userAgent.indexOf("iPanel 2.0") >= 0 && iPanel.System.revision.indexOf(
				"41420") == -1 && iPanel.System.revision.indexOf("41471") == -1 && iPanel.System.revision
				.indexOf("41421") == -1, //茁壮2.0
			iPanel28: navigator.userAgent.indexOf("iPanel") >= 0 && (iPanel.System.revision.indexOf("41420") !=
				-1 || iPanel.System.revision.indexOf("41421") != -1 || iPanel.System.revision.indexOf(
					"41471") != -1), //茁壮2.8
			iPanel30: navigator.userAgent.indexOf("iPanel 3.0") >= 0 && iPanel.System.revision.indexOf(
				"41420") == -1 && iPanel.System.revision.indexOf("41471") == -1 && iPanel.System.revision
				.indexOf("41421") == -1 //茁壮3.
		}
	};
	if (DMX.Browser.IE || DMX.Browser.Firefox || DMX.Browser.Chrome) { //IE/Firefox
		v.KEY = {
			UP: 38,
			UP1: 38,
			DOWN: 40,
			DOWN1: 40,
			LEFT: 37,
			LEFT1: 37,
			RIGHT: 39,
			RIGHT1: 39,
			ENTER: 13,
			PAGEDOWN: 34,
			PAGEUP: 33,
			//后退-
			BACK: 189,
			BACK1: 189,
			//退出+
			EXIT: 187,
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			//音量>
			VOLUMNUP: 190,
			//音量减<
			VOLUMNDOWN: 188,
			STOP: 48, //stop
			STOPPOINT: 68, //stop
			//静音：?
			VOLUMNNO: 191,
			F1: 65, //A
			F2: 66, //B
			F3: 67, //C
			F4: 68, //D
			INFO: 73 //I
		};
	} else if (DMX.Browser.dvn) { //苏州天柏盒子
		Utility.ioctlWrite("JsAddKeyState", "N");
		v.KEY = {
			UP: [38, 28],
			DOWN: [40, 29],
			LEFT: [37, 30],
			RIGHT: [39, 31],
			ENTER: 13,
			PAGEDOWN: 121,
			PAGEUP: 120,
			BACK: 122,
			BACK1: 8,
			EXIT: 0x72,
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			VOLUMNUP: 190,
			VOLUMNDOWN: 188,
			VOLUMNNO: 77, //静音
			STOP: 48, //播放时按退出响应的键值
			STOP1: 0x41,
			STOPPOINT: 80, //播放时按后退响应的键值
			//STOPPOINT1:68,
			MENU: 72,
			F1: 96,
			F2: 97,
			F3: 98,
			F4: 99,
			END: 0x20, //播放结束事件
			//END1:0x2B,
			INFO: 112, //信息
			VODEND: 45012
		};
	} else if (DMX.Browser.tvos) { //TVOS盒子
		Utility.ioctlWrite("JsAddKeyState", "N");
		v.KEY = {
			UP: [38, 1, 28],
			DOWN: [40, 2, 29],
			LEFT: [37, 3, 30],
			RIGHT: [39, 4, 31],
			ENTER: 13,
			PAGEDOWN: [121, 373],
			PAGEUP: [120, 372],
			BACK: 640,
			EXIT: 0x72,
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			VOLUMNUP: 190,
			VOLUMNDOWN: 188,
			VOLUMNNO: 77, //静音
			STOP: 48, //播放时按退出响应的键值
			STOP1: 0x41,
			STOPPOINT: 80, //播放时按后退响应的键值
			//STOPPOINT1:68,
			MENU: 72,
			F1: 96,
			F2: 97,
			F3: 98,
			F4: 99,
			END: 768, //播放结束事件
			//END1:0x2B,
			INFO: 112, //信息
			VODEND: 45012

		};
	} else if (DMX.Browser.dvn_IPanel) { //无锡天柏中间件
		v.KEY = {
			UP: [38, 28],
			DOWN: [40, 29],
			LEFT: [37, 30],
			RIGHT: [39, 31],
			ENTER: 13,
			PAGEDOWN: 121,
			PAGEUP: 120,
			BACK: 122,
			BACK1: 8,
			EXIT: 0x72,
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			VOLUMNUP: 190,
			VOLUMNDOWN: 188,
			VOLUMNNO: 77, //静音
			STOP: 48, //播放时按退出响应的键值
			STOP1: 0x41,
			STOPPOINT: 80, //播放时按后退响应的键值
			//STOPPOINT1:68,
			MENU: 72,
			F1: 96,
			F2: 97,
			F3: 98,
			F4: 99,
			END: 0x20, //播放结束事件
			//END1:0x2B,
			INFO: 112, //信息
			VODEND: 45012
		};
	} else if (DMX.Browser.coship) { //Coship
		Utility.ioctlWrite("JsAddKeyState", "N");
		v.KEY = {
			UP: [38, 28],
			DOWN: [40, 29],
			LEFT: [37, 30],
			RIGHT: [39, 31],
			UP1: 0x1C,
			DOWN1: 0x1D,
			LEFT1: 0x1E,
			RIGHT1: 0x1F,
			ENTER: 13,
			PAGEDOWN: 121,
			PAGEUP: 120,
			BACK: 640, //后退-
			BACK1: 32,
			EXIT: 114, //退出+
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			VOLUMNUP: 447, //音量+
			VOLUMNDOWN: 448, //音量-
			VOLUMNNO: 449, //静音
			STOP: 48, //退出播放    TODO
			STOPPOINT: 68, //暂停播放    TODO
			STOP1: 0x41, //播放时按退出响应的键值
			STOPPOINT1: 0x20, //播放时按后退响应的键值
			MENU: 113, //菜单
			INFO: 112, //信息
			CHANNELUP: 122, //频道+
			CHANNELDOWN: 123, //频道-
			VOD: 74, //点播
			LIKE: 70, //喜爱
			NAVIGATION: 19, //导航
			F1: 96,
			F2: 97,
			F3: 98,
			F4: 99,
			END: 0x20, //播放结束事件   TODO
			END1: 0x2B
		};
	} else if (DMX.Browser.androidSkyworth || DMX.Browser.androidSkyworth2) { //创维安卓盒子 1:镇江淮安 2：酷开银河
		Utility.ioctlWrite("JsAddKeyState", "N");
		v.KEY = {
			UP: [38, 28],
			DOWN: [40, 29],
			LEFT: [37, 30],
			RIGHT: [39, 31],
			ENTER: 13,
			PAGEUP: 120,
			PAGEDOWN: 121,
			BACK: 32,
			EXIT: 114,
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			VOLUMNUP: 190,
			VOLUMNDOWN: 188,
			VOLUMNNO: 0x28, //静音
			STOP: 48, //播放时按退出响应的键值
			STOPPOINT: 65, //播放时按后退响应的键值
			//STOP1:48,
			STOPPOINT1: 65,
			MENU: 113,
			F1: 96,
			F2: 97,
			F3: 98,
			F4: 99,
			END: 0x20, //播放结束事件
			END1: 0x2B,
			INFO: 112 //信息
		};
	} else if (DMX.Browser.iPanel20) { //iPanel 2.0
		v.KEY = {
			UP: 0x1C,
			DOWN: 0x1F,
			LEFT: 0x1D,
			RIGHT: 0x1E,
			ENTER: 273,
			PAGEDOWN: 121,
			PAGEUP: 120,
			BACK: 122,
			EXIT: 0x72,
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			VOLUMNUP: 190,
			VOLUMNDOWN: 188,
			VOLUMNNO: 0x28, //静音
			STOP: 48, //播放时按退出响应的键值
			STOPPOINT: 68, //播放时按后退响应的键值
			STOP1: 65,
			STOPPOINT1: 65,
			MENU: 113,
			F1: 96,
			F2: 97,
			F3: 98,
			F4: 99,
			END: 0x20, //播放结束事件
			END1: 0x2B,
			INFO: 112 //信息
		};
	} else if (DMX.Browser.iPanel28) { //iPanel 2.8
		v.KEY = {
			UP: 1,
			DOWN: 2,
			LEFT: 3,
			RIGHT: 4,
			ENTER: 13,
			PAGEDOWN: 373,
			PAGEUP: 372,
			BACK: 340,
			EXIT: 114,
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			VOLUMNUP: 595,
			VOLUMNDOWN: 596,
			VOLUMNNO: 597, //静音
			STOP: 48, //播放时按退出响应的键值
			STOPPOINT: 68, //播放时按后退响应的键值
			STOP1: 48,
			STOPPOINT1: 68,
			MENU: 113,
			F1: 96,
			F2: 97,
			F3: 98,
			F4: 99,
			END: 0x20, //播放结束事件
			END1: 0x2B,
			INFO: 112 //信息
		};
	} else if (DMX.Browser.iPanel30) { //iPanel 3.0
		v.KEY = {
			UP: 1,
			DOWN: 2,
			LEFT: 3,
			RIGHT: 4,
			ENTER: 13,
			PAGEUP: 372,
			PAGEDOWN: 373,
			BACK: 340,
			EXIT: 339,
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			VOLUMNUP: 595,
			VOLUMNDOWN: 596,
			VOLUMNNO: 597, //静音
			STOP: 48, //播放时按退出响应的键值
			STOPPOINT: 68, //播放时按后退响应的键值
			STOP1: 48,
			STOPPOINT1: 68,
			MENU: 513,
			F1: 96,
			F2: 97,
			F3: 98,
			F4: 99,
			END: 0x20, //播放结束事件
			END1: 0x2B,
			INFO: 567 //信息
		};
	} else { //其他
		v.KEY = {
			UP: [38, 28],
			UP1: 0x1C,
			DOWN: [40, 29],
			DOWN1: 0x1D,
			LEFT: [37, 30],
			LEFT1: 0x1E,
			RIGHT: [39, 31],
			RIGHT1: 0x1F,
			ENTER: 13,
			PAGEDOWN: 121,
			PAGEUP: 120,
			BACK: 640, //后退-
			BACK1: 32,
			EXIT: 114, //退出+
			NUMBER0: 48,
			NUMBER1: 49,
			NUMBER2: 50,
			NUMBER3: 51,
			NUMBER4: 52,
			NUMBER5: 53,
			NUMBER6: 54,
			NUMBER7: 55,
			NUMBER8: 56,
			NUMBER9: 57,
			VOLUMNUP: 447, //音量+
			VOLUMNDOWN: 448, //音量-
			VOLUMNNO: 449, //静音
			STOP: 48, //退出播放    TODO
			STOPPOINT: 68, //暂停播放    TODO
			STOP1: 0x41, //播放时按退出响应的键值
			STOPPOINT1: 0x20, //播放时按后退响应的键值
			MENU: 113, //菜单
			INFO: 112, //信息
			CHANNELUP: 122, //频道+
			CHANNELDOWN: 123, //频道-
			VOD: 74, //点播
			LIKE: 70, //喜爱
			NAVIGATION: 19, //导航
			F1: 96,
			F2: 97,
			F3: 98,
			F4: 99,
			END: 0x20, //播放结束事件  TODO
			END1: 0x2B
		};

	}

	v.keyAction = {
		actions: {
			"all": {
				"all": []
			}
		},
		oldFocus: "",
		focus: "",
		isLock: false,
		browser: '',
		befEve: function(_k) {},
		aftEve: function(_k) {},
		init: function() {
			//初始化浏览器型号
			if (DMX.Browser.IE) {
				this.browser = 'IE';
			} else if (DMX.Browser.Firefox) {
				this.browser = 'Firefox';
			} else if (DMX.Browser.Chrome) {
				this.browser = 'Chrome';
			} else if (DMX.Browser.dvn) {
				this.browser = 'dvn';
			} else if (DMX.Browser.tvos) {
				this.browser = 'tvos';
			} else if (DMX.Browser.dvn_IPanel) {
				this.browser = 'dvn_IPanel';
			} else if (DMX.Browser.coship) {
				this.browser = 'coship';
			} else if (DMX.Browser.androidSkyworth) {
				this.browser = 'androidSkyworth';
			} else if (DMX.Browser.androidSkyworth2) {
				this.browser = 'androidSkyworth2';
			} else if (DMX.Browser.iPanel20) {
				this.browser = 'iPanel20';
			} else if (DMX.Browser.iPanel28) {
				this.browser = 'iPanel28';
			} else if (DMX.Browser.iPanel30) {
				this.browser = 'iPanel30';
			} else {
				this.browser = 'other';
			}


			if (DMX.Browser.IE || DMX.Browser.Firefox || DMX.Browser.Chrome) {

				document.onkeydown = keyEvent;
			} else if ((DMX.Browser.iPanel20 || DMX.Browser.iPanel28 || DMX.Browser.iPanel30) && navigator
				.userAgent.indexOf("FUJITSU") == -1) { //排除银河C2000CM的盒子，否则这款盒子会响应两次
				document.onkeypress = keyEvent;
				document.onirkeypress = keyEvent;
			} else if (DMX.Browser.coship) {
				//Utility.ioctlWrite("JsAddKeyState", "N");
				document.onirkeypress = keyEvent;
				document.onkeypress = keyEvent;
				if (DMX.Browser.coship) {
					//Utility.ioctlWrite("JsAddKeyState", "N");
					var _p = Utility.getEnv("STB.powered");
					if (_p != "true") {
						Utility.ioctlWrite("motoKey2Dvb", "");
					}
				}
			} else {

				document.onkeypress = keyEvent;
			}

			//document.onsystemevent = keyEvent;
			var _self = this;

			function keyEvent() {
				var event = arguments[0] || window.event;
				var keyCode = event.which || event.keyCode;
				// $('.test').html(keyCode);
				//同洲的盒子在播放视频回来之后键值发生了改变
				//$('#logs').html(keyCode+'===');
				// $('#debug').html('keyCode:' + keyCode)

				_self.befEve(keyCode);

				_self.done(keyCode);

				_self.aftEve(keyCode);
			}

		},
		done: function(keyCode, callback) {
			var actions = this.actions;
			if (actions[keyCode]) {

				if (!this.isLock) {
					this.runAction(actions[keyCode][this.focus], keyCode);
				}
				this.runAction(actions[keyCode]["all"], keyCode);

			}

			if (actions["all"]) {
				this.runAction(actions["all"][this.focus], keyCode);
				this.runAction(actions["all"]["all"], keyCode);
			}
			(typeof callback == 'function') && (callback(keyCode));
		},
		runAction: function(actions, keyCode) {
			if (!actions) return;
			for (var i = 0, im = actions.length; i < im; i++) {
				actions[i].call(this, keyCode);
			}
		},
		add: function(fun, keyCode, focus) {

			if (typeof fun != "function") return;
			var type = typeof keyCode;
			if (type == 'string' || type == 'number') {
				keyCode = [keyCode];
			} else {
				keyCode = keyCode || ["all"];
			}
			focus = focus || "all";

			for (var i in keyCode) {
				!(this.actions[keyCode[i]]) && (this.actions[keyCode[i]] = {});
				(typeof this.actions[keyCode[i]][focus] == "undefined") && (this.actions[keyCode[i]][
					focus] = []);
				this.actions[keyCode[i]][focus].push(fun);
			}

		},
		remove: function(key) {
			if (key && this.actions[key]) {
				delete this.actions[key]
			} else {
				var _k = Object.keys(this.actions);
				for (var i in _k) {
					if (_k[i] != "all") {
						delete this.actions[_k[i]];
					}
				}
			}

			var _self = this;

			[KEY.PAGEDOWN, KEY.PAGEUP, KEY.BACK, KEY.EXIT].forEach(function(v) {
				delete _self.actions[v];
			});


			this.befEve = function(k) {};
			this.aftEve = function(k) {};
		}
	};
	v.keyAction.init();

})(window);
