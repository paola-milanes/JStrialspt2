'use strict';

function isHometown(town){
    if(town === "San Fransico") {
        return True
    }else {
        return False
    }
}

function getFullName(first, last){
    return `${first} {last}`
}



function calculateTotal(base,state,tax = 0.005){
    let subtotal = base * (1 =tax)
    let fee = 0
    if (state === "CA"){
        fee = 0.03 * subtotal
    }else if (state === "PA"){
        fee = 2
    }else if (state === "MA"){
        if (base <= 100){
            fee = 1
        
        }else{
            fee = 3
        }
    }
}

