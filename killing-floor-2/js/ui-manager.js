// UI Management System
class _UIManager {
    constructor() {
        this._currentTab = 'enemies';
        this._filteredData = {};
        this._colorblindMode = this._loadColorblindPreference();
        this._initializeUI();
        this._bindEvents();
        this._renderInitialContent();
        this._applyInitialColorblindState();
    }

    _loadColorblindPreference() {
        // Note: localStorage not available in Claude.ai artifacts
        // Uncomment line below when deploying to your own environment:
        return localStorage.getItem('kf2_colorblind_mode') === 'true';
        return false; // Default for artifact environment
    }

    _saveColorblindPreference(enabled) {
        // Note: localStorage not available in Claude.ai artifacts  
        // Uncomment line below when deploying to your own environment:
        localStorage.setItem('kf2_colorblind_mode', enabled.toString());
        console.log(`Colorblind mode preference would be saved: ${enabled}`);
    }

    _applyInitialColorblindState() {
        if (this._colorblindMode) {
            $('body').addClass('colorblind-mode');
            $('#colorblind-toggle').text('🎨 Standard Mode');
            $('#standard-legend').hide();
            $('#colorblind-legend').show();
        }
    }

    _initializeUI() {
        // Tab navigation setup
        $('.tab-btn').on('click', (e) => {
            const targetTab = $(e.target).data('tab');
            this._switchTab(targetTab);
        });

        // Colorblind accessibility toggle
        $('#colorblind-toggle').on('click', () => {
            this._toggleColorblindMode();
        });

        // Search functionality
        this._setupSearchHandlers();
        
        // Filter functionality
        this._setupFilterHandlers();
    }

    _bindEvents() {
        // Dynamic content loading based on tab selection
        // $(document).on('click', '.card', (e) => {
        //     this._handleCardInteraction(e);
        // });
    }

    _setupSearchHandlers() {
        $('#enemy-search').on('input', (e) => {
            this._filterEnemies(e.target.value);
        });

        $('#boss-search').on('input', (e) => {
            this._filterBosses(e.target.value);
        });

        $('#damage-search').on('input', (e) => {
            this._filterDamageTypes(e.target.value);
        });

        $('#weapon-search').on('input', (e) => {
            this._filterWeapons(e.target.value);
        });
    }

    _setupFilterHandlers() {
        $('.filter-btn').on('click', (e) => {
            const $button = $(e.target);
            const filterContainer = $button.closest('.filters');
            
            // Remove active from siblings in the same container
            filterContainer.find('.filter-btn').removeClass('active');
            $button.addClass('active');
            
            const filterType = $button.data('filter');
            
            // Determine which type of filter this is based on current tab
            if (this._currentTab === 'enemies') {
                this._applyEnemyFilter(filterType);
            } else if (this._currentTab === 'weapons') {
                this._applyWeaponFilter(filterType);
            }
        });
    }

    _switchTab(tabName) {
        $('.tab-btn').removeClass('active');
        $(`.tab-btn[data-tab="${tabName}"]`).addClass('active');
        
        $('.tab-content').removeClass('active');
        $(`#${tabName}`).addClass('active');
        
        this._currentTab = tabName;
        this._renderTabContent(tabName);
    }

    _toggleColorblindMode() {
        this._colorblindMode = !this._colorblindMode;
        
        // Save preference for future visits
        this._saveColorblindPreference(this._colorblindMode);
        
        if (this._colorblindMode) {
            $('body').addClass('colorblind-mode');
            $('#colorblind-toggle').text('🎨 Standard Mode');
            $('#standard-legend').hide();
            $('#colorblind-legend').show();
        } else {
            $('body').removeClass('colorblind-mode');
            $('#colorblind-toggle').text('🎨 Colorblind Mode');
            $('#standard-legend').show();
            $('#colorblind-legend').hide();
        }
        
        // Re-render current tab content to update visual indicators
        this._renderTabContent(this._currentTab);
    }

    _renderInitialContent() {
        this._renderEnemies();
        this._renderBosses(); 
        this._renderWeapons();
        this._renderDamageTypes();
        this._renderMechanics();
        this._renderTactics();
    }

