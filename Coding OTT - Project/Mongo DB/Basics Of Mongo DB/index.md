```md
# ✅ MongoDB Collections Show Command

```

show collections

````

## Basic Find Queries

### 1. Kaise find karoge saare documents?

```js

db.collection_name.find()

````

### 2. Kaise sirf ek document find karoge?

```js

db.collection_name.findOne()

```

### 3. Kaise find karoge jaha category = "electronics" ho?

```js

db.collection_name.find({ category: "electronics" })

```

### 4. Kaise find karoge jaha price 1000 se zyada ho?

```js

db.collection_name.find({ price: { $gt: 1000 } })

```

### 5. Kaise find karoge jaha price 500 se kam ho?

```js

db.collection_name.find({ price: { $lt: 500 } })

```

### 6. Kaise find karoge jaha rating exactly 4.5 ho?

```js

db.collection_name.findOne({ rating: 4.5 })

```

### 7. Kaise find karoge jaha stock 0 ho?

```js

db.collection_name.find({ stock: 0 })

```

### 8. Kaise find karoge jaha status active nahi ho?

```js

db.collection_name.find({ status: "active" })

```

### 9. Kaise find karoge jaha category books OR fashion ho?

```js

db.collection_name.find({ category: "books", category: "fashion" })

```

### 10. Kaise find karoge jaha category books AND status active ho?

#### Projection (Select Fields)

```js

db.collection_name.find({ category: "books", status: "active" })

```

### 11. Kaise sirf name field show karoge?

```js

db.collection_name.find({}, { name: 1 })

```

### 12. Kaise name aur price show karoge?

```js

db.collection_name.find({}, { name: 1, price: 1 })

```

### 13. Kaise _id hide karoge?

```js

db.collection_name.find({}, { _id: 0 })

```

### 14. Kaise sirf category aur stock show karoge?

```js

db.collection_name.find({}, { category: 1, stock: 1 })

```

### 15. Kaise sirf createdAt show karoge?

```js

db.collection_name.find({}, { createdAt: 1 })

```

### 16. Kaise tags field show karoge but baaki hide karoge?

```js

db.collection_name.find({}, { tags: 1, _id: 0 })

```

### 17. Kaise multiple fields exclude karoge?

```js

db.collection_name.find({}, { email: 0, _id: 0, password: 0 })

```

### 18. Kaise email field include karoge but password exclude karoge?

```js

db.collection_name.find({}, { email: 1, password: 0 })

```

### 19. Kaise nested field show karoge?

```js

db.collection_name.find({}, { "address.city": 1 })

```

### 20. Kaise nested field hide karoge?

```js

db.collection_name.find({}, { "address.city": 0 })

```

---

## Sorting

### 21. Kaise price ascending sort karoge?

```js

db.collection_name.find().sort({ price: 1 })

```

### 22. Kaise price descending sort karoge?

```js

db.collection_name.find().sort({ price: -1 })

```

### 23. Kaise rating descending sort karoge?

```js

db.collection_name.find().sort({ rating: -1 })

```

### 24. Kaise createdAt ascending sort karoge?

```js

db.collection_name.find().sort({ createdAt: 1 })

```

### 25. Kaise createdAt descending sort karoge?

```js

db.collection_name.find().sort({ createdAt: -1 })

```

### 26. Kaise name ascending sort karoge?

```js

db.collection_name.find().sort({ name: 1 })

```

### 27. Kaise name descending sort karoge?

```js

db.collection_name.find().sort({ name: -1 })

```

### 28. Kaise category wise sorting karoge?

```js

db.collection_name.find().sort({ category: 1 })

```

### 29. Kaise sort by multiple fields (category then price)?

```js

db.collection_name.find().sort({ category: 1, price: 1 })

```

### 30. Kaise sort by status then createdAt?

```js

db.collection_name.find().sort({ status: 1, createdAt: 1 })

