class Colorful extends eui.Component implements  eui.UIComponent {

	public carveLineLarge:eui.Image;
	public back:eui.Button;
	public Numbers:eui.Group;
	
	public SpringGroup:eui.Group;

	public SummerGroup:eui.Group;

	public AutumnGroup:eui.Group;

	public WinterGroup:eui.Group;

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
		//封装一个函数，参数为SpringGroup或者其他，从而清空内容
		for (var i=0;i<this.SpringGroup.numChildren;i++)
		{
			var group:eui.Group=<eui.Group>this.SpringGroup.getChildAt(i);
			for (var j=0;j<group.numChildren;j++)
			{
				var im:eui.Image=<eui.Image>group.getChildAt(j);
				im.alpha=0;
				im.removeEventListener(egret.TouchEvent.TOUCH_TAP,Carve.getInstance().func,Carve.getInstance());
			}
			if (i!=0)
			{
				this.SpringGroup.getChildAt(i).visible=false;
			}
		}
		this.Numbers.removeChildren();
	}
}