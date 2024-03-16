import { prisma } from "../src/lib/db"
import categories from "./uniqueCategories"

async function main() {
  // const response = await prisma.category.createMany({
  //   data: [
  //     ...categories.map((category) => ({ name: category })),
  //   ],
  //   skipDuplicates: true, // Skip 'duplicates' (if any) and continue with the next operation
  // })
  for (const category of categories) {
    const response = await prisma.category.update({
      where: {
        name: category.toLowerCase()
      },
      data: {
        name: category
      }
    })
    console.log(response)
  }

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })