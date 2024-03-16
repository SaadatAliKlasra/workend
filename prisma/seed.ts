import { prisma } from "../src/lib/db"
import categories from "./uniqueCategories"

async function main() {
  // const response = await prisma.category.createMany({
  //   data: [
  //     ...categories.map((category) => ({ name: category })),
  //   ],
  //   skipDuplicates: true,
  // })
  // console.log(response)
  for (const category of categories) {
    try {
      await prisma.category.update({
        where: {
          name: category.toLowerCase()
        },
        data: {
          name: category
        }
      })

    } catch (error) {
      await prisma.category.create({
        data: {
          name: category
        }
      })
    }
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