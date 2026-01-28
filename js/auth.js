// js/auth.js

let currentUser = null;

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if(user){
        currentUser = user;
        alert("Logged in as " + user.username);
        return true;
    } else {
        alert("Invalid credentials");
        return false;
    }
}

function logout() {
    currentUser = null;
    alert("Logged out");
}

function isAdmin() {
    return currentUser && currentUser.role === "admin";
}

function isWriter() {
    return currentUser && currentUser.role === "writer";
}

function canEditWorld(worldId){
    if(!currentUser) return false;
    if(isAdmin()) return true;
    if(isWriter() && currentUser.ownedWorlds.includes(worldId)) return true;
    return false;
}