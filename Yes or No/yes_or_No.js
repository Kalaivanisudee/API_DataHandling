const url = "https://yesno.wtf/api";
let score = 0;
let answer = "";
let counter = 0;

const gifHolder = document.getElementById("gifHolder");
const scoreDiv = document.getElementById("scoreDiv");
const buttonYes = document.getElementById("Yes");
const buttonNo = document.getElementById("No");
const counterDiv = document.getElementById("counter");

const setScore = (num) => {
    score += num;
    scoreDiv.innerHTML = `Your score is ${score}`;
    fetchApi();
};

const setCounter = () => {
    counterDiv.innerHTML = `${counter}`;
};

buttonYes.addEventListener("click", () => {
    if (answer === "yes") {
        setScore(1);
    } else {
        setScore(-1);
    }
});

buttonNo.addEventListener("click", () => {
    if (answer === "no") {
        setScore(1);
    } else {
        setScore(-1);
    }
});

const populate = ({ answer: ans, image }) => {
    console.log(ans, image);
    gifHolder.src = image;
    answer = ans.toLowerCase();
};

const fetchApi = async () => {
    counter += 1;
    buttonNo.style.display = "none";
    buttonYes.style.display = "none";
    const res = await fetch(url);
    const data = await res.json();
    buttonNo.style.display = "block";
    buttonYes.style.display = "block";
    setCounter();
    populate(data);
};


scoreDiv.innerHTML = `Your score is ${score}`;
setCounter();
fetchApi();
