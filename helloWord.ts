class Fan{
    slow : number=1;
    medium : number=2;
    fast : number=3;
    constructor(private speed:number=1, private on:boolean=false, private radius:number=5, private color:string='blue') {
        this.speed=speed;
        this.on=on;
        this.radius=radius;
        this.color=color;
    }
    getSpeed=()=>this.speed;
    getOn=()=>this.on;
    getRadius=()=>this.radius;
    getColor=()=>this.color;

    setSpeed=(speed)=>this.speed=speed;
    setOn=(on)=>this.on=on;
    setRadius=(radius)=>this.radius=radius;
    setColor=(color)=>this.color=color;

    toString=()=>{
        if(this.getOn()){
            return `Fan is off, tốc độ quạt là ${this.setSpeed(0)}, màu quạt là ${this.getRadius()}, bán kính quạt là ${this.getRadius()}`;
        }else {
            return `Fan is on, tốc độ quạt là ${this.getSpeed()}, màu quạt là ${this.getColor()}, bán kính quạt là ${this.getRadius()}`
        }
    }
}

let fan= new Fan(0,false,5,'blue');
console.log(fan.toString())
