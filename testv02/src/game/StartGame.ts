class StartGame extends eui.Component implements  eui.UIComponent {
	public btn_start:eui.Image;
	private static shared:StartGame;
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
		var img = new egret.Bitmap;
		img.texture = RES.getRes('16_png');
		this.addChild(img);
		console.log(img.hitTestPoint(300,300,true));
		//this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.getpoint,this);
		// this.addChild(Season.getInstance());
	}
	private getpoint(){
		if (this.btn_start.hitTestPoint(300,300,true))
		{
			this.toStartGame();
		}
	}
	private toStartGame() {
		this.addChild(Season.getInstance());
	}
}