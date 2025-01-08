function box()
{
    let height=prompt("Enter your height");
    let weight=prompt("Enter your weight");
    let bmi=weight / (height * height);
    alert("Your BMI is: "+bmi);
}