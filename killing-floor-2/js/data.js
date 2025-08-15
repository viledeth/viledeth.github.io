// Core Data Architecture for KF2 Mechanics SPA
const _kf2Data = {
    enemies: [
        {
            name: "Cyst",
            type: "lesser",
            health: { head: 15, body: 55 },
            resistances: { ballistic: 1.0, explosive: 1.0, fire: 1.0 },
            weaknesses: ["Head shots", "Any damage type"],
            tactics: "Weakest ZED. Focus on headshots for quick elimination. Dangerous in large groups.",
            shrinkModifier: 2.0
        },
        {
            name: "Alpha Clot",
            type: "lesser", 
            health: { head: 25, body: 100 },
            resistances: { ballistic: 1.0, explosive: 1.0, fire: 1.0 },
            weaknesses: ["Head shots", "High damage weapons"],
            tactics: "Can grab players. Break free quickly or have teammates assist.",
            shrinkModifier: 2.0
        },
        {
            name: "Slasher",
            type: "lesser",
            health: { head: 20, body: 65 },
            resistances: { ballistic: 1.0, explosive: 1.0, fire: 1.0 },
            weaknesses: ["Head shots", "Medium range engagement"],
            tactics: "Fast melee attacker. Keep distance and aim for head.",
            shrinkModifier: 2.0
        },
        {
            name: "Stalker", 
            type: "lesser",
            health: { head: 20, body: 80 },
            resistances: { ballistic: 1.0, explosive: 1.0, fire: 1.0 },
            weaknesses: ["Detection", "Area damage when invisible"],
            tactics: "Becomes invisible. Listen for breathing sounds. Commando can see them clearly.",
            shrinkModifier: 2.0,
            special: "Invisibility when not attacking"
        },
        {
            name: "Crawler",
            type: "lesser",
            health: { head: 65, body: 130 },
            resistances: { ballistic: 1.0, explosive: 1.0, fire: 0.5 },
            weaknesses: ["Fire damage", "Explosives"],
            tactics: "Weak to fire. Elite variants explode into gas when killed by body shots.",
            shrinkModifier: 2.0,
            special: "Elite version creates toxic gas on death"
        },
        {
            name: "Gorefast",
            type: "lesser",
            health: { head: 80, body: 210 },
            resistances: { ballistic: 1.0, explosive: 1.0, fire: 1.0 },
            weaknesses: ["Head shots", "High caliber rounds"],
            tactics: "Blade arm can be severed. Becomes less dangerous without weapon.",
            shrinkModifier: 0.6
        },
        {
            name: "Gorefiend",
            type: "medium",
            health: { head: 120, body: 390 },
            resistances: { ballistic: 0.75, explosive: 1.0, fire: 1.0 },
            weaknesses: ["Explosives", "High damage single shots"],
            tactics: "Dual blades, high damage. Can parry shots. Use explosives or overwhelming firepower.",
            shrinkModifier: 0.4,
            special: "Can block/parry incoming shots"
        },
        {
            name: "Bloat",
            type: "medium",
            health: { head: 100, body: 500 },
            resistances: { ballistic: 0.5, explosive: 0.75, fire: 1.0, toxic: 0.1 },
            weaknesses: ["Fire damage", "Head shots from range"],
            tactics: "Highly resistant to ballistic. Spits toxic bile. Keep distance, use fire weapons.",
            shrinkModifier: 0.25,
            special: "Toxic bile projectiles and death explosion"
        },
        {
            name: "Siren",
            type: "medium", 
            health: { head: 100, body: 300 },
            resistances: { ballistic: 1.0, explosive: 0.5, fire: 1.0 },
            weaknesses: ["Ballistic damage", "Silent takedowns"],
            tactics: "Screams destroy explosives and projectiles. Use hitscan weapons, avoid explosives.",
            shrinkModifier: 0.7,
            special: "Sonic scream destroys explosives in flight"
        },
        {
            name: "Husk",
            type: "medium",
            health: { head: 100, body: 300 },
            resistances: { ballistic: 1.0, explosive: 1.0, fire: 0.1 },
            weaknesses: ["Ballistic to backpack", "Precision shots"],
            tactics: "Shoot the fuel tank on back for massive damage. Immune to fire. Can suicide bomb when low health.",
            shrinkModifier: 0.7,
            special: "Fuel tank weak point, fire immunity, suicide explosion"
        },
        {
            name: "E.D.A.R (Trapper)",
            type: "medium",
            health: { head: 150, body: 450 },
            resistances: { ballistic: 1.0, explosive: 1.0, fire: 1.0, emp: 2.0 },
            weaknesses: ["EMP damage", "Chest core targeting"],
            tactics: "Robotic unit. Vulnerable to EMP. Target the chest core for critical damage.",
            shrinkModifier: 0.7,
            special: "Deploys nets to trap players"
        },
        {
            name: "Quarter Pound",
            type: "large",
            health: { head: 600, body: 1200 },
            resistances: { ballistic: 1.0, explosive: 0.75, fire: 1.0 },
            weaknesses: ["High damage weapons", "Coordinated team fire"],
            tactics: "Mini Fleshpound. Less health but still dangerous. Can rage. Focus fire to down quickly.",
            shrinkModifier: 0.2,
            special: "Rage mode increases speed and damage"
        },
        {
            name: "Scrake",
            type: "large", 
            health: { head: 1600, body: 4800 },
            resistances: { ballistic: 1.0, explosive: 0.25, fire: 1.0, ballistic_shell: 4.0 },
            weaknesses: ["RPG ballistic impact", "High DPS weapons", "Head shots"],
            tactics: "Resistant to explosives but vulnerable to RPG ballistic impact. Don't enrage - use high DPS for quick kills.",
            shrinkModifier: 0.1,
            special: "Chainsaw rage mode triggered by body damage"
        },
        {
            name: "Fleshpound",
            type: "large",
            health: { head: 1500, body: 6000 },
            resistances: { ballistic: 1.0, explosive: 1.0, fire: 1.0 },
            weaknesses: ["EMP grenades", "Coordinated high DPS"],
            tactics: "Extremely dangerous when raged. Use EMP to calm down. Requires team coordination.",
            shrinkModifier: 0.1,
            special: "Pounds fists to build rage, EMP can reset rage"
        }
    ],
    
    bosses: [
        {
            name: "Hans Volter",
            difficulty: 3,
            health: { total: 8500 },
            phases: [
                {
                    name: "Green Phase", 
                    description: "Initial spawn, uses assault rifles and grenades",
                    tactics: "Maintain distance, avoid grenade spam, focus fire"
                },
                {
                    name: "Shield Phase",
                    description: "Activates protective shield, attempts healing drains",
                    tactics: "Break shield with concentrated fire, avoid being grabbed"
                },
                {
                    name: "Final Phase",
                    description: "Increased aggression, more frequent abilities",
                    tactics: "Stay mobile, watch for poison gas, finish quickly"
                }
            ],
            weaknesses: [
                { damage: "Explosive", rank: 1, description: "Highly vulnerable to RPGs and grenades" },
                { damage: "Fire", rank: 2, description: "Takes increased fire damage" },
                { damage: "Ballistic", rank: 3, description: "Standard ballistic effectiveness" }
            ],
            resistances: { 
                ballistic: 1.0, 
                explosive: 1.5, 
                fire: 1.25,
                nerveGas: 0.1
            },
            tactics: "Keep distance from grab range. Break shield immediately. Use Firebug and Demo classes.",
            specialMechanics: "Calls out attacks, health drain grab, nerve gas immunity"
        },
        {
            name: "Patriarch",
            difficulty: 4,
            health: { total: 9000 },
            phases: [
                {
                    name: "Ranged Phase",
                    description: "Uses rocket launcher and minigun",
                    tactics: "Use cover, dodge rockets, sustained fire"
                },
                {
                    name: "Invisible Phase", 
                    description: "Becomes invisible, summons minions",
                    tactics: "Clear minions first, watch for shimmer effect"
                },
                {
                    name: "Berserker Phase",
                    description: "Melee focused, high damage attacks",
                    tactics: "Kite around obstacles, team coordination essential"
                }
            ],
            weaknesses: [
                { damage: "Ballistic (Chest/Right Arm)", rank: 1, description: "2x damage to chest and right arm" },
                { damage: "Explosive", rank: 2, description: "Good damage, watch splash" },
                { damage: "Fire", rank: 3, description: "Standard fire effectiveness" }
            ],
            resistances: { 
                ballistic: 1.0, 
                explosive: 1.0, 
                fire: 1.0,
                leftArm: 0.5,
                leftLeg: 0.2
            },
            tactics: "Target weak spots (chest, right arm). Avoid damaged left side. Prepare for invisibility phases.",
            specialMechanics: "Invisibility, minion spawning, healing syringes, weak spot targeting"
        },
        {
            name: "King Fleshpound",
            difficulty: 4,
            health: { total: 12000 },
            phases: [
                {
                    name: "Initial Phase",
                    description: "Standard attacks, spawns regular Fleshpounds",
                    tactics: "Deal with minions first, focus fire on King"
                },
                {
                    name: "Shield Phase",
                    description: "Activates energy shield",
                    tactics: "Destroy shield with sustained fire"
                },
                {
                    name: "Rage Phase",
                    description: "Permanent rage state, increased speed",
                    tactics: "Maintain distance, use EMP if available"
                }
            ],
            weaknesses: [
                { damage: "EMP", rank: 1, description: "Calms rage, disables temporarily" },
                { damage: "High DPS Ballistic", rank: 2, description: "Sustained automatic fire" },
                { damage: "Explosive", rank: 3, description: "Good damage but watch range" }
            ],
            resistances: { 
                ballistic: 1.0, 
                explosive: 1.0, 
                fire: 1.0
            },
            tactics: "Use EMP grenades to control rage. Focus fire to break shield. Clear minion Fleshpounds immediately.",
            specialMechanics: "Spawns Fleshpound minions, energy shield, EMP vulnerability, rage control"
        },
        {
            name: "Abomination",
            difficulty: 2,
            health: { total: 7000 },
            phases: [
                {
                    name: "Ranged Phase",
                    description: "Spits toxic bile, spawns minions",
                    tactics: "Stay at range, clear minions, avoid bile"
                },
                {
                    name: "Armor Phase",
                    description: "Heavily armored, resistant to non-fragmentation",
                    tactics: "Use fragmentation grenades only for armor damage"
                },
                {
                    name: "Rage Phase",
                    description: "Charges players, melee focus",
                    tactics: "Kite around environment, maintain distance"
                }
            ],
            weaknesses: [
                { damage: "Fragmentation", rank: 1, description: "Only damage type effective against armor" },
                { damage: "Any (Post-armor)", rank: 2, description: "Standard damage once armor is destroyed" },
                { damage: "Range", rank: 3, description: "Distance negates most abilities" }
            ],
            resistances: { 
                allNonFrag: 0.0,
                ballistic: 1.0,
                explosive: 1.0,
                toxic: 0.1
            },
            tactics: "Use only fragmentation grenades against armor. Keep maximum distance. Clear explosive minions immediately.",
            specialMechanics: "Armor immunity (except frag), toxic bile, explosive minions, toxic mine deployment"
        },
        {
            name: "Matriarch",
            difficulty: 5,
            health: { total: 15000 },
            phases: [
                {
                    name: "Mech Phase",
                    description: "Full mech suit, all weapons available",
                    tactics: "Focus on weak points, avoid tesla blasts"
                },
                {
                    name: "Damaged Phase",
                    description: "Mech partially destroyed, spawns E.D.A.R support",
                    tactics: "Clear E.D.A.R units immediately, continue pressure"
                },
                {
                    name: "Berserker Phase",
                    description: "Exits mech, melee focused, high mobility",
                    tactics: "Extreme kiting required, team coordination essential"
                }
            ],
            weaknesses: [
                { damage: "EMP", rank: 1, description: "Disables mech systems temporarily" },
                { damage: "High DPS Ballistic", rank: 2, description: "Sustained automatic weapons" },
                { damage: "Explosive (Range)", rank: 3, description: "Good damage but dangerous close range" }
            ],
            resistances: { 
                ballistic: 1.0, 
                explosive: 1.0, 
                fire: 1.0,
                electric: 0.5
            },
            tactics: "Most dangerous boss. Use EMP extensively. Clear E.D.A.R support immediately. Maintain maximum distance.",
            specialMechanics: "Mech suit, tesla weapons, E.D.A.R spawning, lightning storm, phase transitions"
        }
    ],

    damageTypes: [
        {
            name: "Ballistic",
            category: "Physical",
            description: "Standard bullet and projectile damage",
            subtypes: ["Handgun", "Rifle", "Shotgun", "SMG"],
            effectiveness: "Universal damage type, reliable against most enemies",
            weapons: ["9mm Pistol", "AK-12", "AA-12", "MP7"],
            modifiers: "Affected by perk bonuses and ZED resistances"
        },
        {
            name: "Explosive", 
            category: "Physical",
            description: "Area damage from explosions",
            subtypes: ["Grenade", "Rocket", "C4"],
            effectiveness: "High damage, area effect, some ZED resistances",
            weapons: ["RPG-7", "M79", "C4", "Dynamite"],
            modifiers: "Affects body health only, ignores head multipliers"
        },
        {
            name: "Fire",
            category: "Elemental", 
            description: "Heat damage with DOT effects",
            subtypes: ["Flame", "Incendiary"],
            effectiveness: "Good vs Crawlers, poor vs Husks",
            weapons: ["Flamethrower", "Microwave Gun", "Incendiary Shotgun"],
            modifiers: "DOT continues after initial hit, reduced when healing"
        },
        {
            name: "Toxic",
            category: "Elemental",
            description: "Poison damage with lingering effects", 
            subtypes: ["Poison", "Acid"],
            effectiveness: "DOT damage, panic effect on ZEDs",
            weapons: ["Hemogoblin", "Bloat bile"],
            modifiers: "Causes ZED panic behavior, stacks with other DOTs"
        },
        {
            name: "Piercing",
            category: "Physical",
            description: "Sharp projectiles and melee weapons",
            subtypes: ["Arrow", "Spike", "Stab"],
            effectiveness: "Good precision damage, some armor penetration",
            weapons: ["Crossbow", "Knife stab attacks"],
            modifiers: "Can penetrate through multiple enemies"
        },
        {
            name: "Slashing",
            category: "Physical", 
            description: "Cutting damage from bladed weapons",
            subtypes: ["Blade", "Slash"],
            effectiveness: "Standard melee damage type",
            weapons: ["Katana", "Knife", "Machete"],
            modifiers: "Affected by berserker bonuses"
        },
        {
            name: "Bludgeon",
            category: "Physical",
            description: "Blunt force trauma damage",
            subtypes: ["Blunt", "Impact"],
            effectiveness: "High stumble power, good vs armor",
            weapons: ["Pulverizer", "Bone Crusher"],
            modifiers: "High knockdown and stumble values"
        },
        {
            name: "Microwave",
            category: "Elemental",
            description: "Electromagnetic radiation damage",
            subtypes: ["Microwave"],
            effectiveness: "Unique damage type, causes bloating effect",
            weapons: ["Microwave Gun"],
            modifiers: "Causes ZEDs to bloat and explode"
        }
    ],

    mechanics: [
        {
            title: "Damage Over Time (DOT)",
            description: "Continuous damage effects applied after initial hit",
            details: "DOT calculation uses default weapon damage, not actual damage taken by ZED due to resistances. Fire DOT is reduced by 50% when player is being healed.",
            formula: "DOT = Base_Weapon_Damage × DOT_Percentage",
            examples: ["Fire: 80% of weapon damage per tick", "Toxic: Variable based on weapon", "Microwave: Causes bloating effect"]
        },
        {
            title: "Incapacitation System",
            description: "Various status effects that disable or impair ZEDs",
            details: "All afflictions use hidden meters that build up with weapon incap power. When threshold reached, ZED becomes afflicted.",
            types: ["Stun", "Knockdown", "Stumble", "Freeze", "Snare", "EMP"],
            interactions: "Only one of Stun/Knockdown/Stumble/Freeze can be active at once"
        },
        {
            title: "Head vs Body Health",
            description: "ZEDs have separate health pools for head and body",
            details: "Explosive damage only affects body health. Head health reduction to 0 causes decapitation but ZED can still live temporarily.",
            mechanics: "Ballistic impact affects both head and body simultaneously based on hit location"
        },
        {
            title: "ZED Resistances",
            description: "Damage multipliers applied based on ZED type and damage source",
            details: "Each ZED has specific resistance values for different damage types. Some body parts have different resistance values.",
            examples: ["Bloat: 50% ballistic resistance", "Scrake: 25% explosive resistance", "Husk: 10% fire resistance"]
        },
        {
            title: "Shrink Mechanics", 
            description: "Size reduction system affecting ZED damage taken",
            details: "For every 100 shrink power, ZED's size reduces. At maximum shrink (10 effect), ZED takes 2x damage from all sources.",
            formula: "Shrink_Effect = (Shrink_Power / 100) × ZED_Shrink_Modifier",
            modifiers: "Clots: 2.0x, Scrake/FP: 0.1x, Bosses: 0.15x (cannot be killed by shrinking)"
        },
        {
            title: "Door Mechanics",
            description: "Welding and door destruction systems",
            details: "Doors take increasing damage based on number of attackers (up to 2x with 10 ZEDs). Support can repair destroyed doors.",
            repair: "Each welder use restores 7 points, door restored at 255 total points"
        }
    ]
};
