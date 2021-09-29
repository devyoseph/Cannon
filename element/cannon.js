let img_cannon = new Image();
        img_cannon.src = 'image/cannon.png';
export class Cannon{
    constructor(stageWidth, stageHeight){
        this.cannon_width = stageWidth/50;
        this.cannon_height = stageHeight/20;
        this.wheel_height = stageHeight/40;
        this.x = this.cannon_width;
        this.y = stageHeight - (this.cannon_height + this.wheel_height + stageHeight/20);

        
        //+ ground
        //this.energy = maxPower; //바를 통해 에너지 조정
        //this.vx = function(energy.velocity) 외부 물리엔진 함수를 통해 
        //this.a =  function(energy.accelerate) 속도와 가속도 얻어냄
        //this.vx += this.a == 대포가 가진 힘과 공의 무게를 분리한다
    }
    draw(ctx, stageWidth, stageHeight, angle){
        ctx.drawImage(img_cannon,this.x,this.y);
        //가이드선
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 10, 10);
        ctx.fillRect(this.x+100*Math.cos(angle),this.y-100*Math.sin(angle), 10, 10);
    }


}