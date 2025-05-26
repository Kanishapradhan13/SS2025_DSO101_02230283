document.addEventListener('DOMContentLoaded', function() {
    const healthButton = document.getElementById('health-check');
    const healthResult = document.getElementById('health-result');
    
    healthButton.addEventListener('click', async function() {
        try {
            healthButton.textContent = 'Checking...';
            healthButton.disabled = true;
            
            const response = await fetch('/health');
            const data = await response.json();
            
            healthResult.className = 'health-ok';
            healthResult.innerHTML = `
                <strong>Health Check Passed</strong><br>
                Status: ${data.status}<br>
                Timestamp: ${data.timestamp}<br>
                Version: ${data.version}
            `;
        } catch (error) {
            healthResult.className = 'health-error';
            healthResult.innerHTML = `
                <strong>Health Check Failed</strong><br>
                Error: ${error.message}
            `;
        } finally {
            healthButton.textContent = 'Check Health';
            healthButton.disabled = false;
        }
    });
});