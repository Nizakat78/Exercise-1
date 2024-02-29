let  arryerror = [10, 20, 30, 40 ,50];
 console.log(arryerror[8]);

 try {
    console.log(arryerror[8])
     }
     catch (error) {
        console.error(`error`, error.message);
     }
     console.log(`correct Code `, arryerror[20]);

