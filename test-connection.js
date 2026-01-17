// Simple test to check WordPress API connection
const dotenv = require('dotenv');
const path = require('path');
const { initializeApiClient, getApiClient } = require('./src/auth');

dotenv.config({ path: path.resolve(__dirname, '.env') });

async function testConnection() {
    try {
        console.log("Testing WordPress API connection...");
        console.log("URL:", process.env.WP_URL);
        console.log("User:", process.env.WP_APP_USER);

        await initializeApiClient();
        console.log("✓ API client initialized");

        const client = getApiClient();

        // Try to get list of pages
        console.log("\nFetching pages...");
        const response = await client.get('/wp-json/wp/v2/pages?per_page=5');

        console.log("✓ Successfully connected to WordPress!");
        console.log(`Found ${response.data.length} pages`);

        if (response.data.length > 0) {
            console.log("\nFirst page:");
            console.log(`- ID: ${response.data[0].id}`);
            console.log(`- Title: ${response.data[0].title.rendered}`);
            console.log(`- Status: ${response.data[0].status}`);
        }

    } catch (error) {
        console.error("\n❌ Connection failed!");
        console.error("Error:", error.message || error);
        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
        }
        if (error.config) {
            console.error("Request URL:", error.config.url);
        }
        process.exit(1);
    }
}

testConnection();
