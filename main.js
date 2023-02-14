let skillsDisplay = document.getElementById("techTitle");
let skills = document.getElementById("tech");
let financeDisplay = document.getElementById("financeTitle")
let finance = document.getElementById("finance")

const skillsFunction = () =>{
    skills.style.display = 'inline';
    skillsDisplay.innerHTML = '- Technologies';

    skillsDisplay.removeEventListener("click",skillsFunction)
    skillsDisplay.addEventListener("click",otherSkillsFunction )
}

const otherSkillsFunction = () => {
    skills.style.display = 'none';
    skillsDisplay.innerHTML = '+ Technologies';

    skillsDisplay.removeEventListener("click",otherSkillsFunction)
    skillsDisplay.addEventListener("click",skillsFunction);
}

skillsDisplay.addEventListener("click",skillsFunction);



const financeFunction = () => {
    finance.style.display = 'inline';
    financeDisplay.innerHTML = '- Finance';

    financeDisplay.removeEventListener('click', financeFunction)
    financeDisplay.addEventListener('click', otherFinanceFunction)
}

const otherFinanceFunction = () => {
    finance.style.display = "none";
    financeDisplay.innerHTML = '+ Finance'

    financeDisplay.removeEventListener('click', otherFinanceFunction)
    financeDisplay.addEventListener('click', financeFunction)
}
financeDisplay.addEventListener("click",financeFunction)