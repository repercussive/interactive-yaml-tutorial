export default {
  exercise_simple: {
    "name": "Hexandra",
    "class": "witch",
    "damage": 25,
    "health": 85.5,
    "can-fly": true
  },
  exercise_arrays: {
    "name": "Hexandra",
    "strengths": ["magic", "potions", "curses"],
    "weaknesses": ["iron", "holy water", "mirrors"] 
  },
  exercise_nestedData: {
    "name": "Hexandra",
    "spells": {
      "invisibility": {
        "duration": 10,
        "cooldown": 60
      },
      "mind-control": {
        "success-chance": 0.5,
        "cooldown": 90
      }
    },
    "level": 60
  },
  exercise_nestedArrays: {
    "name": "Hexandra",
    "inventory": {
      "artifacts": ["Crystal", "Amulet"],
      "potions": ["Healing Potion", "Defense Potion"]
    }
  }
}