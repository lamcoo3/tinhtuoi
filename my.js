function calculate(){
    let birthday = document.getElementById('birthday').value;
    let date = new Date(birthday);
    let year = date.getFullYear();
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    alert(currentYear - year)
}


