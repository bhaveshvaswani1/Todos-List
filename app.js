
var list = document.querySelector('#todos-list ul');

//delete element
list.addEventListener("click",function(e){
    
    if(e.target.className=="delete")
    {
        const li=e.target.parentElement;
    list.removeChild(li);


    }

});

// add element
document.forms['add-todos'].querySelector('input').value;
const btn=document.forms['add-todos'].querySelector('button');

btn.addEventListener("click",function(e){

    // dont want to refresh the page (forms)
    e.preventDefault();
    
    var  val=document.forms['add-todos'].querySelector('input').value;
    if(val=="")
    {
        alert("please fill the input first");
        return ;
    }
    

    // creating new element consist of two span in a list to add
    const li=document.createElement("li");
    const s1=document.createElement("span");
    const s2=document.createElement("span");

    //adding classes to new element
    s1.classList.add("name");
    s2.classList.add("delete");

    // assigning the content 
    s1.textContent=val;
    s2.textContent="delete";

    //clearing the input after adding

    document.getElementById('text').value = ''

    // appending new element to our list

    li.appendChild(s1);
    li.appendChild(s2);
    list.appendChild(li);


});

//search element

// fetching search input
const search=document.forms['search-todos'].querySelector('input');
search.addEventListener("keyup",function(e){

    // term is content in search box
   const term=e.target.value.toLowerCase();

   // taking every list 
    const todos=list.getElementsByTagName("li");
    //iterating over every list

    Array.from(todos).forEach(todo=> {
        
        // in li first child is title second is delete..so we are taking first child
      const title=todo.firstChild.textContent.toLowerCase();
      //indexOf() will tell us the first index where we get term first letter in title--if it is not present then -1
        if(title.indexOf(term)!=-1)
        todo.style.display="block";
        else
        todo.style.display="none";
        
    });
});