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
		switch (this.season_detail.source){
			case "Lichun_png":
				this.initPicture("Xiangaozip_jpg","ChunGold_png","ChunBlack_png");
				if (Carve.getInstance().Springsuccess){
					this.removeChild(Carve.getInstance());
					this.addChild(show.getInstance());
					show.getInstance().result.source="Chun_jpg";
				}
				break;

			case "Lixia_png":
				this.initPicture("LixiaXian_png","XiaGold_png","XiaBlack_png");
				if (Carve.getInstance().Summersuccess){
					this.removeChild(Carve.getInstance());
					this.addChild(show.getInstance());
					show.getInstance().result.source="Xia_jpg";
				}
				break;

			case "Liqiu_png":
				this.initPicture("LiqiuXian_png","QiuGold_png","QiuBlack_png");
				if (Carve.getInstance().Autumnsuccess){
					this.removeChild(Carve.getInstance());
					this.addChild(show.getInstance());
					show.getInstance().result.source="Qiu2_png";
				}
				break;

			case "Lidong_png":
				this.initPicture("LidongXian_png","DongGold_png","DongBlack_png");
				if (Carve.getInstance().Autumnsuccess){
					this.removeChild(Carve.getInstance());
					this.addChild(show.getInstance());
					show.getInstance().result.source="Dong_jpg";
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