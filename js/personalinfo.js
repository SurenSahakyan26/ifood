let passwords = document.querySelectorAll(".pass");
console.log(passwords)

passwords.forEach((el, i) => {
    console.log(el)
    el.addEventListener('click', () => {
        if (el.type === "password") {
            el.type = "text";
        } else {
            el.type = "password";
        }
    })
})