    _renderTabContent(tabName) {
        switch(tabName) {
            case 'enemies':
                this._renderEnemies();
                break;
            case 'bosses':
                this._renderBosses();
                break;
            case 'weapons':
                this._renderWeapons();
                break;
            case 'damage-types':
                this._renderDamageTypes();
                break;
            case 'mechanics':
                this._renderMechanics();
                break;
            case 'tactics':
                this._renderTactics();
                break;
        }
    }

    _renderEnemies() {
        const grid = $('#enemy-grid');
        grid.empty();

        _kf2Data.enemies.forEach(enemy => {
            const card = this._createEnemyCard(enemy);
            grid.append(card);
        });
    }

    _createEnemyCard(enemy) {
        const resistancesList = Object.entries(enemy.resistances)
            .map(([type, value]) => {
                const effectiveness = value > 1 ? 'effective' : value < 1 ? 'resistant' : 'neutral';
                const percentage = Math.round(value * 100);
                let statusText = '';
                let statusIcon = '';
                
                if (this._colorblindMode) {
                    // Colorblind-friendly indicators
                    if (value > 1) {
                        statusText = 'HIGHLY EFFECTIVE';
                        statusIcon = '⬆️';
                    } else if (value < 1) {
                        statusText = 'RESISTANT';
                        statusIcon = '⬇️';
                    } else {
                        statusText = 'NORMAL';
                        statusIcon = '➡️';
                    }
                } else {
                    // Standard color indicators
                    if (value > 1) {
                        statusText = 'HIGHLY EFFECTIVE';
                        statusIcon = '🟢';
                    } else if (value < 1) {
                        statusText = 'RESISTANT';
                        statusIcon = '🔴';
                    } else {
                        statusText = 'NORMAL';
                        statusIcon = '🟡';
                    }
                }
                
                return `
                    <div class="damage-item damage-${effectiveness}">
                        <span>${statusIcon} ${type.charAt(0).toUpperCase() + type.slice(1)}</span>
                        <span>${percentage}% - ${statusText}</span>
                    </div>
                `;
            }).join('');

        const weaknessesList = enemy.weaknesses.map(weakness => 
            `<li>• ${weakness}</li>`
        ).join('');

        return `
            <div class="card" data-type="${enemy.type}" data-name="${enemy.name.toLowerCase()}">
                <div class="card-header">
                    <h3 class="card-title">${enemy.name}</h3>
                    <span class="card-type">${enemy.type}</span>
                </div>
                <div class="card-content">
                    <p><strong>Health:</strong> Head: ${enemy.health.head} | Body: ${enemy.health.body}</p>
                    <p><strong>Shrink Modifier:</strong> ${enemy.shrinkModifier}x</p>
                    ${enemy.special ? `<p><strong>Special:</strong> ${enemy.special}</p>` : ''}
                    
                    <div class="damage-list">
                        <h4>Damage Effectiveness Against This Enemy:</h4>
                        ${resistancesList}
                    </div>
                    
                    <div>
                        <h4>Weaknesses:</h4>
                        <ul>${weaknessesList}</ul>
                    </div>
                    
                    <div>
                        <h4>Tactics:</h4>
                        <p>${enemy.tactics}</p>
                    </div>
                </div>
            </div>
        `;
    }

    _renderBosses() {
        const grid = $('#boss-grid');
        grid.empty();

        _kf2Data.bosses.forEach(boss => {
            const card = this._createBossCard(boss);
            grid.append(card);
        });
    }

