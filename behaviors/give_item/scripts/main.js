import * as server from '@minecraft/server';

server.world.beforeEvents.itemUse.subscribe((ev) => {
    if(ev.itemStack.typeId == 'minecraft:stick'){
        ev.source.runCommand("give @a diamond 1");
    }
});
    