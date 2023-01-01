const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let newnom = ""
const trie = names.sort()

for (const names of trie) {
  console.log(names)
  newnom = newnom +  names[0]
}
console.log(newnom)