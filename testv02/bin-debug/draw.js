var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var draw = (function (_super) {
    __extends(draw, _super);
    function draw() {
        return _super.call(this) || this;
    }
    draw.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    draw.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return draw;
}(eui.Component));
__reflect(draw.prototype, "draw", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=draw.js.map