```

---

## Limit and Skip

### 31. Kaise top 3 expensive products nikaloge?

```js

db.collection_name.find().sort({ price: -1 }).limit(3)

```

### 32. Kaise top 10 cheapest products nikaloge?

```js

db.collection_name.find().sort({ price: 1 }).limit(10)

```

### 33. Kaise page 2 ke results nikaloge?

```js

db.collection_name.find().skip(10).limit(10)

```

### 34. Kaise page 3 ke results nikaloge?

```js

db.collection_name.find().skip(20).limit(10)

```

### 35. Kaise skip 20 documents then show 10?

```js

db.collection_name.find().skip(20).limit(10)

```

### 36. Kaise skip 0 then show 5?

```js

db.collection_name.find().skip(0).limit(5)

```

### 37. Kaise last 5 documents nikaloge createdAt ke according?

```js

db.collection_name.find().sort({ createdAt: -1 }).limit(5)

```

### 39. Kaise first 50 documents fetch karoge?

```js

db.collection_name.find().limit(50)

```

### 40. Kaise limit 1 use karke single latest product nikaloge?

```js

db.collection_name.find().sort({ createdAt: -1 }).limit(1)

```

---

## Count Queries

### 41. Kaise total users count karoge?

```js

db.collection_name.countDocuments()

```

### 42. Kaise total products count karoge?

```js

db.collection_name.countDocuments()

```

### 43. Kaise count karoge jaha stock > 50 ho?

```js

db.collection_name.countDocuments({ stock: { $gt: 50 } })

```

### 44. Kaise count karoge jaha price between 2000-5000 ho?

```js

db.collection_name.countDocuments({ stock: { $gte: 2000, $lte: 5000 } })

```

### 45. Kaise count karoge jaha category = "books" ho?

```js

db.collection_name.countDocuments({ category: "books" })

```

### 46. Kaise count karoge jaha status inactive ho?

```js

db.collection_name.countDocuments({ status: "inactive" })

```

### 47. Kaise count karoge jaha rating >= 4.0 ho?

```js

db.collection_name.countDocuments({ rating: { $gte: 4.5 } })

```

### 48. Kaise count karoge jaha tags me "fitness" ho?

```js

db.collection_name.countDocuments({ tags: "fitness" })

```

### 49. Kaise count karoge jaha discount field exist karta ho?

```js

db.collection_name.countDocuments({ discount: { $exists: true } })

```

### 50. Kaise count karoge jaha discount field missing ho?

```js

db.collection_name.countDocuments({ discount: { $exists: false } })

```

---

## Update Queries

### 51. Kaise ek document me price update karoge?

```js

db.collection_name.updateOne({ name: "Life Changer" }, { $set: { price: 5000 } })

```

### 52. Kaise multiple documents me price update karoge?

```js

db.collection_name.updateMany({ category: "books" }, { $set: { price: 999 } })

```

### 53. Kaise ek product ka stock reduce karoge by 1?

```js

db.collection_name.updateOne({ title: "ACER LAPTOP" }, { $inc: { stock: -1 } })

```

### 54. Kaise stock increase karoge by 10?

```js

db.collection_name.updateOne({ title: "ACER LAPTOP" }, { $inc: { stock: 10 } })

```

### 55. Kaise rating update karoge?

```js

db.collection_name.updateOne({ title: "DELL Laptop" }, { $set: { rating: 4.9 } })

```

### 56. Kaise ek user ka password update karoge?

```js

db.collection_name.updateOne({ email: "abc@example.com" }, {$set: { password: "newpassword@1234" }})

```

### 57. Kaise ek field add karoge sab documents me?

```js

db.collection_name.updateMany({}, { $set: { active: true } })

```

### 58. Kaise new boolean field add karoge?

```js

db.collection_name.updateMany({}, { $set: { verified: false } })

```

### 59. Kaise update karoge but sirf active products me?

```js

