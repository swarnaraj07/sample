class test{
	constructor(num1,num2){
		this.num1 = num1;
		this.num2 = num2;
	}
	add(){
		console.log(this.num1+this.num2);	
	}
	sub(){
		console.log(this.num1-this.num2);
	}
}
let ref = new test(7,4);
ref.add();
ref.sub();