class show extends eui.Component implements  eui.UIComponent {
	public result:eui.Image;

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
	}
	
}