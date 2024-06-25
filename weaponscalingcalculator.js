// weaponscalingcalculator.js
document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', function () {
        const strength = parseInt(document.getElementById('strength').value) || 0;
        const dexterity = parseInt(document.getElementById('dexterity').value) || 0;
        const intelligence = parseInt(document.getElementById('intelligence').value) || 0;
        const faith = parseInt(document.getElementById('faith').value) || 0;
        const arcane = parseInt(document.getElementById('arcane').value) || 0;
        const baseDamage = parseInt(document.getElementById('baseDamage').value) || 0;

        const useStrength = document.getElementById('useStrength').checked;
        const useDexterity = document.getElementById('useDexterity').checked;
        const useIntelligence = document.getElementById('useIntelligence').checked;
        const useFaith = document.getElementById('useFaith').checked;
        const useArcane = document.getElementById('useArcane').checked;

        const scalingGrades = {
            'E': 0.15,
            'D': 0.30,
            'C': 0.45,
            'B': 0.60,
            'A': 0.85,
            'S': 1.00,
            '': 0.0  // default for no input
        };

        const strengthScaling = scalingGrades[document.getElementById('strengthScaling').value.toUpperCase()] || 0;
        const dexterityScaling = scalingGrades[document.getElementById('dexterityScaling').value.toUpperCase()] || 0;
        const intelligenceScaling = scalingGrades[document.getElementById('intelligenceScaling').value.toUpperCase()] || 0;
        const faithScaling = scalingGrades[document.getElementById('faithScaling').value.toUpperCase()] || 0;
        const arcaneScaling = scalingGrades[document.getElementById('arcaneScaling').value.toUpperCase()] || 0;

        const scalingFactors = {
            'strength': calculateScalingFactor(strength, 'strength'),
            'dexterity': calculateScalingFactor(dexterity, 'dexterity'),
            'intelligence': calculateScalingFactor(intelligence, 'intelligence'),
            'faith': calculateScalingFactor(faith, 'faith'),
            'arcane': calculateScalingFactor(arcane, 'arcane')
        };

        let scalingBonus = 0;

        if (useStrength) scalingBonus += baseDamage * strengthScaling * scalingFactors.strength;
        if (useDexterity) scalingBonus += baseDamage * dexterityScaling * scalingFactors.dexterity;
        if (useIntelligence) scalingBonus += baseDamage * intelligenceScaling * scalingFactors.intelligence;
        if (useFaith) scalingBonus += baseDamage * faithScaling * scalingFactors.faith;
        if (useArcane) scalingBonus += baseDamage * arcaneScaling * scalingFactors.arcane;

        const totalDamage = baseDamage + scalingBonus;

        document.getElementById('damageOutput').innerText = totalDamage.toFixed(2)+" ~ "+totalDamage.toFixed(0);
    });

    function calculateScalingFactor(attributeValue, attributeType) {
        const softCaps = {
            strength: [20, 55, 80],
            dexterity: [20, 55, 80],
            intelligence: [20, 50, 80],
            faith: [20, 50, 80],
            arcane: [20, 50, 80]
        };

        const growthValues = {
            strength: [0.5, 0.7, 0.8, 0.85],
            dexterity: [0.5, 0.7, 0.8, 0.85],
            intelligence: [0.5, 0.7, 0.8, 0.85],
            faith: [0.5, 0.7, 0.8, 0.85],
            arcane: [0.5, 0.7, 0.8, 0.85]
        };

        const caps = softCaps[attributeType];
        const growth = growthValues[attributeType];

        let scalingFactor = 0;

        if (attributeValue <= caps[0]) {
            scalingFactor = (attributeValue / caps[0]) * growth[0];
        } else if (attributeValue <= caps[1]) {
            scalingFactor = growth[0] + ((attributeValue - caps[0]) / (caps[1] - caps[0])) * (growth[1] - growth[0]);
        } else if (attributeValue <= caps[2]) {
            scalingFactor = growth[1] + ((attributeValue - caps[1]) / (caps[2] - caps[1])) * (growth[2] - growth[1]);
        } else {
            scalingFactor = growth[2] + ((attributeValue - caps[2]) / (99 - caps[2])) * (growth[3] - growth[2]);
        }

        return scalingFactor;
    }
});
