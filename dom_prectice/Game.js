const startBtn = document.getElementById("starBtn");
const questionDivision = document.getElementById("questionDiv");
const optionDivision = document.getElementById("optionDiv");
const nextBtn = document.getElementById("nextBtn");
let index = 0;
let score = 0;

//create array of object
const questionArry = [
    {
        question: "1. What is your name?",
        options: {
            A: "raj",
            B: "jay",
            C: "viru",
        },
        answer: "raj"
    },
    {
        question: "2. What is your country?",
        options: {
            A: "india",
            B: "us",
            C: "garmany",
        },
        answer: "india",
    },
    {
        question: "3. What is your fathername?",
        options: {
            A: "kalubhai",
            B: "ramajibhai",
            C: "karshanbhai",
        },
        answer: "ramajibhai",
    },
]

nextBtn.style.display = "none";
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    questionDivision.innerHTML = questionArry[index].question;
    for (const key in questionArry[index].options) {
        optionDivision.innerHTML += `
        <label>
        <input type="radio" name="option">
        <div name="option" onclick="scoreFunction(this,${index})">${key}.${questionArry[index].options[key]}
        </div>
        </label>`
    }
    nextBtn.style.display = "block";
})

function newData() {
    index++;
    questionDivision.innerHTML = "";
    optionDivision.innerHTML = "";
    
    if (index < questionArry.length) {
        questionDivision.innerHTML = questionArry[index].question;
        for (const key in questionArry[index].options) {
            optionDivision.innerHTML += `<label>
            <input type="radio" name="option">
            <div>${key}.${questionArry[index].options[key]}
            </div>
            </label>`
        }
    }
    else {
        questionDivision.innerHTML = "";
        optionDivision.innerHTML = "";
        nextBtn.style.display = "none";
        document.getElementById = ("container").innerHTML
            `<h4>Game Over</h4>
        <p>Your score</p>
        <h1>${score}</h1>
        `
    }
}

function scoreFunction(object, index) {
    console.log(object.innerHTML)
    const getUserActionValue = object.innerHTML.split(".")[1].trim();
    if(getUserActionValue === questionArry[index].answer)
    {
        score +=5;
    }
}