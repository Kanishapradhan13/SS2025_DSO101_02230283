const http = require('http');

function runTests() {
    console.log('🧪 Running tests...');
    
    // Test 1: Server starts without errors
    try {
        const app = require('./server.js');
        console.log('Test 1 passed: Server module loads successfully');
    } catch (error) {
        console.error('Test 1 failed: Server module failed to load');
        process.exit(1);
    }
    
    // Test 2: Health endpoint responds
    const server = require('./server.js');
    
    // Give server time to start
    setTimeout(() => {
        const options = {
            hostname: 'localhost',
            port: process.env.PORT || 3000,
            path: '/health',
            method: 'GET'
        };
        
        const req = http.request(options, (res) => {
            if (res.statusCode === 200) {
                console.log('Test 2 passed: Health endpoint responds with 200');
                console.log('All tests passed!');
                process.exit(0);
            } else {
                console.error(' Test 2 failed: Health endpoint returned', res.statusCode);
                process.exit(1);
            }
        });
        
        req.on('error', (error) => {
            console.error('Test 2 failed: Health endpoint error:', error.message);
            process.exit(1);
        });
        
        req.end();
    }, 2000);
}

runTests();