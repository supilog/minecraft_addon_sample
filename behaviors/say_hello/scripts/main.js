import * as server from '@minecraft/server';

server.system.runInterval(ev => {
    server.world.sendMessage("Hello, This is Supilog World!");
});
    