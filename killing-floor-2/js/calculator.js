// Weapon Effectiveness Calculator
class _WeaponEffectivenessCalculator {
    static calculateEffectiveness(weapon, enemy) {
        let totalEffectiveness = 0;
        let damageCount = 0;

        // Calculate primary fire effectiveness
        if (weapon.primaryFire) {
            const primaryResistance = enemy.resistances[weapon.primaryFire.damageType] || 1.0;
            totalEffectiveness += primaryResistance * weapon.primaryFire.dps;
            damageCount++;

            // Add additional damage if present (like RPG ballistic impact)
            if (weapon.primaryFire.additionalDamage) {
                for (const [damageType, damage] of Object.entries(weapon.primaryFire.additionalDamage)) {
                    if (damageType !== 'description' && typeof damage === 'number') {
                        const resistance = enemy.resistances[damageType] || 1.0;
                        // Convert damage to approximate DPS (assuming same fire rate)
                        const additionalDPS = damage * (weapon.primaryFire.fireRate / 60);
                        totalEffectiveness += resistance * additionalDPS;
                        damageCount++;
                    }
                }
            }
        }

        // Calculate alt fire effectiveness if present
        if (weapon.altFire && weapon.altFire.damageType && weapon.altFire.damageType !== 'healing') {
            const altResistance = enemy.resistances[weapon.altFire.damageType] || 1.0;
            totalEffectiveness += altResistance * weapon.altFire.dps;
            damageCount++;
        }

        return damageCount > 0 ? totalEffectiveness / damageCount : 0;
    }

    static getBestTargets(weapon, enemyList, maxResults = 5) {
        const effectiveness = enemyList.map(enemy => ({
            enemy: enemy,
            effectiveness: this.calculateEffectiveness(weapon, enemy),
            multiplier: this.getEffectivenessMultiplier(weapon, enemy)
        }));

        // Sort by effectiveness (highest first)
        effectiveness.sort((a, b) => b.effectiveness - a.effectiveness);

        return effectiveness.slice(0, maxResults);
    }

    static getEffectivenessMultiplier(weapon, enemy) {
        // Check primary damage type resistance
        const primaryResistance = enemy.resistances[weapon.primaryFire.damageType] || 1.0;
        
        // Also check for special cases like RPG vs Scrake
        if (weapon.primaryFire.additionalDamage) {
            for (const [damageType, damage] of Object.entries(weapon.primaryFire.additionalDamage)) {
                if (damageType !== 'description' && typeof damage === 'number') {
                    const resistance = enemy.resistances[damageType] || 1.0;
                    if (resistance > 1.0) return 'highly_effective';
                }
            }
        }
        
        if (primaryResistance > 1.0) return 'highly_effective';
        if (primaryResistance < 1.0) return 'resistant';
        return 'normal';
    }

    static categorizeEnemies(effectivenessList) {
        const categories = {
            lesser: [],
            medium: [],
            large: [],
            bosses: []
        };

        effectivenessList.forEach(item => {
            const category = item.enemy.type === 'boss' ? 'bosses' : item.enemy.type;
            if (categories[category]) {
                categories[category].push(item);
            }
        });

        return categories;
    }

    static getDamageTypeEffectiveness(damageType, enemy) {
        const resistance = enemy.resistances[damageType] || 1.0;
        
        if (resistance > 1.0) return 'highly_effective';
        if (resistance < 1.0) return 'resistant';
        return 'normal';
    }

    static getEffectivenessIcon(effectiveness, colorblindMode = false) {
        if (colorblindMode) {
            switch (effectiveness) {
                case 'highly_effective': return '⬆️';
                case 'resistant': return '⬇️';
                default: return '➡️';
            }
        } else {
            switch (effectiveness) {
                case 'highly_effective': return '🟢';
                case 'resistant': return '🔴';
                default: return '🟡';
            }
        }
    }

    static getEffectivenessText(effectiveness) {
        switch (effectiveness) {
            case 'highly_effective': return 'HIGHLY EFFECTIVE';
            case 'resistant': return 'RESISTANT';
            default: return 'NORMAL';
        }
    }
}