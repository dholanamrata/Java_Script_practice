// ------------------------------header-----------------------------------
const menuBtn = document.getElementsByClassName("menuBtn")[0];
const closeBtn = document.getElementsByClassName("closeBtn")[0];
const navigation = document.getElementsByTagName("nav")[0];
const drower = document.getElementsByClassName("sideDrawer")[0];
const blank = document.getElementsByClassName("blank")[0];
const nav = document.querySelector(".navigation");
// const logo = document.getElementsByClassName("logo")[0];
// const combo = document.getElementsByClassName("combologomenu")[0];
const body = document.querySelector("body");

// console.log(logomenu)
const close = () => {
  nav.classList.remove("blur");
  drower.classList.remove("drawer-visible");
  // body.classList.remove("body");
};
menuBtn.addEventListener("click",()=>{
  
  nav.classList.add("blur");
  drower.classList.add("drawer-visible")
  // closeBtn.classList.add("showCloseBtn");
  


})
closeBtn.addEventListener("click",()=>{
 close();
  // logomenu.style.display="block";
  // logo.style.display="block";

  
})

blank.addEventListener("click",()=>{
  close();
})





// ---------------------------form--------------------------------------
const form = document.getElementById("form");
      const userEmail = document.getElementById("email");
      const userPass = document.getElementById("pwd");
      const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

      function debounce(func, timeout = 500) {
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this, args);
          }, timeout);
        };
      }

      function emailPatterncheck(value) {
        const bool = emailPattern.test(value);
        console.log(value);
        if (bool) {
          userEmail.classList.add("success");
          userEmail.classList.remove("error");
          console.log(bool);
        } else {
          userEmail.classList.remove("success");
          userEmail.classList.add("error");
        }
      }

      function passwordPatterncheck(value) {
        const pass = passPattern.test(value);
        if (pass) {
          userPass.classList.add("success");
          userPass.classList.remove("error");
          console.log(pass);
        } else {
          userPass.classList.remove("success");
          userPass.classList.add("error");
        }
      }

      form.addEventListener(
        "input",
        debounce((e) => {
          // console.log(e.target.value);
          switch (e.target.id) {
            case "email":
              emailPatterncheck(e.target.value);
              break;
            case "pwd":
              passwordPatterncheck(e.target.value);
              console.log(e.target.value);
              break;
          }
        })
      );

      const prevent = (e) => {
        e.preventDefault();
        for (const iterator of e.target) {
          if (iterator.value === "") {
            continue;
          }
          console.log(iterator.value);
        }
      };
      form.addEventListener("submit", prevent);
   