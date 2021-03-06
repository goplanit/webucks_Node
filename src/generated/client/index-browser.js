
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.1.1
 * Query Engine version: c22652b7e418506fab23052d569b85d3aec4883f
 */
Prisma.prismaVersion = {
  client: "3.1.1",
  engine: "c22652b7e418506fab23052d569b85d3aec4883f"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AllergiesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Allergies_drinksScalarFieldEnum = makeEnum({
  id: 'id',
  allergieId: 'allergieId',
  drinkId: 'drinkId'
});

exports.Prisma.CategoriesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.CommentsScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  drinkId: 'drinkId',
  content: 'content',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.DrinksScalarFieldEnum = makeEnum({
  id: 'id',
  categoryId: 'categoryId',
  koreanName: 'koreanName',
  englishName: 'englishName',
  description: 'description',
  isNew: 'isNew'
});

exports.Prisma.ImagesScalarFieldEnum = makeEnum({
  id: 'id',
  drinkId: 'drinkId',
  imageUrl: 'imageUrl'
});

exports.Prisma.LikesScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  drinkId: 'drinkId'
});

exports.Prisma.NutritionScalarFieldEnum = makeEnum({
  id: 'id',
  drinkId: 'drinkId',
  calorie: 'calorie',
  natrium: 'natrium',
  fat: 'fat',
  sugar: 'sugar',
  protein: 'protein',
  caffeine: 'caffeine'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  username: 'username',
  address: 'address',
  phoneNumber: 'phoneNumber',
  policyAgreed: 'policyAgreed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Allergies: 'Allergies',
  Allergies_drinks: 'Allergies_drinks',
  Categories: 'Categories',
  Comments: 'Comments',
  Drinks: 'Drinks',
  Images: 'Images',
  Likes: 'Likes',
  Nutrition: 'Nutrition',
  Users: 'Users'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
