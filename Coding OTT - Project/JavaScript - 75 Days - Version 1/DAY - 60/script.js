/* ================= TASK ================= */

const btn = document.getElementById("btn");
btn.addEventListener("click", async () => {

    const output = document.getElementById("output");

    const p = document.createElement("p");
    p.innerText = "This is Text 1";

    p.classList.add("success");
    output.appendChild(p);

    
    try {
        
        const msg = await promiseFun();
        const p2 = document.createElement("p");
        p2.innerText = msg;
        p2.classList.add("success");
        output.appendChild(p2);

    } catch (err) {

        const p3 = document.createElement("p");
        p3.innerText = err;
        p3.classList.add("error");
        output.appendChild(p3);

    }

    const p3 = document.createElement("p");
    p3.innerText = "This is Text 3";

    p3.classList.add("success");
    output.appendChild(p3);

});

function promiseFun() {

    const output = document.getElementById("output");

    return new Promise((res, err) => {

        setTimeout(() => {

            let condition = true;

            if (condition) {

                res("This is Text 2 (Promise Resolved)");

            } else {

                err("Promise Rejected!");

            }

        }, 500)

    });
}