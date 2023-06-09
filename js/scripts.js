/*!
* Start Bootstrap - The Big Picture v5.0.6 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setClearColor( 0x000000, 0 );

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas").appendChild(renderer.domElement);

import { OBJLoader } from '../node_modules/three/examples/jsm/loaders/OBJLoader.js';
console.log(OBJLoader)
// Load OBJ file
const loader = new OBJLoader();
loader.load(
    'https://anonymous675.github.io/AstroGardens/model.obj',
  function (object) {
    // Add the loaded object to the scene
    scene.add(object);

    const box = new THREE.Box3().setFromObject(object);
    const modelCenter = box.getCenter(new THREE.Vector3());
    camera.lookAt(modelCenter);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  function (error) {
    console.error('An error occurred while loading the model:', error);
  }
);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Position the camera
camera.position.z = 5;
// camera.position.set(0,0, 5)
// camera.lookAt(target)
// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  
  animate();