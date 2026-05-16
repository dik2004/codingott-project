# Section 1: insertOne() Practice (1–20)

1. Please students collection me ek document insert karo jisme fields
ho: name, age, grade, city.

```
use mongo
```

```
db.students.insertOne()
```

```js

    {
        name: "Sarfraj",
        age: 18,
        grade: 'A',
        city: "Mumbai"
    }

```


2. Please students collection me ek student insert karo jiska name
"Aman", age 21, grade "B", city "Mumbai" ho.

```js

    {
        name: "Aman",
        age: 21,
        grade: 'B',
        city: "Mumbai"
    }

```

3. Please students collection me ek student insert karo jiska name
"Neha", age 19, grade "A", city "Pune" ho.

```js

    {
        name: "Neha",
        age: 19,
        grade: 'A',
        city: "Pune"
    }

```

4. Please students collection me ek document insert karo jisme name
"Riya", age 22, grade "C", city "Delhi" ho.

```js

    {
        name: "Riya",
        age: 22,
        grade: 'C',
        city: "Delhi"
    }

```

5. Please students collection me ek student insert karo jiska name
"Karan", age 20, grade "A", city "Jaipur" ho.

```js

    {
        name: "Karan",
        age: 20,
        grade: 'A',
        city: "Jaipur"
    }

```

6. Please students collection me ek student insert karo jiska name
"Sahil", age 18, grade "B", city "Lucknow" ho.

```js

    {
        name: "Sahil",
        age: 18,
        grade: 'B',
        city: "Lucknow"
    }

```

7. Please students collection me ek student insert karo jiska name
"Priya", age 23, grade "A", city "Bhopal" ho.

```js

    {
        name: "Priya",
        age: 23,
        grade: 'A',
        city: "Bhopal"
    }

```

8. Please students collection me ek student insert karo jiska name
"Anjali", age 20, grade "C", city "Noida" ho.

```js

    {
        name: "Anjali",
        age: 20,
        grade: 'C',
        city: "Noida"
    }

```

9. Please students collection me ek student insert karo jiska name
"Rohit", age 24, grade "B", city "Chandigarh" ho.

```js

    {
        name: "Rohit",
        age: 24,
        grade: 'B',
        city: "Chandigarh"
    }

```

10. Please students collection me ek student insert karo jiska name
"Simran", age 19, grade "A", city "Amritsar" ho.

```js

    {
        name: "Simran",
        age: 19,
        grade: 'A',
        city: "Amritsar"
    }

```

11. Please students collection me ek student insert karo jiska name
"Vikas", age 22, grade "B", city "Kolkata" ho.

```js

    {
        name: "Vikas",
        age: 22,
        grade: 'B',
        city: "Kolkata"
    }

```

12. Please students collection me ek student insert karo jiska name
"Ishaan", age 21, grade "A", city "Hyderabad" ho.

```js

    {
        name: "Ishaan",
        age: 21,
        grade: 'A',
        city: "Hyderabad"
    }

```

13. Please students collection me ek student insert karo jiska name
"Meera", age 20, grade "C", city "Indore" ho.

```js

    {
        name: "Meera",
        age: 20,
        grade: 'C',
        city: "Indore"
    }

```

14. Please students collection me ek student insert karo jiska name
"Nitin", age 25, grade "B", city "Patna" ho.

```js

    {
        name: "Nitin",
        age: 25,
        grade: 'B',
        city: "Patna"
    }

```

15. Please students collection me ek student insert karo jiska name
"Divya", age 18, grade "A", city "Ranchi" ho.

```js

    {
        name: "Divya",
        age: 18,
        grade: 'A',
        city: "Ranchi"
    }

```

16. Please students collection me ek student insert karo jiska name
"Harsh", age 23, grade "B", city "Gurgaon" ho.

```js

    {
        name: "Harsh",
        age: 23,
        grade: 'B',
        city: "Gurgaon"
    }

```

17. Please students collection me ek student insert karo jiska name
"Pooja", age 19, grade "C", city "Kanpur" ho.

```js

    {
        name: "Pooja",
        age: 19,
        grade: 'C',
        city: "Kanpur"
    }

```

18. Please students collection me ek student insert karo jiska name
"Deepak", age 21, grade "A", city "Agra" ho.

```js

    {
        name: "Deepak",
        age: 21,
        grade: 'A',
        city: "Agra"
    }

```

19. Please students collection me ek student insert karo jiska name
"Sneha", age 22, grade "B", city "Surat" ho.

```js

    {
        name: "Sneha",
        age: 22,
        grade: 'B',
        city: "Surat"
    }

```

20. Please students collection me ek student insert karo jiska name
"Arjun", age 20, grade "A", city "Ahmedabad" ho.

```js

    {
        name: "Arjun",
        age: 20,
        grade: 'A',
        city: "Ahmedabad"
    }

```

# Section 2: insertMany() Practice (21–40)

21. Please books collection me minimum 4 books insert karo with
fields: title, author, price, category.

