export class Gauge{
    constructor(cannon, stageHeight){
        this.x = cannon.x;
        this.y = cannon.y - stageHeight/10;
    }
    draw(ctx, on_gauge, gauge_percent, stageWidth, stageHeight){
        this.width = stageWidth/20;
        this.height = stageHeight/80;
        this.on_gauge = on_gauge;
        //총 계산식
        this.present_gauge = gauge_percent*0.01*this.width;
        
        if(this.on_gauge == true){
        ctx.fillStyle = 'gray';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.present_gauge, this.height);
    }    
    }
}