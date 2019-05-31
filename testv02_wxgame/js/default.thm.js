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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","draw":"resource/game/draw.exml","StartGame":"resource/game/StartGame.exml","Season":"resource/game/Season.exml","Spring":"resource/game/Spring.exml","Summer":"resource/game/Summer.exml","Detail":"resource/game/Detail.exml","Carve":"resource/game/Carve.exml","Colorful":"resource/game/Colorful.exml","show":"resource/game/show.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
						new eui.SetProperty("_Image1","source","knif_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","knif_png")
					])
			];
		}
		var _proto = CarveSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "knif_png";
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

	var CarveSkin$Skin3 = 	(function (_super) {
		__extends(CarveSkin$Skin3, _super);
		function CarveSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","brush_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","brush_png")
					])
			];
		}
		var _proto = CarveSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "brush_png";
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
		return CarveSkin$Skin3;
	})(eui.Skin);

	var CarveSkin$Skin4 = 	(function (_super) {
		__extends(CarveSkin$Skin4, _super);
		function CarveSkin$Skin4() {
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
		var _proto = CarveSkin$Skin4.prototype;

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
		return CarveSkin$Skin4;
	})(eui.Skin);

	function CarveSkin() {
		_super.call(this);
		this.skinParts = ["BrushText","CarveText","PrintText","PaintText","banzi","toCarve","toPrint","goldCarve","blackCarve","carveLine","back"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.BrushText_i(),this.CarveText_i(),this.PrintText_i(),this.PaintText_i(),this._Image5_i(),this.banzi_i(),this.toCarve_i(),this.toPrint_i(),this.goldCarve_i(),this.blackCarve_i(),this.carveLine_i(),this.back_i()];
	}
	var _proto = CarveSkin.prototype;

	_proto.BrushText_i = function () {
		var t = new eui.Group();
		this.BrushText = t;
		t.alpha = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.source = "blackbg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "刷";
		t.width = 43.69;
		t.x = 443.48;
		t.y = 299.98;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 678.01;
		t.text = "刷墨时要施加一定的力量，";
		t.width = 43.69;
		t.x = 392.52;
		t.y = 299.33;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 638.01;
		t.text = "雕版上的墨线才会均匀。";
		t.width = 43.69;
		t.x = 269.2;
		t.y = 297.36;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 638.01;
		t.text = "只有当刷子上的墨均匀,";
		t.width = 43.69;
		t.x = 332.5;
		t.y = 298.05;
		return t;
	};
	_proto.CarveText_i = function () {
		var t = new eui.Group();
		this.CarveText = t;
		t.alpha = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Label5_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.source = "blackbg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "刻时斜口弹道，以刀向木，直刻而下";
		t.width = 43.69;
		t.x = 392.82;
		t.y = 302.64;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "深刻半厘米以上";
		t.width = 43.69;
		t.x = 335.83;
		t.y = 302.64;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "刻";
		t.width = 43.69;
		t.x = 444.16;
		t.y = 302;
		return t;
	};
	_proto.PrintText_i = function () {
		var t = new eui.Group();
		this.PrintText = t;
		t.alpha = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image3_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.source = "blackbg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "印";
		t.width = 43.69;
		t.x = 443.48;
		t.y = 302.64;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "印稿时使纸的中心与桌边记号对齐，";
		t.width = 43.69;
		t.x = 395.8;
		t.y = 302.64;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "再用棕毛擦子从左至右、从上往下平抹，";
		t.width = 43.69;
		t.x = 336.49;
		t.y = 304.66;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "将线条完全平印上去。";
		t.width = 43.69;
		t.x = 266.49;
		t.y = 302.69;
		return t;
	};
	_proto.PaintText_i = function () {
		var t = new eui.Group();
		this.PaintText = t;
		t.alpha = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Image4_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.source = "blackbg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "彩绘";
		t.width = 43.69;
		t.x = 443.48;
		t.y = 302.64;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "彩绘是绵竹年画的最大特色，";
		t.width = 43.69;
		t.x = 395.8;
		t.y = 302.64;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 643.34;
		t.text = "线板从不套色制作，最后完成全部靠手工彩绘。";
		t.width = 43.69;
		t.x = 336.49;
		t.y = 304.66;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 563.34;
		t.text = "开始体验你的彩绘之旅吧！";
		t.width = 43.69;
		t.x = 266.49;
		t.y = 302.69;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bgofBz_jpg";
		t.top = 0;
		return t;
	};
	_proto.banzi_i = function () {
		var t = new eui.Button();
		this.banzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = false;
		t.height = 626;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 15;
		t.width = 412;
		t.skinName = CarveSkin$Skin1;
		return t;
	};
	_proto.toCarve_i = function () {
		var t = new eui.Button();
		this.toCarve = t;
		t.enabled = true;
		t.height = 93.5;
		t.label = "";
		t.width = 110.5;
		t.x = 438;
		t.y = 992;
		t.skinName = CarveSkin$Skin2;
		return t;
	};
	_proto.toPrint_i = function () {
		var t = new eui.Button();
		this.toPrint = t;
		t.enabled = true;
		t.height = 92;
		t.label = "";
		t.visible = false;
		t.width = 101.6;
		t.x = 438;
		t.y = 992;
		t.skinName = CarveSkin$Skin3;
		return t;
	};
	_proto.goldCarve_i = function () {
		var t = new eui.Image();
		this.goldCarve = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 588;
		t.scaleX = 1;
		t.source = "Xiangaozip_jpg";
		t.width = 370;
		t.x = 138;
		t.y = 292;
		return t;
	};
	_proto.blackCarve_i = function () {
		var t = new eui.Image();
		this.blackCarve = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 588;
		t.scaleX = 1;
		t.source = "Xiangaozip_jpg";
		t.width = 370;
		t.x = 138;
		t.y = 292;
		return t;
	};
	_proto.carveLine_i = function () {
		var t = new eui.Image();
		this.carveLine = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 588;
		t.scaleX = 1;
		t.source = "Xiangaozip_jpg";
		t.width = 370;
		t.x = 138;
		t.y = 292;
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
		t.skinName = CarveSkin$Skin4;
		return t;
	};
	return CarveSkin;
})(eui.Skin);generateEUI.paths['resource/game/Colorful.exml'] = window.ColorfulSkin = (function (_super) {
	__extends(ColorfulSkin, _super);
	var ColorfulSkin$Skin5 = 	(function (_super) {
		__extends(ColorfulSkin$Skin5, _super);
		function ColorfulSkin$Skin5() {
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
		var _proto = ColorfulSkin$Skin5.prototype;

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
		return ColorfulSkin$Skin5;
	})(eui.Skin);

	function ColorfulSkin() {
		_super.call(this);
		this.skinParts = ["carveLineLarge","SpringGroup","SummerGroup","AutumnGroup","WinterGroup","Numbers","save","Card","Save","back"];
		
		this.currentState = "衣服绿8_png";
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.carveLineLarge_i(),this._Scroller1_i(),this._Scroller2_i(),this.Save_i(),this.back_i()];
	}
	var _proto = ColorfulSkin.prototype;

	_proto.carveLineLarge_i = function () {
		var t = new eui.Image();
		this.carveLineLarge = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LixiaXian_png";
		t.top = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group66_i();
		return t;
	};
	_proto._Group66_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.SpringGroup_i(),this.SummerGroup_i(),this.AutumnGroup_i(),this.WinterGroup_i()];
		return t;
	};
	_proto.SpringGroup_i = function () {
		var t = new eui.Group();
		this.SpringGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 306;
		t.y = 74.5;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.source = "脸2_png";
		t.width = 119.33;
		t.x = -42.33;
		t.y = 263.51;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.84;
		t.source = "脖子2_png";
		t.width = 51.16;
		t.x = -15.71;
		t.y = 382.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.45;
		t.rotation = 0.88;
		t.source = "右手12_png";
		t.width = 46.54;
		t.x = -13.07;
		t.y = 427.81;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.17;
		t.source = "右手22_png";
		t.width = 16;
		t.x = 23.67;
		t.y = 468.31;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.17;
		t.source = "左手3_png";
		t.width = 37;
		t.x = -120.83;
		t.y = 415.81;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46.67;
		t.source = "左手12_png";
		t.width = 44.5;
		t.x = -144.83;
		t.y = 398.81;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.17;
		t.source = "左手22_png";
		t.width = 33;
		t.x = -131.5;
		t.y = 406;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.visible = false;
		t.x = 83.34;
		t.y = 49.5;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.source = "右腮红2_png";
		t.width = 31.95;
		t.x = -63.14;
		t.y = 302;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.5;
		t.source = "左腮红2_png";
		t.width = 35;
		t.x = -117.14;
		t.y = 290;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.5;
		t.source = "右眼影_png";
		t.width = 30.9;
		t.x = -59.64;
		t.y = 284.6;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15;
		t.source = "左眼影_png";
		t.width = 33.4;
		t.x = -108.14;
		t.y = 278.1;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -140.02;
		t.y = 272.51;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Image42_i(),this._Image43_i(),this._Image44_i(),this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Image50_i(),this._Image51_i(),this._Image52_i(),this._Image53_i(),this._Image54_i(),this._Image55_i(),this._Image56_i(),this._Image57_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18;
		t.source = "头绳1_png";
		t.width = 18.5;
		t.x = 71.52;
		t.y = 3.99;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10.76;
		t.rotation = 0.69;
		t.source = "头绳2_png";
		t.width = 5.67;
		t.x = 85.52;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.74;
		t.rotation = 0.69;
		t.source = "头绳3_png";
		t.width = 8.26;
		t.x = 218.83;
		t.y = 30.47;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.55;
		t.rotation = 0.69;
		t.source = "腰带红1_png";
		t.width = 35.94;
		t.x = 78.43;
		t.y = 193.4;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.03;
		t.rotation = 0.69;
		t.source = "腰带红2_png";
		t.width = 30.93;
		t.x = 96.78;
		t.y = 215;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.52;
		t.rotation = 0.69;
		t.source = "腰带红3_png";
		t.width = 40.42;
		t.x = 136.35;
		t.y = 214.84;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.51;
		t.rotation = 0.69;
		t.source = "腰带红4_png";
		t.width = 25.49;
		t.x = 121.87;
		t.y = 215.04;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89.61;
		t.rotation = 0.69;
		t.source = "腰带红5_png";
		t.width = 65;
		t.x = 63.33;
		t.y = 226.22;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.63;
		t.rotation = 0.69;
		t.source = "腰带红6_png";
		t.width = 33.55;
		t.x = 42.02;
		t.y = 305.85;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104.33;
		t.rotation = 0.69;
		t.source = "腰带红7_png";
		t.width = 68;
		t.x = 86.57;
		t.y = 222.57;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.86;
		t.rotation = 0.69;
		t.source = "腰带红8_png";
		t.width = 13.63;
		t.x = 73.04;
		t.y = 323.79;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.62;
		t.rotation = 0.69;
		t.source = "衣服花纹红10_png";
		t.width = 18.7;
		t.x = 88.03;
		t.y = 170.65;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 8.88;
		t.rotation = 0.69;
		t.source = "衣服花纹红11_png";
		t.width = 11.16;
		t.x = 91.28;
		t.y = 177.11;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.39;
		t.rotation = 0.69;
		t.source = "衣服花纹红12_png";
		t.width = 12.67;
		t.x = 78.73;
		t.y = 191.83;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.89;
		t.rotation = 0.69;
		t.source = "衣服花纹红13_png";
		t.width = 25.18;
		t.x = 125.2;
		t.y = 202.76;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17.99;
		t.rotation = 0.69;
		t.source = "衣服花纹红15_png";
		t.width = 9.35;
		t.x = 209.64;
		t.y = 116.52;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.93;
		t.rotation = 0.69;
		t.source = "衣服花纹红16_png";
		t.width = 13.32;
		t.x = 219.29;
		t.y = 113.56;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.51;
		t.rotation = 0.69;
		t.source = "衣服花纹红17_png";
		t.width = 18.82;
		t.x = 234.12;
		t.y = 95.51;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.48;
		t.rotation = 0.69;
		t.source = "衣服花纹红18_png";
		t.width = 10.82;
		t.x = 241.19;
		t.y = 99.82;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17.53;
		t.rotation = 0.69;
		t.source = "衣服花纹红19_png";
		t.width = 20.8;
		t.x = 224.99;
		t.y = 135.46;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.6;
		t.rotation = 0.69;
		t.source = "衣服花纹红2_png";
		t.width = 15.38;
		t.x = 54.33;
		t.y = 92.26;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.47;
		t.rotation = 0.69;
		t.source = "衣服花纹红1_png";
		t.width = 7.77;
		t.x = 55.62;
		t.y = 96.37;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.06;
		t.rotation = 0.69;
		t.source = "衣服花纹红21_png";
		t.width = 20.9;
		t.x = 204.78;
		t.y = 155.45;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.09;
		t.rotation = 0.69;
		t.source = "衣服花纹红20_png";
		t.width = 7.18;
		t.x = 211.83;
		t.y = 159.42;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.9;
		t.rotation = 0.69;
		t.source = "衣服花纹红22_png";
		t.width = 15.6;
		t.x = 248.46;
		t.y = 148.09;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10.29;
		t.rotation = 0.69;
		t.source = "衣服花纹红23_png";
		t.width = 10.53;
		t.x = 252.77;
		t.y = 154.43;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.46;
		t.rotation = 0.69;
		t.source = "衣服花纹红25_png";
		t.width = 24.47;
		t.x = 230.71;
		t.y = 178.45;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 5.61;
		t.rotation = 0.69;
		t.source = "衣服花纹红26_png";
		t.width = 9.74;
		t.x = 239.23;
		t.y = 186.73;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17.48;
		t.rotation = 0.69;
		t.source = "衣服花纹红27_png";
		t.width = 19.51;
		t.x = 210.66;
		t.y = 195.11;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10.32;
		t.rotation = 0.69;
		t.source = "衣服花纹红28_png";
		t.width = 9.76;
		t.x = 214.91;
		t.y = 201.05;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.47;
		t.rotation = 0.69;
		t.source = "衣服花纹红29_png";
		t.width = 20.01;
		t.x = 223.83;
		t.y = 232.12;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.44;
		t.rotation = 0.69;
		t.source = "衣服花纹红3_png";
		t.width = 15.1;
		t.x = 62.82;
		t.y = 115.09;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.37;
		t.rotation = 0.69;
		t.source = "衣服花纹红4_png";
		t.width = 7.53;
		t.x = 68.04;
		t.y = 120.72;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.74;
		t.rotation = 0.69;
		t.source = "衣服花纹红30_png";
		t.width = 16.21;
		t.x = 199.1;
		t.y = 241.59;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.07;
		t.rotation = 0.69;
		t.source = "衣服花纹红31_png";
		t.width = 6.38;
		t.x = 194.46;
		t.y = 251.41;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 14.95;
		t.rotation = 0.69;
		t.source = "衣服花纹红32_png";
		t.width = 19.82;
		t.x = 198.68;
		t.y = 263.47;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16.15;
		t.rotation = 0.69;
		t.source = "衣服花纹红33_png";
		t.width = 28.62;
		t.x = 227.07;
		t.y = 278.49;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.9;
		t.rotation = 0.69;
		t.source = "衣服花纹红34_png";
		t.width = 19.14;
		t.x = 60.91;
		t.y = 266.41;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.29;
		t.rotation = 0.69;
		t.source = "衣服花纹红35_png";
		t.width = 11.52;
		t.x = 13.93;
		t.y = 225.36;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.67;
		t.rotation = 0.69;
		t.source = "衣服花纹红36_png";
		t.width = 18.7;
		t.x = 0;
		t.y = 227.86;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.65;
		t.rotation = 0.69;
		t.source = "衣服花纹红37_png";
		t.width = 9.84;
		t.x = 99.31;
		t.y = 243.47;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.6;
		t.rotation = 0.69;
		t.source = "衣服花纹红5_png";
		t.width = 13.87;
		t.x = 85.11;
		t.y = 102.21;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.62;
		t.rotation = 0.69;
		t.source = "衣服花纹红6_png";
		t.width = 5.37;
		t.x = 91.66;
		t.y = 109.15;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.1;
		t.rotation = 0.69;
		t.source = "衣服花纹红7_png";
		t.width = 19.87;
		t.x = 77.86;
		t.y = 137.03;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.36;
		t.rotation = 0.69;
		t.source = "衣服花纹红8_png";
		t.width = 11.93;
		t.x = 78.29;
		t.y = 145.42;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.44;
		t.rotation = 0.69;
		t.source = "右手花_png";
		t.width = 32.45;
		t.x = 114.16;
		t.y = 120.63;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -67.5;
		t.y = 257.5;
		t.elementsContent = [this._Image58_i(),this._Image59_i(),this._Image60_i(),this._Image61_i(),this._Image62_i(),this._Image63_i()];
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.5;
		t.source = "头发1_png";
		t.width = 16.5;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17;
		t.source = "头发2_png";
		t.width = 25;
		t.x = 18;
		t.y = 16.5;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.5;
		t.source = "头发3_png";
		t.width = 14.75;
		t.x = 136.5;
		t.y = 40.5;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "头发4_png";
		t.width = 20;
		t.x = 150.5;
		t.y = 47.5;
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 7.01;
		t.source = "右眼2_png";
		t.width = 8;
		t.x = 97.5;
		t.y = 85.66;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6.01;
		t.source = "左眼_png";
		t.width = 8.25;
		t.x = 58;
		t.y = 79.91;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -49.7;
		t.y = 341;
		t.elementsContent = [this._Image64_i(),this._Image65_i()];
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.5;
		t.source = "右领_png";
		t.width = 70;
		t.x = 49;
		t.y = 21;
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115.5;
		t.source = "左领_png";
		t.width = 38;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -202.2;
		t.y = 594.5;
		t.elementsContent = [this._Image66_i(),this._Image67_i()];
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39.5;
		t.source = "右鞋2_png";
		t.width = 40.5;
		t.x = 170.2;
		t.y = 0;
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.source = "左鞋2_png";
		t.width = 54;
		t.x = 0;
		t.y = 4.5;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -151;
		t.y = 343.5;
		t.elementsContent = [this._Image68_i(),this._Image69_i(),this._Image70_i(),this._Image71_i(),this._Image72_i(),this._Image73_i(),this._Image74_i(),this._Image75_i(),this._Image76_i(),this._Image77_i(),this._Image78_i(),this._Image79_i(),this._Image80_i(),this._Image81_i(),this._Image82_i()];
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 243.5;
		t.source = "衣服绿1_png";
		t.width = 223;
		t.x = 46.5;
		t.y = 0;
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 133.5;
		t.source = "衣服绿2_png";
		t.width = 79.99;
		t.x = 195.17;
		t.y = 7.33;
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.83;
		t.source = "衣服绿3_png";
		t.width = 112.66;
		t.x = 15.5;
		t.y = 120;
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71.16;
		t.source = "衣服绿4_png";
		t.width = 29.99;
		t.x = 124.17;
		t.y = 159;
		return t;
	};
	_proto._Image72_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.9;
		t.source = "衣服绿10_png";
		t.width = 13.4;
		t.x = 100.9;
		t.y = 104;
		return t;
	};
	_proto._Image73_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17.5;
		t.source = "衣服绿11_png";
		t.width = 15.8;
		t.x = 89.3;
		t.y = 69.6;
		return t;
	};
	_proto._Image74_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.75;
		t.source = "衣服绿14_png";
		t.width = 28;
		t.x = 0;
		t.y = 164.5;
		return t;
	};
	_proto._Image75_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 8.75;
		t.source = "衣服绿15_png";
		t.width = 19.75;
		t.x = 139.25;
		t.y = 135.75;
		return t;
	};
	_proto._Image76_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16.42;
		t.source = "衣服绿18_png";
		t.width = 15.4;
		t.x = 248.59;
		t.y = 28.42;
		return t;
	};
	_proto._Image77_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.42;
		t.source = "衣服绿20_png";
		t.width = 14.42;
		t.x = 239.25;
		t.y = 67.42;
		return t;
	};
	_proto._Image78_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.09;
		t.source = "衣服绿21_png";
		t.width = 12.75;
		t.x = 219.46;
		t.y = 86.39;
		return t;
	};
	_proto._Image79_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 14.09;
		t.source = "衣服绿22_png";
		t.width = 12.42;
		t.x = 262.46;
		t.y = 81.06;
		return t;
	};
	_proto._Image80_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 14.42;
		t.source = "衣服绿7_png";
		t.width = 11.75;
		t.x = 77.13;
		t.y = 47.73;
		return t;
	};
	_proto._Image81_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.62;
		t.source = "衣服绿24_png";
		t.width = 19.76;
		t.x = 245.77;
		t.y = 112.8;
		return t;
	};
	_proto._Image82_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.96;
		t.source = "衣服绿8_png";
		t.width = 7.43;
		t.x = 100.1;
		t.y = 34.46;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -127.33;
		t.y = 408.66;
		t.elementsContent = [this._Image83_i(),this._Image84_i()];
		return t;
	};
	_proto._Image83_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.01;
		t.source = "右袖_png";
		t.width = 65.66;
		t.x = 142;
		t.y = 18;
		return t;
	};
	_proto._Image84_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.01;
		t.source = "左袖_png";
		t.width = 65.16;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 13;
		t.y = 370;
		t.elementsContent = [this._Image85_i()];
		return t;
	};
	_proto._Image85_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右边上花_png";
		t.width = 86;
		t.x = -297.5;
		t.y = -64.5;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -117.33;
		t.y = 418.66;
		t.elementsContent = [this._Image86_i()];
		return t;
	};
	_proto._Image86_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 147.51;
		t.source = "右边花_png";
		t.width = 113.16;
		t.x = -133.5;
		t.y = 9.5;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -107.33;
		t.y = 428.66;
		t.elementsContent = [this._Image87_i()];
		return t;
	};
	_proto._Image87_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 148.01;
		t.source = "左边花_png";
		t.width = 147.16;
		t.x = 216;
		t.y = -26.5;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -97.33;
		t.y = 438.66;
		t.elementsContent = [this._Image88_i()];
		return t;
	};
	_proto._Image88_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117.51;
		t.source = "右边上花叶1_png";
		t.width = 172.16;
		t.x = -197;
		t.y = -112.5;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -77.33;
		t.y = 458.66;
		t.elementsContent = [this._Image89_i(),this._Image90_i(),this._Image91_i(),this._Image92_i(),this._Image93_i(),this._Image94_i(),this._Image95_i(),this._Image96_i(),this._Image97_i()];
		return t;
	};
	_proto._Image89_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.68;
		t.source = "右边花叶1_png";
		t.width = 34.16;
		t.x = -163;
		t.y = 90;
		return t;
	};
	_proto._Image90_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.18;
		t.source = "右边花叶2_png";
		t.width = 63.66;
		t.x = -216;
		t.y = -7;
		return t;
	};
	_proto._Image91_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41.68;
		t.source = "右边花叶3_png";
		t.width = 64.66;
		t.x = -145;
		t.y = -49.5;
		return t;
	};
	_proto._Image92_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.18;
		t.source = "右边上花叶2_png";
		t.width = 66.66;
		t.x = -147;
		t.y = -82;
		return t;
	};
	_proto._Image93_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17.18;
		t.source = "右边花叶4_png";
		t.width = 35.66;
		t.x = -118;
		t.y = -70;
		return t;
	};
	_proto._Image94_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58.68;
		t.source = "右边花叶5 _png";
		t.width = 41.16;
		t.x = -91.5;
		t.y = -37;
		return t;
	};
	_proto._Image95_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.68;
		t.source = "左边花叶1_png";
		t.width = 33.16;
		t.x = 165.5;
		t.y = 25.5;
		return t;
	};
	_proto._Image96_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.68;
		t.source = "左边花叶2_png";
		t.width = 79.16;
		t.x = 192.5;
		t.y = 67.5;
		return t;
	};
	_proto._Image97_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.68;
		t.source = "左边花叶3_png";
		t.width = 75.66;
		t.x = 306;
		t.y = 42.5;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -211.5;
		t.y = 394;
		t.elementsContent = [this._Image98_i(),this._Image99_i(),this._Image100_i()];
		return t;
	};
	_proto._Image98_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.5;
		t.source = "右边上花根1_png";
		t.width = 66;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image99_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.source = "右边上花根3_png";
		t.width = 26.5;
		t.x = 94;
		t.y = 28.5;
		return t;
	};
	_proto._Image100_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 14.2;
		t.source = "右手花根_png";
		t.width = 11.4;
		t.x = 205.1;
		t.y = 28.9;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = -201.67;
		t.y = 518.67;
		t.elementsContent = [this._Image101_i(),this._Image102_i()];
		return t;
	};
	_proto._Image101_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.source = "右裤_png";
		t.width = 126.68;
		t.x = 180.67;
		t.y = 42;
		return t;
	};
	_proto._Image102_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105.33;
		t.source = "左裤_png";
		t.width = 137.35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.SummerGroup_i = function () {
		var t = new eui.Group();
		this.SummerGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group16_i(),this._Group17_i(),this._Group18_i(),this._Group19_i(),this._Group20_i(),this._Group21_i(),this._Group22_i(),this._Group23_i(),this._Group24_i(),this._Group25_i(),this._Group26_i(),this._Group27_i(),this._Group28_i(),this._Group29_i(),this._Group30_i(),this._Group31_i()];
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 229.00000000000003;
		t.y = 411;
		t.elementsContent = [this._Image103_i(),this._Image104_i(),this._Image105_i(),this._Image106_i(),this._Image107_i(),this._Image108_i(),this._Image109_i(),this._Image110_i(),this._Image111_i(),this._Image112_i()];
		return t;
	};
	_proto._Image103_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.36;
		t.source = "右娃脖子2_png";
		t.width = 21.76;
		t.x = 167;
		t.y = 142.17;
		return t;
	};
	_proto._Image104_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 161.03;
		t.source = "右娃脸2_png";
		t.width = 163.09;
		t.x = 113.67;
		t.y = -17.83;
		return t;
	};
	_proto._Image105_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.03;
		t.source = "右娃右手_png";
		t.width = 53.09;
		t.x = 238.24;
		t.y = 126.36;
		return t;
	};
	_proto._Image106_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.36;
		t.source = "右娃左手2_png";
		t.width = 57.09;
		t.x = 221.58;
		t.y = 175.02;
		return t;
	};
	_proto._Image107_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.86;
		t.source = "左娃脖子2_png";
		t.width = 25.86;
		t.x = 2.01;
		t.y = -55.59;
		return t;
	};
	_proto._Image108_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 85.75;
		t.anchorOffsetY = 71.4;
		t.height = 146.26;
		t.source = "左娃脸_png";
		t.width = 163.06;
		t.x = -56.64;
		t.y = -90.19;
		return t;
	};
	_proto._Image109_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 37.37;
		t.anchorOffsetY = 21.01;
		t.height = 43.06;
		t.source = "左娃右手2_png";
		t.width = 71.06;
		t.x = 161.38;
		t.y = -38.18;
		return t;
	};
	_proto._Image110_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 14.87;
		t.anchorOffsetY = 15.73;
		t.height = 32.26;
		t.source = "左娃右手臂_png";
		t.width = 28.26;
		t.x = 132.08;
		t.y = -15.06;
		return t;
	};
	_proto._Image111_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 44.34;
		t.anchorOffsetY = 28.2;
		t.height = 57.86;
		t.source = "左娃左手_png";
		t.width = 84.26;
		t.x = 116.75;
		t.y = -51.39;
		return t;
	};
	_proto._Image112_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 22.45;
		t.anchorOffsetY = 31.9;
		t.height = 65.46;
		t.source = "左娃左手臂_png";
		t.width = 42.66;
		t.x = 77.26;
		t.y = -1.69;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 239.00000000000003;
		t.y = 421;
		t.elementsContent = [this._Image113_i(),this._Image114_i(),this._Image115_i(),this._Image116_i(),this._Image117_i(),this._Image118_i()];
		return t;
	};
	_proto._Image113_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 33.24;
		t.anchorOffsetY = 26.25;
		t.height = 52.36;
		t.source = "右娃右腮红2_png";
		t.width = 66.96;
		t.x = 160.24;
		t.y = 106.12;
		return t;
	};
	_proto._Image114_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 13.39;
		t.anchorOffsetY = 18.04;
		t.height = 35.96;
		t.source = "右娃左腮红_png";
		t.width = 26.96;
		t.x = 115.29;
		t.y = 71.91;
		return t;
	};
	_proto._Image115_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 15.97;
		t.anchorOffsetY = 22.26;
		t.height = 44.36;
		t.source = "左娃右腮红2_png";
		t.width = 32.16;
		t.x = -6.63;
		t.y = -95.07;
		return t;
	};
	_proto._Image116_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 7.03;
		t.anchorOffsetY = 11.02;
		t.height = 21.96;
		t.source = "左娃右眼皮2_png";
		t.width = 14.16;
		t.x = -29.57;
		t.y = -119.51;
		return t;
	};
	_proto._Image117_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 35.23;
		t.anchorOffsetY = 25.27;
		t.height = 50.36;
		t.source = "左娃左腮红2_png";
		t.width = 70.96;
		t.x = -46.57;
		t.y = -54.86;
		return t;
	};
	_proto._Image118_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 9.62;
		t.anchorOffsetY = 13.82;
		t.height = 27.56;
		t.source = "左娃左眼皮2_png";
		t.width = 19.36;
		t.x = -71.78;
		t.y = -82.71;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 249.00000000000003;
		t.y = 431;
		t.elementsContent = [this._Image119_i(),this._Image120_i(),this._Image121_i(),this._Image122_i(),this._Image123_i(),this._Image124_i(),this._Image125_i(),this._Image126_i(),this._Image127_i(),this._Image128_i(),this._Image129_i(),this._Image130_i(),this._Image131_i(),this._Image132_i(),this._Image133_i(),this._Image134_i(),this._Image135_i()];
		return t;
	};
	_proto._Image119_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 9.31;
		t.anchorOffsetY = 5.19;
		t.height = 10.36;
		t.source = "右娃上嘴唇_png";
		t.width = 18.76;
		t.x = 122.61;
		t.y = 79.56;
		return t;
	};
	_proto._Image120_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 11.34;
		t.anchorOffsetY = 19.93;
		t.height = 39.76;
		t.source = "右娃头绳_png";
		t.width = 22.86;
		t.x = 251.94;
		t.y = 50.9;
		return t;
	};
	_proto._Image121_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 7.72;
		t.anchorOffsetY = 6;
		t.height = 11.96;
		t.source = "右娃下嘴唇_png";
		t.width = 15.56;
		t.x = 118.22;
		t.y = 83.57;
		return t;
	};
	_proto._Image122_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 22.99;
		t.anchorOffsetY = 21.05;
		t.height = 41.96;
		t.source = "右娃右鞋红_png";
		t.width = 46.36;
		t.x = 198.69;
		t.y = 376.22;
		return t;
	};
	_proto._Image123_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 28.54;
		t.anchorOffsetY = 28.88;
		t.height = 57.56;
		t.source = "右娃左鞋红_png";
		t.width = 57.56;
		t.x = 94.24;
		t.y = 430.45;
		return t;
	};
	_proto._Image124_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 8.11;
		t.anchorOffsetY = 7;
		t.height = 13.96;
		t.source = "左娃上嘴唇_png";
		t.width = 16.36;
		t.x = -30.99;
		t.y = -83.83;
		return t;
	};
	_proto._Image125_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 11.88;
		t.anchorOffsetY = 17.67;
		t.height = 35.16;
		t.source = "左娃头绳1_png";
		t.width = 23.96;
		t.x = -151.22;
		t.y = -76.76;
		return t;
	};
	_proto._Image126_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 18.03;
		t.anchorOffsetY = 4.61;
		t.height = 9.16;
		t.source = "左娃头绳2_png";
		t.width = 36.36;
		t.x = -74.67;
		t.y = -181.92;
		return t;
	};
	_proto._Image127_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 9.11;
		t.anchorOffsetY = 5.61;
		t.height = 11.16;
		t.source = "左娃下嘴唇_png";
		t.width = 18.36;
		t.x = -27.89;
		t.y = -82.52;
		return t;
	};
	_proto._Image128_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 31.55;
		t.anchorOffsetY = 33.96;
		t.height = 67.56;
		t.source = "左娃衣服红3_png";
		t.width = 63.56;
		t.x = 29.35;
		t.y = -60.17;
		return t;
	};
	_proto._Image129_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 11.29;
		t.anchorOffsetY = 29.13;
		t.height = 57.96;
		t.source = "左娃衣服红2_png";
		t.width = 22.76;
		t.x = 13.49;
		t.y = -69.4;
		return t;
	};
	_proto._Image130_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 49.78;
		t.anchorOffsetY = 46.41;
		t.height = 92.36;
		t.source = "左娃衣服红4_png";
		t.width = 100.36;
		t.x = -19.22;
		t.y = 20.68;
		return t;
	};
	_proto._Image131_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 37.09;
		t.anchorOffsetY = 16.06;
		t.height = 31.96;
		t.source = "左娃衣服红1_png";
		t.width = 74.76;
		t.x = -30.31;
		t.y = -25.67;
		return t;
	};
	_proto._Image132_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 7.66;
		t.anchorOffsetY = 29.78;
		t.height = 76.76;
		t.source = "左娃衣服红5_png";
		t.width = 47.76;
		t.x = 77.96;
		t.y = -21.15;
		return t;
	};
	_proto._Image133_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 20.26;
		t.anchorOffsetY = 43.75;
		t.height = 112.76;
		t.source = "左娃衣服红6_png";
		t.width = 126.36;
		t.x = -64.34;
		t.y = 131.22;
		return t;
	};
	_proto._Image134_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 8;
		t.anchorOffsetY = 52.75;
		t.height = 135.96;
		t.source = "左娃衣服红7_png";
		t.width = 49.96;
		t.x = 51.8;
		t.y = 110.62;
		return t;
	};
	_proto._Image135_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 14.42;
		t.anchorOffsetY = 9.91;
		t.height = 25.56;
		t.source = "左娃衣服红8_png";
		t.width = 89.96;
		t.x = -29.78;
		t.y = 69.78;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image136_i(),this._Image137_i(),this._Image138_i(),this._Image139_i(),this._Image140_i(),this._Image141_i(),this._Image142_i(),this._Image143_i(),this._Image144_i(),this._Image145_i(),this._Image146_i(),this._Image147_i(),this._Image148_i(),this._Image149_i(),this._Image150_i()];
		return t;
	};
	_proto._Image136_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 37.11;
		t.anchorOffsetY = 25.22;
		t.height = 62.36;
		t.source = "右娃裤脚黑_png";
		t.width = 74.76;
		t.x = 350.35;
		t.y = 825.04;
		return t;
	};
	_proto._Image137_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 24.21;
		t.anchorOffsetY = 11.47;
		t.height = 28.36;
		t.source = "右娃头发1_png";
		t.width = 48.76;
		t.x = 437.21;
		t.y = 408.79;
		return t;
	};
	_proto._Image138_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 17.25;
		t.anchorOffsetY = 13.49;
		t.height = 33.36;
		t.source = "右娃头发22_png";
		t.width = 34.76;
		t.x = 379.87;
		t.y = 407.81;
		return t;
	};
	_proto._Image139_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 15.76;
		t.anchorOffsetY = 16.33;
		t.height = 40.36;
		t.source = "右娃头发32_png";
		t.width = 31.76;
		t.x = 514.38;
		t.y = 480.65;
		return t;
	};
	_proto._Image140_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 15.26;
		t.anchorOffsetY = 23.62;
		t.height = 58.36;
		t.source = "右娃头发42_png";
		t.width = 30.76;
		t.x = 491.88;
		t.y = 472.94;
		return t;
	};
	_proto._Image141_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 29.89;
		t.anchorOffsetY = 17.79;
		t.height = 43.86;
		t.source = "右娃左眼2_png";
		t.width = 60.16;
		t.x = 388.91;
		t.y = 478.76;
		return t;
	};
	_proto._Image142_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 15.17;
		t.anchorOffsetY = 4.32;
		t.height = 10.66;
		t.source = "右娃右眼2_png";
		t.width = 30.56;
		t.x = 412.89;
		t.y = 495.02;
		return t;
	};
	_proto._Image143_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 20.97;
		t.anchorOffsetY = 23.3;
		t.height = 57.46;
		t.source = "左娃裤脚黑_png";
		t.width = 42.16;
		t.x = 129.59;
		t.y = 611.47;
		return t;
	};
	_proto._Image144_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 52.15;
		t.anchorOffsetY = 42.23;
		t.height = 104.13;
		t.source = "左娃裤脚黑1_png";
		t.width = 104.82;
		t.x = 258.49;
		t.y = 739.11;
		return t;
	};
	_proto._Image145_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 24.13;
		t.anchorOffsetY = 15.72;
		t.height = 42.79;
		t.source = "左娃头发12_png";
		t.width = 52.16;
		t.x = 177.39;
		t.y = 230.47;
		return t;
	};
	_proto._Image146_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 21.66;
		t.anchorOffsetY = 19.39;
		t.height = 52.8;
		t.source = "左娃头发22_png";
		t.width = 46.83;
		t.x = 78.99;
		t.y = 354.04;
		return t;
	};
	_proto._Image147_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 17.34;
		t.anchorOffsetY = 12.05;
		t.height = 32.81;
		t.source = "左娃头发32_png";
		t.width = 37.5;
		t.x = 131.93;
		t.y = 268.7;
		return t;
	};
	_proto._Image148_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 16.41;
		t.anchorOffsetY = 20.63;
		t.height = 56.14;
		t.source = "左娃头发42_png";
		t.width = 35.5;
		t.x = 102.33;
		t.y = 341.94;
		return t;
	};
	_proto._Image149_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 4.52;
		t.anchorOffsetY = 4.22;
		t.height = 11.47;
		t.source = "左娃右眼2_png";
		t.width = 9.77;
		t.x = 211.23;
		t.y = 303.97;
		return t;
	};
	_proto._Image150_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 5.52;
		t.anchorOffsetY = 5.04;
		t.height = 10.67;
		t.source = "左娃左眼2_png";
		t.width = 10.97;
		t.x = 173.2;
		t.y = 339.29;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image151_i(),this._Image152_i(),this._Image153_i(),this._Image154_i(),this._Image155_i(),this._Image156_i(),this._Image157_i(),this._Image158_i(),this._Image159_i(),this._Image160_i()];
		return t;
	};
	_proto._Image151_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 22.97;
		t.anchorOffsetY = 29.06;
		t.height = 71.86;
		t.source = "荷花1_png";
		t.width = 46.26;
		t.x = 446.92;
		t.y = 174.72;
		return t;
	};
	_proto._Image152_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 7.82;
		t.anchorOffsetY = 9.64;
		t.height = 23.86;
		t.source = "荷花10_png";
		t.width = 15.76;
		t.x = 496.65;
		t.y = 157.29;
		return t;
	};
	_proto._Image153_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 24.2;
		t.anchorOffsetY = 18.53;
		t.height = 45.86;
		t.source = "荷花2_png";
		t.width = 48.76;
		t.x = 483.15;
		t.y = 187.62;
		return t;
	};
	_proto._Image154_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 20.23;
		t.anchorOffsetY = 24.59;
		t.height = 60.86;
		t.source = "荷花3_png";
		t.width = 40.76;
		t.x = 415.42;
		t.y = 175.24;
		return t;
	};
	_proto._Image155_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 17.26;
		t.anchorOffsetY = 10.25;
		t.height = 25.36;
		t.source = "荷花4_png";
		t.width = 34.76;
		t.x = 507.09;
		t.y = 197.34;
		return t;
	};
	_proto._Image156_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 15.03;
		t.anchorOffsetY = 11.87;
		t.height = 29.36;
		t.source = "荷花5_png";
		t.width = 30.26;
		t.x = 437.1;
		t.y = 147.35;
		return t;
	};
	_proto._Image157_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 6.4;
		t.anchorOffsetY = 10.83;
		t.height = 21.36;
		t.source = "荷花6_png";
		t.width = 12.26;
		t.x = 452.35;
		t.y = 141.98;
		return t;
	};
	_proto._Image158_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 9.28;
		t.anchorOffsetY = 14.63;
		t.height = 28.86;
		t.source = "荷花7_png";
		t.width = 17.76;
		t.x = 462.73;
		t.y = 152.78;
		return t;
	};
	_proto._Image159_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 6.93;
		t.anchorOffsetY = 11.84;
		t.height = 23.36;
		t.source = "荷花8_png";
		t.width = 13.26;
		t.x = 475;
		t.y = 146.32;
		return t;
	};
	_proto._Image160_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 12.67;
		t.anchorOffsetY = 19.95;
		t.height = 39.36;
		t.source = "荷花9_png";
		t.width = 24.26;
		t.x = 476.74;
		t.y = 167.93;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image161_i(),this._Image162_i(),this._Image163_i(),this._Image164_i()];
		return t;
	};
	_proto._Image161_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 67.16;
		t.anchorOffsetY = 77.37;
		t.height = 191.36;
		t.source = "荷叶1_png";
		t.width = 135.26;
		t.x = 522.16;
		t.y = 288.33;
		return t;
	};
	_proto._Image162_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 21.98;
		t.anchorOffsetY = 8.43;
		t.height = 20.86;
		t.source = "荷叶2_png";
		t.width = 44.26;
		t.x = 480.73;
		t.y = 347.25;
		return t;
	};
	_proto._Image163_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 61.2;
		t.anchorOffsetY = 63.38;
		t.height = 156.86;
		t.source = "荷叶3_png";
		t.width = 123.26;
		t.x = 392.94;
		t.y = 262.27;
		return t;
	};
	_proto._Image164_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 9.57;
		t.anchorOffsetY = 6.8;
		t.height = 16.86;
		t.source = "荷叶4_png";
		t.width = 19.26;
		t.x = 444.56;
		t.y = 344.62;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image165_i(),this._Image166_i(),this._Image167_i(),this._Image168_i(),this._Image169_i(),this._Image170_i(),this._Image171_i(),this._Image172_i(),this._Image173_i(),this._Image174_i(),this._Image175_i()];
		return t;
	};
	_proto._Image165_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 10.28;
		t.anchorOffsetY = 75.34;
		t.height = 186.36;
		t.source = "荷根1_png";
		t.width = 20.76;
		t.x = 457.48;
		t.y = 291.29;
		return t;
	};
	_proto._Image166_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 4.47;
		t.anchorOffsetY = 17.71;
		t.height = 43.83;
		t.source = "荷根2_png";
		t.width = 9.03;
		t.x = 452.07;
		t.y = 373;
		return t;
	};
	_proto._Image167_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 4.12;
		t.anchorOffsetY = 7.6;
		t.height = 18.83;
		t.source = "荷根3_png";
		t.width = 8.33;
		t.x = 477.07;
		t.y = 525.55;
		return t;
	};
	_proto._Image168_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 7.87;
		t.anchorOffsetY = 11.8;
		t.height = 29.23;
		t.source = "荷根4_png";
		t.width = 15.93;
		t.x = 482.19;
		t.y = 572.55;
		return t;
	};
	_proto._Image169_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 14.99;
		t.anchorOffsetY = 21;
		t.height = 52.03;
		t.source = "荷根5_png";
		t.width = 30.33;
		t.x = 499.68;
		t.y = 640.83;
		return t;
	};
	_proto._Image170_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 10.85;
		t.anchorOffsetY = 16.15;
		t.height = 40.03;
		t.source = "右娃右手镯2_png";
		t.width = 21.93;
		t.x = 514.91;
		t.y = 549.49;
		return t;
	};
	_proto._Image171_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 11.65;
		t.anchorOffsetY = 17.6;
		t.height = 43.63;
		t.source = "右娃左手镯2_png";
		t.width = 23.53;
		t.x = 452.8;
		t.y = 611.81;
		return t;
	};
	_proto._Image172_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 53.84;
		t.anchorOffsetY = 14.54;
		t.height = 36.03;
		t.source = "左娃项圈绿1_png";
		t.width = 108.73;
		t.x = 210.64;
		t.y = 403.44;
		return t;
	};
	_proto._Image173_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 14.23;
		t.anchorOffsetY = 25.35;
		t.height = 62.83;
		t.source = "左娃项圈绿2_png";
		t.width = 28.73;
		t.x = 262.96;
		t.y = 353.85;
		return t;
	};
	_proto._Image174_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 15.62;
		t.anchorOffsetY = 6.63;
		t.height = 16.43;
		t.source = "左娃右手镯2_png";
		t.width = 31.53;
		t.x = 363.39;
		t.y = 387.31;
		return t;
	};
	_proto._Image175_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 14.63;
		t.anchorOffsetY = 10.18;
		t.height = 25.23;
		t.source = "左娃左手镯2_png";
		t.width = 29.53;
		t.x = 315;
		t.y = 371.17;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image176_i(),this._Image177_i(),this._Image178_i(),this._Image179_i(),this._Image180_i(),this._Image181_i(),this._Image182_i()];
		return t;
	};
	_proto._Image176_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 50.65;
		t.anchorOffsetY = 46.05;
		t.height = 113.86;
		t.source = "右娃右鞋绿1_png";
		t.width = 102.26;
		t.x = 415.14;
		t.y = 747.7;
		return t;
	};
	_proto._Image177_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 7.81;
		t.anchorOffsetY = 6.82;
		t.height = 16.86;
		t.source = "右娃右鞋绿2_png";
		t.width = 15.76;
		t.x = 463.54;
		t.y = 819.15;
		return t;
	};
	_proto._Image178_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 26.14;
		t.anchorOffsetY = 86.92;
		t.height = 214.86;
		t.source = "右娃左鞋绿1_png";
		t.width = 52.76;
		t.x = 359.71;
		t.y = 746.25;
		return t;
	};
	_proto._Image179_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 72.96;
		t.anchorOffsetY = 95.42;
		t.height = 235.86;
		t.source = "右娃左鞋绿2_png";
		t.width = 147.26;
		t.x = 419.53;
		t.y = 752.25;
		return t;
	};
	_proto._Image180_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 17.21;
		t.anchorOffsetY = 5.2;
		t.height = 12.86;
		t.source = "左娃右鞋绿色1_png";
		t.width = 34.76;
		t.x = 254.12;
		t.y = 800.79;
		return t;
	};
	_proto._Image181_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 9.12;
		t.anchorOffsetY = 11.94;
		t.height = 29.52;
		t.source = "左娃左鞋绿色1_png";
		t.width = 18.42;
		t.x = 92.55;
		t.y = 633.35;
		return t;
	};
	_proto._Image182_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 5.16;
		t.anchorOffsetY = 6.82;
		t.height = 16.85;
		t.source = "左娃左鞋绿色2_png";
		t.width = 10.42;
		t.x = 106.79;
		t.y = 625.15;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image183_i(),this._Image184_i()];
		return t;
	};
	_proto._Image183_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 12.02;
		t.anchorOffsetY = 3.66;
		t.height = 9.06;
		t.source = "盒子_png";
		t.width = 24.26;
		t.x = 370.37;
		t.y = 291.46;
		return t;
	};
	_proto._Image184_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 70.33;
		t.anchorOffsetY = 4.09;
		t.height = 10.05;
		t.source = "盒子缝_png";
		t.width = 141.93;
		t.x = 368.68;
		t.y = 321.54;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image185_i(),this._Image186_i(),this._Image187_i(),this._Image188_i(),this._Image189_i()];
		return t;
	};
	_proto._Image185_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 10.32;
		t.height = 25.56;
		t.source = "盒子盖_png";
		t.width = 139.26;
		t.x = 368.87;
		t.y = 308.24;
		return t;
	};
	_proto._Image186_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 70.99;
		t.anchorOffsetY = 17.59;
		t.height = 43.56;
		t.source = "盒子身_png";
		t.width = 143.26;
		t.x = 368.01;
		t.y = 339.4;
		return t;
	};
	_proto._Image187_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 17.48;
		t.anchorOffsetY = 35.75;
		t.height = 88.56;
		t.source = "左娃衣服黄1_png";
		t.width = 35.26;
		t.x = 311.37;
		t.y = 449.19;
		return t;
	};
	_proto._Image188_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 50.19;
		t.anchorOffsetY = 17.99;
		t.height = 44.56;
		t.source = "左娃衣服黄2_png";
		t.width = 101.26;
		t.x = 272.09;
		t.y = 498.91;
		return t;
	};
	_proto._Image189_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 18.96;
		t.anchorOffsetY = 29.69;
		t.height = 73.56;
		t.source = "左娃衣服黄3_png";
		t.width = 38.26;
		t.x = 257.86;
		t.y = 589.61;
		return t;
	};
	_proto._Group26_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image190_i(),this._Image191_i(),this._Image192_i(),this._Image193_i(),this._Image194_i(),this._Image195_i()];
		return t;
	};
	_proto._Image190_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 41.74;
		t.anchorOffsetY = 9.5;
		t.height = 23.56;
		t.source = "盒子花纹1_png";
		t.width = 84.26;
		t.x = 390.26;
		t.y = 334.31;
		return t;
	};
	_proto._Image191_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 23.16;
		t.anchorOffsetY = 6.68;
		t.height = 16.56;
		t.source = "盒子花纹2_png";
		t.width = 46.76;
		t.x = 327.43;
		t.y = 334.99;
		return t;
	};
	_proto._Image192_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 14.24;
		t.anchorOffsetY = 14.95;
		t.height = 37.06;
		t.source = "右娃领橙1_png";
		t.width = 28.76;
		t.x = 390.51;
		t.y = 565.42;
		return t;
	};
	_proto._Image193_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 15.73;
		t.anchorOffsetY = 16.16;
		t.height = 40.06;
		t.source = "右娃领橙2_png";
		t.width = 31.76;
		t.x = 426.1;
		t.y = 557.55;
		return t;
	};
	_proto._Image194_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 27.37;
		t.anchorOffsetY = 25.24;
		t.height = 62.56;
		t.source = "左娃衣服橙1_png";
		t.width = 55.26;
		t.x = 139.99;
		t.y = 615.44;
		return t;
	};
	_proto._Image195_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 38.77;
		t.anchorOffsetY = 19.39;
		t.height = 48.06;
		t.source = "左娃衣服橙2_png";
		t.width = 78.26;
		t.x = 252.01;
		t.y = 765.87;
		return t;
	};
	_proto._Group27_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image196_i(),this._Image197_i(),this._Image198_i(),this._Image199_i()];
		return t;
	};
	_proto._Image196_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 18.21;
		t.anchorOffsetY = 45.78;
		t.height = 113.56;
		t.source = "左娃衣服蓝1_png";
		t.width = 36.76;
		t.x = 285.71;
		t.y = 433.92;
		return t;
	};
	_proto._Image197_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 18.7;
		t.anchorOffsetY = 24.02;
		t.height = 59.56;
		t.source = "左娃衣服蓝2_png";
		t.width = 37.76;
		t.x = 351.89;
		t.y = 404.31;
		return t;
	};
	_proto._Image198_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 90.52;
		t.anchorOffsetY = 67.57;
		t.height = 167.56;
		t.source = "左娃衣服蓝3_png";
		t.width = 182.76;
		t.x = 201.65;
		t.y = 610.8;
		return t;
	};
	_proto._Image199_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 57.83;
		t.anchorOffsetY = 61.52;
		t.height = 152.56;
		t.source = "左娃衣服蓝4_png";
		t.width = 116.76;
		t.x = 276.33;
		t.y = 690.5;
		return t;
	};
	_proto._Group28_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image200_i(),this._Image201_i(),this._Image202_i()];
		return t;
	};
	_proto._Image200_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 39.02;
		t.anchorOffsetY = 35.1;
		t.height = 87.06;
		t.source = "右娃衣服蓝1_png";
		t.width = 78.76;
		t.x = 343.66;
		t.y = 551.46;
		return t;
	};
	_proto._Image201_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 39.1;
		t.anchorOffsetY = 25.02;
		t.height = 62.06;
		t.source = "右娃衣服蓝2_png";
		t.width = 81.76;
		t.x = 429.59;
		t.y = 558.44;
		return t;
	};
	_proto._Image202_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 11.37;
		t.anchorOffsetY = 13.73;
		t.height = 34.06;
		t.source = "右娃衣服蓝3_png";
		t.width = 23.76;
		t.x = 492.32;
		t.y = 516.4;
		return t;
	};
	_proto._Group29_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image203_i(),this._Image204_i()];
		return t;
	};
	_proto._Image203_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 29.35;
		t.anchorOffsetY = 33.49;
		t.height = 83.06;
		t.source = "右娃右裤_png";
		t.width = 59.26;
		t.x = 464.13;
		t.y = 702.35;
		return t;
	};
	_proto._Image204_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 66;
		t.anchorOffsetY = 55.47;
		t.height = 137.56;
		t.source = "右娃左裤_png";
		t.width = 133.26;
		t.x = 387.43;
		t.y = 765.26;
		return t;
	};
	_proto._Group30_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image205_i(),this._Image206_i(),this._Image207_i(),this._Image208_i()];
		return t;
	};
	_proto._Image205_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 56.34;
		t.anchorOffsetY = 36.31;
		t.height = 90.06;
		t.source = "右娃衣服粉_png";
		t.width = 113.76;
		t.x = 374.95;
		t.y = 610.81;
		return t;
	};
	_proto._Image206_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 32.32;
		t.anchorOffsetY = 28.24;
		t.height = 70.06;
		t.source = "右娃衣服粉22_png";
		t.width = 65.26;
		t.x = 524.53;
		t.y = 525.35;
		return t;
	};
	_proto._Image207_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 16.97;
		t.anchorOffsetY = 9.9;
		t.height = 24.56;
		t.source = "右娃衣服粉32_png";
		t.width = 34.26;
		t.x = 342.66;
		t.y = 644.9;
		return t;
	};
	_proto._Image208_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 94.98;
		t.anchorOffsetY = 46.58;
		t.height = 115.56;
		t.source = "右娃衣服粉4_png";
		t.width = 191.76;
		t.x = 382.84;
		t.y = 683.96;
		return t;
	};
	_proto._Group31_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image209_i(),this._Image210_i()];
		return t;
	};
	_proto._Image209_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 23.41;
		t.anchorOffsetY = 13.32;
		t.height = 33.06;
		t.source = "左娃右鞋土色_png";
		t.width = 47.26;
		t.x = 252.82;
		t.y = 805.24;
		return t;
	};
	_proto._Image210_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 30.1;
		t.anchorOffsetY = 25.61;
		t.height = 63.56;
		t.source = "左娃左鞋土色_png";
		t.width = 60.76;
		t.x = 114.59;
		t.y = 612.31;
		return t;
	};
	_proto.AutumnGroup_i = function () {
		var t = new eui.Group();
		this.AutumnGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group32_i(),this._Group33_i(),this._Group34_i(),this._Group35_i(),this._Group36_i(),this._Group37_i(),this._Group38_i(),this._Group39_i(),this._Group40_i(),this._Group41_i(),this._Group42_i(),this._Group43_i(),this._Group44_i(),this._Group45_i(),this._Group46_i(),this._Group47_i(),this._Group48_i(),this._Group49_i(),this._Group50_i()];
		return t;
	};
	_proto._Group32_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image211_i(),this._Image212_i(),this._Image213_i(),this._Image214_i(),this._Image215_i(),this._Image216_i(),this._Image217_i(),this._Image218_i(),this._Image219_i(),this._Image220_i(),this._Image221_i(),this._Image222_i(),this._Image223_i(),this._Image224_i()];
		return t;
	};
	_proto._Image211_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃脸_png";
		t.width = 125.84;
		t.x = 386;
		t.y = 304;
		return t;
	};
	_proto._Image212_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 14.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃脖子_png";
		t.width = 33.17;
		t.x = 414.83;
		t.y = 427.17;
		return t;
	};
	_proto._Image213_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右手1_png";
		t.width = 52.67;
		t.x = 456;
		t.y = 439.5;
		return t;
	};
	_proto._Image214_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右手2_png";
		t.width = 30.17;
		t.x = 463;
		t.y = 474.85;
		return t;
	};
	_proto._Image215_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44.33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左手_png";
		t.width = 56.34;
		t.x = 381.49;
		t.y = 444.83;
		return t;
	};
	_proto._Image216_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.66;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃脖子_png";
		t.width = 22.34;
		t.x = 233.49;
		t.y = 468.83;
		return t;
	};
	_proto._Image217_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃脖子_png";
		t.width = 20.34;
		t.x = 234.82;
		t.y = 469.49;
		return t;
	};
	_proto._Image218_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 128.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃脸1_png";
		t.width = 144.34;
		t.x = 178.82;
		t.y = 322.83;
		return t;
	};
	_proto._Image219_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃脸2_png";
		t.width = 99;
		t.x = 206.16;
		t.y = 446.83;
		return t;
	};
	_proto._Image220_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃右手_png";
		t.width = 57.67;
		t.x = 141.49;
		t.y = 433.5;
		return t;
	};
	_proto._Image221_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左耳_png";
		t.width = 11.67;
		t.x = 185.49;
		t.y = 412.83;
		return t;
	};
	_proto._Image222_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左手1_png";
		t.width = 30.33;
		t.x = 98.16;
		t.y = 463.5;
		return t;
	};
	_proto._Image223_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左手2_png";
		t.width = 49.66;
		t.x = 77.5;
		t.y = 441.5;
		return t;
	};
	_proto._Image224_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左手3_png";
		t.width = 33.66;
		t.x = 107.5;
		t.y = 468.17;
		return t;
	};
	_proto._Group33_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image225_i(),this._Image226_i(),this._Image227_i(),this._Image228_i(),this._Image229_i(),this._Image230_i(),this._Image231_i(),this._Image232_i()];
		return t;
	};
	_proto._Image225_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右腮红_png";
		t.width = 48.51;
		t.x = 425.33;
		t.y = 391.33;
		return t;
	};
	_proto._Image226_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右眼皮_png";
		t.width = 39.18;
		t.x = 441.33;
		t.y = 374.66;
		return t;
	};
	_proto._Image227_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左眼皮_png";
		t.width = 29.18;
		t.x = 397.33;
		t.y = 328.65;
		return t;
	};
	_proto._Image228_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41.33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃右腮红_png";
		t.width = 38.52;
		t.x = 377.99;
		t.y = 355.98;
		return t;
	};
	_proto._Image229_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃右眼皮_png";
		t.width = 41.2;
		t.x = 248.65;
		t.y = 394.64;
		return t;
	};
	_proto._Image230_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左腮红_png";
		t.width = 45.19;
		t.x = 254.14;
		t.y = 414.34;
		return t;
	};
	_proto._Image231_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左腮红_png";
		t.width = 43.18;
		t.x = 195.35;
		t.y = 423.66;
		return t;
	};
	_proto._Image232_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左眼皮_png";
		t.width = 46.51;
		t.x = 193.35;
		t.y = 400.34;
		return t;
	};
	_proto._Group34_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image233_i(),this._Image234_i(),this._Image235_i(),this._Image236_i(),this._Image237_i(),this._Image238_i(),this._Image239_i(),this._Image240_i(),this._Image241_i(),this._Image242_i(),this._Image243_i(),this._Image244_i(),this._Image245_i(),this._Image246_i(),this._Image247_i(),this._Image248_i(),this._Image249_i(),this._Image250_i(),this._Image251_i(),this._Image252_i(),this._Image253_i(),this._Image254_i(),this._Image255_i(),this._Image256_i(),this._Image257_i(),this._Image258_i(),this._Image259_i(),this._Image260_i(),this._Image261_i(),this._Image262_i(),this._Image263_i(),this._Image264_i(),this._Image265_i(),this._Image266_i(),this._Image267_i(),this._Image268_i(),this._Image269_i(),this._Image270_i(),this._Image271_i(),this._Image272_i(),this._Image273_i(),this._Image274_i(),this._Image275_i(),this._Image276_i(),this._Image277_i()];
		return t;
	};
	_proto._Image233_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "水果红1_png";
		t.width = 83.17;
		t.x = 159.5;
		t.y = 577.33;
		return t;
	};
	_proto._Image234_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "水果红2_png";
		t.width = 45.16;
		t.x = 224.84;
		t.y = 584;
		return t;
	};
	_proto._Image235_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃花带1_png";
		t.width = 18.48;
		t.x = 510.73;
		t.y = 523.34;
		return t;
	};
	_proto._Image236_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃花带2_png";
		t.width = 26.48;
		t.x = 530.06;
		t.y = 488.01;
		return t;
	};
	_proto._Image237_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 163.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃花带3_png";
		t.width = 89.82;
		t.x = 535.39;
		t.y = 556.67;
		return t;
	};
	_proto._Image238_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃花带4_png";
		t.width = 74.48;
		t.x = 555.21;
		t.y = 576.33;
		return t;
	};
	_proto._Image239_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6.69;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃美人痣_png";
		t.width = 6.15;
		t.x = 437.15;
		t.y = 357.25;
		return t;
	};
	_proto._Image240_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6.69;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃美人痣_png";
		t.width = 6.15;
		t.x = 236.52;
		t.y = 397.5;
		return t;
	};
	_proto._Image241_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖红1_png";
		t.width = 17.98;
		t.x = 522.23;
		t.y = 399.18;
		return t;
	};
	_proto._Image242_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖红2_png";
		t.width = 14.98;
		t.x = 511.23;
		t.y = 404.68;
		return t;
	};
	_proto._Image243_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣领1_png";
		t.width = 19.98;
		t.x = 396.73;
		t.y = 417.19;
		return t;
	};
	_proto._Image244_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣领2_png";
		t.width = 16.48;
		t.x = 402.23;
		t.y = 482;
		return t;
	};
	_proto._Image245_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣领3_png";
		t.width = 39.48;
		t.x = 417.73;
		t.y = 458;
		return t;
	};
	_proto._Image246_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣领4_png";
		t.width = 49.98;
		t.x = 401.23;
		t.y = 516.5;
		return t;
	};
	_proto._Image247_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣领5_png";
		t.width = 52.98;
		t.x = 430.23;
		t.y = 534.5;
		return t;
	};
	_proto._Image248_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣左袖_png";
		t.width = 29.48;
		t.x = 358.02;
		t.y = 445.21;
		return t;
	};
	_proto._Image249_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋红1_png";
		t.width = 12.38;
		t.x = 505.79;
		t.y = 647.67;
		return t;
	};
	_proto._Image250_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋红2_png";
		t.width = 7.51;
		t.x = 515.46;
		t.y = 655.8;
		return t;
	};
	_proto._Image251_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10.39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋红3_png";
		t.width = 5.85;
		t.x = 520.36;
		t.y = 661.5;
		return t;
	};
	_proto._Image252_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 5.56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋红4_png";
		t.width = 5.85;
		t.x = 518.17;
		t.y = 673.39;
		return t;
	};
	_proto._Image253_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10.56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋红5_png";
		t.width = 5.1;
		t.x = 524.96;
		t.y = 670.61;
		return t;
	};
	_proto._Image254_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.06;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋红7_png";
		t.width = 14.35;
		t.x = 516.67;
		t.y = 684.36;
		return t;
	};
	_proto._Image255_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.71;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右袖_png";
		t.width = 65.6;
		t.x = 448.92;
		t.y = 472.11;
		return t;
	};
	_proto._Image256_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17.71;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃嘴唇_png";
		t.width = 20.6;
		t.x = 406.23;
		t.y = 387.57;
		return t;
	};
	_proto._Image257_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 8.04;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋红1_png";
		t.width = 10.26;
		t.x = 346.09;
		t.y = 756.95;
		return t;
	};
	_proto._Image258_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.04;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋红2_png";
		t.width = 35.26;
		t.x = 354.76;
		t.y = 749.95;
		return t;
	};
	_proto._Image259_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6.04;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋红3_png";
		t.width = 12.93;
		t.x = 346.09;
		t.y = 769.28;
		return t;
	};
	_proto._Image260_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 8.37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋红5_png";
		t.width = 8.26;
		t.x = 365.43;
		t.y = 766.95;
		return t;
	};
	_proto._Image261_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 5.04;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋红6_png";
		t.width = 8.26;
		t.x = 373.74;
		t.y = 767.32;
		return t;
	};
	_proto._Image262_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 7.54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋红7_png";
		t.width = 10.01;
		t.x = 376.87;
		t.y = 759.7;
		return t;
	};
	_proto._Image263_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 5.29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋红8_png";
		t.width = 4.76;
		t.x = 385.26;
		t.y = 756.83;
		return t;
	};
	_proto._Image264_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 5.29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋红9_png";
		t.width = 4.76;
		t.x = 390.52;
		t.y = 752.41;
		return t;
	};
	_proto._Image265_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃鞋1_png";
		t.width = 49.17;
		t.x = 67.91;
		t.y = 626.67;
		return t;
	};
	_proto._Image266_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃衣服1_png";
		t.width = 24.17;
		t.x = 177;
		t.y = 426.2;
		return t;
	};
	_proto._Image267_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃衣服2_png";
		t.width = 32.67;
		t.x = 191;
		t.y = 457.2;
		return t;
	};
	_proto._Image268_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃衣服3_png";
		t.width = 31.17;
		t.x = 150.83;
		t.y = 488.01;
		return t;
	};
	_proto._Image269_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃衣服4_png";
		t.width = 82.67;
		t.x = 257;
		t.y = 417.19;
		return t;
	};
	_proto._Image270_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃衣服5_png";
		t.width = 106.67;
		t.x = 197;
		t.y = 487.19;
		return t;
	};
	_proto._Image271_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃衣服6_png";
		t.width = 155.17;
		t.x = 199;
		t.y = 527.69;
		return t;
	};
	_proto._Image272_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃右头绳_png";
		t.width = 22.17;
		t.x = 317.18;
		t.y = 322.74;
		return t;
	};
	_proto._Image273_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃竹子3_png";
		t.width = 11.67;
		t.x = 39.16;
		t.y = 513.94;
		return t;
	};
	_proto._Image274_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃竹子4_png";
		t.width = 24.67;
		t.x = 47.89;
		t.y = 571.58;
		return t;
	};
	_proto._Image275_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃竹子5_png";
		t.width = 21.17;
		t.x = 48.83;
		t.y = 588.33;
		return t;
	};
	_proto._Image276_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃嘴唇_png";
		t.width = 12.17;
		t.x = 240.83;
		t.y = 443.46;
		return t;
	};
	_proto._Image277_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左头绳_png";
		t.width = 21.17;
		t.x = 146.16;
		t.y = 336.24;
		return t;
	};
	_proto._Group35_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image278_i(),this._Image279_i(),this._Image280_i(),this._Image281_i(),this._Image282_i(),this._Image283_i(),this._Image284_i(),this._Image285_i(),this._Image286_i(),this._Image287_i(),this._Image288_i(),this._Image289_i(),this._Image290_i(),this._Image291_i()];
		return t;
	};
	_proto._Image278_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "橙子黑点_png";
		t.width = 10.09;
		t.x = 260.5;
		t.y = 645.61;
		return t;
	};
	_proto._Image279_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃头发1v_png";
		t.width = 81.59;
		t.x = 420.91;
		t.y = 285.59;
		return t;
	};
	_proto._Image280_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃头发2_png";
		t.width = 19.09;
		t.x = 469.91;
		t.y = 314.59;
		return t;
	};
	_proto._Image281_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃头发3_png";
		t.width = 44.09;
		t.x = 491.5;
		t.y = 301.84;
		return t;
	};
	_proto._Image282_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃头发4_png";
		t.width = 24.59;
		t.x = 490.5;
		t.y = 380.34;
		return t;
	};
	_proto._Image283_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 7.81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右眼_png";
		t.width = 12.39;
		t.x = 449.32;
		t.y = 387.14;
		return t;
	};
	_proto._Image284_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 8.21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左眼_png";
		t.width = 9.73;
		t.x = 405.85;
		t.y = 351.54;
		return t;
	};
	_proto._Image285_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 7.21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃右眼_png";
		t.width = 8.23;
		t.x = 262.36;
		t.y = 412.25;
		return t;
	};
	_proto._Image286_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6.46;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左眼_png";
		t.width = 8.23;
		t.x = 217;
		t.y = 420.21;
		return t;
	};
	_proto._Image287_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃头发1_png";
		t.width = 20.59;
		t.x = 135.54;
		t.y = 335;
		return t;
	};
	_proto._Image288_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃头发2_png";
		t.width = 23.59;
		t.x = 161.04;
		t.y = 353;
		return t;
	};
	_proto._Image289_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃头发3_png";
		t.width = 31.59;
		t.x = 294.7;
		t.y = 334.24;
		return t;
	};
	_proto._Image290_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃头发4_png";
		t.width = 17.59;
		t.x = 330.29;
		t.y = 312.09;
		return t;
	};
	_proto._Image291_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃头发5_png";
		t.width = 27.09;
		t.x = 221.12;
		t.y = 347.55;
		return t;
	};
	_proto._Group36_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image292_i(),this._Image293_i(),this._Image294_i(),this._Image295_i(),this._Image296_i(),this._Image297_i(),this._Image298_i(),this._Image299_i()];
		return t;
	};
	_proto._Image292_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "荷花叶1_png";
		t.width = 12.26;
		t.x = 146.33;
		t.y = 746.28;
		return t;
	};
	_proto._Image293_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "荷花叶2_png";
		t.width = 22.26;
		t.x = 142.33;
		t.y = 764.68;
		return t;
	};
	_proto._Image294_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "荷花叶3_png";
		t.width = 22.26;
		t.x = 158.33;
		t.y = 745.08;
		return t;
	};
	_proto._Image295_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "荷花叶4_png";
		t.width = 30.26;
		t.x = 138.47;
		t.y = 795.78;
		return t;
	};
	_proto._Image296_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "荷花叶5_png";
		t.width = 14.66;
		t.x = 180.16;
		t.y = 743.48;
		return t;
	};
	_proto._Image297_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 5.18;
		t.anchorOffsetY = 9.84;
		t.height = 130.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃花2_png";
		t.width = 188.16;
		t.x = 407.1;
		t.y = 264.44;
		return t;
	};
	_proto._Image298_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃花1_png";
		t.width = 82.16;
		t.x = 405.16;
		t.y = 253.98;
		return t;
	};
	_proto._Image299_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76.8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃花3_png";
		t.width = 82.66;
		t.x = 526.66;
		t.y = 414.48;
		return t;
	};
	_proto._Group37_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image300_i()];
		return t;
	};
	_proto._Image300_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "苹果_png";
		t.width = 71.76;
		t.x = 166.33;
		t.y = 658.78;
		return t;
	};
	_proto._Group38_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image301_i(),this._Image302_i(),this._Image303_i(),this._Image304_i(),this._Image305_i(),this._Image306_i()];
		return t;
	};
	_proto._Image301_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃叶子1_png";
		t.width = 40.76;
		t.x = 380.33;
		t.y = 287.1;
		return t;
	};
	_proto._Image302_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃叶子2_png";
		t.width = 27.26;
		t.x = 460.33;
		t.y = 262.6;
		return t;
	};
	_proto._Image303_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃叶子3_png";
		t.width = 24.76;
		t.x = 582.09;
		t.y = 340;
		return t;
	};
	_proto._Image304_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃叶子4_png";
		t.width = 14.1;
		t.x = 580.04;
		t.y = 381;
		return t;
	};
	_proto._Image305_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右袖绿_png";
		t.width = 65.1;
		t.x = 474.04;
		t.y = 447;
		return t;
	};
	_proto._Image306_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左袖绿_png";
		t.width = 50.1;
		t.x = 325.5;
		t.y = 420.8;
		return t;
	};
	_proto._Group39_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image307_i(),this._Image308_i(),this._Image309_i(),this._Image310_i(),this._Image311_i(),this._Image312_i(),this._Image313_i()];
		return t;
	};
	_proto._Image307_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "荷花根_png";
		t.width = 190.77;
		t.x = 177.61;
		t.y = 785.76;
		return t;
	};
	_proto._Image308_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "水果叶子1_png";
		t.width = 74.77;
		t.x = 136;
		t.y = 636.33;
		return t;
	};
	_proto._Image309_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "水果叶子2_png";
		t.width = 21.27;
		t.x = 206.5;
		t.y = 615.33;
		return t;
	};
	_proto._Image310_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "水果叶子3_png";
		t.width = 50.77;
		t.x = 161;
		t.y = 649.33;
		return t;
	};
	_proto._Image311_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "水果叶子4_png";
		t.width = 12.1;
		t.x = 195.17;
		t.y = 663.37;
		return t;
	};
	_proto._Image312_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20.74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃竹子1_png";
		t.width = 147.77;
		t.x = 187.62;
		t.y = 438.33;
		return t;
	};
	_proto._Image313_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃竹子2_png";
		t.width = 116.27;
		t.x = 27.59;
		t.y = 455.57;
		return t;
	};
	_proto._Group40_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image314_i(),this._Image315_i(),this._Image316_i(),this._Image317_i(),this._Image318_i(),this._Image319_i(),this._Image320_i(),this._Image321_i()];
		return t;
	};
	_proto._Image314_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖蓝1_png";
		t.width = 35.27;
		t.x = 544.61;
		t.y = 375.05;
		return t;
	};
	_proto._Image315_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖蓝2_png";
		t.width = 40.27;
		t.x = 536.61;
		t.y = 375.05;
		return t;
	};
	_proto._Image316_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖蓝3_png";
		t.width = 17.27;
		t.x = 358.87;
		t.y = 490;
		return t;
	};
	_proto._Image317_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖蓝4_png";
		t.width = 10.97;
		t.x = 323;
		t.y = 516.5;
		return t;
	};
	_proto._Image318_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 16.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右手镯_png";
		t.width = 39.27;
		t.x = 451;
		t.y = 469.5;
		return t;
	};
	_proto._Image319_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左手镯_png";
		t.width = 18.27;
		t.x = 377.5;
		t.y = 443;
		return t;
	};
	_proto._Image320_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃右手镯_png";
		t.width = 32.27;
		t.x = 170.37;
		t.y = 468.3;
		return t;
	};
	_proto._Image321_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃左手镯_png";
		t.width = 37.27;
		t.x = 95.37;
		t.y = 462;
		return t;
	};
	_proto._Group41_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image322_i()];
		return t;
	};
	_proto._Image322_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃鞋2_png";
		t.width = 24.27;
		t.x = 78.17;
		t.y = 637.55;
		return t;
	};
	_proto._Group42_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image323_i(),this._Image324_i(),this._Image325_i(),this._Image326_i(),this._Image327_i(),this._Image328_i(),this._Image329_i(),this._Image330_i(),this._Image331_i(),this._Image332_i(),this._Image333_i(),this._Image334_i()];
		return t;
	};
	_proto._Image323_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "石榴_png";
		t.width = 67.27;
		t.x = 110.67;
		t.y = 650.55;
		return t;
	};
	_proto._Image324_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖橙1_png";
		t.width = 57.27;
		t.x = 512;
		t.y = 349.05;
		return t;
	};
	_proto._Image325_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖橙2_png";
		t.width = 63.27;
		t.x = 543.46;
		t.y = 386.55;
		return t;
	};
	_proto._Image326_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖橙3_png";
		t.width = 45.77;
		t.x = 507.5;
		t.y = 392.1;
		return t;
	};
	_proto._Image327_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖橙4_png";
		t.width = 107.77;
		t.x = 425.5;
		t.y = 416.6;
		return t;
	};
	_proto._Image328_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖橙6_png";
		t.width = 38.97;
		t.x = 504.3;
		t.y = 389.3;
		return t;
	};
	_proto._Image329_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖橙5_png";
		t.width = 9.77;
		t.x = 513.5;
		t.y = 410.1;
		return t;
	};
	_proto._Image330_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87.1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖橙7_png";
		t.width = 90.57;
		t.x = 323.9;
		t.y = 474.5;
		return t;
	};
	_proto._Image331_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖橙8_png";
		t.width = 29.77;
		t.x = 303.1;
		t.y = 528.9;
		return t;
	};
	_proto._Image332_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃权杖橙9_png";
		t.width = 37.37;
		t.x = 305.02;
		t.y = 508.75;
		return t;
	};
	_proto._Image333_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃群边橙1_png";
		t.width = 66.17;
		t.x = 326.62;
		t.y = 631.95;
		return t;
	};
	_proto._Image334_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃群边橙2_png";
		t.width = 86.97;
		t.x = 394.62;
		t.y = 614.35;
		return t;
	};
	_proto._Group43_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image335_i(),this._Image336_i()];
		return t;
	};
	_proto._Image335_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "水果心黄1_png";
		t.width = 78.77;
		t.x = 161.67;
		t.y = 598.55;
		return t;
	};
	_proto._Image336_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "水果心黄2_png";
		t.width = 36.77;
		t.x = 228.23;
		t.y = 599.05;
		return t;
	};
	_proto._Group44_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image337_i(),this._Image338_i()];
		return t;
	};
	_proto._Image337_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "苹果心1_png";
		t.width = 15.27;
		t.x = 168.62;
		t.y = 672.05;
		return t;
	};
	_proto._Image338_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "苹果心2_png";
		t.width = 28.77;
		t.x = 178.12;
		t.y = 679.8;
		return t;
	};
	_proto._Group45_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image339_i(),this._Image340_i(),this._Image341_i(),this._Image342_i(),this._Image343_i(),this._Image344_i(),this._Image345_i(),this._Image346_i(),this._Image347_i(),this._Image348_i()];
		return t;
	};
	_proto._Image339_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "水果黄_png";
		t.width = 113.27;
		t.x = 227.62;
		t.y = 627.05;
		return t;
	};
	_proto._Image340_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服黄_png";
		t.width = 83.77;
		t.x = 444.62;
		t.y = 584.05;
		return t;
	};
	_proto._Image341_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.76;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋黄4_png";
		t.width = 14.83;
		t.x = 507.56;
		t.y = 658.89;
		return t;
	};
	_proto._Image342_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋黄1_png";
		t.width = 16.03;
		t.x = 503.4;
		t.y = 649.77;
		return t;
	};
	_proto._Image343_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10.56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋黄2_png";
		t.width = 15.63;
		t.x = 511.42;
		t.y = 662.33;
		return t;
	};
	_proto._Image344_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋黄3_png";
		t.width = 16.43;
		t.x = 513.96;
		t.y = 672.89;
		return t;
	};
	_proto._Image345_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17.76;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右鞋黄5_png";
		t.width = 10.43;
		t.x = 519.38;
		t.y = 688.37;
		return t;
	};
	_proto._Image346_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.76;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋黄1_png";
		t.width = 19.23;
		t.x = 341.29;
		t.y = 758.77;
		return t;
	};
	_proto._Image347_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左鞋黄2_png";
		t.width = 37.63;
		t.x = 359.69;
		t.y = 750.37;
		return t;
	};
	_proto._Image348_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 137.96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左娃裤子_png";
		t.width = 137.63;
		t.x = 63.37;
		t.y = 508.09;
		return t;
	};
	_proto._Group46_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image349_i()];
		return t;
	};
	_proto._Image349_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "橙子_png";
		t.width = 68.77;
		t.x = 212.12;
		t.y = 621.55;
		return t;
	};
	_proto._Group47_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image350_i(),this._Image351_i()];
		return t;
	};
	_proto._Image350_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "葡萄1_png";
		t.width = 61.77;
		t.x = 288.62;
		t.y = 611.55;
		return t;
	};
	_proto._Image351_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "葡萄3_png";
		t.width = 12.87;
		t.x = 275.75;
		t.y = 631;
		return t;
	};
	_proto._Group48_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image352_i(),this._Image353_i(),this._Image354_i(),this._Image355_i(),this._Image356_i(),this._Image357_i(),this._Image358_i(),this._Image359_i(),this._Image360_i()];
		return t;
	};
	_proto._Image352_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服1_png";
		t.width = 34.27;
		t.x = 365;
		t.y = 405.05;
		return t;
	};
	_proto._Image353_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服2_png";
		t.width = 138.37;
		t.x = 277;
		t.y = 491;
		return t;
	};
	_proto._Image354_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服3_png";
		t.width = 85.37;
		t.x = 425;
		t.y = 485.9;
		return t;
	};
	_proto._Image355_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25.2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服5_png";
		t.width = 20.84;
		t.x = 489.98;
		t.y = 448.6;
		return t;
	};
	_proto._Image356_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服6_png";
		t.width = 16.04;
		t.x = 433.83;
		t.y = 540.2;
		return t;
	};
	_proto._Image357_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 7.93;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服4_png";
		t.width = 5.21;
		t.x = 454.67;
		t.y = 474.7;
		return t;
	};
	_proto._Image358_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服7_png";
		t.width = 148.44;
		t.x = 415.03;
		t.y = 531;
		return t;
	};
	_proto._Image359_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃右裤子_png";
		t.width = 120.84;
		t.x = 392.23;
		t.y = 625.4;
		return t;
	};
	_proto._Image360_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃左裤子_png";
		t.width = 84.04;
		t.x = 341.43;
		t.y = 649.4;
		return t;
	};
	_proto._Group49_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image361_i(),this._Image362_i(),this._Image363_i()];
		return t;
	};
	_proto._Image361_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服粉1_png";
		t.width = 15.97;
		t.x = 414.5;
		t.y = 435.55;
		return t;
	};
	_proto._Image362_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服粉2_png";
		t.width = 24.47;
		t.x = 416.5;
		t.y = 464.05;
		return t;
	};
	_proto._Image363_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 103.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃衣服粉3_png";
		t.width = 156.97;
		t.x = 332.5;
		t.y = 542.05;
		return t;
	};
	_proto._Group50_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image364_i(),this._Image365_i(),this._Image366_i()];
		return t;
	};
	_proto._Image364_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "果篮子_png";
		t.width = 200.97;
		t.x = 147.28;
		t.y = 711.05;
		return t;
	};
	_proto._Image365_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "苹果把_png";
		t.width = 26.47;
		t.x = 205.78;
		t.y = 652.55;
		return t;
	};
	_proto._Image366_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "葡萄把_png";
		t.width = 19.47;
		t.x = 290.53;
		t.y = 606.05;
		return t;
	};
	_proto.WinterGroup_i = function () {
		var t = new eui.Group();
		this.WinterGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group51_i(),this._Group52_i(),this._Group53_i(),this._Group54_i(),this._Group55_i(),this._Group56_i(),this._Group57_i(),this._Group58_i(),this._Group59_i(),this._Group60_i(),this._Group61_i(),this._Group62_i(),this._Group63_i(),this._Group64_i(),this._Group65_i()];
		return t;
	};
	_proto._Group51_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image367_i(),this._Image368_i(),this._Image369_i(),this._Image370_i(),this._Image371_i()];
		return t;
	};
	_proto._Image367_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124.67;
		t.source = "脸_png";
		t.width = 86;
		t.x = 163;
		t.y = 361.83;
		return t;
	};
	_proto._Image368_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.83;
		t.source = "右手1_png";
		t.width = 19.34;
		t.x = 380;
		t.y = 513.67;
		return t;
	};
	_proto._Image369_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46.5;
		t.source = "左手1_png";
		t.width = 32;
		t.x = 167.26;
		t.y = 481.42;
		return t;
	};
	_proto._Image370_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.83;
		t.source = "右手2_png";
		t.width = 224.34;
		t.x = 178.76;
		t.y = 463.25;
		return t;
	};
	_proto._Image371_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.83;
		t.source = "左手2_png";
		t.width = 19.34;
		t.x = 161.33;
		t.y = 516.01;
		return t;
	};
	_proto._Group52_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image372_i(),this._Image373_i(),this._Image374_i(),this._Image375_i()];
		return t;
	};
	_proto._Image372_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.67;
		t.source = "右腮红_png";
		t.width = 27;
		t.x = 224.5;
		t.y = 429.83;
		return t;
	};
	_proto._Image373_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.17;
		t.source = "左腮红_png";
		t.width = 57;
		t.x = 163.66;
		t.y = 425.83;
		return t;
	};
	_proto._Image374_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.57;
		t.source = "右眼皮_png";
		t.width = 28.6;
		t.x = 229.7;
		t.y = 404.06;
		return t;
	};
	_proto._Image375_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.37;
		t.source = "左眼皮_png";
		t.width = 66.2;
		t.x = 176.9;
		t.y = 403.66;
		return t;
	};
	_proto._Group53_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image376_i()];
		return t;
	};
	_proto._Image376_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.27;
		t.source = "脖子_png";
		t.width = 29.4;
		t.x = 155.9;
		t.y = 448.13;
		return t;
	};
	_proto._Group54_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image377_i(),this._Image378_i(),this._Image379_i(),this._Image380_i(),this._Image381_i(),this._Image382_i(),this._Image383_i(),this._Image384_i(),this._Image385_i(),this._Image386_i(),this._Image387_i()];
		return t;
	};
	_proto._Image377_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77.27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "头发_png";
		t.width = 114.4;
		t.x = 140.3;
		t.y = 344.08;
		return t;
	};
	_proto._Image378_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44.27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服黑2_png";
		t.width = 51.4;
		t.x = 216.59999999999997;
		t.y = 525.01;
		return t;
	};
	_proto._Image379_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 136.27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服黑3_png";
		t.width = 138.4;
		t.x = 270;
		t.y = 688.87;
		return t;
	};
	_proto._Image380_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣领黑_png";
		t.width = 14.9;
		t.x = 155;
		t.y = 482;
		return t;
	};
	_proto._Image381_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41.27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右裤黑_png";
		t.width = 93.9;
		t.x = 427.05;
		t.y = 886.78;
		return t;
	};
	_proto._Image382_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 5.77;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右眼_png";
		t.width = 8.4;
		t.x = 238.34999999999997;
		t.y = 419.10999999999996;
		return t;
	};
	_proto._Image383_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 143.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右衣袖黑_png";
		t.width = 52.4;
		t.x = 322.6;
		t.y = 547.5;
		return t;
	};
	_proto._Image384_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81.92;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左裤黑_png";
		t.width = 60;
		t.x = 393.34;
		t.y = 773.85;
		return t;
	};
	_proto._Image385_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 5.45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左眼v_png";
		t.width = 11;
		t.x = 193.19999999999996;
		t.y = 423.44999999999993;
		return t;
	};
	_proto._Image386_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122.79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左衣袖黑_png";
		t.width = 121;
		t.x = 112.06;
		t.y = 584.6099999999999;
		return t;
	};
	_proto._Image387_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "书字_png";
		t.width = 63.8;
		t.x = 410.4;
		t.y = 425.71;
		return t;
	};
	_proto._Group55_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image388_i(),this._Image389_i(),this._Image390_i(),this._Image391_i(),this._Image392_i(),this._Image393_i(),this._Image394_i(),this._Image395_i(),this._Image396_i(),this._Image397_i(),this._Image398_i(),this._Image399_i(),this._Image400_i()];
		return t;
	};
	_proto._Image388_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 7.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "5图层 3_png";
		t.width = 17.73;
		t.x = 200.93;
		t.y = 337.36;
		return t;
	};
	_proto._Image389_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.93;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "冠绿1_png";
		t.width = 35.72;
		t.x = 93.67;
		t.y = 356.69;
		return t;
	};
	_proto._Image390_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.93;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "冠绿2_png";
		t.width = 33.06;
		t.x = 151.58;
		t.y = 306.9;
		return t;
	};
	_proto._Image391_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "冠绿3_png";
		t.width = 33.39;
		t.x = 226.02;
		t.y = 302.74;
		return t;
	};
	_proto._Image392_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30.59;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右耳花绿1_png";
		t.width = 22.73;
		t.x = 247;
		t.y = 446.21;
		return t;
	};
	_proto._Image393_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.86;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右耳花绿2_png";
		t.width = 5.06;
		t.x = 256.28;
		t.y = 454.07;
		return t;
	};
	_proto._Image394_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10.46;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右耳花绿3_png";
		t.width = 5.46;
		t.x = 262.6;
		t.y = 456.57;
		return t;
	};
	_proto._Image395_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右冠带绿_png";
		t.width = 10.79;
		t.x = 239.58;
		t.y = 472.5;
		return t;
	};
	_proto._Image396_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右手镯_png";
		t.width = 24.47;
		t.x = 379.66;
		t.y = 500.87;
		return t;
	};
	_proto._Image397_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.31;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左耳环绿_png";
		t.width = 4.97;
		t.x = 160.74;
		t.y = 458.73;
		return t;
	};
	_proto._Image398_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 8.56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左冠带绿2_png";
		t.width = 8.97;
		t.x = 131.87;
		t.y = 477.35;
		return t;
	};
	_proto._Image399_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 8.56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左冠带绿1_png";
		t.width = 8.97;
		t.x = 129.39;
		t.y = 444.35;
		return t;
	};
	_proto._Image400_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左手镯_png";
		t.width = 19.22;
		t.x = 161.53;
		t.y = 497.17;
		return t;
	};
	_proto._Group56_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image401_i(),this._Image402_i(),this._Image403_i(),this._Image404_i(),this._Image405_i(),this._Image406_i(),this._Image407_i(),this._Image408_i(),this._Image409_i(),this._Image410_i()];
		return t;
	};
	_proto._Image401_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "冠红1_png";
		t.width = 32.98;
		t.x = 120.51;
		t.y = 330.08;
		return t;
	};
	_proto._Image402_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39.1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "冠红2_png";
		t.width = 36.48;
		t.x = 187.75;
		t.y = 298.08;
		return t;
	};
	_proto._Image403_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "冠红3_png";
		t.width = 33.23;
		t.x = 249.75;
		t.y = 327.87;
		return t;
	};
	_proto._Image404_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11.85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右耳红_png";
		t.width = 6.23;
		t.x = 226.48;
		t.y = 477.08;
		return t;
	};
	_proto._Image405_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右冠带红1_png";
		t.width = 7.98;
		t.x = 239.02;
		t.y = 464.5;
		return t;
	};
	_proto._Image406_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右冠带红2_png";
		t.width = 9.98;
		t.x = 242.52;
		t.y = 480.85;
		return t;
	};
	_proto._Image407_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 8.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "嘴_png";
		t.width = 11.32;
		t.x = 217.49;
		t.y = 459.29;
		return t;
	};
	_proto._Image408_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左耳花红_png";
		t.width = 18.98;
		t.x = 145.58;
		t.y = 424.35;
		return t;
	};
	_proto._Image409_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 8.04;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左冠带红1_png";
		t.width = 8.07;
		t.x = 130.99;
		t.y = 468.78;
		return t;
	};
	_proto._Image410_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 5.59;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左冠带红2_png";
		t.width = 7.9;
		t.x = 132.4;
		t.y = 485.4;
		return t;
	};
	_proto._Group57_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image411_i(),this._Image412_i(),this._Image413_i(),this._Image414_i(),this._Image415_i(),this._Image416_i(),this._Image417_i(),this._Image418_i()];
		return t;
	};
	_proto._Image411_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "7图层 2_png";
		t.width = 28.31;
		t.x = 193.76;
		t.y = 332.44;
		return t;
	};
	_proto._Image412_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 234.19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "冠条1_png";
		t.width = 194.97;
		t.x = 191;
		t.y = 117.51;
		return t;
	};
	_proto._Image413_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 4.67;
		t.anchorOffsetY = 7.2;
		t.height = 144.19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "冠条2_png";
		t.width = 112.57;
		t.x = 384.67;
		t.y = 161.06;
		return t;
	};
	_proto._Image414_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 13.2;
		t.anchorOffsetY = 8.9;
		t.height = 178.19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "冠条3_png";
		t.width = 318.57;
		t.x = 237;
		t.y = 149.38;
		return t;
	};
	_proto._Image415_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 3.58;
		t.anchorOffsetY = 4.2;
		t.height = 84.06;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服橙1_png";
		t.width = 86.7;
		t.x = 116.42;
		t.y = 617.51;
		return t;
	};
	_proto._Image416_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 5.76;
		t.anchorOffsetY = 11.83;
		t.height = 236.72;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服橙2_png";
		t.width = 139.37;
		t.x = 243.05;
		t.y = 556.25;
		return t;
	};
	_proto._Image417_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 2.15;
		t.anchorOffsetY = 2.64;
		t.height = 52.71;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右裤橙_png";
		t.width = 52.03;
		t.x = 375.32;
		t.y = 846.68;
		return t;
	};
	_proto._Image418_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 2.15;
		t.anchorOffsetY = 2.54;
		t.height = 50.71;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右裤橙_png";
		t.width = 52.03;
		t.x = 473.21;
		t.y = 944.82;
		return t;
	};
	_proto._Group58_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image419_i(),this._Image420_i(),this._Image421_i(),this._Image422_i(),this._Image423_i(),this._Image424_i(),this._Image425_i(),this._Image426_i(),this._Image427_i(),this._Image428_i(),this._Image429_i(),this._Image430_i(),this._Image431_i()];
		return t;
	};
	_proto._Image419_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "凳子黄1_png";
		t.width = 80.81;
		t.x = 165.06;
		t.y = 723.62;
		return t;
	};
	_proto._Image420_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "凳子黄2_png";
		t.width = 69.31;
		t.x = 172.06;
		t.y = 729.62;
		return t;
	};
	_proto._Image421_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "凳子黄3_png";
		t.width = 19.14;
		t.x = 212.75;
		t.y = 770.05;
		return t;
	};
	_proto._Image422_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "凳子黄4_png";
		t.width = 25.14;
		t.x = 181.06;
		t.y = 771.05;
		return t;
	};
	_proto._Image423_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "凳子黄4_png";
		t.width = 20.47;
		t.x = 208.34;
		t.y = 738.83;
		return t;
	};
	_proto._Image424_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "凳子黄6_png";
		t.width = 16.8;
		t.x = 180.57;
		t.y = 741.16;
		return t;
	};
	_proto._Image425_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58.18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "凳子黄7_png";
		t.width = 53.14;
		t.x = 178.9;
		t.y = 737.49;
		return t;
	};
	_proto._Image426_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右冠带黄_png";
		t.width = 39.14;
		t.x = 242.79;
		t.y = 491.58;
		return t;
	};
	_proto._Image427_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左冠带黄_png";
		t.width = 13.14;
		t.x = 133.51;
		t.y = 490.45;
		return t;
	};
	_proto._Image428_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 7.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左耳花黄_png";
		t.width = 7.47;
		t.x = 151.26;
		t.y = 430.19;
		return t;
	};
	_proto._Image429_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 7.76;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右耳花黄_png";
		t.width = 4.22;
		t.x = 247.25;
		t.y = 419.42;
		return t;
	};
	_proto._Image430_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "黄点_png";
		t.width = 176.27;
		t.x = 99.88;
		t.y = 310.97;
		return t;
	};
	_proto._Image431_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71.82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "皇冠_png";
		t.width = 158.27;
		t.x = 118.22;
		t.y = 328.31;
		return t;
	};
	_proto._Group59_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image432_i(),this._Image433_i(),this._Image434_i(),this._Image435_i(),this._Image436_i(),this._Image437_i()];
		return t;
	};
	_proto._Image432_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服肩蓝1_png";
		t.width = 21.31;
		t.x = 143.88;
		t.y = 498.32;
		return t;
	};
	_proto._Image433_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服肩蓝2_png";
		t.width = 15.81;
		t.x = 121.21;
		t.y = 522.08;
		return t;
	};
	_proto._Image434_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服肩蓝3_png";
		t.width = 69.31;
		t.x = 183.1;
		t.y = 497.08;
		return t;
	};
	_proto._Image435_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服蓝_png";
		t.width = 175.31;
		t.x = 274.85;
		t.y = 684.05;
		return t;
	};
	_proto._Image436_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 166.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服右袖蓝_png";
		t.width = 75.31;
		t.x = 347.5;
		t.y = 522.7;
		return t;
	};
	_proto._Image437_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 166.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "衣服左袖蓝_png";
		t.width = 145.31;
		t.x = 125.99;
		t.y = 545.01;
		return t;
	};
	_proto._Group60_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image438_i(),this._Image439_i()];
		return t;
	};
	_proto._Image438_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右裤粉_png";
		t.width = 72.81;
		t.x = 434.06;
		t.y = 787.04;
		return t;
	};
	_proto._Image439_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左裤粉_png";
		t.width = 73.81;
		t.x = 408.9;
		t.y = 701.23;
		return t;
	};
	_proto._Group61_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image440_i(),this._Image441_i()];
		return t;
	};
	_proto._Image440_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右裤绿_png";
		t.width = 124.31;
		t.x = 432.92;
		t.y = 916.66;
		return t;
	};
	_proto._Image441_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左裤绿_png";
		t.width = 94.31;
		t.x = 349;
		t.y = 794.23;
		return t;
	};
	_proto._Group62_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image442_i(),this._Image443_i()];
		return t;
	};
	_proto._Image442_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 30.85;
		t.anchorOffsetY = 9.14;
		t.height = 22.52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右鞋_png";
		t.width = 50.81;
		t.x = 526.39;
		t.y = 1010.63;
		return t;
	};
	_proto._Image443_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 4.11;
		t.anchorOffsetY = 5.28;
		t.height = 56.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "左鞋_png";
		t.width = 25.81;
		t.x = 370.47;
		t.y = 884.77;
		return t;
	};
	_proto._Group63_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image444_i(),this._Image445_i(),this._Image446_i(),this._Image447_i(),this._Image448_i(),this._Image449_i(),this._Image450_i(),this._Image451_i(),this._Image452_i(),this._Image453_i(),this._Image454_i(),this._Image455_i(),this._Image456_i(),this._Image457_i()];
		return t;
	};
	_proto._Image444_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 110.88;
		t.anchorOffsetY = 89.28;
		t.height = 220.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子9_png";
		t.width = 182.65;
		t.x = 226.64;
		t.y = 925.05;
		return t;
	};
	_proto._Image445_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 23.38;
		t.anchorOffsetY = 10.13;
		t.height = 107.35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子14_png";
		t.width = 146.81;
		t.x = 157.63;
		t.y = 880.12;
		return t;
	};
	_proto._Image446_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 27.42;
		t.anchorOffsetY = 8.39;
		t.height = 89.02;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子8_png";
		t.width = 172.14;
		t.x = 148.07;
		t.y = 790.1;
		return t;
	};
	_proto._Image447_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 13.72;
		t.anchorOffsetY = 4.69;
		t.height = 49.68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子10_png";
		t.width = 86.13;
		t.x = 291.9;
		t.y = 861.76;
		return t;
	};
	_proto._Image448_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 4.86;
		t.anchorOffsetY = 3.24;
		t.height = 34.35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子12_png";
		t.width = 30.46;
		t.x = 253.22;
		t.y = 889.52;
		return t;
	};
	_proto._Image449_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 2.07;
		t.anchorOffsetY = 5.74;
		t.height = 60.85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子15_png";
		t.width = 12.96;
		t.x = 230.34;
		t.y = 888.94;
		return t;
	};
	_proto._Image450_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 11.73;
		t.anchorOffsetY = 10.03;
		t.height = 106.35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子靠背1_png";
		t.width = 73.46;
		t.x = 97.73;
		t.y = 459.06;
		return t;
	};
	_proto._Image451_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 2.71;
		t.anchorOffsetY = 3;
		t.height = 31.85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子靠背2_png";
		t.width = 16.96;
		t.x = 121.01;
		t.y = 487.07;
		return t;
	};
	_proto._Image452_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 2.95;
		t.anchorOffsetY = 3;
		t.height = 31.85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子靠背3_png";
		t.width = 18.46;
		t.x = 142.29;
		t.y = 470.08;
		return t;
	};
	_proto._Image453_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 21.57;
		t.anchorOffsetY = 13.78;
		t.height = 146.35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子1_png";
		t.width = 134.96;
		t.x = 157.59;
		t.y = 697;
		return t;
	};
	_proto._Image454_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 3.98;
		t.anchorOffsetY = 2.57;
		t.height = 27.35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子11_png";
		t.width = 24.96;
		t.x = 140.73;
		t.y = 863.89;
		return t;
	};
	_proto._Image455_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 19.76;
		t.anchorOffsetY = 10.65;
		t.height = 113.35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子16_png";
		t.width = 123.96;
		t.x = 316.05;
		t.y = 927.16;
		return t;
	};
	_proto._Image456_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 2.94;
		t.anchorOffsetY = 3.75;
		t.height = 39.85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子17_png";
		t.width = 18.46;
		t.x = 417.73;
		t.y = 923.76;
		return t;
	};
	_proto._Image457_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 18.23;
		t.anchorOffsetY = 11.95;
		t.height = 126.85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "椅子背后_png";
		t.width = 114.46;
		t.x = 166.54;
		t.y = 714.1;
		return t;
	};
	_proto._Group64_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image458_i()];
		return t;
	};
	_proto._Image458_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 12.13;
		t.anchorOffsetY = 7.31;
		t.height = 18.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右耳花粉_png";
		t.width = 19.98;
		t.x = 277.46;
		t.y = 460.18;
		return t;
	};
	_proto._Group65_i = function () {
		var t = new eui.Group();
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image459_i(),this._Image460_i(),this._Image461_i()];
		return t;
	};
	_proto._Image459_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 15.57;
		t.anchorOffsetY = 45.29;
		t.height = 111.7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "书1_png";
		t.width = 25.65;
		t.x = 407.48;
		t.y = 451.96;
		return t;
	};
	_proto._Image460_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 35.19;
		t.anchorOffsetY = 38.92;
		t.height = 96.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "书2_png";
		t.width = 57.99;
		t.x = 449.33;
		t.y = 466.92;
		return t;
	};
	_proto._Image461_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 40.24;
		t.anchorOffsetY = 60.13;
		t.height = 148.37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "书3_png";
		t.width = 66.33;
		t.x = 454.06;
		t.y = 471.46;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 640;
		t.x = 0;
		t.y = 1056;
		t.viewport = this.Numbers_i();
		return t;
	};
	_proto.Numbers_i = function () {
		var t = new eui.Group();
		this.Numbers = t;
		t.anchorOffsetX = 0;
		t.height = 80;
		t.width = 880;
		return t;
	};
	_proto.Save_i = function () {
		var t = new eui.Group();
		this.Save = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image462_i(),this.save_i(),this.Card_i()];
		return t;
	};
	_proto._Image462_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "blackbg_jpg";
		t.top = 0;
		return t;
	};
	_proto.save_i = function () {
		var t = new eui.Image();
		this.save = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "down_png";
		t.width = 80;
		t.x = 514.62;
		t.y = 939.99;
		return t;
	};
	_proto.Card_i = function () {
		var t = new eui.Image();
		this.Card = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 568;
		t.horizontalCenter = 0;
		t.source = "down_png";
		t.verticalCenter = 0;
		t.width = 320;
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
		t.skinName = ColorfulSkin$Skin5;
		return t;
	};
	return ColorfulSkin;
})(eui.Skin);generateEUI.paths['resource/game/Detail.exml'] = window.DetailSkin = (function (_super) {
	__extends(DetailSkin, _super);
	var DetailSkin$Skin6 = 	(function (_super) {
		__extends(DetailSkin$Skin6, _super);
		function DetailSkin$Skin6() {
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
		var _proto = DetailSkin$Skin6.prototype;

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
		return DetailSkin$Skin6;
	})(eui.Skin);

	function DetailSkin() {
		_super.call(this);
		this.skinParts = ["season_detail","season_detail0","season_detail1","season_detail2","season_detail3","season_detail4","season_group","back"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.season_group_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.back_i()];
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
		t.x = 138.82;
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
		t.x = 463.03;
		t.y = 1009.5;
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
		t.x = 138.82;
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
		t.x = 449.01;
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
		t.skinName = DetailSkin$Skin6;
		return t;
	};
	return DetailSkin;
})(eui.Skin);generateEUI.paths['resource/game/Season.exml'] = window.SeasonSkin = (function (_super) {
	__extends(SeasonSkin, _super);
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
						new eui.SetProperty("_Image1","source","Spring_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","Spring_png")
					])
			];
		}
		var _proto = SeasonSkin$Skin7.prototype;

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
						new eui.SetProperty("_Image1","source","Summer_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","Summer_png")
					])
			];
		}
		var _proto = SeasonSkin$Skin8.prototype;

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
		return SeasonSkin$Skin8;
	})(eui.Skin);

	var SeasonSkin$Skin9 = 	(function (_super) {
		__extends(SeasonSkin$Skin9, _super);
		function SeasonSkin$Skin9() {
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
		var _proto = SeasonSkin$Skin9.prototype;

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
		return SeasonSkin$Skin9;
	})(eui.Skin);

	var SeasonSkin$Skin10 = 	(function (_super) {
		__extends(SeasonSkin$Skin10, _super);
		function SeasonSkin$Skin10() {
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
		var _proto = SeasonSkin$Skin10.prototype;

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
		return SeasonSkin$Skin10;
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
		t.skinName = SeasonSkin$Skin7;
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
		t.skinName = SeasonSkin$Skin8;
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
		t.skinName = SeasonSkin$Skin9;
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
		t.skinName = SeasonSkin$Skin10;
		return t;
	};
	return SeasonSkin;
})(eui.Skin);generateEUI.paths['resource/game/show.exml'] = window.showSkin = (function (_super) {
	__extends(showSkin, _super);
	var showSkin$Skin11 = 	(function (_super) {
		__extends(showSkin$Skin11, _super);
		function showSkin$Skin11() {
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
		var _proto = showSkin$Skin11.prototype;

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
		return showSkin$Skin11;
	})(eui.Skin);

	function showSkin() {
		_super.call(this);
		this.skinParts = ["result","back"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.result_i(),this.back_i()];
	}
	var _proto = showSkin.prototype;

	_proto.result_i = function () {
		var t = new eui.Image();
		this.result = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
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
		t.skinName = showSkin$Skin11;
		return t;
	};
	return showSkin;
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