import * as server from '@minecraft/server';

server.world.beforeEvents.itemUse.subscribe((eventData) => {
    if (eventData.itemStack.typeId === 'minecraft:stick') {
        eventData.source.runCommandAsync('give @a diamond 1');
    }
});