    _createBossCard(boss) {
        const phasesList = boss.phases.map(phase => `
            <div class="phase">
                <div class="phase-title">${phase.name}</div>
                <p>${phase.description}</p>
                <p><strong>Tactics:</strong> ${phase.tactics}</p>
            </div>
        `).join('');

        const weaknessesList = boss.weaknesses.map(weakness => `
            <div class="damage-item damage-effective">
                <span>
                    <span class="weakness-rank">${weakness.rank}</span>
                    ${weakness.damage}
                </span>
                <span class="tooltip" data-tooltip="${weakness.description}">ⓘ</span>
            </div>
        `).join('');

        const difficultyStars = '★'.repeat(boss.difficulty) + '☆'.repeat(5 - boss.difficulty);

        return `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${boss.name}</h3>
                    <span class="card-type">Difficulty: ${difficultyStars}</span>
                </div>
                <div class="card-content">
                    <p><strong>Health:</strong> ${boss.health.total}</p>
                    <p><strong>Special Mechanics:</strong> ${boss.specialMechanics}</p>
                    
                    <div class="boss-phases">
                        <h4>Boss Phases:</h4>
                        ${phasesList}
                    </div>
                    
                    <div class="damage-list">
                        <h4>Best Damage Types (Ranked):</h4>
                        ${weaknessesList}
                    </div>
                    
                    <div>
                        <h4>Key Tactics:</h4>
                        <p>${boss.tactics}</p>
                    </div>
                </div>
            </div>
        `;
    }

    _renderWeapons() {
        const grid = $('#weapon-grid');
        grid.empty();
        const weaponsToRender = _kf2WeaponsData.getAllWeapons();
        weaponsToRender.forEach(weapon => {
            const card = this._createWeaponCard(weapon);
            grid.append(card);
        });
    }

