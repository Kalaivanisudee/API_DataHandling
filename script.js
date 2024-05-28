const url = "./data.json";
let dataArr;
const mainDiv=document.getElementById("main");
const table=document.createElement("table");
const searchByName = document.getElementById("searchByName");
const searchByYear = document.getElementById("searchByYear");

const populate=(data)=>{
console.log(data);
table.style.width="100%";
 mainDiv.append(table);
 let keys=Object.keys(data[0]);
 table.innerHTML="";
 let tableContent=`<tr>${keys
    .map((val)=>{
        return `<th>${val}</th>`
    }).join(" ")}</tr>`;
   const mapArr = data.map((val)=>{
return `<tr>${keys.map(i=> `<td>${val[i]}</td>`)}</tr>`;
   })
   tableContent+= mapArr.join("");
   table.innerHTML=tableContent
}


fetch(url)
.then((res)=>res.json())
.then(res=>{
    dataArr=res;
    populate(dataArr);
    return res;
})
searchByName.addEventListener("keyup", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = dataArr.filter(val => val.title.toLowerCase().startsWith(searchTerm));
    
    console.log(filteredData);
    
    if (filteredData.length !== 0) {
        populate(filteredData);
    } else {
        alert("Zero Data Found")
        searchByName.value=""
        populate(dataArr);
    }
});
searchByYear.addEventListener("keyup", (event) => {
    if(event.target.value.length == 4){
        let year= +event.target.value;
        const data =dataArr.filter((val)=>val.year ===year);
        console.log(data);
        if(data.length !=0) populate(data);
        else{
            alert("Zero Data Found");
            searchByYear.value="";
            populate(dataArr)
        }
    }
});

