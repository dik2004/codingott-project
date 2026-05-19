# ✅ MongoDB Practice Questions (Beginner Level) – 100 Questions

---

## 🔹 $eq (Equal) – 15 Questions

1. Price field exactly `500` ke equal documents kaise find karoge?  

```js

    db.collection_name.find({price: {$eq: 500}})

```

2. Age field exactly `18` ke equal users kaise nikaloge?

```js

    db.collection_name.find({age: {$eq: 18}})

```

3. Status field exactly `"pending"` wale records kaise search karoge?

```js

    db.collection_name.find({status: {$eq: "pending"}})

```

```js

        db.collection_name.find({status: "pending"})

```

4. Country field exactly `"India"` wale users kaise find karoge? 

```js

    db.collection_name.find({country: {$eq: "India"}})

```

```js

        db.collection_name.find({country: "India"})

```

5. Salary exactly `45000` wale employees kaise retrieve karoge? 

```js

    db.collection_name.find({salary: {$eq: 45000}})

```

```js

        db.collection_name.find({salary: 45000})

```

6. Rating exactly `4` wale products kaise find karoge?  

```js

    db.collection_name.find({rating: {$eq: 4}})

```

```js

        db.collection_name.find({rating: 4})

```

7. City exactly `"Delhi"` wale documents kaise search karoge?

```js

    db.collection_name.find({city: {$eq: "Delhi"}})

```

```js

        db.collection_name.find({city: "Delhi"})

```

8. Role exactly `"admin"` wale users kaise fetch karoge? 

```js

    db.collection_name.find({role: {$eq: "admin"}})

```

```js

        db.collection_name.find({role: "admin"})

```

9. Gender exactly `"male"` wale records kaise filter karoge? 

```js

    db.collection_name.find({gender: {$eq: "male"}})

```

```js

        db.collection_name.find({gender: "male"})

```

10. Department exactly `"HR"` wale employees kaise find karoge?  

```js

    db.collection_name.find({department: {$eq: "HR"}})

```

```js

        db.collection_name.find({department: "HR"})

```

11. OrderStatus exactly `"delivered"` wale orders kaise retrieve karoge?  

```js

    db.collection_name.find({orderStatus: {$eq: "delivered"}})

```

```js

        db.collection_name.find({orderStatus: "delivered"})

```

12. Stock exactly `0` wale products kaise find karoge?  

```js

    db.collection_name.find({stock: {$eq: 0}})

```

```js

        db.collection_name.find({stock: 0})

```

13. Category exactly `"electronics"` wale items kaise search karoge? 

```js

    db.collection_name.find({category: {$eq: "electronics"}})

```

```js

        db.collection_name.find({category: "electronics"})

```

14. Marks exactly `100` wale students kaise find karoge?  

```js

    db.collection_name.find({marks: {$eq: 100}})

```

```js

        db.collection_name.find({marks: 100})

```

15. PaymentMode exactly `"cash"` wale records kaise filter karoge?  

```js

    db.collection_name.find({paymentMode: {$eq: "cash"}})

```

```js

        db.collection_name.find({paymentMode: "cash"})

```


```js

    

```

---

## 🔹 $ne (Not Equal) – 15 Questions

16. Status `"active"` ke equal nahi ho aise users kaise find karoge?

```js

    db.collection_name.find({status: {$ne: "active"}})

```

17. Age `25` ke equal nahi ho aise users kaise filter karoge? 

```js

    db.collection_name.find({age: {$ne: 25}})

```

18. Country `"USA"` ke equal nahi ho aise records kaise nikaloge? 

```js

    db.collection_name.find({country: {$ne: "USA"}})

```

19. Salary `30000` ke equal nahi ho aise employees kaise retrieve karoge?  

```js

    db.collection_name.find({salary: {$ne: 30000}})

```

20. Rating `5` ke equal nahi ho aise products kaise find karoge?  

```js

    db.collection_name.find({rating: {$ne: 5}})

```

