export class Guideline{
    constructor(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx, ball_type,cannon, angle, on_gauge){
        //공 발사 위치
        let startX = cannon.x+this.stageWidth/13;
        let startY = cannon.y;
        let arriveX = startX + 50*Math.cos(angle);
        let arriveY = startY - 50*Math.sin(angle);
        ctx.lineWidth = 2;
        if(ball_type ==1){
        ctx.strokeStyle = 'blue';}
        if(ball_type ==2){
            ctx.strokeStyle = 'green';}
            if(ball_type ==3){
                ctx.strokeStyle = 'red';}
       
        ctx.beginPath();
        ctx.setLineDash([5]);
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(arriveX, arriveY);
        ctx.stroke();
        ctx.closePath();
    }
}