```
db.books.insertMany([])
```

```js

    {
        title: "Book 1",
        author: "Author 1",
        price: 100,
        category: "Category 1"
    },
    {
        title: "Book 2",
        author: "Author 2 ",
        price: 200,
        category: "Category 2"
    },
    {
        title: "Book 3",
        author: "Author 3",
        price: 300,
        category: "Category 3"
    },
    {
        title: "Book 4",
        author: "Author 4",
        price: 400,
        category: "Category 4"
    }

```

22. Please books collection me 5 books insert karo jisme category
"Technology" ho.

```js

    {
        title: "Book 1",
        author: "Author 1",
        price: 100,
        category: "Technology"
    },
    {
        title: "Book 2",
        author: "Author 2 ",
        price: 200,
        category: "Technology"
    },
    {
        title: "Book 3",
        author: "Author 3",
        price: 300,
        category: "Technology"
    },
    {
        title: "Book 4",
        author: "Author 4",
        price: 400,
        category: "Technology"
    },
    {
        title: "Book 5",
        author: "Author 5",
        price: 500,
        category: "Technology"
    }

```

23. Please books collection me 4 books insert karo jisme 2 books
category "Fiction" ho.

```js

    {
        title: "Fiction Book 1",
        author: "Author 1",
        price: 100,
        category: "Fiction"
    },
    {
        title: "Fiction Book 2",
        author: "Author 2 ",
        price: 200,
        category: "Fiction"
    },
    {
        title: "Fiction Book 3",
        author: "Author 3",
        price: 300,
        category: "Technology"
    },
    {
        title: "Fiction Book 4",
        author: "Author 4",
        price: 400,
        category: "Technology"
    }

```

24. Please books collection me 6 books insert karo with random price
values.

```js

    {
        title: "Random Price 1",
        author: "Random Author 1",
        price: 99,
        category: "Random Category 1"
    },
    {
        title: "Random Price 2",
        author: "Random Author 2",
        price: 199,
        category: "Random Category 2"
    },
    {
        title: "Random Price 3",
        author: "Random Author 3",
        price: 299,
        category: "Random Category 3"
    },
    {
        title: "Random Price 4",
        author: "Random Author 4",
        price: 399,
        category: "Random Category 4"
    },
    {
        title: "Random Price 5",
        author: "Random Author 5",
        price: 499,
        category: "Random Category 5"
    },
    {
        title: "Random Price 6",
        author: "Random Author 6",
        price: 599,
        category: "Random Category 6"
    }

```

25. Please books collection me 4 books insert karo jisme authors
repeat ho rahe ho.

```js

    {
        title: "Repeated Author Book 1",
        author: "Repeated Author",
        price: 10,
        category: "Repeated Author Book Category 1"
    },
    {
        title: "Repeated Author Book 2",
        author: "Repeated Author",
        price: 20,
        category: "Repeated Author Book Category 2"
    },
    {
        title: "Repeated Author Book 3",
        author: "Repeated Author",
        price: 30,
        category: "Repeated Author Book Category 3"
    },
    {
        title: "Repeated Author Book 4",
        author: "Repeated Author",
        price: 40,
        category: "Repeated Author Book Category 4"
    }

```

26. Please books collection me 5 books insert karo jisme ek book ka
title "JavaScript Basics" ho.

```js

    {
        title: "JavaScript Basics",
        author: "Raju",
        price: 344,
        category: "webDevs"
    },
    {
        title: "Python",
        author: "Raju",
        price: 355,
        category: "webDevs"
    },
    {
        title: "Mern Stack",
        author: "Raju",
        price: 443,
        category: "webDevs"
    },
    {
        title: "Node.JS",
        author: "Raju",
        price: 645,
        category: "webDevs"
    },
    {
        title: "Tailwind CSS",
        author: "Raju",
        price: 346,
        category: "webDevs"
    }

```

27. Please books collection me 4 books insert karo jisme ek book ka
category "Database" ho.

```js

    {
        title: "Mongo DB",
        author: "Sarfraj",
        price: 456,
        category: "Database"
    },
    {
        title: "SQL - Injection",
        author: "Sarfraj",
        price: 784,
        category: "server"
    },
    {
        title: "Non-SQL",
        author: "Sarfraj",
        price: 565,
        category: "server"
    },
    {
        title: "DBMS",
        author: "Sarfraj",
        price: 546,
        category: "server"
    }

```

28. Please books collection me 5 books insert karo jisme ek book ka
price 999 ho.

```js

    {
        title: "Acer",
        author: "",
        price: 999,
        category: "laptop"
    },
    {
        title: "Dell",
        author: "",
        price: 354,
        category: "laptop"
    },
    {
        title: "Samsung",
        author: "",
        price: 657,
        category: "laptop"
    },
    {
        title: "LG",
        author: "",
        price: 345,
        category: "laptop"
    },
    {
        title: "Apple",
        author: "",
        price: 678,
        category: "laptop"
    }

```

