
const URL = "file:///D:/Sharpener/Akash%20Samplw/index.html"


function saveTocrudcrud() {
   
  try{
    const obj =
    {
       name :  document.getElementById('productname').value ,
       amount: document.getElementById('amount').value 
    }
    axios.post("https://crudcrud.com/api/2b343504fc92485ba75fe7571c086ba2/app",obj).then(res =>{
        window.location.href = `${URL}`
    })
    
  }catch(err){
        console.log(err)
  }
}


window.addEventListener("DOMContentLoaded",()=>{
    try{
     axios.get("https://crudcrud.com/api/2b343504fc92485ba75fe7571c086ba2/app").then((res)=>{
        showNewUserOnScreen(res.data);
     })
    //    console.log("hii",response.data)
    //       showNewUserOnScreen(obj);
    }
    catch(err){
        console.log(err)
  }
})

function showNewUserOnScreen(user) {
    document.getElementById('productname').value = "";
    document.getElementById('amount').value = "";

        user.forEach((item)=>{
        
            const  parentNode = document.getElementById('listOfUsers');
            const childHTML = `<li > ${item.name} -- ${item.amount} 
                <button onclick=deleteUser('${item._id}')> Delete User </button>
                                                    <button onclick=editUserDetails('${item._id}')>Edit User </button>
            </li>`;
           
            parentNode.innerHTML +=   childHTML;
        })
 
  
  
}

function editUserDetails(id) {
    try{
        axios.get(`https://crudcrud.com/api/2b343504fc92485ba75fe7571c086ba2/app/${id}`).then((res)=>{
           document.getElementById('productname').value = res.data.name;
           document.getElementById('amount').value = res.data.amount;

           var div =document.querySelector('div')
           var update = document.createElement("button")
           update.innerHTML="update"
           div.append(update)

           document.getElementById("sbbtn").style.display="none"
           update.addEventListener("click",()=>{
            const obj =
            {
                name :  document.getElementById('productname').value ,
                amount: document.getElementById('amount').value
            }
            axios.put(`https://crudcrud.com/api/2b343504fc92485ba75fe7571c086ba2/app/${id}`,obj).then((res)=>{
                window.location.href = `${URL}`
            })
           })
        })
       }
       catch(err){
           console.log(err)
     }
  
}




function deleteUser(id) {
   axios.delete(`https://crudcrud.com/api/2b343504fc92485ba75fe7571c086ba2/app/${id}`).then((res)=>{
    window.location.href = `${URL}`
 })

}

// function removeUserFromScreen(food) {
//    const parentNode = document.getElementById('listOfUsers');
//    const childNodeToBeDeleted = document.getElementById(food);
//    if (childNodeToBeDeleted) {
//        parentNode.removeChild(childNodeToBeDeleted)
//    }
// }