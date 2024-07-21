import phpServer from "php-server";

const server = await phpServer({
    port: 2998,
    base: "./site"  
});
console.log(`PHP server running at ${server.url}`);