// Main Application Initialization
$(document).ready(() => {
    // Initialize the UI Manager
    new _UIManager();

    // Additional global event handlers if needed
    console.log('KF2 Mechanics SPA initialized successfully');
    
    // Debug information for development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Development mode detected');
        console.log('Available data:', {
            enemies: _kf2Data.enemies.length,
            bosses: _kf2Data.bosses.length,
            weapons: _kf2Data.weapons.length,
            damageTypes: _kf2Data.damageTypes.length,
            mechanics: _kf2Data.mechanics.length
        });
    }

    // Global error handling
    window.addEventListener('error', (e) => {
        console.error('Application error:', e.error);
    });

    // Handle resize events for responsive design
    $(window).on('resize', () => {
        // Add any resize-specific logic here if needed
    });
});