export class Ball{
    constructor(type, magnitude, gauge_transfer,cannonX, cannonY, angle){
        //공의 타입에 따라 세기가 달라진다
        this.g = 9.81;
        this.magnitude = magnitude;
        this.gauge_transfer = gauge_transfer;
        this.angle = angle;
        //brick과 부딪힐 때 사용
        this.ball_meet = false;

        switch(type){
            case 1: this.type = 1; break;
            case 2: this.type = 2; break;
            case 3: this.type = 3; break;
        }
        switch(this.magnitude){
            case 1:  this.mass = 10;
                     this.radius = 20;
                     this.speed = 30*this.gauge_transfer;
                     break;
            case 2:  this.g = 6.5;
                     this.radius = 40;
                     this.speed = 30*this.gauge_transfer;
            case 3:  this.g = 4.8;
                     this.radius = 100;
                     this.speed = 30*this.gauge_transfer;
        }
        this.diameter = this.radius*2;

        this.x = cannonX;     
        this.y = cannonY;    
        this.vx = this.speed * Math.cos(angle);
        this.vy = -this.speed * Math.sin(angle);

    }
    draw(ctx, stageWidth, stageHeight){
        //중력가속도
        this.vy += this.g/40;
        this.x += this.vx;
        this.y += this.vy;
        //포탄을 배열에서 회수하기위한 스피드 변수 측정
        this.speed = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
        this.bounceWindow(stageWidth,stageHeight);
        if(this.type == 1){
        ctx.fillStyle = 'blue';
        }else if(this.type == 2){
        ctx.fillStyle = 'green';    
        }else if(this.type == 3){
        ctx.fillStyle = 'red';
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth,stageHeight){
        const minX = this.radius;
        const maxX = stageWidth-this.radius;
        const minY = this.radius;
        const maxY = stageHeight-this.radius;

        //벽에 부딪힐 때 속도 감소
        if(this.x <= minX || this.x >= maxX){
            this.vx *= -0.90;
            this.vy *= 0.87;
            this.x += this.vx;
        //바닥
        } else if(this.y >= maxY){
            this.vy *= -0.75;
            this.vx *= 0.7; 
            this.y += this.vy;
        //천장
        } else if(this.y <= minY){
            this.vy *= -0.97;
            this.vx *= 0.9; 
            this.y += this.vy;
        }
    }

    bounceBrick(brick){
        if(this.y-this.radius >= brick.y){
            this.y *= -1;
        }
    }

}