type Change = [number, number];

function getFilesToBackup(lastBackup: number, changes: Change[]) {
  const ids = new Set<number>();
  changes.forEach(([id, ts]) => {
    if (ts > lastBackup) {
      ids.add(id);
    }
  });

  return [...ids].sort((a, b) => a - b);
}

export { getFilesToBackup };
