var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
    runner = Matter.Runner;

var engine = Engine.create();

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 400,
    wireframes: false
  }
});

var mouse = Mouse.create(render.canvas);
var mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(engine.world, mouseConstraint);

var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
var leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true });
var bottomWall = Bodies.rectangle(400, 350, 720, 20, { isStatic: true });

var ball = [];

World.add(engine.world, [topWall, leftWall, rightWall, bottomWall,mouseConstraint]);

Engine.run(engine);

Render.run(render);

var addCircle = function () {
 return Bodies.circle(Math.random()*400 + 30, 280, 20);
};
$('.1X').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.applyForce( ball[i], {x: ball[i].position.x, y: ball[i].position.y}, {x: 0.05, y: 0});
});
$('.2X').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.applyForce( ball[i], {x: ball[i].position.x, y: ball[i].position.y}, {x: 0.10, y: 0});
});
$('.5X').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.applyForce( ball[i], {x: ball[i].position.x, y: ball[i].position.y}, {x: 0.025, y: 0});
});
$('.force').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.applyForce( ball[i], {x: ball[i].position.x, y: ball[i].position.y}, {x: 0.02, y: 0});
});

$('.force').on('dblclick', function () {
  for(var i=0;i<ball.length;i++)
    Body.applyForce( ball[i], {x: ball[i].position.x, y: ball[i].position.y}, {x: 0.03, y: 0});
});

$('.vforce').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.applyForce( ball[i], {x: ball[i].position.x, y: ball[i].position.y}, {x: 0, y: -0.03});
});

$('.vforce').on('dblclick', function () {
  for(var i=0;i<ball.length;i++)
    Body.applyForce( ball[i], {x: ball[i].position.x, y: ball[i].position.y}, {x: 0, y: -0.03});
});

$('.15').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.setVelocity( ball[i], {x:4,y:-4});
});

$('.15').on('dblclick', function () {
  for(var i=0;i<ball.length;i++)
    Body.setVelocity( ball[i], {x:8,y:-8});
});
$('.30').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.setVelocity( ball[i], {x:8,y:-8});
});

$('.30').on('dblclick', function () {
  for(var i=0;i<ball.length;i++)
    Body.setVelocity( ball[i], {x:16,y:-16});
});
$('.45').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.setVelocity( ball[i], {x:12,y:-12});
});

$('.45').on('dblclick', function () {
  for(var i=0;i<ball.length;i++)
    Body.setVelocity( ball[i], {x:24,y:-24});
});

$('.add').on('click', function () {
    ball.push(addCircle());        World.add(engine.world,ball[ball.length-1] );
});

$('.delete').on('click', function () {
  World.remove(engine.world,[ball[ball.length-1]]);
  ball.pop();
});

$('.inc').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.scale( ball[i], 1.2, 1.2);
});

$('.dec').on('click', function () {
  for(var i=0;i<ball.length;i++)
    Body.scale( ball[i], 0.7, 0.7);
});