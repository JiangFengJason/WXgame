class Colorful extends eui.Component implements  eui.UIComponent {

	public carveLineLarge:eui.Image;
	public back:eui.Button;
	public SpringNumber:eui.Group;
	public SpringGroup:eui.Group;
	public Numbers:eui.Scroller;

	//public Numb:number;

	private static shared:Colorful;
	public static getInstance(){
        if( !Colorful.shared){
            Colorful.shared =  new Colorful();
        }
        return Colorful.shared;
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
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.timerComFunc,this);
	}
	private timerComFunc(){
		this.parent.removeChild(this);
		Carve.getInstance().timerComFunc();
		
	}
}