21. Role `"user"` ke equal nahi ho aise accounts kaise filter karoge?  

```js

    db.collection_name.find({role: {$ne: "user"}})

```

22. City `"Mumbai"` ke equal nahi ho aise documents kaise search karoge? 

```js

    db.collection_name.find({city: {$ne: "Mumbai"}})

```

23. Department `"IT"` ke equal nahi ho aise employees kaise fetch karoge? 

```js

    db.collection_name.find({department: {$ne: "IT"}})

```

24. Gender `"female"` ke equal nahi ho aise records kaise retrieve karoge? 

```js

    db.collection_name.find({gender: {$ne: "female"}})

```

25. OrderStatus `"cancelled"` ke equal nahi ho aise orders kaise find karoge? 

```js

    db.collection_name.find({orderStatus: {$ne: "cancelled"}})

```

26. Stock `10` ke equal nahi ho aise products kaise filter karoge?  

```js

    db.collection_name.find({stock: {$ne: 10}})

```

27. PaymentMode `"card"` ke equal nahi ho aise records kaise search karoge? 

```js

    db.collection_name.find({paymentMode: {$ne: "card"}})

```

28. Category `"clothing"` ke equal nahi ho aise products kaise find karoge? 

```js

    db.collection_name.find({category: {$ne: "clothing"}})

```

29. Marks `0` ke equal nahi ho aise students kaise retrieve karoge?  

```js

    db.collection_name.find({marks: {$ne: 0}})

```

30. Name `"Rahul"` ke equal nahi ho aise users kaise find karoge? 

```js

    db.collection_name.find({name: {$ne: "Rahul"}})

```


---

## 🔹 $gt (Greater Than) – 15 Questions

31. Age `18` se greater users kaise find karoge?  

```js

    db.collection_name.find({age: {$gt: 18}})

```

32. Price `1000` se greater products kaise retrieve karoge?

```js

    db.collection_name.find({price: {$gt: 1000}})

```

33. Salary `50000` se greater employees kaise filter karoge? 

```js

    db.collection_name.find({salary: {$gt: 50000}})

```

34. Rating `4` se greater items kaise search karoge?

```js

    db.collection_name.find({rating: {$gt: 4}})

```

35. Stock `20` se greater products kaise find karoge? 

```js

    db.collection_name.find({stock: {$gt: 20}})

```

36. Score `80` se greater students kaise retrieve karoge?

```js

    db.collection_name.find({score: {$gt: 80}})

```

37. Experience `2 years` se greater employees kaise search karoge? 

```js

    db.collection_name.find({experience: {$gt: 2}})

```

38. OrdersCount `10` se greater customers kaise find karoge? 

```js

    db.collection_name.find({ordersCount: {$gt: 10}})

```

39. TotalAmount `5000` se greater bills kaise filter karoge? 

```js

    db.collection_name.find({totalAmount: {$gt: 5000}})

```

40. Discount `30` se greater products kaise retrieve karoge? 

```js

    db.collection_name.find({discount: {$gt: 30}})

```

41. Followers `1000` se greater users kaise find karoge?  

```js

    db.collection_name.find({followers: {$gt: 1000}})

```

42. Likes `500` se greater posts kaise search karoge?  

```js

    db.collection_name.find({likes: {$gt: 500}})

```

43. Views `10000` se greater videos kaise retrieve karoge? 

```js

    db.collection_name.find({views: {$gt: 10000}})

```

44. Age `60` se greater senior citizens kaise find karoge? 

```js

    db.collection_name.find({age: {$gt: 60}})

```

45. Salary `100000` se greater employees kaise filter karoge? 

```js

    db.collection_name.find({salary: {$gt: 100000}})

```


---

## 🔹 $gte (Greater Than Equal) – 15 Questions

46. Score `90` se greater ya equal students kaise find karoge? 

```js

    db.collection_name.find({score: {$gte: 90}})

```

47. Price `500` se greater ya equal products kaise retrieve karoge?  