29. Please books collection me 4 books insert karo jisme sabka
category different ho.

```js

    {
        title: "Different Category Book 1",
        author: "differentiator",
        price: 3457,
        category: "Electronics"
    },
    {
        title: "Different Category Book 2",
        author: "differentiator",
        price: 5467,
        category: "Plastics"
    },
    {
        title: "Different Category Book 3",
        author: "differentiator",
        price: 6576,
        category: "Clothes"
    },
    {
        title: "Different Category Book 4",
        author: "differentiator",
        price: 7456,
        category: "Vehicles"
    }

```

30. Please books collection me 6 books insert karo jisme 3 books
same author ke ho.

```js

    {
        title: "Life Changer",
        author: "priya",
        price: 453,
        category: "success"
    },
    {
        title: "Understand World",
        author: "priya",
        price: 565,
        category: "success"
    },
    {
        title: "World War 3",
        author: "priya",
        price: 356,
        category: "success"
    },
    {
        title: "SpiderMan 2",
        author: "Maaz",
        price: 908,
        category: "hollywood"
    },
    {
        title: "Marvels",
        author: "Maaz",
        price: 786,
        category: "hollywood"
    },
    {
        title: "Avengers",
        author: "Maaz",
        price: 546,
        category: "hollywood"
    }

```

31. Please students collection me insertMany() use karke 5 students
add karo.

```js

  {
    name: "Rahul Sharma",
    age: 20,
    grade: "B",
    city: "Delhi"
  },
  {
    name: "Priya Verma",
    age: 19,
    grade: "A",
    city: "Mumbai"
  },
  {
    name: "Amit Singh",
    age: 21,
    grade: "C",
    city: "Pune"
  },
  {
    name: "Neha Gupta",
    age: 22,
    grade: "B",
    city: "Jaipur"
  },
  {
    name: "Sahil Khan",
    age: 18,
    grade: "A",
    city: "Lucknow"
  }

```

32. Please students collection me insertMany() use karke 8 students
add karo.

```js

  {
    name: "Anjali Mehta",
    age: 20,
    grade: "A",
    city: "Delhi"
  },
  {
    name: "Rohit Yadav",
    age: 23,
    grade: "B",
    city: "Noida"
  },
  {
    name: "Simran Kaur",
    age: 19,
    grade: "A",
    city: "Chandigarh"
  },
  {
    name: "Vikas Sharma",
    age: 24,
    grade: "C",
    city: "Bhopal"
  },
  {
    name: "Pooja Jain",
    age: 21,
    grade: "B",
    city: "Indore"
  },
  {
    name: "Arjun Patel",
    age: 22,
    grade: "A",
    city: "Ahmedabad"
  },
  {
    name: "Karan Malhotra",
    age: 18,
    grade: "B",
    city: "Delhi"
  },
  {
    name: "Sneha Roy",
    age: 25,
    grade: "C",
    city: "Kolkata"
  }


```

33. Please students collection me insertMany() use karke 4 students
add karo jinke grade "A" ho.

```js

  {
    name: "Riya Kapoor",
    age: 20,
    grade: "A",
    city: "Delhi"
  },
  {
    name: "Mohit Agarwal",
    age: 22,
    grade: "A",
    city: "Jaipur"
  },
  {
    name: "Sanya Singh",
    age: 19,
    grade: "A",
    city: "Mumbai"
  },
  {
    name: "Aditya Mishra",
    age: 21,
    grade: "A",
    city: "Pune"
  }

```

34. Please students collection me insertMany() use karke 4 students
add karo jinke city "Delhi" ho.

```js

  {
    name: "Nitin Sharma",
    age: 20,
    grade: "B",
    city: "Delhi"
  },
  {
    name: "Komal Verma",
    age: 22,
    grade: "A",
    city: "Delhi"
  },
  {
    name: "Deepak Singh",
    age: 19,
    grade: "C",
    city: "Delhi"
  },
  {
    name: "Ayesha Khan",
    age: 21,
    grade: "B",
    city: "Delhi"
  }

```

35. Please students collection me insertMany() use karke 6 students
add karo jinke age 18 to 25 ke beech ho.

```js

  {
    name: "Ravi Kumar",
    age: 18,
    grade: "B",
    city: "Patna"
  },
  {
    name: "Ishita Sharma",
    age: 19,
    grade: "A",
    city: "Delhi"
  },
  {
    name: "Manish Verma",
    age: 20,
    grade: "C",
    city: "Mumbai"
  },
  {
    name: "Aarti Singh",
    age: 21,
    grade: "B",
    city: "Jaipur"
  },
  {
    name: "Harsh Patel",
    age: 23,
    grade: "A",
    city: "Surat"
  },
  {
    name: "Naina Gupta",
    age: 25,
    grade: "B",
    city: "Kolkata"
  }

```

36. Please books collection me insertMany() use karke 7 books add
karo.

