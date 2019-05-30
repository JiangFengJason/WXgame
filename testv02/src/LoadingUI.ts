//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

     private loadingImg1:eui.Image;
     private loadingImg2:eui.Image;
     private textField:egret.TextField;

    private createView(): void {
        this.textField=new egret.TextField();
         this.loadingImg1=new eui.Image();
         this.loadingImg2=new eui.Image();

         this.loadingImg1.source="load1_jpg";
         this.loadingImg2.source="load2_jpg";

        this.loadingImg1.alpha=0;
        this.loadingImg2.alpha=0;

        this.loadingImg1.top=0;
        this.loadingImg1.bottom=0;
        this.loadingImg1.left=0;
        this.loadingImg1.right=0;

        this.loadingImg2.top=0;
        this.loadingImg2.bottom=0;
        this.loadingImg2.left=0;
        this.loadingImg2.right=0;

        this.textField.y = 1000;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign="center";
        this.textField.textColor=0x000000;

         this.addChild(this.loadingImg1);
         this.addChild(this.loadingImg2);
         this.addChild(this.textField);

        
    }

    public onProgress(current: number, total: number): void {
        this.textField.text = `Loading...${current}/${total}`;
        var divide=current/total;
        if (divide*2<1){
            this.loadingImg1.alpha=divide*2;
        }
        else if (divide*2>=1){
            this.loadingImg2.alpha=divide*2-1;
        }

        if(current==total)
        {
            this.removeChild(this.loadingImg1);
            this.removeChild(this.loadingImg2);
            this.removeChild(this.textField);
        }
    }
}
