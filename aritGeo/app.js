const aritGeo = (arr) => {
    if(Array.isArray(arr)) {
      let arith = true;
      let geo = true;
      let checkArit = arr[1]-arr[0];
      let checkGeo = arr[1]/arr[0];
      if(arr.length > 0) {
        for (let i = 0; i<arr.length-1; i++) {
          if (arr[i+1] - arr[i] !== checkArit){
             arith = false;
          }
          
          if (arr[i+1]/checkGeo !== arr[i]) {
            geo = false;
          }
        }
        if (arith === true){
          return "Arithmetic";
        }
        else if (geo ===true) {
          return "Geometric";
        }
        else {
          return -1;
        }  
      }
      else {
        return 0;
      }
      
    }
    else {
      return " Pls pass a valid array";
    }
  }
module.exports = aritGeo;