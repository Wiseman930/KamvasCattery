function weeklyWage(band, weeklyHours) {
    var week = weeklyHours.split(',').map(x => +x);
    var sum =0;
    for(var i=0; i<week.length; i++){
        if(band == "A"  ){
       sum += week[i]*23;
        }
         if(band == "B" ){
       sum += week[i]*37;
        }
         if(band == "C" ){
       sum += week[i]*51;
        }
         if((week.length < 7 || week.length > 7)){
        return 'missing day';
        }
        else if(band !== "A" && band !== "B" && band !== "C"){
        return 0;
        }
    } return sum;


}
console.log( weeklyWage('A', '0,0,3,4,4,4,6'));
console.log( weeklyWage('B', '0,3,8,4,4,6,8'));
console.log( weeklyWage('C', '8,3,4,4,7,6,4'));
console.log( weeklyWage('B', '0,3,4,4,6'));
console.log( weeklyWage('D', '3,4,4,4,6,0,3'));


