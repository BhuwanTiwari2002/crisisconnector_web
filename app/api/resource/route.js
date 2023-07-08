export async function GET(request) {
    const data = require('../Data/resources.json');
    return new Response(JSON.stringify(data));
}