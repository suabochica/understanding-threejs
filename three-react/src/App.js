import './App.css';
import * as THREE from 'three';

let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a3b4c);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
  );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry();
  let material = new THREE.MeshBasicMaterial({
    color: 0x44aa88,
    wireframe: true
  });

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  animateCube();
}

function animateCube() {
  requestAnimationFrame(animateCube);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function App() {
  return (
    <div className="App">{init()}</div>
  );
}

export default App;
