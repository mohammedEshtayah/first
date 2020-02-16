$(document).ready(function(){
    $(".itg-menu").click(function() { 
        
        
        $(".itg-menu").toggleClass("open");
        $(".itg-nav").toggleClass("itg-nav-r");
    });
});
 
//  
fetch("https://my-json-server.typicode.com/AnifaMd/shopping-cart/products").then(res=>res.json())
.then(res=>{
    var element = document.getElementById("itgproducts"); 
    
    res.map((res,i) => { 
        var newNode = document.createElement('div');
        newNode.className="itg-product";
      
        var x = document.createElement("IMG");
        x.setAttribute("src", "./images/"+ i +".jpg"); 
        x.setAttribute("width", "150");
        x.setAttribute("height", "70");
        x.setAttribute("alt", "simple face");
        newNode.appendChild(x); 

        var node = document.createTextNode(res.title);
        var h3 = document.createElement("h3")
        h3.appendChild(node); 
        newNode.appendChild(h3); 
        
        
        var node = document.createTextNode(res.availability);
        var p = document.createElement("p");
        p.appendChild(node);
        newNode.appendChild(p);
 
        var node = document.createTextNode(res.price+"$");
        var price= document.createElement("p");
        price.appendChild(node);
        newNode.appendChild(price);   

        element.appendChild(newNode)      
         
    } 
   
    ) } ) ; 