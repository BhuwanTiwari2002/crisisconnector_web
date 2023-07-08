export async function GET(request) {
    const data = require('../data/resources.json');
    return new Response(JSON.stringify(data));
}