```js

    db.collection_name.find({price: {$gte: 500}})

```

48. Salary `30000` se greater ya equal employees kaise filter karoge? 

```js

    db.collection_name.find({salary: {$gte: 30000}})

```

49. Age `21` se greater ya equal users kaise search karoge?  

```js

    db.collection_name.find({age: {$gte: 21}})

```

50. Rating `3.5` se greater ya equal items kaise find karoge?  

```js

    db.collection_name.find({rating: {$gte: 3.5}})

```

51. Stock `50` se greater ya equal products kaise retrieve karoge?  

```js

    db.collection_name.find({stock: {$gte: 50}})

```

52. Marks `40` se greater ya equal students kaise filter karoge?  

```js

    db.collection_name.find({marks: {$gte: 40}})

```

53. Experience `5` se greater ya equal employees kaise find karoge? 

```js

    db.collection_name.find({experience: {$gte: 5}})

```

54. TotalAmount `10000` se greater ya equal orders kaise search karoge? 

```js

    db.collection_name.find({totalAmount: {$gte: 10000}})

```

55. Discount `10` se greater ya equal products kaise retrieve karoge?

```js

    db.collection_name.find({discount: {$gte: 10}})

```

56. Views `1000` se greater ya equal posts kaise filter karoge?

```js

    db.collection_name.find({views: {$gte: 1000}})

```

57. Followers `500` se greater ya equal users kaise find karoge? 

```js

    db.collection_name.find({followers: {$gte: 500}})

```

58. Balance `0` se greater ya equal accounts kaise retrieve karoge? 

```js

    db.collection_name.find({balance: {$gte: 0}})

```

59. Age `18` se greater ya equal users kaise search karoge?  

```js

    db.collection_name.find({age: {$gte: 18}})

```

60. Rating `4.5` se greater ya equal products kaise find karoge? 

```js

    db.collection_name.find({rating: {$gte: 4.5}})

```


---

## 🔹 $lt (Less Than) – 15 Questions

61. Age `18` se less users kaise find karoge?  

```js

    db.collection_name.find({age: {$lt: 18}})

```

62. Price `100` se less products kaise retrieve karoge?  

```js

    db.collection_name.find({price: {$lt: 100}})

```

63. Salary `25000` se less employees kaise filter karoge?  

```js

    db.collection_name.find({salary: {$lt: 25000}})

```

64. Rating `2` se less products kaise search karoge?  

```js

    db.collection_name.find({rating: {$lt: 2}})

```

65. Stock `5` se less items kaise find karoge?  

```js

    db.collection_name.find({stock: {$lt: 5}})

```

66. Score `40` se less students kaise retrieve karoge?  

```js

    db.collection_name.find({score: {$lt: 40}})

```

67. Discount `10` se less products kaise filter karoge? 

```js

    db.collection_name.find({discount: {$lt: 10}})

```

68. TotalAmount `500` se less orders kaise search karoge? 

```js

    db.collection_name.find({totalAmount: {$lt: 500}})

```

69. Experience `1` se less employees kaise retrieve karoge?  

```js

    db.collection_name.find({experience: {$lt: 1}})

```

70. Marks `33` se less students kaise find karoge?  

```js

    db.collection_name.find({marks: {$lt: 33}})

```

71. Followers `100` se less users kaise filter karoge?  

```js

    db.collection_name.find({followers: {$lt: 100}})

```

72. Likes `50` se less posts kaise retrieve karoge?  

```js

    db.collection_name.find({likes: {$lt: 50}})

```

73. Views `500` se less videos kaise search karoge?  

```js

    db.collection_name.find({views: {$lt: 500}})

```

74. Salary `10000` se less employees kaise find karoge? 

```js

    db.collection_name.find({salary: {$lt: 10000}})

```

75. Age `60` se less users kaise retrieve karoge?  

```js

    db.collection_name.find({age: {$lt: 60}})

```


---

