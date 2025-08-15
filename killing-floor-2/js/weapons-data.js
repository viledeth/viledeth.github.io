// REPLACE the entire weapons-data.js file with this complete database:

const _kf2WeaponsData = {
    // Global weapons available to all perks
    // CORRECTED Global weapons section - REPLACE in your weapons-data.js
    global: [
        {
            name: "Knives",
            perk: "global",
            tier: 0,
            cost: 0,
            primaryFire: {
                damageType: "slashing",
                damage: 32,
                fireRate: 150,
                dps: 80,
                magazine: "melee"
            },
            altFire: {
                damageType: "piercing",
                damage: 15,
                fireRate: 160,
                dps: 40,
                description: "Stab attack with pushback"
            },
            description: "Universal melee weapon available to all perks",
            specialFeatures: ["Starting Weapon", "Light/Heavy Attacks", "Stab Attack", "Parry/Block"]
        },
        {
            name: "9mm Pistol",
            perk: "global",
            tier: 0,
            cost: 0,
            primaryFire: {
                damageType: "ballistic",
                damage: 25,
                fireRate: 300,
                dps: 125,
                magazine: 15,
                penetration: 0
            },
            description: "Standard sidearm available to all perks",
            specialFeatures: ["Starting Weapon", "Infinite Reserve Ammo", "Can Dual Wield"],
            canDualWield: true
        },
        {
            name: "Dual 9mm Pistols",
            perk: "global",
            tier: 0,
            cost: 150,
            primaryFire: {
                damageType: "ballistic",
                damage: 25,
                fireRate: 500,
                dps: 208,
                magazine: 30,
                penetration: 0
            },
            description: "Dual-wielded 9mm pistols for increased firepower",
            specialFeatures: ["Dual Wield", "Higher Fire Rate", "Larger Magazine"],
            canDualWield: false
        },
        {
            name: "HRG 93R Pistol",
            perk: "global",
            tier: 0,
            cost: 0,
            primaryFire: {
                damageType: "ballistic",
                damage: 15,
                fireRate: 750,
                dps: 188,
                magazine: 20,
                penetration: 0
            },
            description: "Burst-fire pistol available to all perks",
            specialFeatures: ["Starting Weapon", "3-Round Burst", "Can Dual Wield"],
            canDualWield: true
        },
        {
            name: "Dual HRG 93R Pistols",
            perk: "global",
            tier: 0,
            cost: 150,
            primaryFire: {
                damageType: "ballistic",
                damage: 15,
                fireRate: 750,
                dps: 375,
                magazine: 40,
                penetration: 0
            },
            description: "Dual-wielded burst-fire pistols",
            specialFeatures: ["Dual Wield", "3-Round Burst", "High DPS"],
            canDualWield: false
        },
        {
            name: "Doshinegun",
            perk: "global",
            tier: 1,
            cost: 400,
            primaryFire: {
                damageType: "bludgeon",
                damage: 80,
                fireRate: 300,
                dps: 400,
                magazine: 20,
                penetration: 0
            },
            description: "Money-firing weapon that deals bludgeon damage",
            specialFeatures: ["Dosh Ammunition", "Bludgeon Damage", "Unique Mechanics"]
        },
        {
            name: "Medical Syringe",
            perk: "global",
            tier: 0,
            cost: 0,
            primaryFire: {
                damageType: "healing",
                healAmount: 50,
                fireRate: 60,
                magazine: 1
            },
            description: "Self-healing syringe available to all perks",
            specialFeatures: ["Self Heal Only", "Recharges Over Time", "Medic Gets Bonus"]
        },
        {
            name: "Welder",
            perk: "global",
            tier: 0,
            cost: 0,
            primaryFire: {
                damageType: "none",
                damage: 0,
                fireRate: 300,
                dps: 0,
                magazine: 100
            },
            description: "Door welding tool available to all perks",
            specialFeatures: ["Door Welding", "Repairs Doors", "Support Gets Bonus"]
        },
        {
            name: "Battery",
            perk: "global",
            tier: 0,
            cost: 0,
            primaryFire: {
                damageType: "none",
                damage: 0,
                fireRate: 0,
                dps: 0,
                magazine: 100
            },
            description: "Power source for flashlight and night vision",
            specialFeatures: ["Flashlight Power", "Night Vision", "Recharges Over Time"]
        }
    ],

    // Cross-perk weapons
    crossPerk: [
        {
            "name": "M16 M203 Assault Rifle",
            "perk": [
                "commando",
                "demolitionist"
            ],
            "tier": 3,
            "cost": 1100,
            "primaryFire": {
                "damageType": "ballistic",
                "damage": 35,
                "fireRate": 857,
                "dps": 499,
                "magazine": 30,
                "penetration": 1
            },
            "altFire": {
                "damageType": "explosive",
                "damage": 250,
                "fireRate": 60,
                "dps": 250,
                "description": "M203 grenade launcher attachment"
            },
            "description": "Hybrid assault rifle with underbarrel grenade launcher",
            "specialFeatures": [
                "Cross-Perk",
                "Grenade Launcher",
                "Assault Rifle + Explosive"
            ]
        },
        {
            "name": "HMTech-301 Shotgun",
            "perk": [
                "medic",
                "support"
            ],
            "tier": 3,
            "cost": 1100,
            "primaryFire": {
                "damageType": "ballistic",
                "damage": 35,
                "fireRate": 100,
                "dps": 467,
                "magazine": 8,
                "penetration": 0,
                "pellets": 8
            },
            "altFire": {
                "damageType": "healing",
                "healAmount": 20,
                "fireRate": 120,
                "description": "Medical dart healing mode"
            },
            "description": "Medical shotgun with healing dart capability",
            "specialFeatures": [
                "Cross-Perk",
                "Healing Darts",
                "8 Pellets",
                "Shotgun + Medical"
            ]
        },
        {
            "name": "HRG Nailgun",
            "perk": [
                "support",
                "berserker"
            ],
            "tier": 2,
            "cost": 750,
            "primaryFire": {
                "damageType": "piercing",
                "damage": 45,
                "fireRate": 300,
                "dps": 225,
                "magazine": 30,
                "penetration": 2
            },
            "description": "Industrial nailgun with good penetration",
            "specialFeatures": [
                "Cross-Perk",
                "High Penetration",
                "Industrial Tool"
            ]
        },
        {
            "name": "FAMAS Masterkey",
            "perk": [
                "commando",
                "support"
            ],
            "tier": 3,
            "cost": 1000,
            "primaryFire": {
                "damageType": "ballistic",
                "damage": 35,
                "fireRate": 899,
                "dps": 524,
                "magazine": 30,
                "penetration": 1
            },
            "altFire": {
                "damageType": "ballistic",
                "damage": 30,
                "fireRate": 78,
                "dps": 390,
                "description": "Underbarrel shotgun",
                "pellets": 7
            },
            "description": "French assault rifle with underbarrel shotgun",
            "specialFeatures": [
                "Underbarrel Shotgun",
                "Hybrid Weapon",
                "High Fire Rate",
                "7 Pellets"
            ]
        },
        {
            "name": "HRG Incendiary Rifle",
            "perk": [
                "firebug",
                "commando"
            ],
            "tier": 3,
            "cost": 1200,
            "primaryFire": {
                "damageType": "ballistic",
                "damage": 30,
                "fireRate": 669,
                "dps": 334,
                "magazine": 30,
                "penetration": 1,
                "dotDamage": 9,
                "dotDuration": 2.0
            },
            "altFire": {
                "damageType": "fire",
                "damage": 100,
                "fireRate": 25,
                "dps": 42,
                "description": "Grenade launcher mode",
                "additionalDamage": {
                    "ballistic": 230,
                    "description": "Grenade impact + explosive damage"
                }
            },
            "description": "Hybrid assault rifle with underbarrel incendiary grenade launcher",
            "specialFeatures": [
                "Dual Mode",
                "Incendiary Grenades",
                "Impact + Explosive",
                "Residual Flames"
            ]
        },
        {
            "name": "HRG Kaboomstick",
            "perk": [
                "demolitionist",
                "support"
            ],
            "tier": 3,
            "cost": 1100,
            "primaryFire": {
                "damageType": "explosive",
                "damage": 38,
                "fireRate": 240,
                "dps": 608,
                "magazine": 2,
                "penetration": 0,
                "pellets": 8,
                "additionalDamage": {
                    "ballistic": 15,
                    "description": "Pellet impact + explosive damage"
                }
            },
            "description": "Double-barrel shotgun firing explosive pellets",
            "specialFeatures": [
                "Double Barrel",
                "8 Explosive Pellets",
                "Both Barrels",
                "Impact + Explosive"
            ]
        }
    ],

    // Perk-specific weapons
    perks: {

        berserker: [
            {
                name: "Crovel Survival Tool",
                perk: "berserker",
                tier: 1,
                cost: 200,
                primaryFire: {
                    damageType: "slashing",
                    damage: 49,
                    fireRate: 128,
                    dps: 105,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "bludgeon",
                    damage: 86,
                    fireRate: 62,
                    dps: 89,
                    description: "Heavy bludgeon attack"
                },
                description: "Versatile survival tool with good reach",
                specialFeatures: ["Light/Heavy Attacks", "Good Reach", "Affordable", "Can Block"]
            },
            {
                name: "Piranha Pistol",
                perk: "berserker",
                tier: 2,
                cost: 600,
                primaryFire: {
                    damageType: "slashing",
                    damage: 115,
                    fireRate: 240,
                    dps: 460,
                    magazine: 6,
                    penetration: 3
                },
                description: "Projectile weapon firing slashing rounds",
                specialFeatures: ["Projectile Weapon", "Can Dual Wield", "Penetration"],
                canDualWield: true
            },
            {
                name: "VLAD-1000 Nailgun",
                perk: "berserker",
                tier: 2,
                cost: 750,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 35,
                    fireRate: 200,
                    dps: 117,
                    magazine: 42,
                    penetration: 3,
                    pellets: 7
                },
                description: "Industrial nailgun with high penetration",
                specialFeatures: ["High Penetration", "7 Pellets", "Industrial Tool"]
            },
            {
                name: "Katana",
                perk: "berserker",
                tier: 2,
                cost: 850,
                primaryFire: {
                    damageType: "slashing",
                    damage: 68,
                    fireRate: 144,
                    dps: 163,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "slashing",
                    damage: 90,
                    fireRate: 56,
                    dps: 84,
                    description: "Heavy slash attack"
                },
                description: "Fast slashing weapon with unique draw attack",
                specialFeatures: ["Fast Attack Speed", "Draw Attack", "Can Block", "Combo Attacks"]
            },
            {
                name: "Road Redeemer",
                perk: "berserker",
                tier: 2,
                cost: 850,
                primaryFire: {
                    damageType: "bludgeon",
                    damage: 75,
                    fireRate: 90,
                    dps: 113,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "bludgeon",
                    damage: 100,
                    fireRate: 52,
                    dps: 87,
                    description: "Heavy bludgeon attack"
                },
                description: "Road construction tool repurposed for combat",
                specialFeatures: ["Bludgeon Damage", "Heavy Attacks", "Can Block"]
            },
            {
                name: "Fire Axe",
                perk: "berserker",
                tier: 2,
                cost: 850,
                primaryFire: {
                    damageType: "slashing",
                    damage: 90,
                    fireRate: 96,
                    dps: 144,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "slashing",
                    damage: 135,
                    fireRate: 50,
                    dps: 113,
                    description: "Heavy chop attack"
                },
                description: "Emergency fire axe with high damage",
                specialFeatures: ["High Damage", "Can Break Doors", "Emergency Tool", "Can Block"]
            },
            {
                name: "Hemoclobber",
                perk: "berserker",
                tier: 3,
                cost: 1200,
                primaryFire: {
                    damageType: "bludgeon",
                    damage: 80,
                    fireRate: 96,
                    dps: 128,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "toxic",
                    damage: 140,
                    fireRate: 33,
                    dps: 77,
                    description: "Explosive poison attack",
                    dotDamage: 5,
                    dotDuration: 5
                },
                description: "Toxic mace that creates healing poison explosions",
                specialFeatures: ["Poison Explosion", "DOT Effect", "Healing Cloud", "360° Explosion"]
            },
            {
                name: "Zweihander",
                perk: "berserker",
                tier: 3,
                cost: 1300,
                primaryFire: {
                    damageType: "slashing",
                    damage: 85,
                    fireRate: 79,
                    dps: 112,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "slashing",
                    damage: 195,
                    fireRate: 59,
                    dps: 192,
                    description: "Two-handed overhead strike"
                },
                description: "Massive two-handed sword with devastating reach",
                specialFeatures: ["Maximum Reach", "Devastating Damage", "Wide Attacks", "Can Block"]
            },
            {
                name: "Pulverizer",
                perk: "berserker",
                tier: 3,
                cost: 1300,
                primaryFire: {
                    damageType: "bludgeon",
                    damage: 80,
                    fireRate: 96,
                    dps: 128,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "explosive",
                    damage: 145,
                    fireRate: 33,
                    dps: 80,
                    description: "Directional explosive attack"
                },
                description: "Hybrid melee/explosive weapon with devastating power",
                specialFeatures: ["Melee + Explosive", "Directional Explosion", "Can Block", "High Stumble Power"]
            },
            {
                name: "HRG Teslauncher",
                perk: "berserker",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "microwave",
                    damage: 68,
                    fireRate: 500,
                    dps: 567,
                    magazine: 5,
                    penetration: 5,
                    dotDamage: 15,
                    dotDuration: 2
                },
                altFire: {
                    damageType: "emp",
                    damage: 25,
                    fireRate: 24,
                    dps: 10,
                    description: "EMP grenade launcher"
                },
                description: "Tesla weapon firing EMP projectiles with afterburn",
                specialFeatures: ["EMP Projectiles", "Fire DOT", "Penetration", "Hybrid Weapon"]
            },
            {
                name: "Blood Sickle",
                perk: "berserker",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "slashing",
                    damage: 140,
                    fireRate: 90,
                    dps: 210,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "slashing",
                    damage: 190,
                    fireRate: 46,
                    dps: 146,
                    description: "Heavy slash with extended range"
                },
                description: "Folding sickle with dual combat modes",
                specialFeatures: ["Folding Design", "Extended Range", "Variable Speed", "Can Block"]
            },
            {
                name: "Static Strikers",
                perk: "berserker",
                tier: 4,
                cost: 1600,
                primaryFire: {
                    damageType: "bludgeon",
                    damage: 95,
                    fireRate: 128,
                    dps: 203,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "emp",
                    damage: 175,
                    fireRate: 46,
                    dps: 134,
                    description: "EMP punch attack"
                },
                description: "Electrified gauntlets with EMP capability",
                specialFeatures: ["EMP Attacks", "Fast Combos", "High Mobility", "Electric Damage"]
            },
            {
                name: "Eviscerator",
                perk: "berserker",
                tier: 4,
                cost: 1600,
                primaryFire: {
                    damageType: "slashing",
                    damage: 29,
                    fireRate: 500,
                    dps: 242,
                    magazine: 250
                },
                altFire: {
                    damageType: "slashing",
                    damage: 300,
                    fireRate: 120,
                    dps: 600,
                    description: "Spinning blade projectile"
                },
                description: "Chainsaw with spinning blade launcher",
                specialFeatures: ["Chainsaw Mode", "Projectile Mode", "High DPS", "Fuel Required"]
            },
            {
                name: "Bone Crusher",
                perk: "berserker",
                tier: 4,
                cost: 1600,
                primaryFire: {
                    damageType: "slashing",
                    damage: 90,
                    fireRate: 120,
                    dps: 180,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "slashing",
                    damage: 175,
                    fireRate: 60,
                    dps: 175,
                    description: "Heavy strike with high stumble"
                },
                description: "Heavy weapon with extreme stumble power",
                specialFeatures: ["High Stumble Power", "Heavy Attacks", "Crowd Control", "Can Block"]
            },
            {
                name: "Battleaxe",
                perk: "berserker",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "slashing",
                    damage: 120,
                    fireRate: 79,
                    dps: 158,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "slashing",
                    damage: 250,
                    fireRate: 46,
                    dps: 192,
                    description: "Devastating heavy chop"
                },
                description: "Medieval battleaxe with extreme damage",
                specialFeatures: ["Extreme Damage", "Wide Swing Arc", "Can Block", "Heavy Weapon"]
            },
            {
                name: "Ion Thruster",
                perk: "berserker",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "slashing",
                    damage: 92,
                    fireRate: 120,
                    dps: 184,
                    magazine: "melee"
                },
                altFire: {
                    damageType: "fire",
                    damage: 152,
                    fireRate: 41,
                    dps: 104,
                    description: "Charged fire attack",
                    dotDamage: 15,
                    dotDuration: 3
                },
                description: "Advanced weapon with charge mechanics and DOT",
                specialFeatures: ["Charge Mechanics", "Fire DOT", "Ultimate Attack", "Can Block"]
            },
            {
                name: "EMP Grenade",
                perk: "berserker",
                tier: 0,
                cost: 40,
                primaryFire: {
                    damageType: "emp",
                    damage: 25,
                    fireRate: 60,
                    dps: 25,
                    magazine: 1
                },
                description: "EMP grenade for stunning ZEDs",
                specialFeatures: ["EMP Effect", "Area Stun", "Throwable", "Perk Grenade"]
            }
        ],

        commando: [
            {
                name: "AR-15 Varmint Rifle",
                perk: "commando",
                tier: 1,
                cost: 200,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 30,
                    fireRate: 500,
                    dps: 250,
                    magazine: 20,
                    penetration: 0
                },
                description: "Basic assault rifle for trash clearing",
                specialFeatures: ["Starting Weapon", "Burst Fire", "Low Recoil"]
            },
            {
                name: "Sentinel",
                perk: "commando",
                tier: 2,
                cost: 500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 10,
                    fireRate: 500,
                    dps: 83,
                    magazine: "drone",
                    penetration: 0
                },
                altFire: {
                    damageType: "explosive",
                    damage: 200,
                    fireRate: 30,
                    dps: 100,
                    description: "Drone self-destruct explosion"
                },
                description: "Autonomous combat drone with explosive capability",
                specialFeatures: ["Combat Drone", "Autonomous Targeting", "Self-Destruct", "Hovering"]
            },
            {
                name: "SA80 L85A2 Bullpup",
                perk: "commando",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 32,
                    fireRate: 660,
                    dps: 352,
                    magazine: 30,
                    penetration: 1
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 32,
                    fireRate: 600,
                    dps: 320,
                    description: "Semi-automatic mode"
                },
                description: "British bullpup rifle with dual fire modes",
                specialFeatures: ["Bullpup Design", "Full-Auto/Semi-Auto", "Good Balance"]
            },
            {
                name: "Kalashnikov AK-12",
                perk: "commando",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 40,
                    fireRate: 600,
                    dps: 400,
                    magazine: 30,
                    penetration: 1
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 40,
                    fireRate: 1000,
                    dps: 667,
                    description: "3-round burst mode"
                },
                description: "Modern AK variant with burst fire capability",
                specialFeatures: ["Burst Fire Mode", "High Damage", "Reliable"]
            },
            {
                name: "Mkb.42(H) Carbine Rifle",
                perk: "commando",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 50,
                    fireRate: 500,
                    dps: 417,
                    magazine: 30,
                    penetration: 1
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 50,
                    fireRate: 500,
                    dps: 417,
                    description: "Semi-automatic mode"
                },
                description: "Historical German carbine with balanced performance",
                specialFeatures: ["Historical Weapon", "Full-Auto/Semi-Auto", "High Damage"]
            },
            {
                name: "SCAR-H Assault Rifle",
                perk: "commando",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 55,
                    fireRate: 625,
                    dps: 573,
                    magazine: 20,
                    penetration: 2
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 55,
                    fireRate: 600,
                    dps: 550,
                    description: "Semi-automatic mode"
                },
                description: "High-damage battle rifle with excellent penetration",
                specialFeatures: ["High Damage", "Excellent Penetration", "Full-Auto/Semi-Auto"]
            },
            {
                name: "Stoner 63A LMG",
                perk: "commando",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 30,
                    fireRate: 909,
                    dps: 454,
                    magazine: 75,
                    penetration: 2
                },
                description: "Light machine gun with massive magazine capacity",
                specialFeatures: ["75-Round Magazine", "High Fire Rate", "Sustained Fire", "Belt-Fed"]
            },
            {
                name: "Minigun",
                perk: "commando",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 38,
                    fireRate: 1200,
                    dps: 760,
                    magazine: 120,
                    penetration: 1
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 15,
                    fireRate: 454,
                    dps: 568,
                    description: "5-bullet spread shot",
                    pellets: 5
                },
                description: "Rotating barrel machine gun with devastating firepower",
                specialFeatures: ["Spin-Up Time", "Extreme Fire Rate", "Multi-Bullet Alt-Fire", "Movement Speed Reduction"]
            },
            {
                name: "MG3 Shredder",
                perk: "commando",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 35,
                    fireRate: 909,
                    dps: 530,
                    magazine: 75,
                    penetration: 2
                },
                description: "Heavy machine gun with extreme damage output",
                specialFeatures: ["High Damage", "Belt-Fed", "Sustained Fire", "Heavy Weapon"]
            },
            {
                name: "HE Grenade",
                perk: "commando",
                tier: 0,
                cost: 40,
                primaryFire: {
                    damageType: "explosive",
                    damage: 300,
                    fireRate: 60,
                    dps: 300,
                    magazine: 1
                },
                description: "High-explosive grenade for area damage",
                specialFeatures: ["Area Damage", "Throwable", "Perk Grenade", "High Explosive"]
            }
        ],

        support: [
            {
                name: "SG 500 Pump-Action",
                perk: "support",
                tier: 1,
                cost: 200,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 20,
                    fireRate: 77,
                    dps: 256,
                    magazine: 8,
                    penetration: 2,
                    pellets: 7
                },
                description: "Standard pump-action shotgun for close quarters",
                specialFeatures: ["Starting Weapon", "7 Pellets", "Pump Action", "Can Block"]
            },
            {
                name: "HRG Buckshot",
                perk: "support",
                tier: 2,
                cost: 550,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 32,
                    fireRate: 250,
                    dps: 667,
                    magazine: 5,
                    penetration: 2,
                    pellets: 5
                },
                description: "Tactical shotgun pistol with dual-wield capability",
                specialFeatures: ["Can Dual Wield", "5 Pellets", "Compact Design"],
                canDualWield: true
            },
            {
                name: "Dual HRG Buckshot",
                perk: "support",
                tier: 2,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 32,
                    fireRate: 315,
                    dps: 1680,
                    magazine: 10,
                    penetration: 2,
                    pellets: 10
                },
                description: "Dual-wielded tactical shotgun pistols",
                specialFeatures: ["Dual Wield", "10 Pellets Total", "High DPS"],
                canDualWield: false
            },
            {
                name: "Double-barrel Boomstick",
                perk: "support",
                tier: 2,
                cost: 750,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 25,
                    fireRate: 240,
                    dps: 1000,
                    magazine: 2,
                    penetration: 2,
                    pellets: 10
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 25,
                    fireRate: 120,
                    dps: 1000,
                    description: "Both barrels simultaneously",
                    pellets: 20
                },
                description: "Classic double-barrel with devastating burst damage",
                specialFeatures: ["Double Barrel", "Both Barrels Alt-Fire", "20 Pellets Alt-Fire", "Jump Boost"]
            },
            {
                name: "HZ12 Multi-Action",
                perk: "support",
                tier: 2,
                cost: 750,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 20,
                    fireRate: 600,
                    dps: 667,
                    magazine: 16,
                    penetration: 2,
                    pellets: 10
                },
                description: "Semi-auto shotgun with high magazine capacity",
                specialFeatures: ["Semi-Auto + Pump", "16-Round Magazine", "10 Pellets", "Dual Shell Fire"]
            },
            {
                name: "HRG Ballistic Bouncer",
                perk: "support",
                tier: 3,
                cost: 900,
                primaryFire: {
                    damageType: "bludgeon",
                    damage: 300,
                    fireRate: 269,
                    dps: 1345,
                    magazine: 18,
                    penetration: 1,
                    chargeTime: 0.6
                },
                description: "Charged projectile weapon with bouncing capability",
                specialFeatures: ["Charge Mechanic", "Bouncing Projectiles", "Variable Damage", "1-5 Bounces"]
            },
            {
                name: "M4 Combat Shotgun",
                perk: "support",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 30,
                    fireRate: 266,
                    dps: 1330,
                    magazine: 8,
                    penetration: 2,
                    pellets: 8
                },
                description: "Military-grade semi-automatic combat shotgun",
                specialFeatures: ["Semi-Auto", "8 Pellets", "Military Grade", "High Fire Rate"]
            },
            {
                name: "Frost Fang",
                perk: "support",
                tier: 3,
                cost: 1300,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 30,
                    fireRate: 120,
                    dps: 600,
                    magazine: 6,
                    penetration: 2,
                    pellets: 7
                },
                altFire: {
                    damageType: "slashing",
                    damage: 75,
                    fireRate: 94,
                    dps: 118,
                    description: "Melee attack (185 damage vs frozen targets)"
                },
                description: "Hybrid shotgun with freezing capability and melee mode",
                specialFeatures: ["Freeze Effect", "Melee Mode", "Bonus vs Frozen", "Can Block", "Hybrid Weapon"]
            },
            {
                name: "AA-12 Auto Shotgun",
                perk: "support",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 20,
                    fireRate: 300,
                    dps: 700,
                    magazine: 20,
                    penetration: 2,
                    pellets: 7
                },
                description: "Full-automatic shotgun with sustained fire capability",
                specialFeatures: ["Full Auto", "20-Round Magazine", "7 Pellets", "Sustained Fire"]
            },
            {
                name: "Doomstick",
                perk: "support",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 40,
                    fireRate: 240,
                    dps: 960,
                    magazine: 4,
                    penetration: 4,
                    pellets: 6
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 40,
                    fireRate: 60,
                    dps: 2400,
                    description: "All 4 barrels simultaneously",
                    pellets: 24
                },
                description: "Quad-barrel shotgun with devastating quad-fire mode",
                specialFeatures: ["Quad Barrel", "All Barrels Alt-Fire", "24 Pellets Alt-Fire", "Extreme Burst"]
            },
            {
                name: "S12 Shockgun",
                perk: "support",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 28,
                    fireRate: 300,
                    dps: 588,
                    magazine: 10,
                    penetration: 2,
                    pellets: 7
                },
                altFire: {
                    damageType: "emp",
                    damage: 200,
                    fireRate: 30,
                    dps: 100,
                    description: "EMP shockwave blast"
                },
                description: "Shotgun with EMP shockwave capability",
                specialFeatures: ["EMP Shockwave", "Dual Mode", "7 Pellets", "Electric Blast"]
            },
            {
                name: "HRG Blast Brawlers",
                perk: "support",
                tier: 4,
                cost: 1600,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 39,
                    fireRate: 300,
                    dps: 975,
                    magazine: 4,
                    penetration: 2,
                    pellets: 5
                },
                altFire: {
                    damageType: "bludgeon",
                    damage: 100,
                    fireRate: 92,
                    dps: 307,
                    description: "Dual melee strikes (50 damage each)"
                },
                description: "Dual shotgun gauntlets with melee capability",
                specialFeatures: ["Dual Gauntlets", "Melee + Ranged", "5 Pellets Each", "Can Block"]
            },
            {
                name: "Frag Grenade",
                perk: "support",
                tier: 0,
                cost: 40,
                primaryFire: {
                    damageType: "explosive",
                    damage: 200,
                    fireRate: 60,
                    dps: 200,
                    magazine: 1
                },
                altFire: {
                    damageType: "piercing",
                    damage: 50,
                    fireRate: 60,
                    dps: 500,
                    description: "Shrapnel fragments",
                    pellets: 10
                },
                description: "Fragmentation grenade with explosive and shrapnel damage",
                specialFeatures: ["Area Explosion", "Shrapnel Fragments", "Throwable", "Perk Grenade"]
            }
        ],

        demolitionist: [
            {
                name: "HX25 Grenade Pistol",
                perk: "demolitionist",
                tier: 1,
                cost: 300,
                primaryFire: {
                    damageType: "explosive",
                    damage: 30,
                    fireRate: 28,
                    dps: 195,
                    magazine: 1,
                    penetration: 0,
                    pellets: 7,
                    additionalDamage: {
                        ballistic: 10,
                        description: "Pellet impact + explosive damage"
                    }
                },
                description: "Grenade launching pistol with pellet spread",
                specialFeatures: ["Starting Weapon", "7 Pellets", "Impact + Explosive", "Circle Spread Pattern"]
            },
            {
                name: "C4 Explosives",
                perk: "demolitionist",
                tier: 1,
                cost: 300,
                primaryFire: {
                    damageType: "explosive",
                    damage: 820,
                    fireRate: 41,
                    dps: 560,
                    magazine: 1,
                    radius: 400
                },
                description: "Remote detonated plastic explosives with massive damage",
                specialFeatures: ["Remote Detonation", "Massive Damage", "24 Max Global", "Damage Reduction Chain"]
            },
            {
                name: "HRG Bombardier",
                perk: "demolitionist",
                tier: 2,
                cost: 500,
                primaryFire: {
                    damageType: "explosive",
                    damage: 300,
                    fireRate: 85,
                    dps: 425,
                    magazine: 1,
                    additionalDamage: {
                        ballistic: 10,
                        description: "Grenade impact + explosive damage"
                    }
                },
                description: "Autonomous combat drone with explosive grenades",
                specialFeatures: ["Combat Drone", "Autonomous Targeting", "15m Range", "Hovering", "4 Drones Max"]
            },
            {
                name: "M79 Grenade Launcher",
                perk: "demolitionist",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "explosive",
                    damage: 225,
                    fireRate: 22,
                    dps: 83,
                    magazine: 1,
                    penetration: 0,
                    additionalDamage: {
                        ballistic: 150,
                        description: "Grenade impact + explosive damage"
                    }
                },
                description: "Single-shot grenade launcher with reliable explosive damage",
                specialFeatures: ["Single Shot", "Impact + Explosive", "Classic Design", "Area Damage"]
            },
            {
                name: "HRG Tommy Boom",
                perk: "demolitionist",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "explosive",
                    damage: 35,
                    fireRate: 360,
                    dps: 210,
                    magazine: 24,
                    penetration: 0,
                    additionalDamage: {
                        ballistic: 30,
                        description: "Projectile impact + explosive damage"
                    }
                },
                description: "Submachine gun firing explosive projectiles",
                specialFeatures: ["SMG Fire Rate", "Explosive Projectiles", "Impact + Explosive", "High Magazine"]
            },
            {
                name: "HRG Crossboom",
                perk: "demolitionist",
                tier: 3,
                cost: 900,
                primaryFire: {
                    damageType: "explosive",
                    damage: 350,
                    fireRate: 42,
                    dps: 245,
                    magazine: 1,
                    penetration: 0,
                    additionalDamage: {
                        ballistic: 10,
                        description: "Impact + explosive damage"
                    }
                },
                altFire: {
                    damageType: "explosive",
                    damage: 100,
                    fireRate: 60,
                    dps: 100,
                    description: "Secondary explosive mode",
                    additionalDamage: {
                        piercing: 10,
                        description: "Piercing impact + explosive"
                    }
                },
                description: "Crossbow firing explosive bolts with dual modes",
                specialFeatures: ["Crossbow Design", "Dual Fire Modes", "Piercing + Explosive", "0.2s Detonation Delay"]
            },
            {
                name: "Seal Squeal",
                perk: "demolitionist",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "explosive",
                    damage: 250,
                    fireRate: 120,
                    dps: 500,
                    magazine: 5,
                    penetration: 0,
                    additionalDamage: {
                        ballistic: 125,
                        description: "Harpoon impact + explosive damage"
                    }
                },
                description: "Harpoon gun firing explosive-tipped projectiles",
                specialFeatures: ["Harpoon Design", "Impact + Explosive", "4s Fuse Time", "No Penetration"]
            },
            {
                name: "RPG-7",
                perk: "demolitionist",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "explosive",
                    damage: 750,
                    fireRate: 20,
                    dps: 250,
                    magazine: 1,
                    penetration: 0,
                    additionalDamage: {
                        ballistic: 150,
                        description: "Rocket impact + explosive damage"
                    }
                },
                description: "Rocket launcher with dual damage types and backblast",
                specialFeatures: ["Rocket Launcher", "Impact + Explosive", "Directional Backblast", "High Single Damage"]
            },
            {
                name: "Seeker Six",
                perk: "demolitionist",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "explosive",
                    damage: 160,
                    fireRate: 171,
                    dps: 457,
                    magazine: 6,
                    penetration: 0,
                    additionalDamage: {
                        ballistic: 125,
                        description: "Rocket impact + explosive damage"
                    }
                },
                description: "Homing rocket launcher with lock-on capability",
                specialFeatures: ["Homing Rockets", "Lock-On Targeting", "6 Targets Max", "ADS Required", "Impact + Explosive"]
            },
            {
                name: "Blunderbuss",
                perk: "demolitionist",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "explosive",
                    damage: 250,
                    fireRate: 87,
                    dps: 363,
                    magazine: 3,
                    penetration: 0,
                    additionalDamage: {
                        ballistic: 300,
                        description: "Cannonball impact + explosive damage"
                    }
                },
                altFire: {
                    damageType: "piercing",
                    damage: 50,
                    fireRate: 87,
                    dps: 725,
                    description: "Shrapnel fragments",
                    pellets: 10
                },
                description: "Cannon firing explosive cannonballs with shrapnel",
                specialFeatures: ["Cannonball + Shrapnel", "Rolling Cannonballs", "Hold to Roll", "Impact + Explosive"]
            },
            {
                name: "Gravity Imploder",
                perk: "demolitionist",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "explosive",
                    damage: 320,
                    fireRate: 60,
                    dps: 320,
                    magazine: 6,
                    penetration: 0,
                    additionalDamage: {
                        ballistic: 150,
                        description: "Primary impact + explosive damage"
                    }
                },
                altFire: {
                    damageType: "explosive",
                    damage: 1,
                    fireRate: 60,
                    dps: 1,
                    description: "Vortex pull + minimal explosion"
                },
                description: "Gravity weapon with vortex pull and explosions",
                specialFeatures: ["Gravity Vortex", "Pull Effect", "Dual Mode", "0.5s Vortex Duration"]
            },
            {
                name: "ZED MKIII",
                perk: "demolitionist",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "microwave",
                    damage: 50,
                    fireRate: 400,
                    dps: 333,
                    magazine: 50,
                    penetration: 4
                },
                altFire: {
                    damageType: "explosive",
                    damage: 200,
                    fireRate: 400,
                    dps: 1333,
                    description: "Auto-firing homing rocket (after 6 microwave shots)",
                    additionalDamage: {
                        ballistic: 100,
                        description: "Rocket impact + explosive damage"
                    }
                },
                description: "Microwave weapon with automatic homing rockets",
                specialFeatures: ["Auto Homing Rockets", "1 Rocket per 6 Shots", "Hold Trigger Required", "Microwave + Explosive"]
            },
            {
                name: "M32 Grenade Launcher",
                perk: "demolitionist",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "explosive",
                    damage: 225,
                    fireRate: 240,
                    dps: 900,
                    magazine: 6,
                    penetration: 0,
                    additionalDamage: {
                        ballistic: 150,
                        description: "Grenade impact + explosive damage"
                    }
                },
                description: "Multi-shot grenade launcher with high fire rate",
                specialFeatures: ["6-Shot Cylinder", "High Fire Rate", "Rapid Explosives", "Impact + Explosive"]
            },
            {
                name: "Dynamite Grenade",
                perk: "demolitionist",
                tier: 0,
                cost: 40,
                primaryFire: {
                    damageType: "explosive",
                    damage: 300,
                    fireRate: 60,
                    dps: 300,
                    magazine: 1,
                    radius: 400
                },
                description: "High-explosive dynamite grenade with 3-second fuse",
                specialFeatures: ["Area Explosion", "3s Fuse", "Throwable", "Perk Grenade", "High Damage"]
            }
        ],


        firebug: [
            {
                name: "Caulk n' Burn",
                perk: "firebug",
                tier: 1,
                cost: 200,
                primaryFire: {
                    damageType: "fire",
                    damage: 10,
                    fireRate: 857,
                    dps: 143,
                    magazine: 50,
                    dotDamage: 8,
                    dotDuration: 1.7
                },
                description: "Basic flamethrower for crowd control and area denial",
                specialFeatures: ["Starting Weapon", "Continuous Stream", "Ground Fire", "DOT Effect", "6-8.5m Range"]
            },
            {
                name: "Spitfire",
                perk: "firebug",
                tier: 2,
                cost: 325,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 40,
                    fireRate: 300,
                    dps: 200,
                    magazine: 6,
                    dotDamage: 32,
                    dotDuration: 1.7
                },
                description: "Incendiary revolver with dual-wield capability",
                specialFeatures: ["Can Dual Wield", "Fire DOT", "Residual Flames", "Revolver Mechanics"],
                canDualWield: true
            },
            {
                name: "Dual Spitfire",
                perk: "firebug",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 40,
                    fireRate: 545,
                    dps: 363,
                    magazine: 12,
                    dotDamage: 32,
                    dotDuration: 1.7
                },
                description: "Dual-wielded incendiary revolvers",
                specialFeatures: ["Dual Wield", "Fire DOT", "Residual Flames", "High DPS"],
                canDualWield: false
            },
            {
                name: "Dragonsbreath",
                perk: "firebug",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 35,
                    fireRate: 87,
                    dps: 507,
                    magazine: 6,
                    pellets: 6,
                    dotDamage: 25,
                    dotDuration: 2.7
                },
                description: "Trench gun firing incendiary shells",
                specialFeatures: ["6 Incendiary Pellets", "Residual Flames", "Pump Action", "Fire DOT"]
            },
            {
                name: "Mac 10",
                perk: "firebug",
                tier: 3,
                cost: 900,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 28,
                    fireRate: 895,
                    dps: 418,
                    magazine: 32,
                    dotDamage: 11,
                    dotDuration: 2.0
                },
                description: "Submachine gun with incendiary ammunition",
                specialFeatures: ["Extreme Fire Rate", "SMG Mechanics", "Fire DOT", "High Magazine"]
            },
            {
                name: "HRG Scorcher",
                perk: "firebug",
                tier: 3,
                cost: 1000,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 333,
                    fireRate: 28,
                    dps: 155,
                    magazine: 1,
                    dotDamage: 40,
                    dotDuration: 3.0
                },
                altFire: {
                    damageType: "fire",
                    damage: 10,
                    fireRate: 60,
                    dps: 10,
                    description: "Broken Flare projectile (spawns 7 residual flames)"
                },
                description: "Flare gun with dual fire modes and area denial",
                specialFeatures: ["Lighting Flare", "Broken Flare Alt-Fire", "Residual Flames", "Light Source"]
            },
            {
                name: "Flamethrower",
                perk: "firebug",
                tier: 3,
                cost: 1200,
                primaryFire: {
                    damageType: "fire",
                    damage: 18,
                    fireRate: 857,
                    dps: 257,
                    magazine: 100,
                    dotDamage: 14,
                    dotDuration: 1.7
                },
                description: "Advanced flamethrower with extended range and damage",
                specialFeatures: ["Continuous Stream", "Ground Fire", "DOT Effect", "11-15.5m Range"]
            },
            {
                name: "HRG Dragonsblaze",
                perk: "firebug",
                tier: 4,
                cost: 1400,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 28,
                    fireRate: 240,
                    dps: 896,
                    magazine: 4,
                    pellets: 8,
                    dotDamage: 19,
                    dotDuration: 2.7
                },
                description: "Quad-barrel shotgun firing incendiary shells",
                specialFeatures: ["8 Pellets", "Ground Fire Guarantee", "Fire DOT", "Quad Barrel"]
            },
            {
                name: "Microwave Gun",
                perk: "firebug",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "microwave",
                    damage: 16,
                    fireRate: 857,
                    dps: 229,
                    magazine: 100,
                    dotDamage: 13,
                    dotDuration: 1.7
                },
                altFire: {
                    damageType: "microwave",
                    damage: 210,
                    fireRate: 60,
                    dps: 210,
                    description: "Microwave blast explosion"
                },
                description: "Microwave beam weapon with blast explosion capability",
                specialFeatures: ["Continuous Beam", "Blast Explosion", "Directional Blast", "10.9-15.7m Range"]
            },
            {
                name: "Husk Cannon",
                perk: "firebug",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "explosive",
                    damage: 60,
                    fireRate: 150,
                    dps: 150,
                    magazine: 30,
                    chargeTime: 1.0,
                    dotDamage: 6,
                    dotDuration: 2.5
                },
                description: "Charged alien energy cannon with scaling damage",
                specialFeatures: ["Charge Mechanic", "Scaling Damage", "Ground Fire When Charged", "Energy Projectiles"]
            },
            {
                name: "Thermite Bore",
                perk: "firebug",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 150,
                    fireRate: 75,
                    dps: 188,
                    magazine: 6,
                    penetration: 5,
                    dotDamage: 30,
                    dotDuration: 3.0
                },
                description: "High-penetration thermite rifle with explosive projectiles",
                specialFeatures: ["Extreme Penetration", "Projectile Explosion", "Residual Flames", "Manual Detonation"]
            },
            {
                name: "Helios Rifle",
                perk: "firebug",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "microwave",
                    damage: 50,
                    fireRate: 600,
                    dps: 500,
                    magazine: 40,
                    penetration: 5,
                    dotDamage: 15,
                    dotDuration: 2.0
                },
                description: "Precision microwave rifle with high damage and penetration",
                specialFeatures: ["High Damage", "Excellent Penetration", "Semi-Auto", "Microwave Damage"]
            },
            {
                name: "Molotov Grenade",
                perk: "firebug",
                tier: 0,
                cost: 40,
                primaryFire: {
                    damageType: "fire",
                    damage: 60,
                    fireRate: 60,
                    dps: 60,
                    magazine: 1,
                    dotDamage: 30,
                    dotDuration: 3.0
                },
                description: "Incendiary grenade creating area denial flames",
                specialFeatures: ["Area Fire", "Residual Flames", "Throwable", "Perk Grenade", "Light Source"]
            }
        ],

        gunslinger: [
            {
                name: "1858 Revolver",
                perk: "gunslinger",
                tier: 1,
                cost: 100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 50,
                    fireRate: 300,
                    dps: 250,
                    magazine: 6,
                    penetration: 0
                },
                description: "Classic six-shooter revolver with dual-wield capability",
                specialFeatures: ["Starting Weapon", "Can Dual Wield", "Revolver Mechanics"],
                canDualWield: true
            },
            {
                name: "Dual 1858 Revolvers",
                perk: "gunslinger",
                tier: 1,
                cost: 200,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 50,
                    fireRate: 545,
                    dps: 908,
                    magazine: 12,
                    penetration: 0
                },
                description: "Dual-wielded classic revolvers",
                specialFeatures: ["Dual Wield", "High DPS", "Revolver Mechanics"],
                canDualWield: false
            },
            {
                name: "M1911 Pistol",
                perk: "gunslinger",
                tier: 2,
                cost: 325,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 50,
                    fireRate: 342,
                    dps: 285,
                    magazine: 8,
                    penetration: 1
                },
                description: "Classic military sidearm with dual-wield capability",
                specialFeatures: ["Military Standard", "Can Dual Wield", "Penetration"],
                canDualWield: true
            },
            {
                name: "Dual M1911 Pistols",
                perk: "gunslinger",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 50,
                    fireRate: 600,
                    dps: 500,
                    magazine: 16,
                    penetration: 1
                },
                description: "Dual-wielded military pistols",
                specialFeatures: ["Dual Wield", "High Fire Rate", "Penetration"],
                canDualWield: false
            },
            {
                name: "HRG Winterbite",
                perk: "gunslinger",
                tier: 2,
                cost: 325,
                primaryFire: {
                    damageType: "freeze",
                    damage: 49,
                    fireRate: 300,
                    dps: 245,
                    magazine: 6,
                    penetration: 0,
                    additionalDamage: {
                        explosive: 20,
                        description: "Freeze explosion on impact"
                    }
                },
                description: "Freezing projectile pistol with explosion on impact",
                specialFeatures: ["Freeze Effect", "Impact Explosion", "Can Dual Wield", "Projectile Weapon"],
                canDualWield: true
            },
            {
                name: "Dual HRG Winterbite",
                perk: "gunslinger",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "freeze",
                    damage: 49,
                    fireRate: 545,
                    dps: 445,
                    magazine: 12,
                    penetration: 0,
                    additionalDamage: {
                        explosive: 20,
                        description: "Freeze explosion on impact"
                    }
                },
                description: "Dual-wielded freezing pistols",
                specialFeatures: ["Freeze Effect", "Impact Explosion", "Dual Wield", "Projectile Weapon"],
                canDualWield: false
            },
            {
                name: ".50 Desert Eagle",
                perk: "gunslinger",
                tier: 3,
                cost: 550,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 91,
                    fireRate: 300,
                    dps: 455,
                    magazine: 7,
                    penetration: 2
                },
                description: "High-damage hand cannon with dual-wield capability",
                specialFeatures: ["High Damage", "Can Dual Wield", "Good Penetration"],
                canDualWield: true
            },
            {
                name: "Dual .50 Desert Eagles",
                perk: "gunslinger",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 91,
                    fireRate: 545,
                    dps: 826,
                    magazine: 14,
                    penetration: 2
                },
                description: "Dual-wielded Desert Eagles",
                specialFeatures: ["High Damage", "Dual Wield", "Good Penetration"],
                canDualWield: false
            },
            {
                name: "Rhino",
                perk: "gunslinger",
                tier: 3,
                cost: 550,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 75,
                    fireRate: 342,
                    dps: 427,
                    magazine: 6,
                    penetration: 2,
                    additionalDamage: {
                        piercing: 80,
                        description: "3 shrapnel pieces on impact"
                    }
                },
                description: "Revolver firing shrapnel-producing rounds",
                specialFeatures: ["Shrapnel Generation", "Can Dual Wield", "Penetration"],
                canDualWield: true
            },
            {
                name: "Dual Rhinos",
                perk: "gunslinger",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 75,
                    fireRate: 600,
                    dps: 750,
                    magazine: 12,
                    penetration: 2,
                    additionalDamage: {
                        piercing: 80,
                        description: "3 shrapnel pieces on impact"
                    }
                },
                description: "Dual-wielded shrapnel revolvers",
                specialFeatures: ["Shrapnel Generation", "Dual Wield", "Penetration"],
                canDualWield: false
            },
            {
                name: "HRG Disrupter",
                perk: "gunslinger",
                tier: 3,
                cost: 750,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 80,
                    fireRate: 342,
                    dps: 456,
                    magazine: 15,
                    penetration: 1
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 120,
                    fireRate: 85,
                    dps: 170,
                    description: "EMP burst mode"
                },
                description: "Dual-mode pistol with EMP capability",
                specialFeatures: ["EMP Mode", "Dual Fire Modes", "High Magazine"]
            },
            {
                name: ".500 Magnum Revolver",
                perk: "gunslinger",
                tier: 4,
                cost: 750,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 160,
                    fireRate: 250,
                    dps: 667,
                    magazine: 5,
                    penetration: 3
                },
                description: "Extremely powerful magnum revolver",
                specialFeatures: ["Extreme Damage", "High Penetration", "Can Dual Wield"],
                canDualWield: true
            },
            {
                name: "Dual .500 Magnum Revolvers",
                perk: "gunslinger",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 160,
                    fireRate: 315,
                    dps: 840,
                    magazine: 10,
                    penetration: 3
                },
                description: "Dual-wielded magnum revolvers with devastating power",
                specialFeatures: ["Extreme Damage", "Dual Wield", "High Penetration"],
                canDualWield: false
            },
            {
                name: "AF2011-A1",
                perk: "gunslinger",
                tier: 4,
                cost: 750,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 53,
                    fireRate: 316,
                    dps: 557,
                    magazine: 16,
                    penetration: 1.5,
                    pellets: 2
                },
                description: "Double-barrel pistol firing two bullets simultaneously",
                specialFeatures: ["Double Barrel", "2 Bullets per Shot", "Can Dual Wield"],
                canDualWield: true
            },
            {
                name: "Dual AF2011-A1",
                perk: "gunslinger",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 53,
                    fireRate: 461,
                    dps: 814,
                    magazine: 32,
                    penetration: 1.5,
                    pellets: 4
                },
                description: "Dual-wielded double-barrel pistols",
                specialFeatures: ["Double Barrel", "4 Bullets per Shot", "Dual Wield"],
                canDualWield: false
            },
            {
                name: "Glock 18c",
                perk: "gunslinger",
                tier: 4,
                cost: 750,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 37,
                    fireRate: 800,
                    dps: 493,
                    magazine: 33,
                    penetration: 0
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 37,
                    fireRate: 342,
                    dps: 211,
                    description: "Semi-automatic mode"
                },
                description: "Machine pistol with full-auto and semi-auto modes",
                specialFeatures: ["Full Auto", "Semi-Auto Mode", "Can Dual Wield", "High Magazine"],
                canDualWield: true
            },
            {
                name: "Dual Glock 18c",
                perk: "gunslinger",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 37,
                    fireRate: 1200,
                    dps: 740,
                    magazine: 66,
                    penetration: 0
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 37,
                    fireRate: 342,
                    dps: 211,
                    description: "Semi-automatic mode"
                },
                description: "Dual-wielded machine pistols",
                specialFeatures: ["Full Auto", "Semi-Auto Mode", "Dual Wield", "Extreme Fire Rate"],
                canDualWield: false
            },
            {
                name: "Nail Bomb Grenade",
                perk: "gunslinger",
                tier: 0,
                cost: 40,
                primaryFire: {
                    damageType: "explosive",
                    damage: 100,
                    fireRate: 60,
                    dps: 100,
                    magazine: 1
                },
                altFire: {
                    damageType: "piercing",
                    damage: 35,
                    fireRate: 60,
                    dps: 350,
                    description: "Nail shrapnel",
                    pellets: 10
                },
                description: "Explosive grenade with nail shrapnel",
                specialFeatures: ["Area Explosion", "Nail Shrapnel", "Throwable", "Perk Grenade"]
            }
        ],


        sharpshooter: [
            {
                name: "Winchester 1894",
                perk: "sharpshooter",
                tier: 1,
                cost: 200,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 80,
                    fireRate: 150,
                    dps: 200,
                    magazine: 12,
                    penetration: 1.5
                },
                description: "Lever-action rifle with high single-shot damage",
                specialFeatures: ["Starting Weapon", "Lever Action", "High Damage per Shot"]
            },
            {
                name: "SPX 464 Centerfire",
                perk: "sharpshooter",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 165,
                    fireRate: 150,
                    dps: 413,
                    magazine: 10,
                    penetration: 1.5
                },
                description: "Centerfire rifle with improved damage",
                specialFeatures: ["High Damage", "Scoped", "Bolt Action"]
            },
            {
                name: "Crossbow",
                perk: "sharpshooter",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "piercing",
                    damage: 350,
                    fireRate: 42,
                    dps: 245,
                    magazine: 1,
                    penetration: 4
                },
                description: "High-damage crossbow with excellent penetration",
                specialFeatures: ["Extreme Penetration", "High Single-Shot Damage", "Projectile Arc", "Bolt Recovery"]
            },
            {
                name: "M14 EBR",
                perk: "sharpshooter",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 80,
                    fireRate: 272,
                    dps: 363,
                    magazine: 20,
                    penetration: 2
                },
                description: "Semi-automatic battle rifle with high damage per shot",
                specialFeatures: ["Semi-Auto", "High Damage", "Good Fire Rate", "Scoped"]
            },
            {
                name: "HRG Beluga Beat",
                perk: "sharpshooter",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 100,
                    fireRate: 120,
                    dps: 200,
                    magazine: 10,
                    penetration: 4,
                    chargeTime: 0.75
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 240,
                    fireRate: 80,
                    dps: 320,
                    description: "Charged shot with scaling damage",
                    chargeTime: 0.75
                },
                description: "Charged rifle with variable damage and microwave properties",
                specialFeatures: ["Charge Mechanic", "Variable Damage", "Armor Bonus Uncharged", "High Penetration"]
            },
            {
                name: "HRG Head Hunter",
                perk: "sharpshooter",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "piercing",
                    damage: 50,
                    fireRate: 240,
                    dps: 200,
                    magazine: 7,
                    penetration: 0
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 500,
                    fireRate: 34,
                    dps: 283,
                    description: "Wave damage (150/300/500 based on stacks)"
                },
                description: "Stacking weapon with wave damage capability",
                specialFeatures: ["Head Scaling", "Stack System", "Wave Damage", "3-Stack Max", "150m Wave Range"]
            },
            {
                name: "Mosin Nagant",
                perk: "sharpshooter",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 250,
                    fireRate: 70,
                    dps: 292,
                    magazine: 5,
                    penetration: 3
                },
                altFire: {
                    damageType: "piercing",
                    damage: 100,
                    fireRate: 74,
                    dps: 123,
                    description: "Bayonet stab attack"
                },
                description: "Historical bolt-action rifle with bayonet attachment",
                specialFeatures: ["Bolt Action", "High Damage", "Bayonet", "Can Block", "Can Parry"]
            },
            {
                name: "HV Storm Cannon",
                perk: "sharpshooter",
                tier: 4,
                cost: 1400,
                primaryFire: {
                    damageType: "emp",
                    damage: 150,
                    fireRate: 150,
                    dps: 375,
                    magazine: 8,
                    penetration: 0,
                    additionalDamage: {
                        none: 25,
                        description: "Jump damage to nearby heads (25% reduction per jump)"
                    }
                },
                description: "EMP weapon with chain damage to nearby ZED heads",
                specialFeatures: ["Chain Damage", "EMP Type", "3 Additional Targets", "2m Chain Range", "Head Targeting"]
            },
            {
                name: "Rail Gun",
                perk: "sharpshooter",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 560,
                    fireRate: 32,
                    dps: 299,
                    magazine: 1,
                    penetration: 10
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 280,
                    fireRate: 32,
                    dps: 149,
                    description: "Lock-on mode with reduced damage"
                },
                description: "Charged railgun with extreme penetration and lock-on capability",
                specialFeatures: ["Lock-On Mode", "Extreme Penetration", "High Single-Shot Damage", "2km Range"]
            },
            {
                name: "FN FAL ACOG",
                perk: "sharpshooter",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 70,
                    fireRate: 606,
                    dps: 707,
                    magazine: 20,
                    penetration: 2
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 70,
                    fireRate: 272,
                    dps: 327,
                    description: "Semi-automatic mode"
                },
                description: "Battle rifle with ACOG scope and dual fire modes",
                specialFeatures: ["ACOG Scope", "Full-Auto/Semi-Auto", "High Fire Rate", "Good Penetration"]
            },
            {
                name: "Compound Bow",
                perk: "sharpshooter",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "piercing",
                    damage: 250,
                    fireRate: 43,
                    dps: 179,
                    magazine: 1,
                    penetration: 5,
                    chargeTime: 0.4,
                    additionalDamage: {
                        freeze: 75,
                        description: "Cryo arrow explosion"
                    }
                },
                altFire: {
                    damageType: "piercing",
                    damage: 250,
                    fireRate: 43,
                    dps: 179,
                    description: "Sharp arrow (high penetration)"
                },
                description: "Compound bow with multiple arrow types and charge mechanics",
                specialFeatures: ["Multiple Arrow Types", "Charge Mechanic", "Cryo Explosion", "Sharp Arrow", "Variable Speed"]
            },
            {
                name: "M99 AMR",
                perk: "sharpshooter",
                tier: 4,
                cost: 2500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 850,
                    fireRate: 22,
                    dps: 312,
                    magazine: 1,
                    penetration: 5
                },
                description: "Anti-materiel rifle with extreme single-shot damage",
                specialFeatures: ["Extreme Damage", "Single Shot", "Maximum Penetration", "Heavy Weapon"]
            },
            {
                name: "Freeze Grenade",
                perk: "sharpshooter",
                tier: 0,
                cost: 40,
                primaryFire: {
                    damageType: "freeze",
                    damage: 25,
                    fireRate: 60,
                    dps: 25,
                    magazine: 1
                },
                description: "Freezing grenade for crowd control",
                specialFeatures: ["Freeze Effect", "Area Control", "Throwable", "Perk Grenade"]
            }
        ],


        medic: [
            {
                name: "HMTech-101 Pistol",
                perk: "medic",
                tier: 1,
                cost: 200,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 20,
                    fireRate: 342,
                    dps: 114,
                    magazine: 15,
                    penetration: 0
                },
                altFire: {
                    damageType: "healing",
                    healAmount: 15,
                    fireRate: 342,
                    description: "Medical dart healing mode"
                },
                description: "Basic medical pistol with healing dart capability",
                specialFeatures: ["Starting Weapon", "Healing Darts", "Lock-On Targeting", "Dual Mode"]
            },
            {
                name: "HMTech-201 SMG",
                perk: "medic",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 20,
                    fireRate: 800,
                    dps: 267,
                    magazine: 40,
                    penetration: 0
                },
                altFire: {
                    damageType: "healing",
                    healAmount: 15,
                    fireRate: 342,
                    description: "Medical dart healing mode"
                },
                description: "Medical SMG with high fire rate and healing capability",
                specialFeatures: ["High Fire Rate", "Healing Darts", "Lock-On Targeting", "Large Magazine"]
            },
            {
                name: "HRG Healthrower",
                perk: "medic",
                tier: 3,
                cost: 1000,
                primaryFire: {
                    damageType: "toxic",
                    damage: 12,
                    fireRate: 500,
                    dps: 100,
                    magazine: 100,
                    dotDamage: 12,
                    dotDuration: 4
                },
                altFire: {
                    damageType: "healing",
                    healAmount: 20,
                    fireRate: 342,
                    description: "Healing dart mode"
                },
                description: "Continuous beam weapon with toxic DOT and healing splash",
                specialFeatures: ["Continuous Beam", "Healing Splash", "DOT Effect", "10m Range", "Ground Fire"]
            },

            {
                name: "Hemogoblin",
                perk: "medic",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 120,
                    fireRate: 240,
                    dps: 480,
                    magazine: 7,
                    penetration: 0,
                    dotDamage: 12,
                    dotDuration: 5
                },
                altFire: {
                    damageType: "healing",
                    healAmount: 25,
                    fireRate: 342,
                    description: "Medical dart healing mode"
                },
                description: "Bleeding dart rifle with poison DOT and healing capability",
                specialFeatures: ["Bleeding DOT", "High Single-Shot Damage", "ZED Panic Effect", "Lock-On Targeting"]
            },
            {
                name: "Mine Reconstructor",
                perk: "medic",
                tier: 3,
                cost: 1200,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 350,
                    fireRate: 300,
                    dps: 175,
                    magazine: 12,
                    penetration: 1,
                    chargeTime: 1.2,
                    additionalDamage: {
                        explosive: 400,
                        description: "Mine explosion damage (toxic)"
                    }
                },
                description: "Charged mine launcher with scaling damage and radius",
                specialFeatures: ["Charge Mechanic", "Mine Explosion", "DOT Effect", "12 Mines Max", "Scaling Damage"]
            },
            {
                name: "HMTech-401 Assault Rifle",
                perk: "medic",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 35,
                    fireRate: 750,
                    dps: 438,
                    magazine: 40,
                    penetration: 1
                },
                altFire: {
                    damageType: "healing",
                    healAmount: 15,
                    fireRate: 342,
                    description: "Medical dart healing mode"
                },
                description: "High-capacity assault rifle with medical dart capability",
                specialFeatures: ["High Fire Rate", "Assault Rifle", "Healing Darts", "Lock-On Targeting"]
            },
            {
                name: "HRG Incision",
                perk: "medic",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 400,
                    fireRate: 25,
                    dps: 167,
                    magazine: 1,
                    penetration: 10
                },
                altFire: {
                    damageType: "healing",
                    healAmount: 40,
                    fireRate: 342,
                    description: "Healing dart mode"
                },
                description: "High-damage precision rifle with extreme penetration",
                specialFeatures: ["Extreme Damage", "Maximum Penetration", "Single Shot", "Lock-On Targeting"]
            },
            {
                name: "HRG Vampire",
                perk: "medic",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "bleeding",
                    damage: 15,
                    fireRate: 600,
                    dps: 150,
                    magazine: 40,
                    penetration: 0
                },
                altFire: {
                    damageType: "toxic",
                    damage: 200,
                    fireRate: 60,
                    dps: 200,
                    description: "Charged Blood Ball (heals 12-60 HP)",
                    chargeTime: 1.0
                },
                description: "Vampiric weapon with blood suctioning and healing explosions",
                specialFeatures: ["Blood Suctioning", "Healing Blood Ball", "Crystal Spike Attack", "Life Drain"]
            },
            {
                name: "Corrupter Carbine",
                perk: "medic",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 275,
                    fireRate: 60,
                    dps: 275,
                    magazine: 6,
                    penetration: 3
                },
                altFire: {
                    damageType: "toxic",
                    damage: 1,
                    fireRate: 120,
                    dps: 2,
                    description: "Seed projectile (300 explosion damage on ZED death)",
                    additionalDamage: {
                        explosive: 300,
                        description: "Gas explosion on corrupted ZED death"
                    }
                },
                description: "Hybrid rifle with corruption seeds that explode on ZED death",
                specialFeatures: ["Corruption Seeds", "Gas Explosion", "Healing Gas", "6s Seed Lifetime"]
            },
            {
                name: "HRG Medic Missile",
                perk: "medic",
                tier: 4,
                cost: 1600,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 100,
                    fireRate: 26,
                    dps: 43,
                    magazine: 1,
                    penetration: 0,
                    additionalDamage: {
                        explosive: 700,
                        description: "Rocket explosion + 150 backblast damage"
                    }
                },
                description: "Rocket launcher with healing explosion and DOT",
                specialFeatures: ["Healing Explosion", "Directional Backblast", "DOT Effect", "50 HP Team Heal"]
            },
            {
                name: "HMTech-501 Grenade Rifle",
                perk: "medic",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 47,
                    fireRate: 500,
                    dps: 392,
                    magazine: 30,
                    penetration: 1
                },
                altFire: {
                    damageType: "toxic",
                    damage: 60,
                    fireRate: 240,
                    dps: 240,
                    description: "Grenade launcher mode",
                    dotDamage: 60,
                    dotDuration: 8
                },
                description: "Hybrid assault rifle with underbarrel grenade launcher",
                specialFeatures: ["Dual Mode", "Grenade Launcher", "Healing Cloud", "DOT Effect"]
            },
            {
                name: "Healing Grenade",
                perk: "medic",
                tier: 0,
                cost: 40,
                primaryFire: {
                    damageType: "toxic",
                    damage: 50,
                    fireRate: 60,
                    dps: 50,
                    magazine: 1
                },
                altFire: {
                    damageType: "healing",
                    healAmount: 10,
                    fireRate: 60,
                    description: "Healing cloud (10 HP over 8s)"
                },
                description: "Healing grenade that damages ZEDs and heals players",
                specialFeatures: ["Area Healing", "Damages ZEDs", "Throwable", "Perk Grenade"]
            }
        ],


        swat: [
            {
                name: "MP7 SMG",
                perk: "swat",
                tier: 1,
                cost: 200,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 16,
                    fireRate: 952,
                    dps: 254,
                    magazine: 30,
                    penetration: 0
                },
                description: "Compact SMG with high fire rate",
                specialFeatures: ["Starting Weapon", "High Fire Rate", "Compact"]
            },
            {
                name: "MP5RAS SMG",
                perk: "swat",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 25,
                    fireRate: 895,
                    dps: 372,
                    magazine: 40,
                    penetration: 0
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 25,
                    fireRate: 895,
                    dps: 372,
                    description: "3-round burst mode"
                },
                description: "Classic SMG with burst fire capability",
                specialFeatures: ["Burst Fire Mode", "High Fire Rate", "Large Magazine"]
            },
            {
                name: "Tommy Gun",
                perk: "swat",
                tier: 2,
                cost: 650,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 30,
                    fireRate: 720,
                    dps: 360,
                    magazine: 50,
                    penetration: 0
                },
                description: "Classic Thompson submachine gun with high capacity",
                specialFeatures: ["50-Round Magazine", "Classic Design", "Good Balance"]
            },
            {
                name: "P90 SMG",
                perk: "swat",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 30,
                    fireRate: 857,
                    dps: 429,
                    magazine: 50,
                    penetration: 0
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 30,
                    fireRate: 600,
                    dps: 300,
                    description: "Semi-automatic mode"
                },
                description: "High-capacity SMG with dual fire modes",
                specialFeatures: ["50-Round Magazine", "Dual Fire Modes", "Compact Design"]
            },
            {
                name: "Heckler & Koch UMP",
                perk: "swat",
                tier: 3,
                cost: 1200,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 45,
                    fireRate: 600,
                    dps: 450,
                    magazine: 30,
                    penetration: 0
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 45,
                    fireRate: 600,
                    dps: 450,
                    description: "3-round burst mode"
                },
                description: "High-damage SMG with moderate fire rate",
                specialFeatures: ["High Damage per Shot", "Burst Fire Mode", "Controllable"]
            },
            {
                name: "HRG Stunner",
                perk: "swat",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 80,
                    fireRate: 400,
                    dps: 533,
                    magazine: 25,
                    penetration: 2
                },
                altFire: {
                    damageType: "explosive",
                    damage: 40,
                    fireRate: 120,
                    dps: 80,
                    description: "EMP grenade launcher",
                    additionalDamage: {
                        ballistic: 20,
                        description: "Impact + explosive damage"
                    }
                },
                description: "SMG with underbarrel EMP grenade launcher",
                specialFeatures: ["EMP Grenades", "Dual Mode", "Impact + Explosive", "Stun Capability"]
            },
            {
                name: "Riot Shield & Glock 18",
                perk: "swat",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 28,
                    fireRate: 1100,
                    dps: 513,
                    magazine: 33,
                    penetration: 0
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 28,
                    fireRate: 342,
                    dps: 160,
                    description: "Semi-automatic mode"
                },
                description: "Riot shield with integrated machine pistol",
                specialFeatures: ["Riot Shield", "70% Damage Block", "Can Block", "Shield Bash", "Impulse Attack"]
            },
            {
                name: "Kriss SMG",
                perk: "swat",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 33,
                    fireRate: 1200,
                    dps: 660,
                    magazine: 33,
                    penetration: 0
                },
                description: "Ultra-high fire rate SMG for crowd control",
                specialFeatures: ["Extreme Fire Rate", "High DPS", "Crowd Control"]
            },
            {
                name: "G36C Assault Rifle",
                perk: "swat",
                tier: 4,
                cost: 1600,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 45,
                    fireRate: 750,
                    dps: 563,
                    magazine: 30,
                    penetration: 4
                },
                description: "Assault rifle with armor-piercing capability",
                specialFeatures: ["Armor Piercing", "80% Health Damage", "Assault Rifle", "High Penetration"]
            },
            {
                name: "HRG Bastion",
                perk: "swat",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 33,
                    fireRate: 909,
                    dps: 500,
                    magazine: 60,
                    penetration: 0
                },
                description: "Heavy SMG with deployable shield system",
                specialFeatures: ["Deployable Shield", "70% Damage Block", "Energy System", "Large Magazine"]
            },
            {
                name: "Flashbang Grenade",
                perk: "swat",
                tier: 0,
                cost: 40,
                primaryFire: {
                    damageType: "explosive",
                    damage: 125,
                    fireRate: 60,
                    dps: 125,
                    magazine: 1
                },
                description: "Stun grenade with explosive and blinding effects",
                specialFeatures: ["Stun Effect", "Area Control", "Throwable", "Perk Grenade"]
            }
        ],


        survivalist: [
            {
                name: "Reducto Ray",
                perk: "survivalist",
                tier: 3,
                cost: 900,
                primaryFire: {
                    damageType: "emp",
                    damage: 3,
                    fireRate: 750,
                    dps: 38,
                    magazine: 100,
                    penetration: 0
                },
                description: "Shrinking beam weapon that kills ZEDs by size reduction",
                specialFeatures: ["Shrink Effect", "Size-Based Kill", "100 Shrink Power", "Variable ZED Modifier", "No Boss Kill"]
            },
            {
                name: "Freezethrower",
                perk: "survivalist",
                tier: 3,
                cost: 1100,
                primaryFire: {
                    damageType: "freeze",
                    damage: 10,
                    fireRate: 600,
                    dps: 100,
                    magazine: 100,
                    penetration: 0
                },
                altFire: {
                    damageType: "ballistic",
                    damage: 35,
                    fireRate: 100,
                    dps: 467,
                    description: "Shotgun blast mode",
                    pellets: 8
                },
                description: "Cryogenic weapon with ice beam and shotgun modes",
                specialFeatures: ["Freeze Effect", "Ground Ice", "Shotgun Mode", "8 Pellets", "Area Control"]
            },
            {
                name: "HRG Locust",
                perk: "survivalist",
                tier: 4,
                cost: 1400,
                primaryFire: {
                    damageType: "bleeding",
                    damage: 25,
                    fireRate: 171,
                    dps: 71,
                    magazine: 6,
                    penetration: 0,
                    dotDamage: 25,
                    dotDuration: 3,
                    additionalDamage: {
                        explosive: 45,
                        description: "Lingering explosion cloud (3s duration)"
                    }
                },
                description: "Rocket launcher creating infectious bleeding clouds",
                specialFeatures: ["Bleeding DOT", "Lingering Cloud", "Infection Spread", "Lock-On Mode", "6 Targets Max"]
            },
            {
                name: "HRG Arc Generator",
                perk: "survivalist",
                tier: 4,
                cost: 1500,
                primaryFire: {
                    damageType: "emp",
                    damage: 21,
                    fireRate: 600,
                    dps: 210,
                    magazine: 90,
                    penetration: 0,
                    additionalDamage: {
                        emp: 7,
                        description: "Chain damage to 4 nearby ZEDs"
                    }
                },
                altFire: {
                    damageType: "emp",
                    damage: 220,
                    fireRate: 60,
                    dps: 220,
                    description: "Sphere projectile with zap capability",
                    additionalDamage: {
                        emp: 25,
                        description: "Zap damage to 3 ZEDs per zap"
                    }
                },
                description: "EMP weapon with beam and sphere modes",
                specialFeatures: ["Chain Damage", "Sphere Projectile", "4.75m Chain Range", "Zap Capability"]
            },
            {
                name: "Killerwatt",
                perk: "survivalist",
                tier: 4,
                cost: 2000,
                primaryFire: {
                    damageType: "ballistic",
                    damage: 55,
                    fireRate: 700,
                    dps: 642,
                    magazine: 50,
                    penetration: 0
                },
                altFire: {
                    damageType: "microwave",
                    damage: 40,
                    fireRate: 857,
                    dps: 571,
                    description: "Charged beam mode",
                    chargeTime: 0.7,
                    additionalDamage: {
                        microwave: 15,
                        description: "Scaling beam damage (3 charge levels)"
                    }
                },
                description: "Hybrid rifle with charged microwave beam capability",
                specialFeatures: ["Charge Mechanic", "3 Charge Levels", "Variable Beam Length", "No Ammo When Charged"]
            }
        ],
    },

    // Utility functions
    getWeaponsForPerk: function(perkName) {
        let weapons = [];
        
        if (perkName === 'all') {
            // Only "All Perks" shows global weapons + everything else
            weapons = [...this.global];
            Object.values(this.perks).forEach(perkWeapons => {
                weapons = weapons.concat(perkWeapons);
            });
            weapons = weapons.concat(this.crossPerk);
        } else if (perkName === 'survivalist') {
            // Survivalist gets cross-perk weapons only
            weapons = [...this.crossPerk];
        } else if (this.perks[perkName]) {
            // Individual perks show ONLY their weapons + relevant cross-perk
            weapons = [...this.perks[perkName]];
            
            // Add cross-perk weapons that include this perk
            this.crossPerk.forEach(weapon => {
                if (weapon.perk.includes(perkName)) {
                    weapons.push(weapon);
                }
            });
        }
        
        return weapons;
    },

    getAllWeapons: function() {
        let allWeapons = [...this.global, ...this.crossPerk];
        Object.values(this.perks).forEach(perkWeapons => {
            allWeapons = allWeapons.concat(perkWeapons);
        });
        return allWeapons;
    }
};