    _createWeaponCard(weapon) {
        // Calculate best targets automatically (only for combat weapons)
        let bestTargets = [];
        let categorizedTargets = { lesser: [], medium: [], large: [], bosses: [] };

        // Only calculate effectiveness for weapons that can deal damage
        if (weapon.primaryFire && weapon.primaryFire.damageType !== 'none' && weapon.primaryFire.damageType !== 'healing') {
            bestTargets = _WeaponEffectivenessCalculator.getBestTargets(weapon, _kf2Data.enemies, 8);
            categorizedTargets = _WeaponEffectivenessCalculator.categorizeEnemies(bestTargets);
        }

        // Handle perk display for different weapon types
        let perkDisplay;
        let perkDataAttr;

        if (weapon.perk === 'global') {
            perkDisplay = 'ALL PERKS';
            perkDataAttr = 'global';
        } else if (Array.isArray(weapon.perk)) {
            perkDisplay = weapon.perk.map(p => p.toUpperCase()).join(' + ');
            perkDataAttr = weapon.perk.join(' ');
        } else {
            perkDisplay = weapon.perk.toUpperCase();
            perkDataAttr = weapon.perk;
        }

        // Create damage breakdown
        let damageBreakdown = '';

        if (weapon.primaryFire) {
            damageBreakdown = `
            <div style="margin: 10px 0;">
            <strong>Primary Fire:</strong> ${weapon.primaryFire.damage} ${weapon.primaryFire.damageType}
            ${weapon.primaryFire.dps ? `<br><strong>DPS:</strong> ${weapon.primaryFire.dps}` : ''}
            ${weapon.primaryFire.fireRate ? ` | <strong>Fire Rate:</strong> ${weapon.primaryFire.fireRate} RPM` : ''}
            ${weapon.primaryFire.pellets ? `<br><strong>Pellets:</strong> ${weapon.primaryFire.pellets}` : ''}
            ${weapon.primaryFire.penetration ? `<br><strong>Penetration:</strong> ${weapon.primaryFire.penetration}` : ''}
            ${weapon.primaryFire.chargeTime ? `<br><strong>Charge Time:</strong> ${weapon.primaryFire.chargeTime}s` : ''}
            ${weapon.primaryFire.magazine !== undefined ? `<br><strong>Magazine:</strong> ${weapon.primaryFire.magazine}` : ''}
            </div>
            `;

            // Add additional damage if present (like RPG impact)
            if (weapon.primaryFire.additionalDamage) {
                for (const [damageType, damage] of Object.entries(weapon.primaryFire.additionalDamage)) {
                    if (damageType !== 'description' && typeof damage === 'number') {
                        damageBreakdown += `<div style="margin: 5px 0; padding-left: 15px; opacity: 0.9;">+ ${damage} ${damageType} damage</div>`;
                    }
                }
                if (weapon.primaryFire.additionalDamage.description) {
                    damageBreakdown += `<div style="font-size: 0.9em; font-style: italic; margin: 5px 0;">${weapon.primaryFire.additionalDamage.description}</div>`;
                }
            }

            // Add DOT information if present
            if (weapon.primaryFire.dotDamage) {
                damageBreakdown += `<div style="margin: 5px 0; padding-left: 15px; opacity: 0.9;">DOT: ${weapon.primaryFire.dotDamage} damage/tick for ${weapon.primaryFire.dotDuration}s</div>`;
            }
        }

        // Add alt fire if present
        if (weapon.altFire) {
            damageBreakdown += `
            <div style="margin: 10px 0; padding-top: 10px; border-top: 1px solid rgba(255,107,53,0.3);">
            <strong>Alt Fire:</strong> ${weapon.altFire.damageType === 'healing' ? weapon.altFire.healAmount + ' healing' : weapon.altFire.damage + ' ' + weapon.altFire.damageType}
            ${weapon.altFire.dps ? `<br><strong>Alt DPS:</strong> ${weapon.altFire.dps}` : ''}
            ${weapon.altFire.fireRate ? ` | <strong>Fire Rate:</strong> ${weapon.altFire.fireRate} RPM` : ''}
            <br><em>${weapon.altFire.description}</em>
            </div>
            `;
        }

        // Create effectiveness display (only for weapons that can deal damage)
        let effectivenessDisplay = '';
        if (bestTargets.length > 0) {
            const createTargetList = (targets, title) => {
                if (targets.length === 0) return '';

                return `
                <div style="margin: 8px 0;">
                <strong>${title}:</strong>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                ${targets.map(target => {
                    const effectivenessClass = target.multiplier === 'highly_effective' ? 'damage-effective' :
                    target.multiplier === 'resistant' ? 'damage-resistant' : 'damage-neutral';
                    const icon = _WeaponEffectivenessCalculator.getEffectivenessIcon(target.multiplier, this._colorblindMode);

                    return `<span class="damage-item ${effectivenessClass}" style="padding: 3px 8px; margin: 0; font-size: 0.85em;">
                    ${icon} ${target.enemy.name}
                    </span>`;
                }).join('')}
                </div>
                </div>
                `;
            };

            effectivenessDisplay = `
            <div style="margin: 15px 0;">
            <h4 style="color: #ff6b35; margin-bottom: 10px;">🎯 Most Effective Against:</h4>
            ${createTargetList(categorizedTargets.lesser, 'Lesser ZEDs')}
            ${createTargetList(categorizedTargets.medium, 'Medium ZEDs')}
            ${createTargetList(categorizedTargets.large, 'Large ZEDs')}
            ${createTargetList(categorizedTargets.bosses, 'Bosses')}
            </div>
            `;
        }

        // Create special features list
        const featuresList = weapon.specialFeatures?.map(feature =>
        `<li>• ${feature}</li>`
        ).join('') || '';

        const tierColors = ['#888', '#4caf50', '#2196f3', '#9c27b0', '#ff9800'];
        const tierColor = tierColors[weapon.tier] || '#ff6b35';

        // Handle cost display for free weapons
        const costDisplay = weapon.cost === 0 ? 'FREE' : `£${weapon.cost}`;

        return `
        <div class="card" data-perk="${perkDataAttr}" data-name="${weapon.name.toLowerCase()}">
        <div class="card-header">
        <h3 class="card-title">${weapon.name}</h3>
        <div style="display: flex; gap: 10px; align-items: center;">
        <span class="card-type" style="background: rgba(255,107,53,0.2);">${perkDisplay}</span>
        <span style="background: ${tierColor}; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8em;">T${weapon.tier}</span>
        </div>
        </div>
        <div class="card-content">
        <p><strong>Cost:</strong> ${costDisplay} ${weapon.canDualWield ? '(Can Dual Wield)' : ''}</p>
        <p style="margin: 10px 0;">${weapon.description}</p>

        ${damageBreakdown}

        ${effectivenessDisplay}

        ${featuresList ? `
            <div>
            <h4>Special Features:</h4>
            <ul>${featuresList}</ul>
            </div>
            ` : ''}
            </div>
            </div>
            `;
    }

