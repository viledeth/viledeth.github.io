// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
            const searchButton = document.getElementById('searchButton');
            const levelInput = document.getElementById('levelInput');
            const table = document.getElementById('upgradeTable');
            const rows = table.getElementsByTagName('tr');

            searchButton.addEventListener('click', function() {
                const level = parseInt(levelInput.value, 10);
                if (isNaN(level) || level < 1 || level > 125) {
                    alert("Please enter a valid rune level between 1 and 125.");
                    return;
                }
                
                // Clear previous highlights
                for (let row of rows) {
                    row.classList.remove('highlight');
                }

                // Determine the appropriate range and highlight the row
                let highlightRow;
                if (level <= 10) {
                    highlightRow = rows[1];
                } else if (level <= 20) {
                    highlightRow = rows[2];
                } else if (level <= 30) {
                    highlightRow = rows[3];
                } else if (level <= 40) {
                    highlightRow = rows[4];
                } else if (level <= 50) {
                    highlightRow = rows[5];
                } else if (level <= 60) {
                    highlightRow = rows[6];
                } else if (level <= 70) {
                    highlightRow = rows[7];
                } else if (level <= 80) {
                    highlightRow = rows[8];
                } else if (level <= 90) {
                    highlightRow = rows[9];
                } else if (level <= 100) {
                    highlightRow = rows[10];
                } else if (level <= 110) {
                    highlightRow = rows[11];
                } else if (level <= 120) {
                    highlightRow = rows[12];
                } else {
                    highlightRow = rows[13];
                }
                
                highlightRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                highlightRow.classList.add('highlight');
            });

            for (let i = 1; i < rows.length; i++) {
                rows[i].addEventListener('click', function() {
                    const range = rows[i].cells[0].innerText.split('-');
                    levelInput.value = range[0];
                    
                    for (let row of rows) {
                        row.classList.remove('highlight');
                    }
                    this.classList.add('highlight');
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
            }
        });