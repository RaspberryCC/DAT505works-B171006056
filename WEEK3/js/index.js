var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80,window.innerWidth / window.innerHeight,1,1000);


camera.lookAt(scene.position);

var light = new THREE.PointLight( 0xffffff, 5, 6990 );
light.position.set( -5000, 50, 500 );
scene.add( light );
scene.background = new THREE.Color( 0xf0f0f0 );


var renderer = new THREE.WebGLRenderer({antialias:true});
//scene camera renderer
renderer.setClearColor('#000000');
renderer.setSize(window.innerWidth *1 , window.innerHeight *1);
renderer.render(scene,camera);
//Prepare

//document.getElementById("webgl").appendChild( renderer.domElement);

function dog1(){
  var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("dog1.mtl", function(materials){

	materials.preload();

         var loader = new THREE.OBJLoader();
              loader.load('dog1.obj', function(obj) {
                  obj.traverse(function(child) {
                      if (child instanceof THREE.Mesh) {
                          child.material.side = THREE.DoubleSide;
                      }
                  });
                  obj.position.z = 20;
                  mesh = obj;
                  scene.add(obj);
              });

});
}

function dog2(){
  var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("dog2.mtl", function(materials){

	materials.preload();

         var loader = new THREE.OBJLoader();
              loader.load('dog2.obj', function(obj) {
                  obj.traverse(function(child) {
                      if (child instanceof THREE.Mesh) {
                          child.material.side = THREE.DoubleSide;
                      }
                  });
                  obj.position.z = 20;
                  mesh = obj;
                  scene.add(obj);
              });

});
}

function dog3(){
  var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("dog3.mtl", function(materials){

	materials.preload();

         var loader = new THREE.OBJLoader();
              loader.load('dog3.obj', function(obj) {
                  obj.traverse(function(child) {
                      if (child instanceof THREE.Mesh) {
                          child.material.side = THREE.DoubleSide;
                      }
                  });
                  obj.position.z = 20;
                  mesh = obj;
                  scene.add(obj);
              });

});
}


var kfrm = 0;

function render(){
 renderer.render(scene,camera);
requestAnimationFrame(render);

document.getElementById("dog1").addEventListener("click",dog1);

document.getElementById("dog2").addEventListener("click",dog2);

document.getElementById("dog3").addEventListener("click",dog3);
}

render();
//var controls = new THREE.OrbitControls(camera);
//controls.addEventListener('change',render);
