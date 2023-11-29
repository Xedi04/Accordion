let acc=document.querySelectorAll("#div4");
acc.forEach(item=>{
    item.addEventListener("click", function(){
        let nese = this.nextElementSibling
        console.log(nese);
        nese.classList.toggle("n")
      
    })
})
