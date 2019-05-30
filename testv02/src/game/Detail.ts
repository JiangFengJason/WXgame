class Detail extends eui.Component implements  eui.UIComponent {
	public back:eui.Button;
	public season_detail:eui.Image;
	public season_group:eui.Group;
	public season_detail0:eui.Image;
	public season_detail1:eui.Image;
	public season_detail2:eui.Image;
	public season_detail3:eui.Image;
	public season_detail4:eui.Image;

	private static shared:Detail;
	public static getInstance(){
        if( !Detail.shared){
            Detail.shared =  new Detail();
        }
        return Detail.shared;
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
		this.season_detail.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toPass,this);
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toSeason,this);
	}
	public toPass()
	{
		//this.parent.removeChild(this);
		this.addChild(Carve.getInstance());
		//播放刻的说明
		Carve.getInstance().setChildIndex(Carve.getInstance().CarveText,Carve.getInstance().numChildren-1);
		egret.Tween.get(Carve.getInstance().CarveText,{loop:false}).to({alpha:0}).to({ alpha: 1}, 4000).to({ alpha: 0}, 4000).call(Carve.getInstance().close, Carve.getInstance(), [Carve.getInstance().CarveText]);
		switch (this.season_detail.source){
			case "Lichun_png":
				this.initPicture("Xiangaozip_jpg","ChunGold_png","ChunBlack_png");
				if (Carve.getInstance().Springsuccess){
					this.removeChild(Carve.getInstance());
					this.addChild(show.getInstance());
					show.getInstance().result.source="LichunCard_png";
				}
				break;

			case "Lixia_png":
				this.initPicture("LixiaXian_png","XiaGold_png","XiaBlack_png");
				if (Carve.getInstance().Summersuccess){
					this.removeChild(Carve.getInstance());
					this.addChild(show.getInstance());
					show.getInstance().result.source="LixiaCard_png";
				}
				break;

			case "Liqiu_png":
				this.initPicture("LiqiuXian_png","QiuGold_png","QiuBlack_png");
				if (Carve.getInstance().Autumnsuccess){
					this.removeChild(Carve.getInstance());
					this.addChild(show.getInstance());
					show.getInstance().result.source="LiqiuCard_png";
				}
				break;

			case "Lidong_png":
				this.initPicture("LidongXian_png","DongGold_png","DongBlack_png");
				if (Carve.getInstance().Autumnsuccess){
					this.removeChild(Carve.getInstance());
					this.addChild(show.getInstance());
					show.getInstance().result.source="LidongCard_png";
				}
				break;
		}
	}
	private initPicture(carvelinePic:string,goldCarvePic:string,blackCarve){
		Carve.getInstance().carveLine.source=carvelinePic;
		Carve.getInstance().goldCarve.source=goldCarvePic;
		Carve.getInstance().blackCarve.source=blackCarve;
	}
	private toSeason(){
		this.parent.removeChild(this);
	}
}