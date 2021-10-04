let img_cannon = new Image();
        img_cannon.src = 'image/wizard.png';
export class Cannon{
    constructor(stageWidth, stageHeight){
        this.cannon_width = stageWidth/15;
        this.cannon_height = stageHeight/5;
        this.wheel_height = stageHeight/40;
        this.x = stageWidth/3; 
        this.y = stageHeight - (this.cannon_height + this.wheel_height + stageHeight/20);

    }
    draw(ctx, stageWidth, stageHeight, angle){
        ctx.drawImage(img_cannon,this.x,this.y, this.cannon_width, this.cannon_height);
    }


}