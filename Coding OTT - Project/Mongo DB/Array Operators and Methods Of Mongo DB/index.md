````md
## 🔹 $slice (10 Questions)

### 1. Ek document me comments array ke sirf first 5 elements kaise fetch karoge using $slice?

```js

    db.collection_name.find({}, { comments: { $slice: 5 } })

````

### 2. reviews array ke last 3 elements kaise retrieve karoge?

```js

    db.collection_name.find({}, { reviews: { $slice: -3 } })

```

### 3. students array me se first 10 records kaise nikaloge?

```js

    db.collection_name.find({}, { students: { $slice: 10 } })

```

### 4. orders array ke sirf first 2 orders kaise show karoge?

```js

    db.collection_name.find({}, { orders: { $slice: 2 } })

```

### 5. logs array ke last 5 logs kaise fetch karoge?

```js

    db.collection_name.find({}, { logs: { $slice: -5 } })

```

### 6. messages array me se middle ke 5 messages kaise retrieve karoge using $slice with skip?

```js

    db.collection_name.find({}, { messages: { $slice: [5, 5] } })

```

### 7. products array me se first 1 product kaise get karoge?

```js

    db.collection_name.find({}, { products: { $slice: 1 } })

```

### 8. history array me se last 1 record kaise fetch karoge?

```js

    db.collection_name.find({}, { history: { $slice: -1 } })

```

### 9. scores array me se first 4 scores kaise retrieve karoge?

```js

    db.collection_name.find({}, { scores: { $slice: 4 } })

```

### 10. notifications array ke last 10 items kaise nikaloge?

```js

    db.collection_name.find({}, { notifications: { $slice: -10 } })

```

---

## 🔹 $in (15 Questions)

### 11. category field me "mobile" ya "laptop" ho toh documents kaise find karoge using $in?

```js

    db.collection_name.find({ category: { $in: ["mobile", "laptop"] } })

```

### 12. age field agar 18, 20, 25 me se koi ho toh users kaise fetch karoge?

```js

    db.collection_name.find({ age: { $in: [18, 20, 25] } })

```

### 13. status agar "active" ya "pending" ho toh records kaise retrieve karoge?

```js

    db.collection_name.find({ status: { $in: ["active", "pending"] } })

```

### 14. city agar "Delhi", "Mumbai", "Pune" ho toh users kaise filter karoge?

```js

    db.collection_name.find({ city: { $in: ["Delhi", "Mumbai", "Pune"] } })

```

### 15. role agar "admin" ya "manager" ho toh accounts kaise find karoge?

```js

    db.collection_name.find({ role: { $in: ["admin", "manager"] } })

```

### 16. price agar 1000, 1500, 2000 me se koi ho toh products kaise search karoge?

```js

    db.collection_name.find({ price: { $in: [1000, 1500, 2000] } })

```

### 17. rating agar 3, 4, 5 ho toh products kaise retrieve karoge?

```js

    db.collection_name.find({ rating: { $in: [3, 4, 5] } })

```

### 18. department agar "IT", "HR" ho toh employees kaise fetch karoge?

```js

    db.collection_name.find({ department: { $in: ["IT", "HR"] } })

```

### 19. course agar "Java", "Python" ho toh students kaise find karoge?

```js

    db.collection_name.find({ course: { $in: ["Java", "Python"] } })

```

### 20. language agar "Hindi", "English" ho toh users kaise filter karoge?

```js

    db.collection_name.find({ language: { $in: ["Hindi", "English"] } })

```

### 21. brand agar "Apple", "Samsung" ho toh products kaise search karoge?

```js

    db.collection_name.find({ brand: { $in: ["Apple", "Samsung"] } })

```

### 22. gender agar "male" ya "female" ho toh records kaise retrieve karoge?

```js

    db.collection_name.find({ gender: { $in: ["male", "female"] } })

```

### 23. month agar 1,2,3 ho toh documents kaise filter karoge?

```js

    db.collection_name.find({ month: { $in: [1, 2, 3] } })

