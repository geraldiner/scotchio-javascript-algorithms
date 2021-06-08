

// .replace
function searchReplace(text, search, replace) {
  if (search[0] === search[0].toUpperCase()) {
    replace = replace[0].toUpperCase() + replace.slice(1)
  }
  return text.replace(search, replace)
}

// with regex
// function searchReplace(text, search, replace) {
//   let regex = new RegExp(search, "gi")
//   if (/[A-Z]/.test(search[0])) {
//     replace = replace.charAt(0).toUpperCase() + replace.slice(1)
//   }
//   return text.replace(regex, replace)
// }

console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
// should return "He is Sitting on the couch