```js

  {
    title: "JavaScript Basics",
    author: "Ramesh Gupta",
    price: 350,
    category: "Programming"
  },
  {
    title: "MongoDB Guide",
    author: "Amit Sharma",
    price: 450,
    category: "Database"
  },
  {
    title: "Python for Beginners",
    author: "Neha Verma",
    price: 500,
    category: "Programming"
  },
  {
    title: "Mathematics Class 10",
    author: "S. R. Mehta",
    price: 250,
    category: "Education"
  },
  {
    title: "Science Fundamentals",
    author: "Pooja Singh",
    price: 300,
    category: "Education"
  },
  {
    title: "History of India",
    author: "Karan Roy",
    price: 400,
    category: "History"
  },
  {
    title: "English Grammar",
    author: "Riya Kapoor",
    price: 280,
    category: "Education"
  }

```

37. Please books collection me insertMany() use karke 4 books add
karo jisme price 200 se 500 ke beech ho.

```js

  {
    title: "C Programming",
    author: "Arjun Patel",
    price: 220,
    category: "Programming"
  },
  {
    title: "Data Structures",
    author: "Vikas Sharma",
    price: 450,
    category: "Computer Science"
  },
  {
    title: "Operating System",
    author: "Rahul Singh",
    price: 390,
    category: "Computer Science"
  },
  {
    title: "Economics Basics",
    author: "Sneha Jain",
    price: 300,
    category: "Education"
  }

```

38. Please books collection me insertMany() use karke 5 books add
karo jisme category "Education" ho.

```js

  {
    title: "Physics Class 12",
    author: "R. K. Verma",
    price: 480,
    category: "Education"
  },
  {
    title: "Chemistry Notes",
    author: "Anjali Mehta",
    price: 420,
    category: "Education"
  },
  {
    title: "Biology Basics",
    author: "Deepak Roy",
    price: 350,
    category: "Education"
  },
  {
    title: "Hindi Vyakaran",
    author: "Suresh Sharma",
    price: 250,
    category: "Education"
  },
  {
    title: "Computer Fundamentals",
    author: "Mohit Gupta",
    price: 500,
    category: "Education"
  }

```

39. Please books collection me insertMany() use karke 4 books add
karo jisme title unique ho.

```js

  {
    title: "Unique Book 101",
    author: "Author A",
    price: 300,
    category: "General"
  },
  {
    title: "Unique Book 102",
    author: "Author B",
    price: 350,
    category: "General"
  },
  {
    title: "Unique Book 103",
    author: "Author C",
    price: 400,
    category: "General"
  },
  {
    title: "Unique Book 104",
    author: "Author D",
    price: 450,
    category: "General"
  }

```

40. Please books collection me insertMany() use karke 10 books add
karo (practice ke liye).

```js

  {
    title: "HTML & CSS",
    author: "Ravi Sharma",
    price: 250,
    category: "Web Development"
  },
  {
    title: "React Basics",
    author: "Neha Singh",
    price: 500,
    category: "Web Development"
  },
  {
    title: "Node.js Mastery",
    author: "Amit Verma",
    price: 550,
    category: "Programming"
  },
  {
    title: "DBMS Concepts",
    author: "Karan Mehta",
    price: 450,
    category: "Database"
  },
  {
    title: "Networking Essentials",
    author: "Priya Gupta",
    price: 400,
    category: "Computer Science"
  },
  {
    title: "AI Introduction",
    author: "Sahil Roy",
    price: 650,
    category: "Technology"
  },
  {
    title: "Machine Learning",
    author: "Rohit Jain",
    price: 700,
    category: "Technology"
  },
  {
    title: "Java Complete Guide",
    author: "Simran Kaur",
    price: 600,
    category: "Programming"
  },
  {
    title: "Cyber Security Basics",
    author: "Arjun Singh",
    price: 480,
    category: "Security"
  },
  {
    title: "Cloud Computing",
    author: "Anjali Kapoor",
    price: 550,
    category: "Technology"
  }

```

# Section 3: find() Basic Retrieval (41–55)

41. Please students collection se saare documents retrieve karo.

```js

    db.students.find()

```

42. Please books collection se saare documents retrieve karo.

```js

    db.books.find()

```

43. Please students collection ka output readable banane ke liye
properly find() run karo.

```js

    db.students.find({}, {_id: 0})

```

44. Please books collection ka output check karo using find().

```js

   db.books.find({}, {_id: 0})

```

45. Please students collection me total inserted students ko find() se
check karo.

```js

   db.students.countDocuments()

```

46. Please books collection me total inserted books ko find() se check
karo.

```js

   db.books.countDocuments()

```

47. Please students collection me sirf city "Delhi" wale students
retrieve karo.

```js

   db.students.find({city: "Delhi"})

```

```js

   db.students.find({city: "Delhi"}, {_id: 0})

```

48. Please students collection me sirf grade "A" wale students retrieve
karo.

```js

   db.students.find({grade: 'A'})
   
```

```js

   db.students.find({grade: 'A'}, {_id: 0})

```

