var a = {
    outerFunc: function() {
        console.log(this); //object
    
        let innerFunc = function() {
            console.log(this); //window
        }
        let arrowInnerFunc = () => {
            console.log(this); //object
        }
        innerFunc(); //window 
        arrowInnerFunc(); //object even if we call function with ()
    }
}

a.outerFunc();