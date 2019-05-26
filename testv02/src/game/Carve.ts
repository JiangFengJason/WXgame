class Carve extends eui.Component implements  eui.UIComponent {

	public carveLine:eui.Image;
	public back:eui.Button;
	public banzi:eui.Button;
	public toCarve:eui.Button;
	public toXian:eui.Button;
	public toPrint:eui.Button;
	public mc:egret.MovieClip;
	public func:any;
	public Springsuccess:boolean;
	public Summersuccess:boolean;
	public Autumnsuccess:boolean;
	public Wintersuccess:boolean;

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
		this.Springsuccess=false;
		this.Summersuccess=false;
		this.Autumnsuccess=false;
		this.Wintersuccess=false;
		
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
		switch(this.carveLine.source){
			case "Xiangaozip_jpg":
			//封装函数，参数为文件路径，SpringGroup
				var nb=1;
				while (nb<=2){
					//https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/assets/game/Spring/Lichun/Number/
					var im=new eui.Image("resource/assets/game/Spring/Lichun/Number/"+String(nb)+".png");
					im.width=80;
					im.height=80;
					im.x=(nb-1)*80;
					im.name=String(nb);
					Colorful.getInstance().Numbers.addChild(im);
					im.once(egret.TouchEvent.TOUCH_TAP,this.selectPart,this);
					if (nb!=1){
						im.touchEnabled=false;
					}
					nb++;
				}
				Colorful.getInstance().SpringGroup.getChildAt(0).visible=true;
				break;
			case "LixiaXian_png":

				break;
			case "LiqiuXian_png":

				break;
			case "LidongXian_png":

				break;
		}
	}
	//增加参数，将SpringGroup改掉
	private selectPart(e:egret.TouchEvent){
		var part:eui.Image=<eui.Image>e.currentTarget;
		var group:eui.Group=<eui.Group>Colorful.getInstance().SpringGroup.getChildAt(Number(part.name)-1);
		for (var i=0;i<group.numChildren;i++)
		{
			var child:eui.Image=<eui.Image>group.getChildAt(i);
			child.alpha=0.5;
			this.func=this.changeColor.bind(this,child,Number(part.name),group);
			child.once(egret.TouchEvent.TOUCH_TAP,this.func,this);
		}
	}	
	private changeColor(img:eui.Image,nb:number,group:eui.Group){
		img.alpha=1;
		let next:boolean[]=[];
		var turn=true;
		for (var i=0;i<group.numChildren;i++)
		{
			var child:eui.Image=<eui.Image>group.getChildAt(i);
			if (child.alpha==0.5){
				next.push(false);
			}
			else if (child.alpha==1){
				next.push(true);
			}
		}
		for (var m=0;m<next.length;m++)
		{
			if (next[m]==false)
			{
				turn=false;
				break;
			}	
		}
		if (turn)
		{
			//挪位置
			//封装函数，将其中的SpringGroup和胜利标志匹配
			var item=Colorful.getInstance().Numbers.getChildAt(nb-1);
			item.visible=false;
			for(var j=nb;j<2;j++)
			{
				var imge:eui.Image=<eui.Image>Colorful.getInstance().Numbers.getChildAt(j);
				imge.x=imge.x-80;
			}
			if (nb<2)
			{
				var childs:eui.Group=<eui.Group>Colorful.getInstance().SpringGroup.getChildAt(nb);
				childs.visible=true;
				var nbimg:eui.Image=<eui.Image>Colorful.getInstance().Numbers.getChildAt(nb);
				nbimg.touchEnabled=true;
			}
			else 
			{
				console.log("successful");
				this.Springsuccess=true;
			}
		}
		
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
	}
}