49. Please students collection me age 20 wale students retrieve karo.

```js

   db.students.find({age: 20})
   
```

```js

   db.students.find({age: 20}, {_id: 0})
   
```

50. Please books collection me category "Technology" wali books
retrieve karo.

```js

   db.books.find({category: "Technology"})
   
```

```js

   db.books.find({category: "Technology"}, {_id: 0})
   
```

51. Please books collection me category "Fiction" wali books retrieve
karo.

```js

   db.books.find({category: "Fiction"})
   
```

```js

   db.books.find({category: "Fiction"}, {_id: 0})
   
```

52. Please books collection me author "John" wali books retrieve karo.

```js

   db.books.find({author: "John"})
   
```

```js

   db.books.find({author: "John"}, {_id: 0})
   
```

53. Please books collection me price 500 wali books retrieve karo.

```js

   db.books.find({price: 500})
   
```

```js

   db.books.find({price: 500}, {_id: 0})
   
```

54. Please students collection me city "Mumbai" wale students retrieve
karo.

```js

   db.students.find({city: "Mumbai"})
   
```

```js

   db.students.find({city: "Mumbai"}, {_id: 0})
   
```

55. Please students collection me grade "B" wale students retrieve
karo.

```js

   db.students.find({grade: "B"})
   
```

```js

   db.students.find({grade: "B"}, {_id: 0})
   
```

# Section 4: Projection Practice (56–75)

56. Please students collection se saare students retrieve karo but sirf
name and age show karo.

```js

   db.students.find({}, {_id: 0, name: 1, age:1})
   
```

57. Please students collection se sirf name and city return karo.

```js

   db.students.find({}, {_id: 0, name: 1, city:1})
   
```

58. Please students collection se sirf name and grade return karo.

```js

   db.students.find({}, {_id: 0, name: 1, grade:1})
   
```

59. Please students collection se sirf age and grade return karo.

```js

   db.students.find({}, {_id: 0, age: 1, grade:1})
   
```

60. Please students collection se sirf city return karo.

```js

   db.students.find({}, {_id: 0, city: 1})
   
```

61. Please books collection se saare documents retrieve karo but sirf
title and author return karo.

```js

   db.books.find({}, {_id: 0, title: 1, author: 1})
   
```

62. Please books collection se sirf title and price return karo.

```js

  db.books.find({}, {_id: 0, title: 1, price: 1})
   
```

63. Please books collection se sirf title and category return karo.

```js

  db.books.find({}, {_id: 0, title: 1, category: 1})
   
```

64. Please books collection se sirf author and category return karo.

```js

  db.books.find({}, {_id: 0, author: 1, category: 1})
   
```

65. Please books collection se sirf price return karo.

```js

  db.books.find({}, {_id: 0, price: 1})
   
```

66. Please students collection se name and age return karo but _id
hide karo.

```js

  db.students.find({}, {_id: 0, name: 1, age: 1})
   
```

67. Please books collection se title and author return karo but _id hide
karo.

```js

  db.books.find({}, {_id: 0, title: 1, author: 1})
   
```

68. Please books collection se title and price return karo but _id hide
karo.

```js

  db.books.find({}, {_id: 0, title: 1, price: 1})
   
```

69. Please students collection se name, grade return karo but _id hide
karo.

```js

  db.students.find({}, {_id: 0, name: 1, grade: 1})
   
```

70. Please students collection se sirf grade return karo and _id hide
karo.

```js

  db.students.find({}, {_id: 0, grade: 1})
   
```

71. Please books collection se sirf category return karo and _id hide
karo.

```js

  db.books.find({}, {_id: 0, category: 1})
  
```

72. Please books collection se sirf author return karo and _id hide
karo.

```js

  db.books.find({}, {_id: 0, author: 1})
   
```

73. Please students collection se sirf age return karo and _id hide
karo.

```js

  db.students.find({}, {_id: 0, age: 1})
  
   
```

74. Please students collection se name and city return karo but _id
hide karo.

```js

  db.students.find({}, {_id: 0, name: 1, city: 1})
   
```

75. Please books collection se title and category return karo but _id
hide karo.

```js

  db.books.find({}, {_id: 0, title: 1, category: 1})
   
```

# Section 5: findOne() Practice (76–95)

76. Please books collection me se ek book retrieve karo jiska title
"JavaScript Basics" ho.

```js

  db.books.findOne({title: "JavaScript Basics"})
   
```

77. Please books collection me se ek book retrieve karo jiska category
"Technology" ho.

```js

  db.books.findOne({category: "Technology"})
  
```

78. Please books collection me se ek book retrieve karo jiska author
"David" ho.

```js

  db.books.findOne({author: "David"})
   
```

79. Please students collection me se ek student retrieve karo jiska
name "Aman" ho.

```js

  db.students.findOne({name: "Aman"})
   
```

80. Please students collection me se ek student retrieve karo jiska city
"Delhi" ho.

```js

  db.students.findOne({city: "Delhi"})
   
```

