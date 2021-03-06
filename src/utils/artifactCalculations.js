export const calcCurrentEffect = (level, artData) => 1 + (
  artData.effect * (
    level ** (
      (1 +
          ((artData.cexpo - 1) * Math.min(artData.grate * artData.level, artData.gmax))
      ) ** artData.gexpo
    )
  )
);

export const calcCurrentCost = (level, artifactStats) =>
  ((level + 1) ** artifactStats.cexpo) * artifactStats.ccoef;

export const calcTotalAd = (artifacts, artifactDataSet) => {
  let total = 0;

  const artifactKeys = Object.keys(artifacts);
  artifactKeys.forEach((artifactName) => {
    const artifactObject = artifacts[artifactName];
    if (artifactObject.checked) {
      const artifactData = artifactDataSet[artifactName];
      total += artifactObject.level * artifactData.ad;
    }
  });

  return total;
};

export default Object.freeze({ calcCurrentEffect, calcCurrentCost, calcTotalAd });
