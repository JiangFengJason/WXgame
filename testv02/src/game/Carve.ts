class Carve extends eui.Component implements  eui.UIComponent {

	public carveLine:eui.Image;
	public back:eui.Button;
	public banzi:eui.Button;
	public toCarve:eui.Button;
	public toXian:eui.Button;
	public toPrint:eui.Button;
	public mc:egret.MovieClip;


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
		var timer:egret.Timer = new egret.Timer(2500,1);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.tolarge,this);
        //开始计时
        timer.start();
	}
	private timerFunc(){
		//console.log("start");
	}
	private toGetPrint(){
		//线稿出现
		this.removeChild(this.mc);
		egret.Tween.get(this.carveLine,{loop:false}).to({ alpha: 0}, 200).to({ alpha: 1}, 2000);
		this.jump();
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
        this.mc= new egret.MovieClip( mcFactory.generateMovieClipData() );
		this.addChild(this.mc);
        this.mc.gotoAndPlay( 1 ,1);

		this.toXian.visible=false;
		this.toPrint.visible=true;
	}
	private tolarge(){
		this.initData();
		this.addChild(Colorful.getInstance());
		Colorful.getInstance().carveLineLarge.source=this.carveLine.source;
		var nb=1;
		while (nb<=30){
			var im=new eui.Image("resource/assets/game/Spring/Lichun/Number/"+String(nb)+".png");
			im.width=80;
			im.height=80;
			im.x=(nb-1)*80;
			im.name=String(nb);
			Colorful.getInstance().SpringNumber.addChild(im);
			im.addEventListener(egret.TouchEvent.TOUCH_TAP,this.selectPart,this);
			nb++;
		}

	}
	private selectPart(e:egret.TouchEvent){
		var part:eui.Image=<eui.Image>e.currentTarget;
		//if (Number(part.name)==this.Numb)
		//{
			var group:eui.Group=<eui.Group>Colorful.getInstance().SpringGroup.getChildAt(Number(part.name)-1);
			for (var i=0;i<group.numChildren;i++)
			{
				var child:eui.Image=<eui.Image>group.getChildAt(i);
				child.alpha=0.5;
				child.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeColor,this);
			}
		//}
	}	
	private changeColor(e:egret.TouchEvent){
		var img:eui.Image=<eui.Image>e.currentTarget;
		img.alpha=1;
	}
	public timerComFunc(){
		//this.parent.setChildIndex(this,0);
		this.initData();
		this.parent.removeChild(this);
	}
	private initData(){
		this.carveLine.alpha=0;
		this.toCarve.visible=true;
		this.toXian.visible=false;
		this.toPrint.visible=false;
		this.carveLine.x=100;
		this.carveLine.y=219;
	}
}