81. Please students collection me se ek student retrieve karo jiska
grade "A" ho.

```js

  db.students.findOne({grade: "A"})
   
```

82. Please books collection me se findOne() use karke sirf title and
price return karo where title = "JavaScript Basics".

```js

  db.books.findOne({title: "JavaScript Basics"}, {price: 1, title: 1})
   
```

83. Please books collection me se findOne() use karke sirf title and
author return karo where category = "Technology".

```js

  db.books.findOne({category: "Technology"}, {author: 1, title: 1})
   
```

84. Please books collection me se findOne() use karke sirf author and
price return karo where title = "MongoDB Guide".

```js

  db.books.findOne({title: "MongoDB Guide"}, {price: 1, author: 1})
   
```

85. Please books collection me se findOne() use karke sirf title return
karo where author = "John".

```js

  db.books.findOne({author: "John"}, {title: 1})
   
```

86. Please students collection me se findOne() use karke sirf name
and age return karo where name = "Neha".

```js

  db.students.findOne({name: "Neha"}, {name: 1, age: 1})
   
```

87. Please students collection me se findOne() use karke sirf name
and city return karo where grade = "B".

```js

  db.students.findOne({grade: "B"}, {name: 1, city: 1})
   
```

88. Please students collection me se findOne() use karke sirf grade
return karo where name = "Riya".

```js

  db.students.findOne({name: "Riya"}, {grade: 1})
   
```

89. Please books collection me se findOne() use karke sirf category
return karo where title = "JavaScript Basics".

```js

  db.books.findOne({title: "JavaScript Basics"}, {category: 1})
   
```

90. Please books collection me se findOne() use karke sirf title and
category return karo where price = 999.

```js

  db.books.findOne({price: 999}, {title: 1, category: 1})
   
```

91. Please students collection me se findOne() use karke sirf name
return karo where age = 20.

```js

  db.students.findOne({age: 20}, {name: 1})
   
```

92. Please students collection me se findOne() use karke sirf city
return karo where name = "Karan".

```js

  db.students.findOne({name: "Karan"}, {city: 1})
   
```

93. Please books collection me se findOne() use karke sirf title and
price return karo where category = "Education".

```js

  db.books.findOne({category: "Education"}, {title: 1, price: 1})
   
```

94. Please books collection me se findOne() use karke sirf title return
karo where category = "Database".

```js

  db.books.findOne({category: "Database"}, {title: 1})
   
```

95. Please students collection me se findOne() use karke sirf name
and grade return karo where city = "Pune".

```js

  db.students.findOne({city: "Pune"}, {name: 1, grade: 1})
   
```

# Section 6: limit() Practice (96–115)

96. Please students collection se sirf 3 documents retrieve karo using
limit().

```js

    db.students.find().limit(3)

```

97. Please students collection se sirf 5 documents retrieve karo using
limit().

```js

    db.students.find().limit(5)

```

98. Please students collection se sirf 1 document retrieve karo using
limit().

```js

    db.students.find().limit(1)

```

99. Please books collection se sirf 2 documents retrieve karo using
limit().

```js

    db.books.find().limit(2)

```

100. Please books collection se sirf 4 documents retrieve karo using
limit().

```js

    db.books.find().limit(4)

```

101. Please books collection se sirf 1 document retrieve karo using
limit().

```js

    db.books.find().limit(1)

```

102. Please students collection se name and age return karo but limit
sirf 3 rakho.

```js

    db.students.find({}, {name: 1, age: 1}).limit(3)

```

103. Please students collection se name and city return karo but limit
sirf 2 rakho.

```js

    db.students.find({}, {name: 1, city: 1}).limit(2)

```

104. Please students collection se grade and city return karo but limit
sirf 4 rakho.

```js

    db.students.find({}, {grade: 1, city: 1}).limit(4)

```

105. Please books collection se title and author return karo but limit sirf
3 rakho.

```js

    db.books.find({}, {title: 1, author: 1}).limit(3)

```

106. Please books collection se title and price return karo but limit sirf 2
rakho.

```js

    db.books.find({}, {title: 1, price: 1}).limit(2)

```

107. Please books collection se author and category return karo but
limit sirf 5 rakho.

```js

    db.books.find({}, {category: 1, author: 1}).limit(5)

```

108. Please books collection se sirf category return karo but limit sirf 4
rakho.

```js

    db.books.find({}, {category: 1}).limit(4)
    

```

109. Please students collection se sirf age return karo but limit sirf 6
rakho.

```js

    db.students.find({}, {age: 1}).limit(6)

```

110. Please students collection se sirf name return karo but limit sirf 10
rakho.

```js

    db.students.find({}, {name: 1}).limit(10)

```

111. Please books collection se sirf title return karo but limit sirf 7 rakho.

```js

    db.books.find({}, {title: 1}).limit(7)
    

```

112. Please students collection se sirf grade return karo but limit sirf 5
rakho.

