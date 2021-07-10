// Our Javascript will go here.
//import * as THREE from "./js/three.js";

//scene
const scene = new THREE.Scene();

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//add renderer to HTML body
document.body.appendChild(renderer.domElement);

//create and add geometry to scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);   // add to scene

//camera
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//render
//renderer.render(scene, camera);


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();


