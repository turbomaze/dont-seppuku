export function getPrice(initialPrice, amount) {
  const multiplier = 1 + 0.1 * Math.pow(amount, 3);
  return Math.floor(initialPrice * multiplier);
}

export const initialCash = 10;

export const initialPrices = {
  masks: 10,
};

export const productionRates= {
  employees: 0.05
};

export const tickLengthMs = 100;
