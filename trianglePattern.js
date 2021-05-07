let n = 7;
let hash = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    hash += "#";
  }
  hash += "\n";
}
console.log(hash);