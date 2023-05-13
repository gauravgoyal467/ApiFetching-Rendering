// Function to fetch data from an API endpoint with a delay
const fetchData = (url, delay,number) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        // Simulating API call
        fetch(url)
          .then(response => response.json())
          .then(data => {
            // Showing data in suitable UI
            if(number==1){
                console.log(data);
                renderOnDomTable1(data);
               
            }else if(number==2){
                console.log(data);
                renderOnDomTable2(data);
            }else{
                console.log(data);
                renderOnDomTable3(data);
            } 
            resolve(true);
          });
      }, delay);
    });
  };
  
  // Function to initiate the promise chain
  async function startPromiseChain() {
    try {
      // Call the first promise function
      await promiseAPI1();
      await promiseAPI2();
      await promiseAPI3();
    } 
    catch (error) {
      console.error(error);
    }
  };
  
  // First promise function
 async function promiseAPI1(){
    const result=await fetchData('https://dummyjson.com/posts', 1000,1);
    if(result){
        return;
    }
    throw new Error('First Promise did not resolve to true');
  };
  
  // Second promise function
  async function promiseAPI2(){
    const previousResult1 = await fetchData('https://dummyjson.com/products', 2000,2);
    
    if (previousResult1) {
      // Continue to the next promise
      return;
    }
    throw new Error('Previous promise did not resolve to true');
  };
  
  // Third promise function
  async function promiseAPI3(){
    const previousResult2 = await fetchData('https://dummyjson.com/todos', 3000,3);
    if (previousResult2) {
      // All promises resolved successfully
      console.log('Promise chain completed');
      return;
    }
    throw new Error('Previous promise did not resolve to true');
  };
  
  // Event listener for button click
const button1=document.getElementById('btn');
button1.addEventListener("click",startPromiseChain);

const firstTbody=document.getElementById("tbody1");
const firstTable=document.getElementById("table1");
const p1=document.getElementById("tag1");
const p=document.getElementById("nav");

  
function renderOnDomTable1(data) {

    firstTable.style.display="table";
    p1.style.display='inline-block';
    button1.style.display='none';
    p.style.display='none';
    firstTbody.innerHTML="";
    let post=data.posts;
    post.forEach((item)=>{
        let tr1 = document.createElement("tr");
        
//first data 
        let td1= document.createElement("td");
        td1.innerText=item.id;
        tr1.appendChild(td1);
//second data
        let td2= document.createElement("td");
        td2.innerText=item.userId;
        tr1.appendChild(td2);
//third data
        let td3= document.createElement("td");
        td3.innerText=item.title;
        tr1.appendChild(td3);

//fourth data
        let td4= document.createElement("td");
        td4.innerText=item.body;
        tr1.appendChild(td4);
//fifth data
        let td5= document.createElement("td");       
        td5.innerText=item.tags;
        tr1.appendChild(td5);
//sixth data
        let td6= document.createElement("td");
        td6.innerText=item.reactions;
        tr1.appendChild(td6);

        tbody1.appendChild(tr1);
    })
}

const secondTbody=document.getElementById("tbody2");
const secondTable=document.getElementById("table2");
const p2=document.getElementById("tag2");

function renderOnDomTable2(data) {
    secondTable.style.display="table";
    p2.style.display='inline-block';
    secondTbody.innerHTML="";
    let products=data.products;
    products.forEach((item)=>{
        let tr2 = document.createElement("tr");
        
//first data 
        let td1= document.createElement("td");
        td1.innerText=item.id;
        tr2.appendChild(td1);
//second data
        let td2= document.createElement("td");
        td2.innerText=item.category;
        tr2.appendChild(td2);
//third data
        let td3= document.createElement("td");
        td3.innerText=item.brand;
        tr2.appendChild(td3);

//fourth data
        let td4= document.createElement("td");
        td4.innerText=item.title;
        tr2.appendChild(td4);
//fifth data
        let td5= document.createElement("td");       
        td5.innerText=item.description;
        tr2.appendChild(td5);
//sixth data
        let td6= document.createElement("td");
        td6.innerText=item.price;
        tr2.appendChild(td6);
//seventh data
        let td7= document.createElement("td");
        td7.innerText=item.rating;
        tr2.appendChild(td7);
//eighth data
        let td8= document.createElement("td");
        td8.innerText=item.stock;
        tr2.appendChild(td8);    
//nineth data
        let td9= document.createElement("td");
        td9.innerText=item.discountPercentage;
        tr2.appendChild(td9);   
//tenth data
        let td10= document.createElement("td");
        let img=document.createElement("img");
        img.src=item.thumbnail;
        td10.appendChild(img); 
        tr2.appendChild(td10);   

        tbody2.appendChild(tr2);
    }) 
}


const thirdTbody=document.getElementById("tbody3");
const thirdTable=document.getElementById("table3");
const p3=document.getElementById("tag3");

function renderOnDomTable3(data) {

    thirdTable.style.display="table";
    p3.style.display='inline-block';
    thirdTbody.innerHTML="";
    let todos=data.todos;
    todos.forEach((item)=>{
        let tr3 = document.createElement("tr");
        
//first data 
        let td1= document.createElement("td");
        td1.innerText=item.id;
        tr3.appendChild(td1);
//second data
        let td2= document.createElement("td");
        td2.innerText=item.userId;
        tr3.appendChild(td2);
//third data
        let td3= document.createElement("td");
        td3.innerText=item.todo;
        tr3.appendChild(td3);

//fourth data
        let td4= document.createElement("td");
        td4.innerText=item.completed;
        tr3.appendChild(td4);
 
        tbody3.appendChild(tr3);
    }) 

}
