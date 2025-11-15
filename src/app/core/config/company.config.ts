
export const companyConfig = {
  "maxCompanies": 3,
  "maxCompanyLevel": 6,
  "creationCost": 2500,
  "costToUpgrade": {
    2: 20_000,
    3: 50_000,
    4: 300_000,
    5: 1_000_000,
    6: 5_000_000,
  } as Record<number, number>,
  "type": {
    "bank": {
      "emoji": "🏦",
      "label": "Bank",
    },
    "casino": {
      "emoji": "🎰",
      "label": "Casino",
    },
    "mafia": {
      "emoji": "🕴️",
      "label": "Mafia",
    },
    "estate": {
      "emoji": "🏢",
      "label": "Estate Agency",
    },
    "security": {
      "emoji": "🛡️",
      "label": "Security Company",
    },
    "factory": {
      "emoji": "🏭",
      "label": "Factory",
    }
  } as Record<string, {emoji: string, label: string}>
}
