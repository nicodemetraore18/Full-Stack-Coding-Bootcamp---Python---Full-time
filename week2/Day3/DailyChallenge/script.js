let stars="*****************************************"
for(let i=0;i<6;i++ ){
	console.log(stars.slice(0,i+1));

}
// second

for(let n=0;n<6;n++){
	var star=[];
	for(let m=0; m<n+1;m++){

		star.push("*");
	}
	console.log(star.join(""))
}