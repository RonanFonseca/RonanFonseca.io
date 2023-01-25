const canvas=document.getElementById("myCanvas");
canvas.width=200;

// canvas context
const ctx = canvas.getContext("2d");

// Road
const road = new Road(canvas.width/2, canvas.width*0.9);

// Car
const car = new Car(road.getLaneCenter(1), 100, 30, 50);


animate();

function animate(){
    car.update();
    canvas.height=window.innerHeight;

    // Make camera follow car
    ctx.translate(0, -car.y+canvas.height*0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}



