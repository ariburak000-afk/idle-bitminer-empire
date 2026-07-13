const target = Number(process.env.PRESTIGE_TARGET || 2_000_000_000);
const hardwareCostMultiplier = 4.2;
const locationCostMultiplier = 1.8;
const hardware = [
  { name: 'Laptop', cost: 50, income: 3, growth: 1.12 },
  { name: 'Gaming PC', cost: 750, income: 32, growth: 1.14 },
  { name: 'Mini ASIC', cost: 28_000, income: 980, growth: 1.17 },
  { name: 'Threadripper', cost: 2_400_000, income: 52_000, growth: 1.20 },
  { name: 'AI Core', cost: 320_000_000, income: 6_500_000, growth: 1.22 },
  { name: 'Quantum CPU', cost: 2_800_000_000, income: 48_000_000, growth: 1.23 },
  { name: 'Singularity CPU', cost: 4.5e13, income: 5.2e11, growth: 1.27 },
  { name: 'GPU Rig', cost: 9_000, income: 420, growth: 1.16 },
  { name: 'Dual GPU', cost: 70_000, income: 3_000, growth: 1.18 },
  { name: 'GPU Rack', cost: 750_000, income: 20_000, growth: 1.19 },
  { name: 'Water GPU', cost: 18_000_000, income: 330_000, growth: 1.21 },
  { name: 'Neon Cluster', cost: 900_000_000, income: 13_000_000, growth: 1.23 },
  { name: 'Orbital GPU', cost: 25_000_000_000, income: 380_000_000, growth: 1.24 },
  { name: 'Quantum GPU', cost: 8e14, income: 7.5e12, growth: 1.28 },
  { name: 'PSU Bank', cost: 180_000, income: 5_800, growth: 1.18 },
  { name: 'Fan Wall', cost: 950_000, income: 25_000, growth: 1.19 },
  { name: 'Server Cabinet', cost: 5_000_000, income: 130_000, growth: 1.20 },
  { name: 'Liquid Server', cost: 40_000_000, income: 900_000, growth: 1.21 },
  { name: 'Substation', cost: 650_000_000, income: 9_800_000, growth: 1.23 },
  { name: 'Cryo Grid', cost: 16_000_000_000, income: 210_000_000, growth: 1.25 },
  { name: 'Fusion Grid', cost: 2e15, income: 1.6e13, growth: 1.29 },
];

let coins = 100;
let lifetime = 0;
let elapsed = 0;
let locationMult = 1;
const levels = hardware.map(() => 0);

function milestone(level) {
  let mult = 1;
  if (level >= 10) mult *= 2;
  if (level >= 25) mult *= 2;
  if (level >= 50) mult *= 3;
  return mult;
}

function passive() {
  return hardware.reduce((sum, item, index) => sum + item.income * levels[index] * milestone(levels[index]), 0) * locationMult * 0.94;
}

while (lifetime < target && elapsed < 10_800) {
  const perSecond = passive() + 215 * locationMult; // 20 dokunuş/sn, sürdürülebilir Perfect Tap katkısı dahil
  coins += perSecond;
  lifetime += perSecond;
  elapsed++;

  if (locationMult === 1 && coins >= 5_000 * locationCostMultiplier) { coins -= 5_000 * locationCostMultiplier; locationMult = 1.5; }
  if (locationMult === 1.5 && coins >= 80_000 * locationCostMultiplier) { coins -= 80_000 * locationCostMultiplier; locationMult = 2.2; }

  const candidates = hardware.map((item, index) => {
    const cost = item.cost * hardwareCostMultiplier * item.growth ** levels[index];
    const before = item.income * levels[index] * milestone(levels[index]);
    const after = item.income * (levels[index] + 1) * milestone(levels[index] + 1);
    return { index, cost, roi: (after - before) / cost };
  }).filter(item => item.cost <= coins).sort((a, b) => b.roi - a.roi);
  if (candidates[0]) { coins -= candidates[0].cost; levels[candidates[0].index]++; }
}

console.log(JSON.stringify({
  target,
  minutes: Number((elapsed / 60).toFixed(1)),
  lifetime: Math.floor(lifetime),
  coins: Math.floor(coins),
  locationMultiplier: locationMult,
  hardwareLevels: Object.fromEntries(hardware.map((item, index) => [item.name, levels[index]])),
}, null, 2));
