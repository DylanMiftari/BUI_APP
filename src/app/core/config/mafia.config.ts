export const mafiaConfig = {
  "rob": {
    "player": {
      "baseSuccessRate": 35,
      "successRateByLevel": 10,
      "stealAmount": {
        "min": 70,
        "max": 95,
        "byLevel": 2
      },
      "costByLevel": {
        1: 2000,
        2: 4000,
        3: 6000,
        4: 10000,
        5: 12500,
        6: 15000,
      } as Record<number, number>
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
      "cooldown": 3,
      "costByLevel": {
        1: 10000,
        2: 45000,
        3: 80000,
        4: 225000,
        5: 850000,
        6: 1500000,
      } as Record<number, number>
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
      "cooldown": 2,
      "costByLevel": {
        1: 5000,
        2: 7500,
        3: 10000,
        4: 20000,
        5: 50000,
        6: 85000,
      } as Record<number, number>
    },
    "house": {
      "baseSuccessRate": 5,
      "successRateByLevel": 1,
      "stealAmount": {
        "min": 80,
        "max": 90,
        "byLevel": 1
      },
      "costByLevel": {
        1: 500,
        2: 750,
        3: 1000,
        4: 1500,
        5: 2000,
        6: 2500,
      } as Record<number, number>
    },
    "cyberattack": {
      "minLevelOfMafia": 3,
      "successRate": 50,
      "stealAmount": 15000,
      "target": "Level 3+ Companies",
      "cooldown": 3,
      "cost": 5000
    },
    "aiDronePlayer": {
      "minLevelOfMafia": 4,
      "successRate": 100,
      "stealAmount": {
        "min": 85,
        "max": 100,
      },
      "target": "Player with more than 3500€",
      "cost": 5000
    },
    "aiDroneHouse": {
      "minLevelOfMafia": 4,
      "successRate": 25,
      "stealAmount": {
        "min": 85,
        "max": 100,
      },
      "target": "House with more than 3500€",
      "cost": 5000
    },
    "shoplifting": {
      "minLevelOfMafia": 5,
      "successRate": 75,
      "stealAmount": {
        "min": 250,
        "max": 1500,
      },
      "target": "Companies",
      "cost": 1000
    },
    "phishing": {
      "minLevelOfMafia": 6,
      "successRate": 1,
      "stealAmount": 50,
      "cooldown": 2,
      "target": "Bank Accounts",
      "cost": 30000
    }
  }
};
