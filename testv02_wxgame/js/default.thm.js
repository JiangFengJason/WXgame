var egret = window.egret;window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","draw":"resource/game/draw.exml","StartGame":"resource/game/StartGame.exml","Season":"resource/game/Season.exml","Spring":"resource/game/Spring.exml","Summer":"resource/game/Summer.exml","Detail":"resource/game/Detail.exml","Carve":"resource/game/Carve.exml","Colorful":"resource/game/Colorful.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game/Carve.exml'] = window.CarveSkin = (function (_super) {
	__extends(CarveSkin, _super);
	var CarveSkin$Skin1 = 	(function (_super) {
		__extends(CarveSkin$Skin1, _super);
		function CarveSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","banzi_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","banzi_png")
					])
			];
		}
		var _proto = CarveSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "banzi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CarveSkin$Skin1;
	})(eui.Skin);

	var CarveSkin$Skin2 = 	(function (_super) {
		__extends(CarveSkin$Skin2, _super);
		function CarveSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = CarveSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CarveSkin$Skin2;
	})(eui.Skin);

	function CarveSkin() {
		_super.call(this);
		this.skinParts = ["banzi","toCarve","toXian","toPrint","carveLine","back"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.banzi_i(),this.toCarve_i(),this.toXian_i(),this.toPrint_i(),this.carveLine_i(),this.back_i()];
	}
	var _proto = CarveSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.banzi_i = function () {
		var t = new eui.Button();
		this.banzi = t;
		t.enabled = false;
		t.height = 750;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 496;
		t.skinName = CarveSkin$Skin1;
		return t;
	};
	_proto.toCarve_i = function () {
		var t = new eui.Button();
		this.toCarve = t;
		t.enabled = true;
		t.label = "刻";
		t.x = 438;
		t.y = 992;
		return t;
	};
	_proto.toXian_i = function () {
		var t = new eui.Button();
		this.toXian = t;
		t.label = "印";
		t.visible = false;
		t.x = 438;
		t.y = 992;
		return t;
	};
	_proto.toPrint_i = function () {
		var t = new eui.Button();
		this.toPrint = t;
		t.enabled = true;
		t.label = "刷";
		t.visible = false;
		t.x = 438;
		t.y = 992;
		return t;
	};
	_proto.carveLine_i = function () {
		var t = new eui.Image();
		this.carveLine = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 698;
		t.scaleX = 1;
		t.source = "Xiangaozip_jpg";
		t.width = 444;
		t.x = 102;
		t.y = 219;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Button();
		this.back = t;
		t.height = 34;
		t.label = "";
		t.left = 45;
		t.top = 45;
		t.width = 47;
		t.skinName = CarveSkin$Skin2;
		return t;
	};
	return CarveSkin;
})(eui.Skin);generateEUI.paths['resource/game/Colorful.exml'] = window.ColorfulSkin = (function (_super) {
	__extends(ColorfulSkin, _super);
	var ColorfulSkin$Skin3 = 	(function (_super) {
		__extends(ColorfulSkin$Skin3, _super);
		function ColorfulSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = ColorfulSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ColorfulSkin$Skin3;
	})(eui.Skin);

	function ColorfulSkin() {
		_super.call(this);
		this.skinParts = ["carveLineLarge","group1","group2","SpringGroup","SpringNumber","Numbers","back"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.carveLineLarge_i(),this.SpringGroup_i(),this.Numbers_i(),this.back_i()];
	}
	var _proto = ColorfulSkin.prototype;

	_proto.carveLineLarge_i = function () {
		var t = new eui.Image();
		this.carveLineLarge = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Xiangaozip_jpg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.SpringGroup_i = function () {
		var t = new eui.Group();
		this.SpringGroup = t;
		t.x = 306;
		t.y = 74.5;
		t.elementsContent = [this.group1_i(),this.group2_i()];
		return t;
	};
	_proto.group1_i = function () {
		var t = new eui.Group();
		this.group1 = t;
		t.alpha = 1;
		t.name = "1";
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 158;
		t.source = "1_3_png";
		t.width = 168.67;
		t.x = 0;
		t.y = 478.84;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 156.5;
		t.source = "1_2_png";
		t.width = 62.5;
		t.x = 172;
		t.y = 114.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.76;
		t.rotation = 0.88;
		t.source = "1_1_png";
		t.width = 128.39;
		t.x = 58.49;
		t.y = 1.53;
		return t;
	};
	_proto.group2_i = function () {
		var t = new eui.Group();
		this.group2 = t;
		t.alpha = 1;
		t.name = "2";
		t.visible = false;
		t.x = 83.34;
		t.y = 49.5;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.5;
		t.source = "2_1_png";
		t.width = 98;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.source = "2_2_png";
		t.width = 58.4;
		t.x = 59.86;
		t.y = 56.6;
		return t;
	};
	_proto.Numbers_i = function () {
		var t = new eui.Scroller();
		this.Numbers = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 640;
		t.x = 0;
		t.y = 1056;
		t.viewport = this.SpringNumber_i();
		return t;
	};
	_proto.SpringNumber_i = function () {
		var t = new eui.Group();
		this.SpringNumber = t;
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 880;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Button();
		this.back = t;
		t.height = 34;
		t.label = "";
		t.left = 45;
		t.top = 45;
		t.width = 47;
		t.skinName = ColorfulSkin$Skin3;
		return t;
	};
	return ColorfulSkin;
})(eui.Skin);generateEUI.paths['resource/game/Detail.exml'] = window.DetailSkin = (function (_super) {
	__extends(DetailSkin, _super);
	var DetailSkin$Skin4 = 	(function (_super) {
		__extends(DetailSkin$Skin4, _super);
		function DetailSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
			];
		}
		var _proto = DetailSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DetailSkin$Skin4;
	})(eui.Skin);

	function DetailSkin() {
		_super.call(this);
		this.skinParts = ["season_detail","season_detail0","season_detail1","season_detail2","season_detail3","season_detail4","season_group","back"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.season_group_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.back_i()];
	}
	var _proto = DetailSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.season_group_i = function () {
		var t = new eui.Group();
		this.season_group = t;
		t.x = 38;
		t.y = 201.33;
		t.elementsContent = [this.season_detail_i(),this.season_detail0_i(),this.season_detail1_i(),this.season_detail2_i(),this.season_detail3_i(),this.season_detail4_i()];
		return t;
	};
	_proto.season_detail_i = function () {
		var t = new eui.Image();
		this.season_detail = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 268;
		t.source = "Lichun_png";
		t.width = 272;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto.season_detail0_i = function () {
		var t = new eui.Image();
		this.season_detail0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 260.42;
		t.source = "Yushui_png";
		t.width = 265.94;
		t.x = 302.06;
		t.y = 0;
		return t;
	};
	_proto.season_detail1_i = function () {
		var t = new eui.Image();
		this.season_detail1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 255.88;
		t.source = "Jingzhe_png";
		t.width = 272;
		t.x = 2;
		t.y = 256;
		return t;
	};
	_proto.season_detail2_i = function () {
		var t = new eui.Image();
		this.season_detail2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 255.88;
		t.source = "Chunfen_png";
		t.width = 262.91;
		t.x = 305.09;
		t.y = 256;
		return t;
	};
	_proto.season_detail3_i = function () {
		var t = new eui.Image();
		this.season_detail3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 261.94;
		t.source = "Qingming_png";
		t.width = 265.94;
		t.x = 6.06;
		t.y = 504;
		return t;
	};
	_proto.season_detail4_i = function () {
		var t = new eui.Image();
		this.season_detail4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 258.91;
		t.source = "Guyu_png";
		t.width = 264.42;
		t.x = 303.58;
		t.y = 504;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.source = "lock_png";
		t.width = 42;
		t.x = 222;
		t.y = 122;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.source = "user_png";
		t.width = 52;
		t.x = 66;
		t.y = 990;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 12.93;
		t.anchorOffsetY = 13.5;
		t.height = 48;
		t.source = "rank_png";
		t.width = 48;
		t.x = 316.02;
		t.y = 1009.5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.source = "setting_png";
		t.width = 52;
		t.x = 528.54;
		t.y = 991;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 30;
		t.text = "解锁：1/6";
		t.textColor = 0x000000;
		t.width = 144;
		t.x = 285.09;
		t.y = 136;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 25;
		t.text = "我的";
		t.textColor = 0x000000;
		t.width = 67;
		t.x = 66;
		t.y = 1053;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 25;
		t.text = "排行";
		t.textColor = 0x000000;
		t.width = 67;
		t.x = 302;
		t.y = 1053;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 25;
		t.text = "设置";
		t.textColor = 0x000000;
		t.width = 67;
		t.x = 530;
		t.y = 1053;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Button();
		this.back = t;
		t.height = 34;
		t.label = "";
		t.left = 45;
		t.top = 45;
		t.width = 47;
		t.skinName = DetailSkin$Skin4;
		return t;
	};
	return DetailSkin;
})(eui.Skin);generateEUI.paths['resource/game/Season.exml'] = window.SeasonSkin = (function (_super) {
	__extends(SeasonSkin, _super);
	var SeasonSkin$Skin5 = 	(function (_super) {
		__extends(SeasonSkin$Skin5, _super);
		function SeasonSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Spring_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","Spring_png")
					])
			];
		}
		var _proto = SeasonSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Spring_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SeasonSkin$Skin5;
	})(eui.Skin);

	var SeasonSkin$Skin6 = 	(function (_super) {
		__extends(SeasonSkin$Skin6, _super);
		function SeasonSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Summer_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","Summer_png")
					])
			];
		}
		var _proto = SeasonSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Summer_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SeasonSkin$Skin6;
	})(eui.Skin);

	var SeasonSkin$Skin7 = 	(function (_super) {
		__extends(SeasonSkin$Skin7, _super);
		function SeasonSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Autumn_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","Autumn_png")
					])
			];
		}
		var _proto = SeasonSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Autumn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SeasonSkin$Skin7;
	})(eui.Skin);

	var SeasonSkin$Skin8 = 	(function (_super) {
		__extends(SeasonSkin$Skin8, _super);
		function SeasonSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Winter_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","Winter_png")
					])
			];
		}
		var _proto = SeasonSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Winter_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SeasonSkin$Skin8;
	})(eui.Skin);

	function SeasonSkin() {
		_super.call(this);
		this.skinParts = ["bird","Spring","Summer","Autumn","Winter","Canvas"];
		
		this.height = 1136;
		this.width = 640;
		this.bird_i();
		this.elementsContent = [this.Canvas_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.image"],[0],this._TweenItem1,"target");
	}
	var _proto = SeasonSkin.prototype;

	_proto.bird_i = function () {
		var t = new egret.tween.TweenGroup();
		this.bird = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto.Canvas_i = function () {
		var t = new eui.Group();
		this.Canvas = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.Spring_i(),this.Summer_i(),this.Autumn_i(),this.Winter_i()];
		return t;
	};
	_proto.Spring_i = function () {
		var t = new eui.Button();
		this.Spring = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.label = "";
		t.width = 640;
		t.x = -1920;
		t.y = 0;
		t.skinName = SeasonSkin$Skin5;
		return t;
	};
	_proto.Summer_i = function () {
		var t = new eui.Button();
		this.Summer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.label = "";
		t.width = 640;
		t.x = -1280;
		t.y = 0;
		t.skinName = SeasonSkin$Skin6;
		return t;
	};
	_proto.Autumn_i = function () {
		var t = new eui.Button();
		this.Autumn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.label = "";
		t.width = 640;
		t.x = -640;
		t.y = 0;
		t.skinName = SeasonSkin$Skin7;
		return t;
	};
	_proto.Winter_i = function () {
		var t = new eui.Button();
		this.Winter = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.label = "";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.skinName = SeasonSkin$Skin8;
		return t;
	};
	return SeasonSkin;
})(eui.Skin);generateEUI.paths['resource/game/StartGame.exml'] = window.StartGameSkin = (function (_super) {
	__extends(StartGameSkin, _super);
	function StartGameSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
	}
	var _proto = StartGameSkin.prototype;

	return StartGameSkin;
})(eui.Skin);