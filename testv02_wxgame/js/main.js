var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Carve = (function (_super) {
    __extends(Carve, _super);
    function Carve() {
        return _super.call(this) || this;
    }
    Carve.getInstance = function () {
        if (!Carve.shared) {
            Carve.shared = new Carve();
        }
        return Carve.shared;
    };
    Carve.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Carve.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //this.carveLine.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jump,this);
        this.toCarve.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toGetCarve, this);
        this.toPrint.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toGetPrint, this);
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.timerComFunc, this);
        this.Springsuccess = false;
        this.Summersuccess = false;
        this.Autumnsuccess = false;
        this.Wintersuccess = false;
    };
    Carve.prototype.jump = function () {
        var timer = new egret.Timer(2000, 1);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.tolarge, this);
        //开始计时
        timer.start();
    };
    Carve.prototype.timerFunc = function () {
        //console.log("start");
    };
    Carve.prototype.toGetPrint = function () {
        //线稿出现
        var num = this.numChildren;
        this.setChildIndex(this.blackCarve, num - 1);
        egret.Tween.get(this.blackCarve, { loop: false }).to({ alpha: 0 }, 200).to({ alpha: 1 }, 1500);
        this.jump();
        this.toPrint.visible = false;
        this.toCarve.visible = false;
    };
    Carve.prototype.toGetCarve = function () {
        //金色的线稿显示
        egret.Tween.get(this.goldCarve, { loop: false }).to({ alpha: 0 }, 200).to({ alpha: 1 }, 1500);
        this.toCarve.visible = false;
        var timer = new egret.Timer(2500, 1);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.toGetXian, this);
        //开始计时
        timer.start();
    };
    Carve.prototype.toGetXian = function () {
        var data = RES.getRes("yin_json");
        var txtr = RES.getRes("yin_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc = new egret.MovieClip(mcFactory.generateMovieClipData());
        this.mc.x = 120;
        this.mc.y = 278;
        this.addChild(this.mc);
        this.mc.gotoAndPlay(1, 1);
        this.toPrint.visible = true;
    };
    Carve.prototype.tolarge = function () {
        this.initData();
        this.addChild(Colorful.getInstance());
        Colorful.getInstance().save.visible = false;
        this.removeChild(this.mc);
        Colorful.getInstance().carveLineLarge.source = this.carveLine.source;
        switch (this.carveLine.source) {
            case "Xiangaozip_jpg":
                this.toDifferentlarge("resource/assets/game/Spring/Lichun/Number/", 15, Colorful.getInstance().SpringGroup);
                break;
            case "LixiaXian_png":
                this.toDifferentlarge("resource/assets/game/Summer/Lixia/Number/", 2, Colorful.getInstance().SummerGroup);
                break;
            case "LiqiuXian_png":
                this.toDifferentlarge("resource/assets/game/Autumn/Liqiu/Number/", 2, Colorful.getInstance().AutumnGroup);
                break;
            case "LidongXian_png":
                this.toDifferentlarge("resource/assets/game/Winter/Lidong/Number/", 2, Colorful.getInstance().WinterGroup);
                break;
        }
    };
    Carve.prototype.toDifferentlarge = function (url, seasonNb, group) {
        var nb = 1;
        while (nb <= seasonNb) {
            //https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/assets/game/Spring/Lichun/Number/
            var im = new eui.Image(url + String(nb) + ".png");
            im.width = 80;
            im.height = 80;
            im.x = (nb - 1) * 80;
            im.name = String(nb);
            Colorful.getInstance().Numbers.addChild(im);
            im.once(egret.TouchEvent.TOUCH_TAP, this.selectPart.bind(this, im, group), this);
            if (nb != 1) {
                im.touchEnabled = false;
            }
            nb++;
        }
        group.getChildAt(0).visible = true;
    };
    Carve.prototype.selectPart = function (part, Seasongroup) {
        var group = Seasongroup.getChildAt(Number(part.name) - 1);
        for (var i = 0; i < group.numChildren; i++) {
            var child = group.getChildAt(i);
            child.alpha = 0.5;
            this.func = this.changeColor.bind(this, child, Number(part.name), group);
            child.once(egret.TouchEvent.TOUCH_TAP, this.func, this);
        }
    };
    Carve.prototype.changeColor = function (img, nb, group) {
        img.alpha = 1;
        var next = [];
        var turn = true;
        for (var i = 0; i < group.numChildren; i++) {
            var child = group.getChildAt(i);
            if (child.alpha == 0.5) {
                next.push(false);
            }
            else if (child.alpha == 1) {
                next.push(true);
            }
        }
        for (var m = 0; m < next.length; m++) {
            if (next[m] == false) {
                turn = false;
                break;
            }
        }
        if (turn) {
            //挪位置
            //封装函数，将其中的SpringGroup和胜利标志匹配
            var item = Colorful.getInstance().Numbers.getChildAt(nb - 1);
            item.visible = false;
            for (var j = nb; j < Colorful.getInstance().Numbers.numChildren; j++) {
                var imge = Colorful.getInstance().Numbers.getChildAt(j);
                imge.x = imge.x - 80;
            }
            if (nb < Colorful.getInstance().Numbers.numChildren) {
                var childs = group.parent.getChildAt(nb);
                childs.visible = true;
                var nbimg = Colorful.getInstance().Numbers.getChildAt(nb);
                nbimg.touchEnabled = true;
            }
            else {
                console.log("successful");
                Colorful.getInstance().save.visible = true;
                if (group.parent == Colorful.getInstance().SpringGroup) {
                    this.Springsuccess = true;
                    //Colorful.getInstance().save.addEventListener(egret.TouchEvent.TOUCH_TAP,this.savePic.bind(show.getInstance().result,"https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/assets/game/Spring/Lichun/Chun.jpg"),Colorful.getInstance());
                    console.log("Spring");
                }
                else if (group.parent == Colorful.getInstance().SummerGroup) {
                    this.Summersuccess = true;
                    console.log("Summer");
                }
                else if (group.parent == Colorful.getInstance().AutumnGroup) {
                    this.Autumnsuccess = true;
                    console.log("Autumn");
                }
                else if (group.parent == Colorful.getInstance().WinterGroup) {
                    this.Wintersuccess = true;
                    console.log("Winter");
                }
            }
        }
    };
    Carve.prototype.savePic = function (img, u) {
        img.texture.saveToFile("image/png", u);
    };
    Carve.prototype.timerComFunc = function () {
        //this.parent.setChildIndex(this,0);
        this.initData();
        this.parent.removeChild(this);
    };
    Carve.prototype.initData = function () {
        this.carveLine.alpha = 0;
        this.blackCarve.alpha = 0;
        this.goldCarve.alpha = 0;
        this.toCarve.visible = true;
        this.toPrint.visible = false;
    };
    return Carve;
}(eui.Component));
__reflect(Carve.prototype, "Carve", ["eui.UIComponent", "egret.DisplayObject"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")
                            //this.startAnimation(result);
                        ];
                    case 2:
                        result = _a.sent();
                        //this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        //this.startAnimation(result);
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        //await RES.loadConfig("https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/default.res.json", "https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/");
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        //await RES.loadConfig("https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/default.res.json", "https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/");
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            //let theme = new eui.Theme("https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/default.thm.json", this.stage);
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        this.addChild(StartGame.getInstance());
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    // private startAnimation(result: Array<any>): void {
    //     let parser = new egret.HtmlTextParser();
    //     let textflowArr = result.map(text => parser.parse(text));
    //     let textfield = this.textfield;
    //     let count = -1;
    //     let change = () => {
    //         count++;
    //         if (count >= textflowArr.length) {
    //             count = 0;
    //         }
    //         let textFlow = textflowArr[count];
    //         // 切换描述内容
    //         // Switch to described content
    //         textfield.textFlow = textFlow;
    //         let tw = egret.Tween.get(textfield);
    //         tw.to({ "alpha": 1 }, 200);
    //         tw.wait(2000);
    //         tw.to({ "alpha": 0 }, 200);
    //         tw.call(change, this);
    //     };
    //     change();
    // }
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
        if (current == total) {
            this.removeChild(this.textField);
        }
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var Colorful = (function (_super) {
    __extends(Colorful, _super);
    function Colorful() {
        return _super.call(this) || this;
    }
    Colorful.getInstance = function () {
        if (!Colorful.shared) {
            Colorful.shared = new Colorful();
        }
        return Colorful.shared;
    };
    Colorful.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Colorful.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.timerComFunc, this);
    };
    Colorful.prototype.timerComFunc = function () {
        this.save.visible = false;
        Carve.getInstance().timerComFunc();
        this.cleanUp(this.SpringGroup);
        // this.cleanUp(this.SummerGroup);
        // this.cleanUp(this.AutumnGroup);
        // this.cleanUp(this.WinterGroup);
        this.Numbers.removeChildren();
        this.parent.removeChild(this);
    };
    Colorful.prototype.cleanUp = function (group) {
        for (var i = 0; i < group.numChildren; i++) {
            var groupDetail = group.getChildAt(i);
            for (var j = 0; j < groupDetail.numChildren; j++) {
                var im = groupDetail.getChildAt(j);
                im.alpha = 0;
                im.removeEventListener(egret.TouchEvent.TOUCH_TAP, Carve.getInstance().func, Carve.getInstance());
            }
            if (i != 0) {
                group.getChildAt(i).visible = false;
            }
        }
    };
    return Colorful;
}(eui.Component));
__reflect(Colorful.prototype, "Colorful", ["eui.UIComponent", "egret.DisplayObject"]);
var Detail = (function (_super) {
    __extends(Detail, _super);
    function Detail() {
        return _super.call(this) || this;
    }
    Detail.getInstance = function () {
        if (!Detail.shared) {
            Detail.shared = new Detail();
        }
        return Detail.shared;
    };
    Detail.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Detail.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.season_detail.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toPass, this);
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toSeason, this);
    };
    Detail.prototype.toPass = function () {
        //this.parent.removeChild(this);
        this.addChild(Carve.getInstance());
        switch (this.season_detail.source) {
            case "Lichun_png":
                this.initPicture("Xiangaozip_jpg", "ChunGold_png", "ChunBlack_png");
                if (Carve.getInstance().Springsuccess) {
                    this.removeChild(Carve.getInstance());
                    this.addChild(show.getInstance());
                    show.getInstance().result.source = "Chun_jpg";
                }
                break;
            case "Lixia_png":
                this.initPicture("LixiaXian_png", "XiaGold_png", "XiaBlack_png");
                if (Carve.getInstance().Summersuccess) {
                    this.removeChild(Carve.getInstance());
                    this.addChild(show.getInstance());
                    show.getInstance().result.source = "Xia_jpg";
                }
                break;
            case "Liqiu_png":
                this.initPicture("LiqiuXian_png", "QiuGold_png", "QiuBlack_png");
                if (Carve.getInstance().Autumnsuccess) {
                    this.removeChild(Carve.getInstance());
                    this.addChild(show.getInstance());
                    show.getInstance().result.source = "Qiu2_png";
                }
                break;
            case "Lidong_png":
                this.initPicture("LidongXian_png", "DongGold_png", "DongBlack_png");
                if (Carve.getInstance().Autumnsuccess) {
                    this.removeChild(Carve.getInstance());
                    this.addChild(show.getInstance());
                    show.getInstance().result.source = "Dong_jpg";
                }
                break;
        }
    };
    Detail.prototype.initPicture = function (carvelinePic, goldCarvePic, blackCarve) {
        Carve.getInstance().carveLine.source = carvelinePic;
        Carve.getInstance().goldCarve.source = goldCarvePic;
        Carve.getInstance().blackCarve.source = blackCarve;
    };
    Detail.prototype.toSeason = function () {
        this.parent.removeChild(this);
    };
    return Detail;
}(eui.Component));
__reflect(Detail.prototype, "Detail", ["eui.UIComponent", "egret.DisplayObject"]);
var Season = (function (_super) {
    __extends(Season, _super);
    function Season() {
        return _super.call(this) || this;
    }
    Season.getInstance = function () {
        if (!Season.shared) {
            Season.shared = new Season();
        }
        return Season.shared;
    };
    Season.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Season.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.Spring.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.Spring.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
        this.Summer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.Summer.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
        this.Autumn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.Autumn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
        this.Winter.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.Winter.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
        var tw = egret.Tween.get(this.Canvas, { loop: false });
        tw.to({ x: 1920 }, 2000).call(function () { }).wait(100);
        var data = RES.getRes("abc_json");
        var txtr = RES.getRes("abc_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData());
        this.Winter.addChild(mc1);
        mc1.gotoAndPlay(1, -1);
        var data = RES.getRes("Qiu_json");
        var txtr = RES.getRes("Qiu_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData());
        this.Autumn.addChild(mc1);
        mc1.gotoAndPlay(1, -1);
    };
    Season.prototype.onTouch = function (e) {
        switch (e.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                this.posStart = new egret.Point(e.stageX, e.stageY);
                break;
            case egret.TouchEvent.TOUCH_END:
                this.posEnd = new egret.Point(e.stageX, e.stageY);
                this.controlEnd(e);
                break;
        }
    };
    Season.prototype.controlEnd = function (e) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
        var disx = this.posEnd.x - this.posStart.x;
        var disy = this.posEnd.y - this.posStart.y;
        var SpringList = ["Lichun_png", "Yushui_png", "Jingzhe_png", "Chunfen_png", "Qingming_png", "Guyu_png"];
        var SummerList = ["Lixia_png", "Xiaoman_png", "Mangzhong_png", "Xiazhi_png", "Xiaoshu_png", "Dashu_png"];
        var AutumnList = ["Liqiu_png", "Chushu_png", "Bailu_png", "Qiufen_png", "Hanlu_png", "Shuangjiang_png"];
        var WinterList = ["Lidong_png", "Xiaoxue_png", "Daxue_png", "Dongzhi_png", "Xiaohan_png", "Dahan_png"];
        if (Math.abs(disx) > Math.abs(disy)) {
            if (disx > 0 && this.Canvas.x != 1920 && (this.Canvas.x == 0 || this.Canvas.x == 640 || this.Canvas.x == 1280)) {
                var tw = egret.Tween.get(this.Canvas, { loop: false });
                tw.to({ x: this.Canvas.x + 640 }, 1000).call(function () { }).wait(100);
            }
            else if (disx < 0 && this.Canvas.x != 0 && (this.Canvas.x == 1920 || this.Canvas.x == 640 || this.Canvas.x == 1280)) {
                var tw = egret.Tween.get(this.Canvas, { loop: false });
                tw.to({ x: this.Canvas.x - 640 }, 1000).call(function () { }).wait(100);
            }
        }
        if (Math.abs(disx) < 2 && Math.abs(disy) < 2) {
            this.addChild(Detail.getInstance());
            switch (e.currentTarget) {
                case this.Spring:
                    var count = 0;
                    for (var item in SpringList) {
                        var child = Detail.getInstance().season_group.getChildAt(count);
                        child.source = SpringList[item];
                        count++;
                    }
                    break;
                case this.Summer:
                    var count = 0;
                    for (var item in SummerList) {
                        var child = Detail.getInstance().season_group.getChildAt(count);
                        child.source = SummerList[item];
                        count++;
                    }
                    break;
                case this.Autumn:
                    var count = 0;
                    for (var item in AutumnList) {
                        var child = Detail.getInstance().season_group.getChildAt(count);
                        child.source = AutumnList[item];
                        count++;
                    }
                    break;
                case this.Winter:
                    var count = 0;
                    for (var item in WinterList) {
                        var child = Detail.getInstance().season_group.getChildAt(count);
                        child.source = WinterList[item];
                        count++;
                    }
                    break;
            }
        }
    };
    return Season;
}(eui.Component));
__reflect(Season.prototype, "Season", ["eui.UIComponent", "egret.DisplayObject"]);
var show = (function (_super) {
    __extends(show, _super);
    function show() {
        return _super.call(this) || this;
    }
    show.getInstance = function () {
        if (!show.shared) {
            show.shared = new show();
        }
        return show.shared;
    };
    show.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    show.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.toReturn, this);
    };
    show.prototype.toReturn = function () {
        this.parent.removeChild(this);
    };
    return show;
}(eui.Component));
__reflect(show.prototype, "show", ["eui.UIComponent", "egret.DisplayObject"]);
var StartGame = (function (_super) {
    __extends(StartGame, _super);
    function StartGame() {
        return _super.call(this) || this;
    }
    StartGame.getInstance = function () {
        if (!StartGame.shared) {
            StartGame.shared = new StartGame();
        }
        return StartGame.shared;
    };
    StartGame.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StartGame.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // var img = new eui.Image;
        // img.source = "16_png";
        // this.addChild(img);
        // img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.getpoint,this);
        // console.log(img.hitTestPoint(300,300,true));
        //this.btn_start.alpha=0;
        // let result = new egret.Bitmap();
        // let texture: egret.Texture = RES.getRes("16_png");
        // result.texture = texture;
        // this.addChild(result);
        // result.pixelHitTest=true;
        // console.log(result.hitTestPoint(400,400,true));
        //this.btn_start_bt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.getpoint,this);
        this.addChild(Season.getInstance());
    };
    StartGame.prototype.getpoint = function () {
        console.log("======>");
        // if (this.btn_start_bt.hitTestPoint(300,300,true))
        // {
        // 	this.toStartGame();
        // }
    };
    StartGame.prototype.toStartGame = function () {
        this.addChild(Season.getInstance());
    };
    return StartGame;
}(eui.Component));
__reflect(StartGame.prototype, "StartGame", ["eui.UIComponent", "egret.DisplayObject"]);

;window.Main = Main;