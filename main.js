
const heading0 = document.querySelector(".heading0");
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");
const color0 = document.querySelector(".color0");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");
const color6 = document.querySelector(".color6");
const color7 = document.querySelector(".color7");
const color8 = document.querySelector(".color8");
const color9 = document.querySelector(".color9");
const color10 = document.querySelector(".color10");
const btn = document.querySelector(".btn");

btn.addEventListener("click",() =>{
    randomColorGenerator();
});

let hexCodeString = "0123456789abcdef";
let hexCodeArray = hexCodeString.split("")

randomColorGenerator= () => {
    let arr =[];
    for (let i = 0; i < 11; i++) {
        let newArr = [];
        for (let i = 1; i <= 6; i++) {
            let randomNumber = Math.floor(Math.random()*hexCodeArray.length);
            let hexCodeCharacter = hexCodeArray[randomNumber];
            newArr.push(hexCodeCharacter);            
        };    
        arr.push(newArr.join(""));
    };
    
    //console.log(arr);
    
    heading0.innerHTML = "#" + arr[0]
    heading1.innerHTML = "#" + arr[1]
    heading2.innerHTML = "#" + arr[2]
    heading3.innerHTML = "#" + arr[3]
    heading4.innerHTML = "#" + arr[4]
    heading5.innerHTML = "#" + arr[5]
    heading6.innerHTML = "#" + arr[6]
    heading7.innerHTML = "#" + arr[7]
    heading8.innerHTML = "#" + arr[8]
    heading9.innerHTML = "#" + arr[9]
    heading10.innerHTML = "#" + arr[10]
    color0.style.backgroundColor = "#" + arr[0]
    color1.style.backgroundColor = "#" + arr[1]
    color2.style.backgroundColor = "#" + arr[2]
    color3.style.backgroundColor = "#" + arr[3]
    color4.style.backgroundColor = "#" + arr[4]
    color5.style.backgroundColor = "#" + arr[5]
    color6.style.backgroundColor = "#" + arr[6]
    color7.style.backgroundColor = "#" + arr[7]
    color8.style.backgroundColor = "#" + arr[8]
    color9.style.backgroundColor = "#" + arr[9]
    color10.style.backgroundColor = "#" + arr[10]
}
randomColorGenerator();
