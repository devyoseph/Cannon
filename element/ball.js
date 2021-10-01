export class Ball{
    constructor(type, magnitude,cannonX, cannonY, angle, stageWidth, stageHeight, speed){
        //공의 타입에 따라 세기가 달라진다
        this.g = 9.81;
        this.angle = angle;
        this.type = type;
        this.magnitude = magnitude;
        //다른 속성끼리 부딪힐 때 사용
        this.ball_meet = false; 
        if(this.magnitude == 1){
            this.force = 300;
            this.mass = 10;
            this.radius = 10;
        }
        else if(this.magnitude == 2){
            this.force = 300;
            this.mass = 22.5;
            this.radius = 15;
        }
        else if(this.magnitude == 3){
            this.force = 300;
            this.mass = 40;
            this.radius = 20;
        }
        
        this.diameter = this.radius*2;

        //초기 가속도 생성하고 분해
        if(this.angle > Math.PI/4 && this.angle <= Math.PI/2){
            this.aX = this.force*Math.cos(this.angle)/this.mass;
            this.aY = this.force*Math.sin(this.angle)/this.mass;}
        if(this.angle <= Math.PI/4 && this.angle >= 0){
            this.aX = this.force*Math.sin(this.angle)/this.mass;
            this.aY = this.force*Math.cos(this.angle)/this.mass;}
        

        this.x = cannonX;     
        this.y = cannonY;    
        this.speed = speed;
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