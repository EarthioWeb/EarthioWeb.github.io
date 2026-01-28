// js/data.js

// Users
let users = [
    {
        id: 1,
        username: "admin",
        password: "admin123", // plaintext for prototype; will hash later if needed
        role: "admin",
        ownedWorlds: []
    },
    {
        id: 2,
        username: "writer1",
        password: "writerpass",
        role: "writer",
        ownedWorlds: [1]
    }
];

// Worlds
let worlds = [
    {
        id: 1,
        name: "Ashen Cycle",
        premise: "A dystopian future with shifting suns",
        ownerId: 2,
        ownerDisplayMode: "username",
        ownerPseudonym: "",
        isCanon: true,
        status: "active",
        webAppearance: {
            color: "#FF5555",
            glow: 1.5,
            motion: "pulse",
            symbol: "🜂"
        }
    },
    {
        id: 2,
        name: "Crystal Oceans",
        premise: "Floating islands and sentient coral reefs",
        ownerId: null,
        ownerDisplayMode: "username",
        ownerPseudonym: "",
        isCanon: false,
        status: "active",
        webAppearance: {
            color: "#55FFFF",
            glow: 1.0,
            motion: "float",
            symbol: "🜄"
        }
    }
];