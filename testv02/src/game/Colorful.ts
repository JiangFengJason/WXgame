class Colorful extends eui.Component implements  eui.UIComponent {

	public carveLineLarge:eui.Image;
	public save:eui.Image;
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
		this.save.visible=false;
		Carve.getInstance().timerComFunc();

		this.cleanUp(this.SpringGroup);
		// this.cleanUp(this.SummerGroup);
		// this.cleanUp(this.AutumnGroup);
		// this.cleanUp(this.WinterGroup);
		this.Numbers.removeChildren();
		this.parent.removeChild(this);
	}
	private cleanUp(group:eui.Group){
		for (var i=0;i<group.numChildren;i++)
		{
			var groupDetail:eui.Group=<eui.Group>group.getChildAt(i);
			for (var j=0;j<groupDetail.numChildren;j++)
			{
				var im:eui.Image=<eui.Image>groupDetail.getChildAt(j);
				im.alpha=0;
				im.removeEventListener(egret.TouchEvent.TOUCH_TAP,Carve.getInstance().func,Carve.getInstance());
			}
			if (i!=0)
			{
				group.getChildAt(i).visible=false;
			}
		}
	}
}