db.collection_name.updateMany({ status: "active" }, { $set: { kyc: false } })

```

### 60. Kaise update karoge jaha category electronics ho?

```js

db.collection_name.updateMany({category: "electronics"}, {$set: {warranty: "3 Years"}})

```

---

## $set and $unset

### 61. Kaise field add karoge using $set?

```js

db.collection_name.updateMany({}, { $set: { discount: 7 } })

```

### 62. Kaise field remove karoge using $unset?

```js

db.collection_name.updateMany({}, { $unset: { discount: "" } })

```

### 63. Kaise discount remove karoge only books category me?

```js

db.collection_name.updateMany({ category: "books" }, { $unset: { discount: "" } })

```

### 64. Kaise verified false set karoge sab users me?

```js

db.collection_name.updateMany({}, { $set: { verified: false } })

```

### 65. Kaise lastLogin update karoge current date se?

```js

db.collection_name.updateMany({}, { $set: { lastLogin: new Date() } })

```

### 66. Kaise createdAt update karoge manually?

```js

db.collection_name.updateOne({ _id: ObjectId("YOUR_ID") },{ $set: { createdAt: new Date("2028-01-01") }})

```

### 67. Kaise status inactive set karoge jaha stock = 0 ho?

```js

db.collection_name.updateMany({ stock: 0 }, { $set: { status: "inactive" } })

```

### 68. Kaise tags array update karoge?

```js

db.collection_name.updateMany({ name: "Mobile" },{ $set: { tags: ["electronic", "new", "5G"] } })

```

### 69. Kaise address field update karoge?

```js

db.collection_name.updateOne({ _id: ObjectId("YOUR_ID") },{ $set: { address: "Mumbai" } })

```

### 70. Kaise nested field update karoge?

```js

db.collection_name.updateOne({ _id: ObjectId("YOUR_ID") },{ $set: { "address.state": "Maharashtra" } })

```

---

## Delete Queries

### 81. Kaise ek product delete karoge name ke basis pe?

```js

db.collection_name.deleteOne({ name: "Sky" })

```

### 82. Kaise multiple products delete karoge category basis pe?

```js

db.collection_name.deleteMany({ category: "books" })

```

### 83. Kaise inactive products delete karoge?

```js

db.collection_name.deleteMany({ status: "inactive" })

```

### 84. Kaise delete karoge jaha rating < 3 ho?

```js

db.collection_name.deleteMany({ rating: { $lt: 3 } })

```

### 85. Kaise delete karoge jaha stock = 0 ho?

```js

db.collection_name.deleteMany({ stock: 0 })

```

### 86. Kaise delete karoge jaha expired = true ho?

```js

db.collection_name.deleteMany({ expired: true })

```

### 87. Kaise sab documents delete karoge collection se?

```js

db.collection_name.deleteMany({})

```

### 88. Kaise sirf ek oldest product delete karoge?

```js

db.collection_name.find().sort({ createdAt: 1 }).limit(1)
db.collection_name.deleteOne({ _id: ObjectId("OLD_ID") })

```

### 89. Kaise latest product delete karoge?

```js

db.collection_name.find().sort({ createdAt: -1 }).limit(1)
db.collection_name.deleteOne({ _id: ObjectId("USER_ID") })

```

### 90. Kaise delete karoge jaha createdAt 2023 se pehle ka ho?

```js

db.collection_name.deleteMany({ createdAt: { $lt: new Date("2023-01-01") } })

```

---

## Query Operators

### 91. Kaise $gt use karoge?

```js

db.collection_name.find({ price: { $gt: 500 } })

```

### 92. Kaise $lt use karoge?

```js

db.collection_name.find({ price: { $lt: 1000 } })

```

### 93. Kaise $gte use karoge?

```js

db.collection_name.find({ price: { $gte: 200 } })

```

### 94. Kaise $lte use karoge?

```js

db.collection_name.find({ price: { $lte: 999 } })

```
