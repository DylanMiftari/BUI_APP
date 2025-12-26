export const mafiaConfig = {
  "rob": {
    "player": {
      "baseSuccessRate": 35,
      "successRateByLevel": 10,
      "stealAmount": {
        "min": 70,
        "max": 95,
        "byLevel": 2
      }
    },
    "company": {
      "baseSuccessRate": 20,
      "successRateByLevel": 10,
      "stealAmount": {
        "min": 30,
        "max": 50,
        "byLevel": 10
      },
      "maxValue": 1000000,
      "cooldown": 3
    },
    "bankAccount": {
      "baseSuccessRate": 10,
      "successRateByLevel": 5,
      "stealAmount": {
        "min": 10,
        "max": 20,
        "byLevel": 5
      },
      "maxValue": 500000,
      "cooldown": 2
    },
    "house": {
      "baseSuccessRate": 5,
      "successRateByLevel": 1,
      "stealAmount": {
        "min": 80,
        "max": 90,
        "byLevel": 1
      }
    },
    "cyberattack": {
      "minLevelOfMafia": 3,
      "successRate": 50,
      "stealAmount": 15000,
      "target": "Level 3+ Companies",
      "cooldown": 3
    },
    "aiDronePlayer": {
      "minLevelOfMafia": 4,
      "successRate": 100,
      "stealAmount": {
        "min": 85,
        "max": 100,
      },
      "target": "Player with more than 3500€"
    },
    "aiDroneHouse": {
      "minLevelOfMafia": 4,
      "successRate": 25,
      "stealAmount": {
        "min": 85,
        "max": 100,
      },
      "target": "House with more than 3500€"
    },
    "shoplifting": {
      "minLevelOfMafia": 5,
      "successRate": 75,
      "stealAmount": {
        "min": 250,
        "max": 1500,
      },
      "target": "Companies"
    },
    "phishing": {
      "minLevelOfMafia": 6,
      "successRate": 1,
      "stealAmount": 50,
      "cooldown": 2,
      "target": "Bank Accounts"
    }
  }
};