    _renderDamageTypes() {
        const grid = $('#damage-grid');
        grid.empty();

        _kf2Data.damageTypes.forEach(damageType => {
            const card = this._createDamageCard(damageType);
            grid.append(card);
        });
    }

    _createDamageCard(damageType) {
        const subtypesList = damageType.subtypes?.map(subtype => 
            `<span style="background: rgba(255,107,53,0.2); padding: 2px 8px; border-radius: 10px; margin: 2px; display: inline-block;">${subtype}</span>`
        ).join('') || '';

        const weaponsList = damageType.weapons?.map(weapon => 
            `<li>• ${weapon}</li>`
        ).join('') || '';

        return `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${damageType.name}</h3>
                    <span class="card-type">${damageType.category}</span>
                </div>
                <div class="card-content">
                    <p>${damageType.description}</p>
                    
                    ${subtypesList ? `
                        <div style="margin: 10px 0;">
                            <strong>Subtypes:</strong><br>
                            ${subtypesList}
                        </div>
                    ` : ''}
                    
                    <p><strong>Effectiveness:</strong> ${damageType.effectiveness}</p>
                    
                    ${weaponsList ? `
                        <div>
                            <h4>Example Weapons:</h4>
                            <ul>${weaponsList}</ul>
                        </div>
                    ` : ''}
                    
                    <div class="code-snippet">
                        <strong>Modifiers:</strong> ${damageType.modifiers}
                    </div>
                </div>
            </div>
        `;
    }

    _renderMechanics() {
        const grid = $('#mechanics-grid');
        grid.empty();

        _kf2Data.mechanics.forEach(mechanic => {
            const section = this._createMechanicSection(mechanic);
            grid.append(section);
        });
    }

