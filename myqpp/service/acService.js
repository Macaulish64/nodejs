



function AcService(counter){
    this.counter=1;
    this.setCounter=function(){
        counter++;
    }
    this.addCounter=function(){
        counter++;
        console.log(counter);
    }
    this.getCounter=function(){
        counter++;
        console.log(counter);
        return counter;
    }
}


var acService=new AcService(1);
exports.aaa=acService;


// class AcService{
//     constructor(counter)
//     {
//         counter=0;
//     }
//     setInitTemp(a,b){
//         counter++;
//     }
//     setCounter(){
//         counter++;
//     }
//     getCounter(){
//         return counter;
//     }
// };





