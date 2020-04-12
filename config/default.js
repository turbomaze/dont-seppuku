export const tickLengthMs = 100;

export const initialCash = 15;

export const assets = {
  masks: 'masks',
};

export const initialPrices = {
  [assets.masks]: {
    bid: 0.99,
    ask: 1.01,
  }
};

export const upgrades = {
  [assets.masks]: {
    employees: 'masks-employees',
    sewing: 'masks-sewing-machines',
  },
};

export const upgradeSpecs = {
  [upgrades[assets.masks].employees]: {
    label: 'Employees',
    initialCost: 10,
    productionRate: 0.05,
  },
  [upgrades[assets.masks].sewing]: {
    label: 'Sewing machines',
    initialCost: 250,
    productionRate: 1,
  },
};

export function getCost(initialCost, amount) {
  const multiplier = 1 + 0.1 * Math.pow(amount, 3);
  return Math.floor(initialCost * multiplier);
}
