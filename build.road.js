var roadBuilder = {
    create: function(creep) {
        creep.pos.createConstructionSite(STRUCTURE_ROAD);
    }
}

module.exports = roadBuilder;
