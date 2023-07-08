export async function GET(request) {
    const data = require('../Data/hotlines.json');
    return new Response(JSON.stringify(data));
}