```

### 24. year agar 2022 ya 2023 ho toh records kaise find karoge?

```js

    db.collection_name.find({ year: { $in: [2022, 2023] } })

```

### 25. paymentMode agar "cash", "upi", "card" ho toh orders kaise retrieve karoge?

```js

    db.collection_name.find({ paymentMode: { $in: ["cash", "upi", "card"] } })

```

---

## 🔹 $all (15 Questions)

### 26. tags array me "mongodb" aur "database" dono present ho toh documents kaise find karoge?

```js

    db.collection_name.find({ tags: { $all: ["mongodb", "database"] } })

```

### 27. skills array me "Java" aur "Node" dono ho toh employees kaise retrieve karoge?

```js

    db.collection_name.find({ skills: { $all: ["Java", "Node"] } })

```

### 28. subjects array me "Math" aur "Science" dono ho toh students kaise filter karoge?

```js

    db.collection_name.find({ subjects: { $all: ["Math", "Science"] } })

```

### 29. features array me "wifi" aur "bluetooth" dono ho toh products kaise search karoge?

```js

    db.collection_name.find({ features: { $all: ["wifi", "bluetooth"] } })

```

### 30. hobbies array me "cricket" aur "music" dono ho toh users kaise find karoge?

```js

    db.collection_name.find({ hobbies: { $all: ["cricket", "music"] } })

```

### 31. colors array me "red" aur "black" dono ho toh items kaise retrieve karoge?

```js

    db.collection_name.find({ colors: { $all: ["red", "black"] } })

```

### 32. permissions array me "read" aur "write" dono ho toh users kaise filter karoge?

```js

    db.collection_name.find({ permissions: { $all: ["read", "write"] } })

```

### 33. languages array me "Hindi" aur "English" dono ho toh profiles kaise find karoge?

```js

    db.collection_name.find({ languages: { $all: ["Hindi", "English"] } })

```

### 34. categories array me "men" aur "shoes" dono ho toh products kaise search karoge?

```js

    db.collection_name.find({ categories: { $all: ["men", "shoes"] } })

```

### 35. ingredients array me "milk" aur "sugar" dono ho toh items kaise retrieve karoge?

```js

    db.collection_name.find({ ingredients: { $all: ["milk", "sugar"] } })

```

### 36. citiesVisited array me "Delhi" aur "Goa" dono ho toh users kaise filter karoge?

```js

    db.collection_name.find({ citiesVisited: { $all: ["Delhi", "Goa"] } })

```

### 37. courses array me "DBMS" aur "OS" dono ho toh students kaise find karoge?

```js

    db.collection_name.find({ courses: { $all: ["DBMS", "OS"] } })

```

### 38. tools array me "Git" aur "Docker" dono ho toh employees kaise retrieve karoge?

```js

    db.collection_name.find({ tools: { $all: ["Git", "Docker"] } })

```

### 39. genres array me "action" aur "thriller" dono ho toh movies kaise search karoge?

```js

    db.collection_name.find({ genres: { $all: ["action", "thriller"] } })

```

### 40. devices array me "mobile" aur "tablet" dono ho toh users kaise filter karoge?

```js

    db.collection_name.find({ devices: { $all: ["mobile", "tablet"] } })

```

---

## 🔹 $push (15 Questions)

### 41. skills array me ek naya skill "MongoDB" add karna ho toh $push kaise use karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { skills: "MongoDB" } })
    
```

### 42. comments array me new comment add karna ho toh query kaise likhoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { comments: "This is New Comment" } })

```

### 43. tags array me "backend" push karna ho toh kaise karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { tags: "backend" } })

```

### 44. orders array me ek new order object push karna ho toh kaise update karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { orders: { orderId: 101, total: 500 } } })

```

### 45. history array me ek naya entry push karna ho toh query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { history: { action: "login", time: new Date() } } })

```

### 46. messages array me new message add karna ho toh $push kaise use karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { messages: "Hey, Dude!" } })

