function getOptimalPath(path: number[][]) {
  const res = path.reduceRight((acc, curr) => {
    return curr.map((val, idx) => val + Math.min(acc[idx], acc[idx + 1]));
  });
  return res[0];
}

export { getOptimalPath };
