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
		this.skinParts = ["banzi","toCarve","toPrint","goldCarve","blackCarve","carveLine","back"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.banzi_i(),this.toCarve_i(),this.toPrint_i(),this.goldCarve_i(),this.blackCarve_i(),this.carveLine_i(),this.back_i()];
	}
	var _proto = CarveSkin.prototype;

	_proto._Image1_i = function () {
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
		this.skinParts = ["carveLineLarge","SpringGroup","SummerGroup","AutumnGroup","WinterGroup","Numbers","back","save"];
		
		this.currentState = "衣服绿8_png";
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.carveLineLarge_i(),this.SpringGroup_i(),this.SummerGroup_i(),this.AutumnGroup_i(),this.WinterGroup_i(),this._Scroller1_i(),this.back_i(),this.save_i()];
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
		t.source = "LiqiuXian_png";
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
		t.top = 0;
		t.elementsContent = [this._Group16_i(),this._Group17_i(),this._Group18_i()];
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
		t.y = 144.67;
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
		t.y = -15.33;
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
		t.y = 128.86;
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
		t.y = 177.52;
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
		t.y = -53.09;
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
		t.y = -87.69;
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
		t.y = -35.68;
		return t;
	};
	_proto._Image110_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 14.87;
		t.anchorOffsetY = 15.73;
		t.height = 32.26;
		t.source = "左娃右手臂_png";
		t.width = 28.26;
		t.x = 132.08;
		t.y = -12.56;
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
		t.y = -48.89;
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
		t.y = 0.81;
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
		t.x = 162.24;
		t.y = 112.12;
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
		t.x = 112.79;
		t.y = 77.91;
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
		t.x = -4.63;
		t.y = -89.07;
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
		t.x = -27.57;
		t.y = -113.51;
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
		t.x = -44.57;
		t.y = -48.86;
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
		t.x = -69.78;
		t.y = -76.71;
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
		t.y = 82.06;
		return t;
	};
	_proto._Image120_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 14.07;
		t.anchorOffsetY = 29.45;
		t.height = 58.76;
		t.source = "右娃头绳_png";
		t.width = 28.36;
		t.x = 242.17;
		t.y = 47.92;
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
		t.y = 86.07;
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
		t.y = 378.72;
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
		t.y = 432.95;
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
		t.y = -81.33;
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
		t.y = -74.26;
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
		t.y = -178.92;
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
		t.x = -28.39;
		t.y = -79.52;
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
		t.x = 28.85;
		t.y = -57.17;
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
		t.x = 12.99;
		t.y = -66.4;
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
		t.x = -19.72;
		t.y = 23.68;
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
		t.x = -30.81;
		t.y = -22.67;
		return t;
	};
	_proto._Image132_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 7.5;
		t.anchorOffsetY = 29.78;
		t.height = 76.76;
		t.source = "左娃衣服红5_png";
		t.width = 46.76;
		t.x = 78.8;
		t.y = -18.15;
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
		t.x = -64.84;
		t.y = 134.22;
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
		t.x = 51.3;
		t.y = 113.62;
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
		t.x = -30.28;
		t.y = 72.78;
		return t;
	};
	_proto.AutumnGroup_i = function () {
		var t = new eui.Group();
		this.AutumnGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group19_i()];
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 384.83;
		t.y = 303.33;
		t.elementsContent = [this._Image136_i(),this._Image137_i()];
		return t;
	};
	_proto._Image136_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃脸_png";
		t.width = 129.17;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image137_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 14.34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "右娃脖子_png";
		t.width = 33.67;
		t.x = 29.5;
		t.y = 123;
		return t;
	};
	_proto.WinterGroup_i = function () {
		var t = new eui.Group();
		this.WinterGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
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
	_proto.save_i = function () {
		var t = new eui.Image();
		this.save = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.84;
		t.source = "button_up_png";
		t.width = 79.09;
		t.x = 505;
		t.y = 959;
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