function getGrade (s1, s2, s3) {
    let sumScores = (s1 + s2 + s3)/3
    if(sumScores >=90 || sumScores >= 100){
        return "A"
    }
    else if(sumScores >=80 || sumScores > 90){
        return "B"
    }
    else if(sumScores >=70 || sumScores > 80){
        return "C"
    }
    else if(sumScores >=60 || sumScores > 70){
        return "D"
    }
    else {
        return "F"
    }
}


console.log(getGrade(80,80,80))
console.log(getGrade(95,95,95))
console.log(getGrade(90,90,90))
console.log(getGrade(2,2,2))

