fetch("organic.json")
.then(function(response){
    return response.json();

console.log(response);


}).then(function(data){

    console.log(data);

    document.getElementById("logo-img").src=data[0].logo;
    document.querySelector(".caption").innerHTML=data[0].caption;
    document.querySelector(".title").innerHTML=data[0].title;
    document.getElementById("i2").className=data[0].icon2;
    document.getElementById("i1").className=data[0].icon1;
    document.getElementById("i3").className=data[0].icon3;

    // card start 1
    document.querySelector(".img-1").src=data[1].img;
    document.querySelector(".card-price").innerHTML=data[1].price;
    document.querySelector(".card-quantity").innerHTML=data[1].quantity;
    document.querySelector(".card-title").innerHTML=data[1].title;
    
    //second card
    document.querySelector(".img-2").src=data[2].img;
    document.querySelector(".p2").innerHTML=data[2].price;
    document.querySelector(".q2").innerHTML=data[2].quantity;
    document.querySelector(".t2").innerHTML=data[2].title;

    document.querySelector(".img-3").src=data[3].img;
    document.querySelector(".p3").innerHTML=data[3].price;
    document.querySelector(".q3").innerHTML=data[3].quantity;
    document.querySelector(".t3").innerHTML=data[3].title;

    document.querySelector(".img-4").src=data[4].img;
    document.querySelector(".p4").innerHTML=data[4].price;
    document.querySelector(".q4").innerHTML=data[4].quantity;
    document.querySelector(".t4").innerHTML=data[4].title;
 
    document.querySelector(".img-5").src=data[5].img;
    document.querySelector(".p5").innerHTML=data[5].price;
    document.querySelector(".q5").innerHTML=data[5].quantity;
    document.querySelector(".t5").innerHTML=data[5].title;

    
    document.querySelector(".img-6").src=data[6].img;
    document.querySelector(".p6").innerHTML=data[6].price;
    document.querySelector(".q6").innerHTML=data[6].quantity;
    document.querySelector(".t6").innerHTML=data[6].title;

    
    document.querySelector(".img-7").src=data[7].img;
    document.querySelector(".p7").innerHTML=data[7].price;
    document.querySelector(".q7").innerHTML=data[7].quantity;
    document.querySelector(".t7").innerHTML=data[7].title;

    
    document.querySelector(".img-8").src=data[8].img;
    document.querySelector(".p8").innerHTML=data[8].price;
    document.querySelector(".q8").innerHTML=data[8].quantity;
    document.querySelector(".t8").innerHTML=data[8].title;

    
    document.querySelector(".img-9").src=data[9].img;
    document.querySelector(".p9").innerHTML=data[9].price;
    document.querySelector(".q9").innerHTML=data[9].quantity;
    document.querySelector(".t9").innerHTML=data[9].title;

    document.getElementById("l1").className=data[10].l1;
    
    document.getElementById("l2").className=data[10].l2;
    document.querySelector("#l3").className=data[10].l3;
    

    
}).catch(function(err){

    console.log("Something Went Wrong");
})