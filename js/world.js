// js/world.js

function getWorldFromUrl(){
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return worlds.find(w => w.id === id);
}

function showWorld(){
    const world = getWorldFromUrl();
    if(!world){
        document.body.innerHTML = "World not found";
        return;
    }
    document.getElementById('world-title').innerText = world.name;
    document.getElementById('world-premise').innerText = world.premise;

    // Show owner
    const owner = users.find(u => u.id === world.ownerId);
    let ownerName = owner ? owner.username : "No owner";
    document.getElementById('world-owner').innerText = ownerName;

    // Enable edit button if permitted
    if(canEditWorld(world.id)){
        document.getElementById('edit-btn').style.display = 'inline-block';
    }
}

window.onload = showWorld;