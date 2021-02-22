// class Broadband_user{
//     details:Array<string>;
//     constructor(detail:Array<string>){
//         this.details=detail;
//         this.details.push("uploadspeed:32.06mbps");
//         this.details.push("downloadspeed:30.05mbps");
//     }
//     merge(){
//         this.details.pop();
//         return this.details;
//     }
//     display(){
//         console.log(this.details);
//         console.log(this.merge());
//     }
// }
// let BB=new Broadband_user(["accountnumber:1135497","BBuserID:11128550","IPaddress:10.245.97.123","MBdownloaded:21.26GB"]);
// BB.merge();
// BB.display();

// class Piligrimsticketbooking{
//     details:Array<string>;
//     det:Array<string>;
//     print:string[];
//     constructor(detail:string[],deta:string[]){
//         this.details=detail;
//         this.det=deta;
//         this.details.push('Ticket type:Special Entry Darshan','Per Slot Tickets : 2000','Booking No : IS151110080016')
//         this.details.push('Name of the Pilgrim: venkatesh','Order No : 010600013554','Email : venkateshprofessional7@gmail.com','Amount in figures (Rs): 220.00','Proof of ID:Aadhaar Card 733498928758','Booked Date&Time: 11062015 11:36:46')
//         this.details.push('No. of Persons: 1','Name of the Seva / Darshan : Archana','Reporting Time : 4:00 AM','Performance Date & Time : 12012015 AM 4:30:00','Privileges to the Seva : Two Small Laddu','Booked Time: 11:36:46')
//         this.det.push('Accommodation Type : Rs 500 Tirumala','Available : 350','Rate : 50 to 2000');
//     }
//   display_pil()
//    {
//        console.log(this.details,this.det);
//    }
// }
// let P=new Piligrimsticketbooking(['No. of Tickets : 1','No. of Tickets left:23'],['Date : Dec 1st','Day : Tuesday','Time : 3:30 Am']);
// P.display_pil();

// class Mail{
//     send:Map<string,string>;
//     receive:Map<string,string>;
//     mail_details:Map<string,string>;
//     constructor(key:string,value:string,key1:string,value1:string)
//     {
//         this.send=new Map<string,string>();
//         this.receive=new Map<string,string>();
//         this.send.set(key,value);
//         this.receive.set(key1,value1);
//     }
//     mail_data(key:string,value:string)
//     {
//         this.mail_details=new Map<string,string>();
//         this.mail_details.set(key,value);
//     }
//     mail_display(){
//         console.log(this.send);
//         console.log(this.receive);
//         console.log(this.mail_details);
//         console.log('Mailed and Sent by:Google.com ==>Important mainly because of the people in the conversation')
//     }
//     keynvalue(){
//         for(let key of this.send.keys())
//         {
//             console.log(key);
//         }
//         for(let value of this.send.values())
//         {
//             console.log(value);
//         }
//         for(let key of this.receive.keys())
//         {
//             console.log(key);
//         }
//         for(let value of this.receive.values())
//         {
//             console.log(value);
//         }
//         for(let key of this.mail_details.keys())
//         {
//             console.log(key);
//         }
//         for(let value of this.mail_details.values())
//         {
//             console.log(value);
//         }
//         for(let entry of this.send.entries())
//         {
//             console.log(entry[0],entry[1]);
//         }
//         for(let entry of this.receive.entries())
//         {
//             console.log(entry[0],entry[1]);
//         }
//         for(let entry of this.mail_details.entries())
//         {
//             console.log(entry[0],entry[1]);
//         }
//     }
// }
// let Mmap=new Mail('Siva Prasad','<kasi.sivap@gmail.com>','D B Venkatesh','<venkatesh.db@gmail.com>');
// Mmap.mail_data('Date','Fri, Nov 27, 2015 at 12:05 AM');
// Mmap.mail_display();
// Mmap.keynvalue();

// let DL={
//     Lname:'Kumar',
//     Fname:'Pavan',
//     Mname:'Bijjavaram',
//     DLdet:['ka50201500006939','karnataka','India'],
//     Pdet:['software engineer','12-07-1992','rajampet'],
//     dl: function(){}
// };
// DL.dl = function(){
//     console.log(DL.Pdet);
// }
// DL.dl();

// let Appearence={
//     persondetails:['Weight:55','Hight:5.8','Eye colour:brown','Gender:male','Home address:#6/96,rajampet,kadapa.','Home phone:975545445','Mobile:8553577745'],
//     appearinfo: function(obj:{State:string,Country:string}){ }
// }
// Appearence.appearinfo = function(obj:{State:string,Country:string}){
//     console.log(Appearence.persondetails);
// }
// Appearence.appearinfo({State:'Andrapradesh',Country:'India'});

// class Vehicleinfo{
//     vehicletype:'light motor vehicle- car';
//     Enginenum:'kp98gtyihh457797';
//     Chasisnum:':tc5678898335r45';
//     Company:'BMW';
//     colour:string[];
//     constructor()
//     {
//         this.colour=['Red'];
//         this.colour.push('Green');
//         this.colour.push('Marooon')
//     }
//     Vehicle_display()
//     {
//         console.log(this.colour);
//     }
// }
// let VI=new Vehicleinfo();
// VI.Vehicle_display();

