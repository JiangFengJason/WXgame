class StartGame extends eui.Component implements  eui.UIComponent {
	public btn_start:eui.Button;
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
		//this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toStartGame,this);
		this.addChild(Season.getInstance());
	}

	private toStartGame() {
		this.addChild(Season.getInstance());
	}
}