```

### 47. notifications array me ek item add karna ho toh kaise karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { notifications: "Hey, Dude!" } })

```

### 48. reviews array me new review push karna ho toh kaise likhoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { reviews: { user: "Aman", rating: 5, comment: "Excellent" } } })

```

### 49. subjects array me "English" add karna ho toh query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { subjects: "English" } })

```

### 50. visitedCities array me "Jaipur" push karna ho toh kaise update karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { visitedCities: "Jaipur" } })

```

### 51. scores array me new score add karna ho toh query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { scores: 360 } })

```

### 52. friends array me new friendId push karna ho toh kaise likhoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { friends: 2006 } })

```

### 53. emails array me new email push karna ho toh query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { emails: "newfriends2@demo.com" } })

```

### 54. phones array me ek number add karna ho toh $push kaise use karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { phones: "0123456789" } })

```

### 55. items array me new item push karna ho toh query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { items: { name: "Pen", qty: 2 } } })

```

---

## 🔹 $addToSet (10 Questions)

### 56. skills array me "MongoDB" add karna ho but duplicate avoid karna ho toh kaunsa operator use karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { skills: "MongoDB" } })

```

### 57. tags array me "sale" add karna ho without duplicates, query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { tags: "sale" } })

```

### 58. citiesVisited array me "Goa" add karna ho but already exist ho toh repeat na ho, kaise karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { citiesVisited: "Goa" } })

```

### 59. friends array me new friendId add karna ho without duplicates, kaise update karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { friends: 2006 } })

```

### 60. courses array me "NodeJS" add karna ho but duplicate na bane, query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { courses: "NodeJS" } })

```

### 61. permissions array me "write" add karna ho but duplicate avoid karna ho, kaise karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { permissions: "write" } })

```

### 62. emails array me ek email add karna ho without repeat, kaise update karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { emails: "myfriends2@demo.com" } })

```

### 63. numbers array me 10 add karna ho but duplicate na ho, query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { numbers: 10 } })

```

### 64. likedPosts array me postId add karna ho without duplicate, kaise karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { likedPosts: 101 } })

```

### 65. savedItems array me itemId add karna ho without duplicates, kaise update karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $addToSet: { savedItems: 434 } })

```

---

## 🔹 $each (10 Questions)

### 66. skills array me ek saath 3 skills add karne ho ("Java","MongoDB","Node"), $each kaise use karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { skills: { $each: ["Java", "MongoDB", "Node"] } } })

```

### 67. tags array me multiple tags add karne ho, query kaise likhoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { tags: { $each: ["sales", "trends", "live"] } } })

```

### 68. numbers array me multiple values add karne ho, $each kaise use karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { numbers: { $each: [32,35,65,24,86] } } })

```

### 69. friends array me multiple friendIds add karne ho, kaise update karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { friends: { $each: [2006, 2007, 2008, 2003, 2001] } } })

```

### 70. comments array me multiple comments add karne ho, query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { comments: { $each: ["Nice", "Good"] } } })

```

### 71. subjects array me multiple subjects add karne ho, kaise push karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { subjects: { $each: ["Hindi", "Math", "BK", "IT"] } } })

```

### 72. orders array me multiple orders objects insert karne ho, $each kaise use karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { orders: { $each: [{ orderId: 1, total: 200 }, { orderId: 2, total: 400 }] } } })

```

### 73. messages array me multiple messages add karne ho, query kaise hogi?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { messages: { $each: ["Good Morning", "Superb!!"] } } })

```

### 74. notifications array me multiple values push karne ho, kaise update karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { notifications: { $each: ["Msg1", "Msg2", "Msg3"] } } })

```

### 75. emails array me multiple emails insert karne ho, $each kaise use karoge?

```js

    db.collection_name.updateMany({userId: 1}, { $push: { emails: { $each: ["a@gmail.com", "b@gmail.com"] } } })

