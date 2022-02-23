let pardiv=document.getElementById("parent")

 fetch("https://www.anapioficeandfire.com/api/books?pg=1&pagesize=15")
.then((data)=>data.json())
.then((res)=>
{
    for(i=0;i<13;i++)
   {
       
    let bname=document.createElement("div")
    bname.classList.add("fs-5","text-primary","text-center")
    bname.innerHTML=`${i+1}.${res[i].name}`;
    pardiv.appendChild(bname)}
    })

searchdiv=document.getElementById("srch")
search=document.createElement("input")
search.classList.add("col-2")
search.setAttribute("type","text")
search.setAttribute("id","sr")
search.setAttribute("placeholder","search")
searchdiv.appendChild(search)

btn=document.createElement("Button")
btn.classList.add("col-1")
btn.setAttribute("type","reset")
btn.innerText="search"
btn.setAttribute("onclick","pg(search.value)")
searchdiv.appendChild(btn)

async function pg(j)
{
    if(j>0&&j<13)
    {
    output=document.createElement("div")
    output.classList.add("col-4")
    searchdiv.appendChild(output)  
    document.getElementById("p1").innerText=""

    chara1=document.getElementById("p2")
    chara1.innerText=""
    chara2=document.getElementById("p3")
    chara2.innerText=""
    chara3=document.getElementById("p4")
    chara3.innerText=""
    chara4=document.getElementById("p5")
    chara4.innerText=""
    chara5=document.getElementById("p6")
    chara5.innerText=""
    
    i=parseInt(j)-1
   await fetch("https://www.anapioficeandfire.com/api/books?pg=1&pagesize=15")
    .then((data)=>data.json())
    .then((res)=>
    { 
        try{  
        bname=document.getElementById("p1")
    bname.classList.add("fs-5","text-succes","table-center")
    bname.innerHTML=`Book${j}:${res[i].name}<br>ISBN:${res[i].isbn}<br>No of Pages:${res[i].numberOfPages}<br>Author:${res[i].authors}
    <br>Publisher:${res[i].publisher}<br>Released:${res[i].released}<br>Characters:`
    output.appendChild(bname)}
    catch(err)
    {
        bname1=document.getElementById("p2")
        bname1.innerText=err.message
        output.appendChild(bname1)
    }

      fetch("https://www.anapioficeandfire.com/api/characters/2")
    .then((data)=>data.json())
    .then((res)=>
    {
        chara1.innerText=res.name
        output.appendChild(chara1)
    })
    
    fetch("https://www.anapioficeandfire.com/api/characters/12")
    .then((data)=>data.json())
    .then((res)=>
    {
       chara2.innerText=res.name
        output.appendChild(chara2)
    })
    
    fetch("https://www.anapioficeandfire.com/api/characters/16")
    .then((data)=>data.json())
    .then((res)=>
    {
       chara3.innerText=res.name
        output.appendChild(chara3)
    })
   
    fetch("https://www.anapioficeandfire.com/api/characters/13")
    .then((data)=>data.json())
    .then((res)=>
    {
       chara4.innerText=res.name
        output.appendChild(chara4)
    })
   
    fetch("https://www.anapioficeandfire.com/api/characters/14")
    .then((data)=>data.json())
    .then((res)=>
    {
       chara5.innerText=res.name
        output.appendChild(chara5)
    })
    
    })
}
else
alert("Please enter Number 1-12")

}
allpara=document.getElementById("all")
all=document.createElement("h3")
all.innerHTML="Click below to know the Details of all books"
allpara.appendChild(all)

allbtn=document.createElement("button")
allbtn.setAttribute("onclick","allbook()")
allbtn.innerText="Click for all books"
allpara.appendChild(allbtn)

async function allbook()
{
await fetch("https://www.anapioficeandfire.com/api/books?pg=1&pagesize=15")
    .then((data)=>data.json())
    .then((res)=>
    { 

res.map((data)=>
{
 pardiv.classList.add("row")  
 
 pardivcol=document.createElement("div")
 pardivcol.classList.add("col-6")
 pardiv.appendChild(pardivcol)

let bname=document.createElement("p")
bname.classList.add("fs-2","text-danger","text-center")
bname.innerHTML=`Book:  ${data.name}`;
pardivcol.appendChild(bname)

let isbn=document.createElement("p")
isbn.classList.add("fs-4","text-success","text-center")
isbn.innerHTML=`ISBN:${data.isbn}`;
pardivcol.appendChild(isbn)

let page=document.createElement("p")
page.classList.add("fs-4","text-success","text-center")
page.innerHTML=`No of Pages:${data.numberOfPages}`;
pardivcol.appendChild(page)

let author=document.createElement("p")
author.classList.add("fs-4","text-success","text-center")
author.innerHTML=`Author:${data.authors}`;
pardivcol.appendChild(author)

let publisher=document.createElement("p")
publisher.classList.add("fs-4","text-success","text-center")
publisher.innerHTML=`Publisher:${data.publisher}`;
pardivcol.appendChild(publisher)

let released=document.createElement("p")
released.classList.add("fs-4","text-success","text-center")
released.innerHTML=`Released:${data.released}`;
pardivcol.appendChild(released)
})
}).catch()
}
