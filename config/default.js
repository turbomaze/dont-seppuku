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
    conveyor: 'masks-conveyor',
    printer: 'masks-printer',
    factory: 'masks-factory',
    fullAutomation: 'masks-full-automation',
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
  [upgrades[assets.masks].conveyor]: {
    label: 'Conveyor belt',
    initialCost: 1800,
    productionRate: 10,
  },
  [upgrades[assets.masks].printer]: {
    label: '3D printers',
    initialCost: 9001,
    productionRate: 109,
  },
  [upgrades[assets.masks].factory]: {
    label: 'Factory',
    initialCost: 220000,
    productionRate: 1200,
  },
  [upgrades[assets.masks].fullAutomation]: {
    label: 'Full automation',
    initialCost: 12500000,
    productionRate: 49999,
  },
};

export function getCost(initialCost, amount) {
  const multiplier = 1 + 0.1 * Math.pow(amount, 3);
  return Math.floor(initialCost * multiplier);
}
