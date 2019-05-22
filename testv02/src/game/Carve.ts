class Carve extends eui.Component implements  eui.UIComponent {

	public carveLine:eui.Image;
	public back:eui.Button;
	public banzi:eui.Button;
	public toCarve:eui.Button;
	public toXian:eui.Button;
	public toPrint:eui.Button;

	private static shared:Carve;
	public static getInstance(){
        if( !Carve.shared){
            Carve.shared =  new Carve();
        }
        return Carve.shared;
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
		//this.carveLine.addEventListener(egret.TouchEvent.TOUCH_TAP,this.jump,this);
		this.toCarve.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toGetCarve,this);
		this.toXian.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toGetXian,this);
		this.toPrint.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toGetPrint,this);
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.timerComFunc,this);
	}

	private jump(){
		var timer:egret.Timer = new egret.Timer(1000,1);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
        timer.start();
	}
	private timerFunc(){
		//console.log("start");
	}
	private toGetPrint(){
		//线稿出现

		this.toXian.visible=false;
		this.toPrint.visible=false;
		this.toCarve.visible=false;
	}
	private toGetCarve(){
		//金色的线稿显示
		

		this.toXian.visible=true;
		this.toCarve.visible=false;
	}
	private toGetXian(){
		var data = RES.getRes("yin_json");
        var txtr = RES.getRes("yin_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        var mc1:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData() );
		this.addChild(mc1);
        mc1.gotoAndPlay( 1 ,1);

		this.toXian.visible=false;
		this.toPrint.visible=true;
	}
	private timerComFunc(){
		this.parent.setChildIndex(this,0);
	}
}