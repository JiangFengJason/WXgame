class Season extends eui.Component implements  eui.UIComponent {

	public Spring:eui.Button;
	public Summer:eui.Button;
	public Autumn:eui.Button;
	public Winter:eui.Button;
	public Canvas:eui.Group;
	private posStart:egret.Point;
    private posEnd:egret.Point;

	private static shared:Season;
	public static getInstance(){
        if( !Season.shared){
            Season.shared =  new Season();
        }
        return Season.shared;
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
		this.Spring.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
		this.Spring.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
		this.Summer.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
		this.Summer.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
		this.Autumn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
		this.Autumn.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
		this.Winter.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
		this.Winter.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);

		var tw = egret.Tween.get( this.Canvas, { loop:false} );
		tw.to( {x:1920}, 2000 ).call( function(){  } ).wait( 100 );

		var data = RES.getRes("abc_json");
        var txtr = RES.getRes("abc_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        var mc1:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData() );
        this.Winter.addChild( mc1 );
        mc1.gotoAndPlay( 1 ,-1);

		var data = RES.getRes("Qiu_json");
        var txtr = RES.getRes("Qiu_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        var mc1:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData() );
        this.Autumn.addChild( mc1 );
        mc1.gotoAndPlay( 1 ,-1);

	}
	
	protected onTouch(e: egret.TouchEvent){
		switch (e.type) {
			case egret.TouchEvent.TOUCH_BEGIN:
				this.posStart=new egret.Point(e.stageX,e.stageY);
				break;
			case egret.TouchEvent.TOUCH_END:
				this.posEnd=new egret.Point(e.stageX,e.stageY);
				this.controlEnd(e);
				break;
		}
	}
	protected controlEnd(e:egret.TouchEvent): void {
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
		this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
			
		var disx:number=this.posEnd.x-this.posStart.x;
		var disy:number=this.posEnd.y-this.posStart.y;

		let SpringList:string[]=["Lichun_png","Yushui_png","Jingzhe_png","Chunfen_png","Qingming_png","Guyu_png"];
		let SummerList:string[]=["Lixia_png","Xiaoman_png","Mangzhong_png","Xiazhi_png","Xiaoshu_png","Dashu_png"];
		let AutumnList:string[]=["Liqiu_png","Chushu_png","Bailu_png","Qiufen_png","Hanlu_png","Shuangjiang_png"];
		let WinterList:string[]=["Lidong_png","Xiaoxue_png","Daxue_png","Dongzhi_png","Xiaohan_png","Dahan_png"];

		if(Math.abs(disx)>Math.abs(disy)){//左右
			if(disx>0&&this.Canvas.x!=1920&&(this.Canvas.x==0||this.Canvas.x==640||this.Canvas.x==1280)){
				var tw = egret.Tween.get( this.Canvas, { loop:false} );
				tw.to( {x:this.Canvas.x+640}, 1000 ).call( function(){  } ).wait( 100 );
			}  
			else if(disx<0&&this.Canvas.x!=0&&(this.Canvas.x==1920||this.Canvas.x==640||this.Canvas.x==1280)){
				var tw = egret.Tween.get( this.Canvas, { loop:false} );
				tw.to( {x:this.Canvas.x-640}, 1000 ).call( function(){  } ).wait( 100 );
			}     
		}
		

		if (Math.abs(disx)<2&&Math.abs(disy)<2){
			this.addChild(Detail.getInstance());
			switch (e.currentTarget){
				case this.Spring:
					var count=0;
					for (var item in SpringList){
						var child:eui.Image=<eui.Image>Detail.getInstance().season_group.getChildAt(count);
						child.source=SpringList[item];
						count++;
					}
					break;
				case this.Summer:
					var count=0;
					for (var item in SummerList){
						var child:eui.Image=<eui.Image>Detail.getInstance().season_group.getChildAt(count);
						child.source=SummerList[item];
						count++;
					}
					break;
				case this.Autumn:
					var count=0;
					for (var item in AutumnList){
						var child:eui.Image=<eui.Image>Detail.getInstance().season_group.getChildAt(count);
						child.source=AutumnList[item];
						count++;
					}
					break;
				case this.Winter:
					var count=0;
					for (var item in WinterList){
						var child:eui.Image=<eui.Image>Detail.getInstance().season_group.getChildAt(count);
						child.source=WinterList[item];
						count++;
					}
					break;
			}

		}
	}
}