let details={
    name:'varshitha',
    age:23,
    location:'Banglore'
};
console.log(details.name,details.age,details.location);

class Persondetails
{
    private PDname:string;        
    constructor (pdname:string)
{
this.PDname=pdname;
}
display()
{
    console.log(this.PDname)
}
}
let small=new Persondetails("varshitha");
small.display();

class Pdetails{
    private Pname:string;
    public PCompname:string;
    constructor(pname:string,pcompname:string)
    {
        this.Pname=pname;
        this.PCompname=pcompname;
    }
    print()
    {
        console.log(this.Pname,this.PCompname);
    }
}
let show=new Pdetails('varshitha','Intimetec');
show.print();

function validate(name:string)
{
    if(name==undefined)
    {
        return 'valid';
    }
    console.log(name);
}
validate( 'varshitha');

let owner={
	firstname:'Dennis',
    lastname:'Ritche',
    language:'C',
      value() : string {
      return this.lastname.toUpperCase();
      //console.log(this.lastname.toUpperCase());
    }
}
console.log(owner.language)
console.log(owner.value);

let creditcard={
    uname:'Varshitha',
    Cnum:6146496758938152,
    min:272.36,
    outstand:571.36,
}
console.log(creditcard.uname);

function copinfo( salray:number,compname:string){
    //var name='XXX';
    return salray;
}
var ret: number  =copinfo(230000,'JVT');
console.log('return:',+ret);
let p={
    Name:'varshitha',
    Age:35,
    dob:'02.02.2000',
    method:{
            array:['programmer','Intimetec','11/01/2021'],
    }
}
console.log(p.Name,p.Age,p.method.array[0],p.method.array[1],p.method.array[2]);

/*let person ={
    name:"jvt",
    id:102,
    class1:["hy",1,2,3],
    person1:{
        name:"sagar",
        id:23,
        class2:["jhg", "number",1,2,"hy",45,56,76,77,"pavan","ajit",3,4,5,"shymala","chanki","yas","varshita"],
         },
    sum1:function(a,b){
       return a+b;
   }
}
console.log(person.sum1(10,20));*/
//var arr1 = ["jhg", "number",1,2,"hy",45,56,76,77,"vari"];
//console.log(arr1.length);
//console.log(arr1[arr1.length-1]);
//var len = person.person1.class2.length;
//console.log(person.person1.class2[person.person1.class2.length-3]);
/*function sum(a,b){
       return a+b;
        }
     console.log(sum(2,3));
    
     let sum1 = function(a,b){
         return a+b;
     }
     console.log(sum1(2,3));
    
     let sum2 = (a,b) => {
         return a+b;
     }
     console.log(sum2(2,3)); 
    
    let arr =[1,2,3,"hello"];
    console.log(arr[3]);*/

    /*let varshi = {
        name:"varshita",
        comp:"intime",
        id:20,
        getdetails(){
                this.name = "priya";
                var id =20;
                return id;
        },
        disp(){
          // this.name 
           console.log(this.name);
        },
        disp1(){
            // this.id
              console.log(this.id); 
        },
        fun : function(){
            var name ="pulii";
            var id =20;
            return name+id;
           // console.log(varshi.comp);
        },
        disp3(){
            console.log(varshi.name);
        }
     }
     console.log(varshi.name);
     //varshi.getdetails().id;
     varshi.getdetails();
     //console.log(varshi.disp())
     varshi.disp()
     varshi.disp1()
     console.log(varshi.fun())
     varshi.disp3();*/

     class Varshit {
        name="varshita";
        comp="intime";
        id=20;
        getdetails(name:string){
                this.name =name;
                var id =20;
                return id;
        };
        disp(){
          // this.name 
           console.log(this.name);
        };
        disp1(){
            // this.id
              console.log(this.id); 
        };
        fun=function(){
            var name ="pulii";
            var id =20;
            return name+id;
           // console.log(varshi.comp);
        };
        disp3(){
            console.log("hello");
        }
     }
     let varshi1 = new Varshit();
     console.log(varshi1.name);
     //varshi.getdetails().id;
     varshi1.getdetails('varsha');
     //console.log(varshi.disp())
     varshi1.disp();
     varshi1.disp1();
     console.log(varshi1.fun());
     varshi1.disp3();
