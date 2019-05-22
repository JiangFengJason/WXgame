class StartGame extends eui.Component implements  eui.UIComponent {
	public btn_start:eui.Image;
	private static shared:StartGame;
	public btn_start_bt:eui.Button;
	public static getInstance(){
        if( !StartGame.shared){
            StartGame.shared =  new StartGame();
        }
        return StartGame.shared;
    }

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
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
	}
	private getpoint(){
		console.log("======>");
		// if (this.btn_start_bt.hitTestPoint(300,300,true))
		// {
		// 	this.toStartGame();
		// }
	}
	private toStartGame() {
		this.addChild(Season.getInstance());
	}
}