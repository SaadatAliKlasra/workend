import { prisma } from "../src/lib/db"
import categories from "./uniqueCategories"

async function main() {
  const response = await prisma.category.createMany({
    data: [
      ...categories.map((category) => ({ name: category.toLowerCase() })),
    ],
    skipDuplicates: true, // Skip 'duplicates' (if any) and continue with the next operation
  })
  console.log(response)
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