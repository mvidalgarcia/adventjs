function fixFiles(files) {
  const counter = {};
  return files.map((file) => {
    counter[file] = ++counter[file] || 0;
    return counter[file] > 0 ? `${file}(${counter[file]})` : file;
  });
}

test.each([
  [
    ["photo", "postcard", "photo", "photo", "video"],
    ["photo", "postcard", "photo(1)", "photo(2)", "video"],
  ],
  [
    ["file", "file", "file", "game", "game"],
    ["file", "file(1)", "file(2)", "game", "game(1)"],
  ],
  [
    ["file", "file(1)", "icon", "icon(1)", "icon(1)"],
    ["file", "file(1)", "icon", "icon(1)", "icon(1)(1)"],
  ],
])("Challenge #18 fixFiles(%p) === %p", (files, solution) => {
  expect(fixFiles(files)).toEqual(solution);
});