```js

    db.students.find({}, {grade: 1}).limit(5)

```

113. Please books collection se sirf price return karo but limit sirf 3
rakho.

```js

    db.books.find({}, {price: 1}).limit(3)

```

114. Please books collection se title and category return karo but limit
sirf 2 rakho.

```js

    db.books.find({}, {title: 1, category: 1}).limit(2)

```

115. Please students collection se name and grade return karo but limit
sirf 3 rakho.

```js

    db.students.find({}, {name: 1, grade: 1}).limit(3)

```

# Section 7: Mixed Practice (116–140)

116. Please students collection me ek student insert karo, phir usko
findOne() se retrieve karo.

```js

    db.students.insertOne({

        name: "User 1",
        age: 34,
        grade: "C",
        city: "Mubarakpur"
    })

```

```js

    db.students.findOne({name: "User 1"})

```

117. Please books collection me ek new book insert karo, phir usko
projection ke saath retrieve karo.

```js

    db.books.insertOne({

        title: "My Book",
        author: "Unknown",
        price: 9999,
        category: "New Editions"
    })

```

```js

    db.books.findOne({title: "My Book"}, {title: 1, author: 1, price: 1})

```

118. Please students collection me 5 students insertMany() se insert
karo, phir find().limit(3) run karo.

```js

  db.students.insertMany([
  {
    name: "Nitin Sharma",
    age: 20,
    grade: "B",
    city: "Delhi"
  },
  {
    name: "Komal Verma",
    age: 22,
    grade: "A",
    city: "Delhi"
  },
  {
    name: "Deepak Singh",
    age: 19,
    grade: "C",
    city: "Delhi"
  },
  {
    name: "Ayesha Khan",
    age: 21,
    grade: "B",
    city: "Delhi"
  }
])

```

```js

    db.students.find().limit(3)

```

119. Please books collection me 6 books insertMany() se insert karo,
phir find().limit(2) run karo.

```js

  db.books.insertMany([
  {
    title: "Physics Class 12",
    author: "R. K. Verma",
    price: 480,
    category: "Education"
  },
  {
    title: "Chemistry Notes",
    author: "Anjali Mehta",
    price: 420,
    category: "Education"
  },
  {
    title: "Biology Basics",
    author: "Deepak Roy",
    price: 350,
    category: "Education"
  },
  {
    title: "Hindi Vyakaran",
    author: "Suresh Sharma",
    price: 250,
    category: "Education"
  },
  {
    title: "Computer Fundamentals",
    author: "Mohit Gupta",
    price: 500,
    category: "Education"
  },
  {
    title: "Social Science",
    author: "Abdul kalam",
    price: 540,
    category: "Education"
  }
])

```

```js

    db.books.find().limit(2)

```

120. Please students collection se saare students retrieve karo but sirf
name return karo and limit(5) lagao.

```js

    db.students.find({}, {name: 1}).limit(5)

```

121. Please books collection se saari books retrieve karo but sirf title
return karo and limit(3) lagao.

```js

    db.books.find({}, {title: 1}).limit(3)
    
```

122. Please books collection se category "Technology" wali books
retrieve karo but sirf title and author show karo.

```js

    db.books.find({category: "Technology"}, {title: 1, author: 1})

```

123. Please students collection se grade "A" wale students retrieve
karo but sirf name and city show karo.

```js

    db.students.find({grade: "A"}, {name: 1, city: 1})

```

124. Please students collection se city "Delhi" wale students retrieve
karo but sirf name and age show karo.

```js

    db.students.find({city: "Delhi"}, {name: 1, age: 1})

```

125. Please books collection se price 500 wali books retrieve karo but
sirf title and category show karo.

```js

    db.books.find({price: 500}, {title: 1, category: 1})

```

126. Please books collection me "JavaScript Basics" title wali book ko
findOne() se nikalo but sirf title and price show karo.

```js

    db.books.findOne({title: "JavaScript Basics"}, {title: 1, price: 1})

```

127. Please students collection me age 20 wale students retrieve karo
but sirf name and grade show karo.

```js

    db.students.find({age: 20}, {name: 1, grade: 1})

```

128. Please books collection me author "John" wali books retrieve karo
but sirf title show karo.

```js

    db.books.find({author: "John"}, {title: 1})

```

129. Please students collection me grade "B" wale students retrieve
karo but sirf name show karo and limit(2) lagao.

```js

    db.students.find({grade: "B"}, {name: 1}).limit(2)

```

130. Please books collection me category "Fiction" wali books retrieve
karo but sirf title and author show karo and limit(3) lagao.

```js

    db.books.find({category: "Fiction"}, {title: 1, author: 1}).limit(3)

```

131. Please students collection me ek student insert karo jiska city
"Delhi" ho, phir find() se Delhi students check karo.

```js

    db.students.insertOne({
        name: "Demo User",
        age: 23,
        grade: "B",
        city: "Delhi"
    })

```

```js

    db.students.find({name: "Demo User", city: "Delhi"})

```

