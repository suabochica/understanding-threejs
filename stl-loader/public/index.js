import * as THREE from './threejs/three.module.js';
import { STLLoader } from './threejs/STLLoader.js';
import { OrbitControls } from './threejs/OrbitControls.js';
import { ThreeMFLoader } from './threejs/3MFLoader.js';

let scene, camera, renderer, object;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a003b);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
    );
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // scene.add(object);

    // mfLoader has already a mesh
    let mfLoader = new ThreeMFLoader();
    mfLoader.load('models/buckineer.3dm', (mfObject) => {
        mfObject.position.set(0, 0, 0);
        mfObject.position.x = -Math.PI / 2;
        scene.add(mfObject);
    });

    let control = new OrbitControls(camera, renderer.domElement);

    let frontLight = new THREE.DirectionalLight(0xffffff);
    frontLight.position.set(0, 0, 10);
    scene.add(frontLight)

    let backLight = new THREE.DirectionalLight(0xffffff);
    backLight.position.set(0, 0, -10);
    scene.add(backLight)

    let hemisphereLight = new THREE.HemisphereLight(0xffffff);
    hemisphereLight.position.set(0, 100, 0);
    scene.add(hemisphereLight)

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    object.rotation.y += 0.01;
    renderer.render(scene, camera)
}

let loader = new STLLoader();
loader.load('models/yoshi-head.stl', (model) => {
    object = new THREE.Mesh(model, new THREE.MeshLambertMaterial({ color: 0x00ff00 }));
    object.scale.set(0.05, 0.05, 0.05);
    object.position.set(0, 0, 0);

    init();
});
