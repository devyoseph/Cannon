export class Cannon{
    constructor(stageWidth, stageHeight){
        this.cannon_width = 50;
        this.cannon_height = 20;
        this.wheel_height = 10;
        this.x = this.cannon_width;
        this.y = stageHeight - (this.cannon_height + this.wheel_height + 50);

        
        //+ ground
        //this.energy = maxPower; //바를 통해 에너지 조정
        //this.vx = function(energy.velocity) 외부 물리엔진 함수를 통해 
        //this.a =  function(energy.accelerate) 속도와 가속도 얻어냄
        //this.vx += this.a == 대포가 가진 힘과 공의 무게를 분리한다
    }
    draw(ctx, image, stageWidth, stageHeight){
      //  ctx.fillStyle = 'black';
     //   ctx.fillRect(this.x,this.y,this.cannon_width,this.cannon_height);
        ctx.drawImage(image,this.x,this.y);
    }


}