132. Please books collection me ek new book insert karo category
"Technology" me, phir findOne() se check karo.

```js

    db.books.insertOne({
        title: "Unlucky Man",
        author: "Doctor Prashad",
        price: 457,
        category: "Technology"
    })

```

```js

    db.books.findOne({title: "Unlucky Man", category: "Technology"})

```

133. Please students collection se sirf name and age retrieve karo but
_id hide karo and limit(4) lagao.

```js

    db.students.find({}, {_id: 0, name: 1, age: 1}).limit(4)

```

134. Please books collection se sirf title and author retrieve karo but _id
hide karo and limit(5) lagao.

```js

    db.books.find({}, {_id: 0, title: 1, author: 1}).limit(5)

```

135. Please books collection se sirf price retrieve karo but _id hide karo
and limit(3) lagao.

```js

    db.books.find({}, {_id: 0, price: 1}).limit(3)

```

136. Please students collection se sirf city retrieve karo but _id hide
karo and limit(6) lagao.

```js

    db.students.find({}, {_id: 0, city: 1}).limit(6)

```

137. Please books collection se sirf category retrieve karo but _id hide
karo and limit(2) lagao.

```js

    db.books.find({}, {_id: 0, category: 1}).limit(2)

```

138. Please students collection se ek student findOne() karo jiska grade
"A" ho and sirf name show karo.

```js

    db.students.findOne({grade: "A"}, {_id: 0, name: 1})

```

139. Please books collection se ek book findOne() karo jiska category
"Database" ho and sirf title show karo.

```js

    db.books.findOne({category: "Database"}, {_id: 0, title: 1})

```

140. Please students collection se first 3 students retrieve karo and sirf
name and grade show karo.

```js

    db.students.find({}, {_id: 0, name: 1, grade: 1}).limit(3)

```


# Extra Practice Challenge (Advanced Thinking, Still Same Commands)

141. Please students collection me 10 students insertMany() se add
karo and ensure karo sabki age different ho.

```js

   db.students.insertMany([
  {
    name: "Aman Sharma",
    age: 18,
    grade: "A",
    city: "Delhi"
  },
  {
    name: "Riya Verma",
    age: 19,
    grade: "B",
    city: "Mumbai"
  },
  {
    name: "Karan Singh",
    age: 20,
    grade: "C",
    city: "Pune"
  },
  {
    name: "Neha Gupta",
    age: 21,
    grade: "A",
    city: "Jaipur"
  },
  {
    name: "Sahil Khan",
    age: 22,
    grade: "B",
    city: "Lucknow"
  },
  {
    name: "Pooja Mehta",
    age: 23,
    grade: "A",
    city: "Chandigarh"
  },
  {
    name: "Rohit Yadav",
    age: 24,
    grade: "C",
    city: "Noida"
  },
  {
    name: "Simran Kaur",
    age: 25,
    grade: "B",
    city: "Amritsar"
  },
  {
    name: "Aditya Patel",
    age: 26,
    grade: "A",
    city: "Ahmedabad"
  },
  {
    name: "Naina Roy",
    age: 27,
    grade: "C",
    city: "Kolkata"
  }
])

```

142. Please books collection me 10 books insertMany() se add karo
and ensure karo 3 categories repeat ho.

```js

   db.books.insertMany([
  {
    title: "JavaScript Mastery",
    author: "Ravi Sharma",
    price: 450,
    category: "Programming"
  },
  {
    title: "MongoDB Complete Guide",
    author: "Neha Verma",
    price: 500,
    category: "Database"
  },
  {
    title: "Math Class 11",
    author: "S. R. Mehta",
    price: 300,
    category: "Education"
  },
  {
    title: "Python Basics",
    author: "Amit Singh",
    price: 550,
    category: "Programming"
  },
  {
    title: "DBMS Concepts",
    author: "Karan Gupta",
    price: 400,
    category: "Database"
  },
  {
    title: "Science Class 10",
    author: "Pooja Jain",
    price: 350,
    category: "Education"
  },
  {
    title: "React Beginner",
    author: "Simran Kaur",
    price: 480,
    category: "Programming"
  },
  {
    title: "SQL Handbook",
    author: "Rohit Yadav",
    price: 420,
    category: "Database"
  },
  {
    title: "English Grammar",
    author: "Anjali Mehta",
    price: 250,
    category: "Education"
  },
  {
    title: "Node.js Advanced",
    author: "Sahil Roy",
    price: 600,
    category: "Programming"
  }
]);

```

143. Please students collection se sirf 5 documents nikalo but sirf name
show karo.

```js

   db.students.find({}, {name: 1}).limit(5)
   
```

144. Please books collection se sirf 5 documents nikalo but sirf title and
price show karo.

```js

   db.books.find({}, {title: 1, price: 1}).limit(5)

```

145. Please books collection me se findOne() karo where category =
"Technology" and only author return karo.

```js

   db.books.findOne({category: "Technology"}, {author: 1})
   
```