    _createMechanicSection(mechanic) {
        let content = `
            <div class="mechanic-section">
                <h3 class="mechanic-title">${mechanic.title}</h3>
                <p class="mechanic-description">${mechanic.description}</p>
                <p><strong>Details:</strong> ${mechanic.details}</p>
        `;

        if (mechanic.formula) {
            content += `<div class="code-snippet">${mechanic.formula}</div>`;
        }

        if (mechanic.examples) {
            content += `
                <div>
                    <strong>Examples:</strong>
                    <ul>
                        ${mechanic.examples.map(example => `<li>• ${example}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (mechanic.types) {
            content += `
                <div>
                    <strong>Types:</strong>
                    <ul>
                        ${mechanic.types.map(type => `<li>• ${type}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (mechanic.interactions) {
            content += `<p><strong>Interactions:</strong> ${mechanic.interactions}</p>`;
        }

        if (mechanic.mechanics) {
            content += `<p><strong>Mechanics:</strong> ${mechanic.mechanics}</p>`;
        }

        if (mechanic.modifiers) {
            content += `<div class="code-snippet">${mechanic.modifiers}</div>`;
        }

        if (mechanic.repair) {
            content += `<p><strong>Repair:</strong> ${mechanic.repair}</p>`;
        }

        content += '</div>';
        return content;
    }

    _renderTactics() {
        const grid = $('#tactics-grid');
        grid.empty();

        const tacticalGuides = [
            {
                title: "Boss Priority Ranking",
                content: `
                    <div class="damage-list">
                        <div class="damage-item damage-resistant">
                            <span><span class="weakness-rank">1</span>Matriarch</span>
                            <span>Extreme Threat</span>
                        </div>
                        <div class="damage-item damage-neutral">
                            <span><span class="weakness-rank">2</span>Patriarch</span>
                            <span>High Threat</span>
                        </div>
                        <div class="damage-item damage-neutral">
                            <span><span class="weakness-rank">3</span>King Fleshpound</span>
                            <span>High Threat</span>
                        </div>
                        <div class="damage-item damage-effective">
                            <span><span class="weakness-rank">4</span>Hans Volter</span>
                            <span>Moderate Threat</span>
                        </div>
                        <div class="damage-item damage-effective">
                            <span><span class="weakness-rank">5</span>Abomination</span>
                            <span>Low Threat</span>
                        </div>
                    </div>
                `
            },
            {
                title: "Damage Type Effectiveness Chart",
                content: `
                    <div class="code-snippet">
                        <strong>Universal Effectiveness:</strong><br>
                        🟢 Ballistic → Most ZEDs (reliable choice)<br>
                        🟡 Explosive → Good AoE, some resistances<br>
                        🟢 Fire → Excellent vs Crawlers, poor vs Husks<br>
                        🟡 EMP → Essential for Fleshpounds & EDARs<br>
                        🔴 Toxic → Situational, good DOT
                    </div>
                `
            },
            {
                title: "Team Composition Guide",
                content: `
                    <p><strong>Optimal 6-Player Setup:</strong></p>
                    <ul>
                        <li>• <strong>Commando:</strong> Trash clearing, Stalker detection</li>
                        <li>• <strong>Support:</strong> Door management, ammo supply</li>
                        <li>• <strong>Demolitionist:</strong> Large ZED elimination</li>
                        <li>• <strong>Gunslinger:</strong> Precision large ZED takedowns</li>
                        <li>• <strong>Field Medic:</strong> Team sustainability</li>
                        <li>• <strong>Berserker:</strong> Frontline tank, emergency clearing</li>
                    </ul>
                `
            },
            {
                title: "Critical Engagement Rules",
                content: `
                    <div class="phase">
                        <div class="phase-title">DO NOT Enrage Scrakes</div>
                        <p>Use high DPS takedowns or RPG ballistic impact. Body damage causes chainsaw rage.</p>
                    </div>
                    <div class="phase">
                        <div class="phase-title">EMP is Essential</div>
                        <p>Berserker EMP grenades can save the team from raged Fleshpounds and disable EDARs.</p>
                    </div>
                    <div class="phase">
                        <div class="phase-title">Boss Shield Priority</div>
                        <p>Always focus fire on boss shields immediately - they prevent damage and enable healing.</p>
                    </div>
                `
            }
        ];

        tacticalGuides.forEach(guide => {
            const section = `
                <div class="mechanic-section">
                    <h3 class="mechanic-title">${guide.title}</h3>
                    ${guide.content}
                </div>
            `;
            grid.append(section);
        });
    }

    // Filter Methods
    _filterEnemies(searchTerm) {
        const cards = $('#enemy-grid .card');
        cards.each((index, card) => {
            const $card = $(card);
            const name = $card.data('name');
            const isVisible = name.includes(searchTerm.toLowerCase());
            $card.toggle(isVisible);
        });
    }

    _filterBosses(searchTerm) {
        const cards = $('#boss-grid .card');
        cards.each((index, card) => {
            const $card = $(card);
            const text = $card.text().toLowerCase();
            const isVisible = text.includes(searchTerm.toLowerCase());
            $card.toggle(isVisible);
        });
    }

    _filterDamageTypes(searchTerm) {
        const cards = $('#damage-grid .card');
        cards.each((index, card) => {
            const $card = $(card);
            const text = $card.text().toLowerCase();
            const isVisible = text.includes(searchTerm.toLowerCase());
            $card.toggle(isVisible);
        });
    }

    _filterWeapons(searchTerm) {
        const cards = $('#weapon-grid .card');
        cards.each((index, card) => {
            const $card = $(card);
            const text = $card.text().toLowerCase();
            const isVisible = text.includes(searchTerm.toLowerCase());
            $card.toggle(isVisible);
        });
    }

    _applyEnemyFilter(filterType) {
        const cards = $('#enemy-grid .card');
        if (filterType === 'all') {
            cards.show();
        } else {
            cards.each((index, card) => {
                const $card = $(card);
                const type = $card.data('type');
                $card.toggle(type === filterType);
            });
        }
    }

    _applyWeaponFilter(filterType) {
        const grid = $('#weapon-grid');
        grid.empty();
        const weaponsToShow = _kf2WeaponsData.getWeaponsForPerk(filterType);
        weaponsToShow.forEach(weapon => {
            const card = this._createWeaponCard(weapon);
            grid.append(card);
        });
    }

    _handleCardInteraction(e) {
        const $card = $(e.currentTarget);
        $card.find('.card-content').toggle();
    }
}
