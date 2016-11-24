var roadBuilder = {
    create: function(creep) {
        if(creep.pos.look(LOOK_STRUCTURES).length < 1 && creep.pos.look(LOOK_CONSTRUCTION_SITES) < 1) {
            creep.pos.createConstructionSite(STRUCTURE_ROAD);
        }
    }
}

module.exports = roadBuilder;