```

---

## 🔹 $position (5 Questions)

### 76. skills array me "MongoDB" ko start (0 index) pe insert karna ho toh $position kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { skills: { $each: ["MongoDB"], $position: 0 } } }
    )

```

### 77. tags array me new tag ko second position pe add karna ho toh query kaise hogi?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { tags: { $each: ["HD"], $position: 1 } } }
    )

```

### 78. comments array me new comment ko first position pe insert karna ho toh kaise update karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { comments: { $each: ["first"], $position: 0 } } }
    )

```

### 79. notifications array me item ko beginning me insert karna ho toh $position kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { notifications: { $each: ["hello sir"], $position: 0 } } }
    )

```

### 80. friends array me new friendId ko index 1 pe add karna ho toh query kaise likhoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { friends: { $each: [3455], $position: 1 } } }
    )

```

---

## 🔹 $sort (5 Questions)

### 81. scores array ko descending order me store karna ho while pushing new scores, $sort kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { scores: { $each: [4353], $sort: -1 } } }
    )

```

### 82. ratings array ko ascending order me maintain karna ho, $push + $sort kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { ratings: { $each: [4.4], $sort: 1 } } }
    )

```

### 83. prices array me new value push karne ke baad array sort karna ho, query kaise hogi?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { prices: { $each: [3456], $sort: 1 } } }
    )

```

### 84. dates array ko latest first order me sort karna ho, $sort kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { dates: { $each: [new Date()], $sort: -1 } } }
    )

```

### 85. marks array ko ascending sort karna ho after adding values, query kaise likhoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $push: { marks: { $each: [345], $sort: 1 } } }
    )

```

---

## 🔹 $pop (5 Questions)

### 86. comments array ka last element delete karna ho toh $pop kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pop: { comments: 1 } }
    )

```

### 87. notifications array ka first element remove karna ho toh $pop query kaise hogi?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pop: { notifications: -1 } }
    )

```

### 88. history array ka last record remove karna ho toh query kaise likhoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pop: { history: 1 } }
    )

```

### 89. messages array ka first message delete karna ho toh $pop kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pop: { messages: -1 } }
    )

```

### 90. scores array ka last score remove karna ho toh query kaise hogi?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pop: { scores: 1 } }
    )

```

---

## 🔹 $pull (5 Questions)

### 91. skills array se "Java" remove karna ho toh $pull kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pull: { skills: "Java" } }
    )

```

### 92. tags array se "sale" delete karna ho toh query kaise likhoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pull: { tags: "sale" } }
    )

```

### 93. numbers array se 0 remove karna ho toh $pull kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pull: { numbers: 0 } }
    )

```

### 94. friends array se ek specific friendId remove karna ho toh query kaise hogi?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pull: { friends: 2008 } }
    )

```

### 95. citiesVisited array se "Delhi" remove karna ho toh $pull query kaise hogi?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pull: { citiesVisited: "Delhi" } }
    )

```

---

## 🔹 $pullAll (5 Questions)

### 96. skills array se "Java" aur "Python" dono remove karne ho toh $pullAll kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pullAll: { skills: ["Java", "Python"] } }
    )

```

### 97. tags array se multiple tags remove karne ho ("old","expired"), query kaise hogi?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pullAll: { tags: ["old", "expired"] } }
    )

```

### 98. numbers array se multiple values remove karne ho (1,2,3), $pullAll kaise use karoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pullAll: { numbers: [1,2,3] } }
    )

```

### 99. citiesVisited array se multiple cities remove karne ho ("Goa","Pune"), query kaise likhoge?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pullAll: { citiesVisited: ["Goa", "Pune"] } }
    )

```

### 100. items array se multiple items remove karne ho ek saath, $pullAll query kaise hogi?

```js

    db.collection_name.updateMany(
        {userId: 1}, 
        { $pullAll: { items: ["Pen", "Book"] } }
    )

```
