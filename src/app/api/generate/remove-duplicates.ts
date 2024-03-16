import fs from "fs";

export function removeDuplicate(arr: string[]) {

  const unique = arr.filter((item, index) => arr.indexOf(item) === index);

  // write unique array to categories.ts file
  fs.writeFileSync('src/app/api/generate/uniqueCategories.ts', `const categories = ${JSON.stringify(unique)} \nexport default categories;`);
  console.log("Duplicates removed and updated in categories.ts file.")
}
