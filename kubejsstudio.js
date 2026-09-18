// kubejsstudio custom: create_cabin_crafts:crafting/kinetic_mechanism_handcraft
ServerEvents.generateData('after_mods', event => {
    event.json(
      'create_cabin_crafts:recipe/crafting/kinetic_mechanism_handcraft',
      {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
          [
            {"tag":"c:tools/paxel"}
          ],
          {"tag":"minecraft:logs"},
          {"item":"create:andesite_alloy"},
          {"item":"create:cogwheel"}
        ],
        "result": {"id":"create_cabin_crafts:kinetic_mechanism","count":1}
      }
    )
})
