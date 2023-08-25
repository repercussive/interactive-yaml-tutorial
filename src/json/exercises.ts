export default {
  simple: {
    "name": "Hexandra",
    "class": "witch",
    "damage": 25,
    "health": 85.5,
    "can-fly": true
  },
  arrays: {
    "name": "Hexandra",
    "strengths": ["magic", "potions", "curses"],
    "weaknesses": ["iron", "holy water", "mirrors"] 
  },
  nestedData: {
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
  nestedArrays: {
    "name": "Hexandra",
    "inventory": {
      "artifacts": ["Crystal", "Amulet"],
      "potions": ["Healing Potion", "Defense Potion"]
    }
  },
  arraysOfObjects: {
    "name": "Hexandra",
    "skills": [
      {
        "name": "Potion Brewing",
        "level": 8,
        "max-level": 50
      },
      {
        "name": "Enchanting",
        "level": 4,
        "max-level": 20
      },
      {
        "name": "Herbology",
        "unlocked": false,
        "max-level": 30
      },
    ]
  }
}