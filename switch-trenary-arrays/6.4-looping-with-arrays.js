const populations = [110, 10, 49, 83];
const world_pop = 7900;
const percentageOfWorld = (population) =>
  Math.floor((population / world_pop) * 10000) / 100;

const populationPercentages = (populationsArr) => {
  const percentages = [];
  for (let i = 0; i < populationsArr.length; i++) {
    percentages.push(percentageOfWorld(populationsArr[i]));
  }
  return percentages;
};