## 🔹 $lte (Less Than Equal) – 15 Questions

76. Rating `4` se less ya equal products kaise find karoge?

```js

    db.collection_name.find({rating: {$lte: 4}})

```

77. Price `999` se less ya equal items kaise retrieve karoge? 

```js

    db.collection_name.find({price: {$lte: 999}})

```

78. Salary `40000` se less ya equal employees kaise filter karoge? 

```js

    db.collection_name.find({salary: {$lte: 40000}})

```

79. Age `18` se less ya equal users kaise search karoge?  

```js

    db.collection_name.find({age: {$lte: 18}})

```

80. Stock `0` se less ya equal products kaise find karoge?  

```js

    db.collection_name.find({stock: {$lte: 0}})

```

81. Score `50` se less ya equal students kaise retrieve karoge?  

```js

    db.collection_name.find({score: {$lte: 50}})

```

82. Marks `35` se less ya equal students kaise filter karoge?  

```js

    db.collection_name.find({marks: {$lte: 35}})

```

83. Discount `20` se less ya equal products kaise search karoge?  

```js

    db.collection_name.find({discount: {$lte: 20}})

```

84. TotalAmount `2000` se less ya equal orders kaise retrieve karoge?  

```js

    db.collection_name.find({totalAmount: {$lte: 2000}})

```

85. Experience `3` se less ya equal employees kaise find karoge?  

```js

    db.collection_name.find({experience: {$lte: 3}})

```

86. Views `100` se less ya equal posts kaise filter karoge?  

```js

    db.collection_name.find({views: {$lte: 100}})

```

87. Followers `1000` se less ya equal users kaise retrieve karoge?  

```js

    db.collection_name.find({followers: {$lte: 1000}})

```

88. Likes `10` se less ya equal posts kaise search karoge?  

```js

    db.collection_name.find({likes: {$lte: 10}})

```

89. Balance `0` se less ya equal accounts kaise find karoge?  

```js

    db.collection_name.find({balance: {$lte: 0}})

```

90. Age `65` se less ya equal users kaise retrieve karoge?  

```js

    db.collection_name.find({age: {$lte: 65}})

```


---

## 🔥 RegExp (Regular Expression) – 10 Questions

91. Name field jo `"A"` se start hota ho, aise users kaise find karoge using RegExp?  

```js

    db.collection_name.find({name: {$regex: "^A"}})

```

92. Email field me `"@gmail.com"` contain karta ho, aise users kaise search karoge?  

```js

    db.collection_name.find({email: {$regex: "@gmail.com"}})

```

93. City field me `"del"` word aata ho (case-insensitive), kaise filter karoge?  

```js

    db.collection_name.find({city: {$regex: "del", $options: "i"}})

```

```js

   db.collection_name.find({city: /del/i})

```

94. ProductName field jo `"Pro"` se start hota ho, aise products kaise retrieve karoge?

```js

    db.collection_name.find({productName: {$regex: "^Pro"}})

```

95. Username field jo `"99"` pe end hota ho, aise users kaise find karoge?  

```js

    db.collection_name.find({username: {$regex: "99$"}})

```

96. Title field me `"Mongo"` word exist karta ho, aise documents kaise search karoge?  

```js

    db.collection_name.find({title: RegExp("Mongo", "i")})

```

97. Name field jo exactly `5 characters` ka ho, RegExp se kaise filter karoge?  

```js

    db.collection_name.find({name: {$regex: "^.{5}$"}})

```

98. Phone field jo `"98"` se start hota ho, aise records kaise retrieve karoge?  

```js

    db.collection_name.find({phone: {$regex: "^98"}})

```

99. Address field me `"Road"` word aata ho, aise users kaise find karoge?  

```js

    db.collection_name.find({address: RegExp("Road", "i")})

```

100. Category field me `"book"` word match karta ho (case-insensitive), kaise filter karoge? 

```js

    db.collection_name.find({category: RegExp("book", "i")})

```
