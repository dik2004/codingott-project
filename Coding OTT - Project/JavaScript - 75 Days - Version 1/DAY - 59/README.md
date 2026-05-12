## JS - V1 - DAY: 59

### 📌 Task:
**Synchronous aur Asynchronous JavaScript** ka concept clear karne ke liye ek project banao.

---

### ✅ Project Requirements:

- Ek **button** create karo.
- Button par click karne ke baad dynamically **`<p>` tag create** karna hai **one by one**.

---

### 📝 Flow (Step by Step):

Button click hone par:

1. Pehli baar ek `<p>` tag create karo aur page par show karo.
2. Dusri baar ek aur `<p>` tag create karo aur show karo.
3. Dusri `<p>` tag create hone ke baad ek **function call** karo.
4. Function call hone ke baad uske niche tisri baar ek aur `<p>` tag create karo.

---

### ⏳ Promise + setTimeout Requirement:

Jo function call hoga usme:

- **Promise** ka use karna hai.
- Promise ke andar **`setTimeout()`** lagana hai.
- Promise me condition ke basis par:
  - `resolve()` call ho ya
  - `reject()` call ho

---

### 🎯 Output Show Condition:

- Promise ka result show karne ke liye:
  - `.then()` use karo (resolve case)
  - `.catch()` use karo (reject case)

- Result ko UI par show karna hai (text ya message ke form me).

---

### ⚠️ Notes:

- Is project ka main goal ye samajhna hai ki:
  - **Synchronous code line by line kaise execute hota hai**
  - **Asynchronous code (Promise + setTimeout) kaise delay ke baad execute hota hai**

---