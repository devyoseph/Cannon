export class Ball{
    constructor(type ,cannonX, cannonY, angle, stageWidth, stageHeight, speed){
        //공의 타입에 따라 세기가 달라진다
        this.g = 9.81;
        this.angle = angle;
        if(type == 1){
            this.force = 300;
            this.mass = 10;
            this.radius = 10;
        }
        if(type == 2){
            this.force = 300;
            this.mass = 22.5;
            this.radius = 15;
        }
        if(type == 3){
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
        

        this.x = cannonX;     //this.radius + (Math.random() * (stageWidth - diameter));
        this.y = cannonY;    //this.radius + (Math.random() * (stageHeight - diameter));
        //아래 계산의 높이 초기값을 0으로 맞춰준다 valueY-80
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
        ctx.fillStyle = 'blue';
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

}