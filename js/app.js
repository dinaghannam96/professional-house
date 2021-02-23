//get the amount of documents
// provide discount based on the amount of documents
//display the discount



var amountOfdocuments=prompt("how many document do you want?")
var documentprice =10;
if (amountOfdocuments  > 2 && amountOfdocuments <=5){
    alert("Hooray you earned 7% discount!");
    var totalprice = documentprice*amountofdocuments;
    var elem=document.getElementById('price');
    elem.innerHTML='this is your final price: '+totalPrice
}else if(amountofdocuments >= 6 && amountOfdocuments < 10){
        alert("Hooray you earned 15% discount!");

    }else if(amountofdocument == 0){
        alert("please provide an amount!");

        }else{
            alert("sorry wrong input");

        }

        