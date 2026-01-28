// js/main.js

// Include Three.js in HTML: <script src="https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.min.js"></script>

let scene, camera, renderer;
let nodes = [];

function initSpiderWeb() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create nodes from worlds
    worlds.forEach(world => {
        let geometry = new THREE.SphereGeometry(0.5, 32, 32);
        let material = new THREE.MeshBasicMaterial({color: world.webAppearance.color});
        let sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(Math.random()*10-5, Math.random()*10-5, Math.random()*10-5);
        sphere.userData.worldId = world.id;
        scene.add(sphere);
        nodes.push(sphere);
    });

    camera.position.z = 15;

    // Click handler
    window.addEventListener('click', onClick);

    animate();
}

function animate(){
    requestAnimationFrame(animate);
    nodes.forEach(n => n.rotation.y += 0.01); // subtle motion
    renderer.render(scene, camera);
}

function onClick(event){
    // Convert mouse to NDC
    let mouse = new THREE.Vector2(
        (event.clientX/window.innerWidth)*2-1,
        -(event.clientY/window.innerHeight)*2+1
    );
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(nodes);
    if(intersects.length>0){
        let worldId = intersects[0].object.userData.worldId;
        window.location.href = `world.html?id=${worldId}`;
    }
}

// Initialize
window.onload = initSpiderWeb;