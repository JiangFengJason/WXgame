class Carve extends eui.Component implements  eui.UIComponent {

	public carveLine:eui.Image;
	public goldCarve:eui.Image;
	public blackCarve:eui.Image;

	public back:eui.Button;
	public banzi:eui.Button;
	public toCarve:eui.Button;
	public toPrint:eui.Button;
	public mc:egret.MovieClip;
	public func:any;
	public Springsuccess:boolean;
	public Summersuccess:boolean;
	public Autumnsuccess:boolean;
	public Wintersuccess:boolean;

	public CarveText:eui.Group;
	public PrintText:eui.Group;
	public BrushText:eui.Group;
	public PaintText:eui.Group;

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
		

		this.toCarve.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toGetCarve,this);
		this.toPrint.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toGetPrint,this);
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.timerComFunc,this);
		this.Springsuccess=false;
		this.Summersuccess=false;
		this.Autumnsuccess=false;
		this.Wintersuccess=false;
		
	}
	public close(group:eui.Group){
		this.setChildIndex(group,0);
	}
	private jump(){
		//播放画的说明
		this.setChildIndex(this.PaintText,this.numChildren-1);
		egret.Tween.get(this.PaintText,{loop:false}).to({alpha:0}).to({ alpha: 1}, 4000).to({ alpha: 0}, 4000).call(this.close, this, [this.PaintText]).call(this.tolarge,this);
	}
	private timerFunc(){
		//console.log("start");
	}
	private toGetPrint(){
		//金色线稿换黑色
		egret.Tween.get(this.blackCarve,{loop:false}).to({ alpha: 0}, 200).to({ alpha: 1}, 1500);
		egret.Tween.get(this.goldCarve,{loop:false}).to({ alpha: 1}, 200).to({ alpha: 0}, 1500).wait(500).call(this.toPut,this);
		
		this.toPrint.visible=false;
		this.toCarve.visible=false;
	}
	private toPut(){
		//播放印的说明
		this.setChildIndex(this.PrintText,this.numChildren-1);
		egret.Tween.get(this.PrintText,{loop:false}).to({alpha:0}).to({ alpha: 1}, 4000).to({ alpha: 0}, 4000).call(this.close, this, [this.PrintText]).call(this.toYin,this);
	}
	private toYin(){
		var data = RES.getRes("yin_json");
        var txtr = RES.getRes("yin_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        this.mc= new egret.MovieClip( mcFactory.generateMovieClipData() );
		this.mc.x=120;
		this.mc.y=278;
		this.addChild(this.mc);
        this.mc.gotoAndPlay( 1 ,1);

		this.setChildIndex(this.blackCarve, this.numChildren - 1);

		this.mc.addEventListener(egret.Event.COMPLETE,this.jump,this);
	}
	private toGetCarve(){
		//金色的线稿显示
		this.toCarve.visible=false;
		egret.Tween.get(this.goldCarve,{loop:false}).to({ alpha: 0}, 200).to({ alpha: 1}, 1500).wait(500).call(this.toGetXian,this);
	}
	private toGetXian(){
		//播放刷的说明
		this.setChildIndex(this.BrushText,this.numChildren-1);
		egret.Tween.get(this.BrushText,{loop:false}).to({alpha:0}).to({ alpha: 1}, 4000).to({ alpha: 0}, 4000).call(this.close, this, [this.BrushText]);
		this.toPrint.visible=true;
	}
	private tolarge(){
		this.initData();
		this.addChild(Colorful.getInstance());
		Colorful.getInstance().Save.visible=false;
		this.removeChild(this.mc);
		Colorful.getInstance().carveLineLarge.source=this.carveLine.source;
		switch(this.carveLine.source){
			case "Xiangaozip_jpg":
				this.toDifferentlarge("https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/assets/game/Spring/Lichun/Number/",15,Colorful.getInstance().SpringGroup);
				Colorful.getInstance().Card.source="LichunCard_png";
				break;
			case "LixiaXian_png":
				this.toDifferentlarge("https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/assets/game/Summer/Lixia/Number/",16,Colorful.getInstance().SummerGroup);
				Colorful.getInstance().Card.source="LixiaCard_png";
				break;
			case "LiqiuXian_png":
				this.toDifferentlarge("https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/assets/game/Autumn/Liqiu/Number/",19,Colorful.getInstance().AutumnGroup);
				Colorful.getInstance().Card.source="LiqiuCard_png";
				break;
			case "LidongXian_png":
				this.toDifferentlarge("https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/assets/game/Winter/Lidong/Number/",15,Colorful.getInstance().WinterGroup);
				Colorful.getInstance().Card.source="LidongCard_png";
				break;
		}
	}
	private toDifferentlarge(url:string,seasonNb:number,group:eui.Group){
		var nb=1;
		while (nb<=seasonNb){
			//https://new-1259278744.cos.ap-chengdu.myqcloud.com/resource/assets/game/Spring/Lichun/Number/
			var im=new eui.Image(url+String(nb)+".png");
			im.width=80;
			im.height=80;
			im.x=(nb-1)*80;
			im.name=String(nb);
			Colorful.getInstance().Numbers.addChild(im);
			im.once(egret.TouchEvent.TOUCH_TAP,this.selectPart.bind(this,im,group),this);
			if (nb!=1){
				im.touchEnabled=false;
			}
			nb++;
		}
		group.getChildAt(0).visible=true;
		//设定季节层级
		//Colorful.getInstance().setChildIndex(group, 4);
		group.parent.setChildIndex(group,4);
	}

	private selectPart(part:eui.Image,Seasongroup:eui.Group){
		var group:eui.Group=<eui.Group>Seasongroup.getChildAt(Number(part.name)-1);
		for (var i=0;i<group.numChildren;i++)
		{
			var child:eui.Image=<eui.Image>group.getChildAt(i);
			child.alpha=0.5;
			child.pixelHitTest=false;
			this.func=this.changeColor.bind(this,child,Number(part.name),group);
			child.once(egret.TouchEvent.TOUCH_TAP,this.func,this);
		}
	}	
	private changeColor(img:eui.Image,nb:number,group:eui.Group){
		img.alpha=1;
		img.pixelHitTest=true;
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
			for(var j=nb;j<Colorful.getInstance().Numbers.numChildren;j++)
			{
				var imge:eui.Image=<eui.Image>Colorful.getInstance().Numbers.getChildAt(j);
				imge.x=imge.x-80;
			}
			if (nb<Colorful.getInstance().Numbers.numChildren)
			{
				var childs:eui.Group=<eui.Group>group.parent.getChildAt(nb);
				childs.visible=true;
				var nbimg:eui.Image=<eui.Image>Colorful.getInstance().Numbers.getChildAt(nb);
				nbimg.touchEnabled=true;
			}
			else 
			{
				Colorful.getInstance().Save.visible=true;
				if (group.parent==Colorful.getInstance().SpringGroup){
					this.Springsuccess=true;
				}
				else if (group.parent==Colorful.getInstance().SummerGroup){
					this.Summersuccess=true;
					console.log("Summer");
				}
				else if (group.parent==Colorful.getInstance().AutumnGroup){
					this.Autumnsuccess=true;
					console.log("Autumn");
				}
					
				else if (group.parent==Colorful.getInstance().WinterGroup){
					this.Wintersuccess=true;
					console.log("Winter");
				}
					
			}
		}
		
	}
	private savePic(img:eui.Image,u:string){
		img.texture.saveToFile("image/png",u);
	}
	public timerComFunc(){
		//this.parent.setChildIndex(this,0);
		this.initData();
		this.parent.removeChild(this);
	}
	private initData(){
		this.carveLine.alpha=0;
		this.blackCarve.alpha=0;
		this.goldCarve.alpha=0;
		this.toCarve.visible=true;
		this.toPrint.visible=false;
	}
}