export const tickLengthMs = 100;

export const initialCash = 10;

export const assets = {
  masks: 'masks',
};

export const initialPrices = {
  [assets.masks]: {
    bid: 0.49,
    ask: 0.51,
  }
};

export const upgrades = {
  [assets.masks]: {
    employees: 'masks-employees',
  },
};

export const initialCosts = {
  [upgrades[assets.masks].employees]: 10,
};

export const productionRates = {
  [upgrades[assets.masks].employees]: 0.05
};

export function getCost(initialCost, amount) {
  const multiplier = 1 + 0.1 * Math.pow(amount, 3);
  return Math.floor(initialCost * multiplier);
}
