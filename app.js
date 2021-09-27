import{
    Ball
}from './element/ball.js';
import{
    Cannon
}from './element/cannon.js';
//대포의 이미지 로드
var img_cannon = new Image();
img_cannon.src = 'image/cannon.png';
//공 배열과 공 발사 변수
var balls = [];
var fire_ball = false;
var ball_speed = 10;

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize(); //리사이즈가 이벤트를 거치지 않아도 발동하기 위함
        
        //대포 관련
        this.cannon = new Cannon(this.stageWidth, this.stageHeight);
        document.addEventListener('keydown', this.cannonMove.bind(this), false);
        
        //공 관련
        //this.ball = new Ball(this.cannon.x, this.cannon.y, this.stageWidth, this.stageHeight, 10, 1);
        document.addEventListener('keydown', this.fire.bind(this), false);
        
        window.requestAnimationFrame(this.animate.bind(this));
    }
    
    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        //캔버스는 두 배
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2,2); //ctx scale 모두 두 배 주의
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);
        
        this.cannon.draw(this.ctx, img_cannon,this.stageWidth,this.stageHeight);
//공을 발사
        if(fire_ball == true){
            //if함수 내부에서 볼을 정의하고 보낸다, 외부에서 정의한 걸 불러오면 오류
            var ball =  new Ball(this.cannon.x, this.cannon.y, this.stageWidth, this.stageHeight, 10, ball_speed);
            balls.push(ball);
            fire_ball = false;
        }
        
        balls.forEach((ball_each) =>{
            ball_each.draw(this.ctx, this.stageWidth, this.stageHeight);
        })
    }

    cannonMove(e){
        console.log(e.code);
        if(e.code === 'ArrowLeft'){
            this.cannon.x -= 10;
        }
        if(e.code === 'ArrowRight'){
            this.cannon.x += 10;
        }
    }

    fire(e){
        if(e.code === 'Space'){
            console.log('dsd');
            fire_ball = true;
        }

    }

}

window.onload = () =>{
    new App();
}