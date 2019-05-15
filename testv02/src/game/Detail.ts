class Detail extends eui.Component implements  eui.UIComponent {
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
	}
	private toPass()
	{
		this.parent.removeChild(this);
	}
}