// class SystemProperties{
//     Properties:Object;
//     constructor(obj:{Rating,Processor,installedmem,Systemtype,Penandtouch,Computername,computerdescription,windowsedition,windowsproductID})
//     {
//         this.Properties=obj;   
//      }
//      SP_display()
//      {
//          console.log(this.Properties);
//      }
// }
// let SP=new SystemProperties({Rating:4.5,Processor:'Intel® Core™ i5-2450 CPU',installedmem:'4.00 GB',Systemtype:'64-bit Operating System',Penandtouch:'No Pen or Touch Input is available for this Display',Computername:'BALU-PC',computerdescription:'WORKGROUP',windowsedition:'Windows 7 Ultimate',windowsproductID:'00426-OEM-8992662-0049'});
// SP.SP_display();

// class Theatre{
//     Theartrename:string;screennumber:number;
//     moviecertification:string;clas:string;
//     pricepetticket:string;numoftickets:number;
//     seatnum:string;totalamount:string;
//     constructor(Theartrename:string,screennumber:number,clas:string,pricepetticket:string,numoftickets:number,seatnum:string,totalamount:string)
//     {
//         this.Theartrename=Theartrename;
//         this.screennumber=screennumber;
//         this.clas=clas;
//         this.pricepetticket=pricepetticket;
//         this.numoftickets=numoftickets;
//         this.seatnum=seatnum;
//         this.totalamount=totalamount;
//     }
//     validation_moviename(moviename:string)
//     {
//         if(moviename=='JVT[C,CPP]')
//         {
//             return moviename;
//         }
//         else
//         {
//             return 'invalid';
//         }
//     }
//     validation_moviecertification(moviecertification)
//     {
//         if(moviecertification=='U')
//         {
//             return 'Movie for all';
//         }
//         else if(moviecertification=='U/A')
//         {
//             return 'Parental guidance for children under age 12';
//         }
//         else if(moviecertification=='A')
//         {
//             return 'Restricted to adults(Suitable for 18 years and above.)';
//         }
//         else if(moviecertification=='S')
//         {
//             return 'Restricted to a specialised groups of people, such as engineers, doctors or scientists';
//         }
//         else 
//         {
//             return 'Please enter valid certification';
//         }
//     }
//     valid_movie()
//     {
//         var condition:boolean=true;
//         if(condition==true)
//         {
//             console.log(this.validation_moviename(''));
//             console.log(this.validation_moviecertification(''));
//         }
        
//     }
// }
// let theatre=new Theatre('PSS multiplex',3,'first','Rs.1050.00',5,'c1,c2,c3,c4,c5','Rs.750.00');
// theatre.valid_movie();

// class googleaccountcreate
// {
//     details:Object;
//     obj:Object;
//     constructor(obj:{Fname:string,Lname:string},details:{ChooseUsername:string,Createpassword:string,Confirmpassword:string,birthday:string,gender:string,mobile:number,mailaddress:string})
//     {
//         this.obj=obj;
//         this.details=details;
//     }
//     display_GAC()
//     {
//         console.log(this.obj,this.details);
//     }
//     valid_gac()
//     {
//         if(this.details['Createpassword'].length<=5)
//         {
//             return 'Password length should be more than 5';
//         }
//         else
//         {
//             this.display_GAC();
//         }
//     }
// }
// let GAC=new googleaccountcreate({Fname:'Venkatesh',Lname:'D B'},{ChooseUsername:'JVT',Createpassword:'balu',Confirmpassword:'balu',birthday:'2-6-1986',gender:'Male',mobile:9900367097,mailaddress:'venkatesh.db@gmail.com'});
// GAC.valid_gac();
// console.log(GAC.valid_gac());

// class Visitingcarddetails
// {
//     details:Array<string>;
//     constructor()
//     {
//         this.details=['Naresh','naresh.jvt@gmail.com','+91 9944860792','JVT','programmer','230/3 2nd floor hal3rd stage new thippasandra bangalore-560075.']
//     }
//     display_vcd()
//     {
//         console.log(this.details);
//     }
//     vaild_vcd()
//     {
//         if(this.details[0]=='Naresh')
//         {
//             this.display_vcd();
//         }
//         else
//         {
//             return 'Invalid Name';
//         }
//     }
// }
// let VCD=new Visitingcarddetails();
// VCD.vaild_vcd();
// console.log(VCD.vaild_vcd());

class Computerspecifications
{
    details:Object;
    constructor()
    {
        this.details={Model:'exide-digital600',ipvoltage:'230v ac',frequency:'-50hz',opvoltage:'-230v ac',batterytype:'sealed maintenance free',batterycapacity:'12volt 7Ah',batterybackup:'12 to 20 mints',rechargetime:'5 to 6 hours',weight:'6.1 kg'}
    }
    display_CS()
    {
        console.log(this.details);
    }
    vaild_CS()
    {
        if(this.details['Model']=='exide-digital600')
        {
            this.display_CS();
        }
        else
        {
            return 'Invalid Name';
        }
    }
}
let VCD=new Computerspecifications();
VCD.vaild_CS();
// console.log(VCD.vaild_CS());