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
		//this.Numb=1;
		// for (var item in this.SpringGroup)
		// {
		// 	if (this.SpringGroup[item].name=="1"){
		// 		this.SpringGroup[item].visible=true;
		// 		this.Numb=1;
		// 	}else{
		// 		this.SpringGroup[item].visible=false;
		// 	}
		// }
	}
	private timerComFunc(){
		this.parent.removeChild(this);
		Carve.getInstance().timerComFunc();
	}
	// private selectPart(e:egret.TouchEvent){
	// 	var part:eui.Image=<eui.Image>e.currentTarget;
	// 	//if (Number(part.name)==this.Numb)
	// 	//{
	// 		var group:eui.Group=<eui.Group>this.SpringGroup.getElementAt(Number(part.name)-1);
	// 		for (var item in group)
	// 		{
	// 			var child:eui.Image=<eui.Image>group[item];
	// 			child.alpha=0.5;
	// 			child.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeColor,this);
	// 		}
	// 	//}
	// }	
	// private changeColor(e:egret.TouchEvent){
	// 	var img:eui.Image=<eui.Image>e.currentTarget;
	// 	img.alpha=1;
	// }
}