var names=new Array();
names[0]="Yaakov";
names[1]="John-k";
names[2]="Jasmen";
names[3]="jini";
names[4]="pool";
names[5]="faraj";
names[6]="lara";
names[7]="polina";
names[8]="lola";
names[9]="jimbi";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}