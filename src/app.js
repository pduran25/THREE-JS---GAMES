const container = document.querySelector('#game-container');

//Scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

//CAMERA

const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth/container.clientHeight,
    0.1, 
    1000, 
);



//Mesh 

//Renderer

const renderer = new THREE.WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);