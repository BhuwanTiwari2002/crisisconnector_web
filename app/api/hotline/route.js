export async function GET(request) {
    const data = require('../data/hotlines.json');
    return new Response(JSON.stringify(data));
}