class show extends eui.Component implements  eui.UIComponent {
	public result:eui.Image;
	public back:eui.Button;

	private static shared:show;
	public static getInstance(){
        if( !show.shared){
            show.shared =  new show();
        }
        return show.shared;
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
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toReturn,this)
	}
	private toReturn()
	{
		this.parent.removeChild(this);
	}
}