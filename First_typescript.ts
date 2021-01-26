class JVT1
{
    private Age;Gender;Mail;Address;Email;
    public Photo;ID;Name;City;State;Pin;Country;
constructor(age:number,gender:string,mail:string,address:string,email:string){
this.Age=age;
this.Gender=gender;
this.Mail=mail;
this.Address=address;
this.Email=email;
this.Photo='0';
this.ID='0';
this.Name='0';
this.City='0';
this.State='0';
this.Pin=0;
this.Country='0';
}
compemp(photo:string,id:string,name:string,city:string,state:string,pin:number,country:string)
{
this.Photo=photo;
this.ID=id;
this.Name=name;
this.City=city;
this.State=state;
this.Pin=pin;
this.Country=country;
}
print()
{
console.log(this.Age,this.Gender,this.Mail,this.Address,this.Email)
console.log(this.Photo,this.ID,this.Name,this.City,this.State,this.Pin,this.Country)
}
}
let smile1 =new JVT1(12,'male',"venkatesh.db@gmail.com","BEML Main Road","info@jvtchnologies.co.in")
smile1.compemp("Voter ID","ASUPB590F","Mr. Venkatesh","Bangalore","Karnataka",560075,"India")
smile1.print()

function data(MNo:number,PID:string)
{
var PIDNo:string="g3839975"
console.log(MNo, PID, PIDNo)
}
data(09900367097,"Passport")

class bank1
{
   public creditcard;minimum;outstand;
constructor(creditcard:number,minimum:number,outstand:number)
{
this.creditcard=creditcard
this.minimum=minimum
this.outstand=outstand
}
that()
{
console.log(this.outstand)
}
}
let taht1=new bank1(6146496758938152, 272.36,571.36)
taht1.that();

class DrivingLicense
{
    private Lname;Fname;Mname;
    public dlnum:string;dlstate:string;dlcountry:string;dltype:string;dlholder:string;dldob:string;dlhcitybirth:string;
constructor(lname:string,fname:string,mname:string)
{
this.Lname=lname
this.Fname=fname
this.Mname=mname
this.dlnum='0';
this.dlstate='0';
this.dlcountry='0';
this.dltype='0';
this.dlholder='0';
this.dldob='0';
this.dlhcitybirth='0';
}
detail(dlnum:string,dlstate:string,dlcountry:string,dltype:string,dlholder:string,dldob:string,dlhcitybirth:string)
{
this.dlnum=dlnum
this.dlstate=dlstate
this.dlcountry=dlcountry
this.dltype=dltype
this.dlholder=dlholder
this.dldob=dldob
this.dlhcitybirth=dlhcitybirth
}
display()
{
console.log(this.Lname,this.Fname,this.Mname)
console.log(this.dlnum,this.dlstate,this.dlcountry)
console.log(this.dltype,this.dlholder,this.dldob,this.dlhcitybirth)
}
}
var V1=new DrivingLicense("kumar",'Pavan','Bijjjavaram')
V1.detail("KA50201500006939","karnataka","India","Around India","Software Engineer","12-07-1992","Rajampet")
V1.display()

function appearence(weight:number,height:number,Eyecolour:string,Gender:string,Hadd:string,Hph:number,Mno:number,st:string,country:string,)
{
    console.log(Eyecolour,Gender,Hadd,Hph,Mno,st,country)

}
appearence(55,8,"brown","Male","#6/96,rajampet,kadapa.",975545445,8553577745,"andhrapradesh","India")

class Vehicleinfo
{
    private Vehicletype;Colour;EngineNo;ChassisNo;Company;
constructor(Vehicletype:string,Colour:string,EngineNo:string,ChassisNo:string,Company:string)
{
this.Vehicletype=Vehicletype
this.Colour=Colour
this.EngineNo=EngineNo
this.ChassisNo=ChassisNo
this.Company=Company
}
details2()
{
console.log(this.Vehicletype,this.Colour,this.EngineNo,this.ChassisNo,this.Company)
}
}
var vars=new Vehicleinfo("light motor vehicle- car","Red","kp98gtyihh457797","tc5678898335r45","BMW")
vars.details2()

class Systemproperties
{
    private Rating;Processor;InstalledMem;
    public SystemType:string;Penntouch:string;Comname:string;Comdes:string;Windedit:string;WindproID:string;
constructor(Rating:number,Processor:string,InstalledMem:string)
{
this.Rating=Rating;
this.Processor=Processor;
this.InstalledMem=InstalledMem;
this.SystemType='0';
this.Penntouch='0';
this.Comname='0';
this.Comdes='0';
this.Windedit='0';
this.WindproID='0';
}
details3(SystemType:string,Penntouch:string,Comname:string)
{
this.SystemType=SystemType
this.Penntouch=Penntouch
this.Comname=Comname
}
details4(Comdes:string,Windedit:string,WindproID:string)
{
this.Comdes=Comdes
this.Windedit=Windedit
this.WindproID=WindproID
}
printy()
{
console.log(this.Rating,this.Processor,this.InstalledMem)
console.log(this.SystemType,this.Penntouch,this.Comname)
console.log(this.Comdes,this.Windedit,this.WindproID)
}
}
let varsh=new Systemproperties(4.5,"IntelCore i5-2450 CPU","4.00GB")
varsh.details3("64bit Operating Sys","No pen or touch","BALU-PC")
varsh.details4("WORKGROUP","Windows 7 Ultimate","00426-OEM-8992662-00497")
varsh.printy()

class Theatre
{
    private Tmn;Tsc;
    public Moviecert;clas;ppt;not;seat;total
static tname ="PSS multiplex"
constructor(Tmn:string,Tsc:string)
{
this.Tmn=Tmn;
this.Tsc=Tsc;
this.Moviecert="0";
this.clas="0";
this.ppt="0";
this.not=0;
this.seat="0";
this.total="0";
}
details5 (Moviecert:string,clas:string,ppt:string,not:number,seat:string,total:string)
{
this.Moviecert=Moviecert
this.clas=clas
this.ppt=ppt
this.not=not
this.seat=seat
this.total=total
}
diply()
{
    console.log(this.Moviecert,this.clas,this.ppt,this.not,this.seat,this.total)
}
static td( )
{
console.log(Theatre.tname)
}
}
let vari=new Theatre("JVT[C CPP]","screen 3")
vari.details5("U","first","1050.00",5,"c1,c2,c3,c4,c5","Rs.750.00")
vari.diply()
Theatre.td()

class cgacc
{
    private fn;ln;
    public cun;cpass;cypass;bday;gen;mbno;ycemail;
constructor(fn:string,ln:string)
{
this.fn=fn;
this.ln=ln;
this.cun='0';
this.cpass='0';
this.cypass='0';
this.bday='0';
this.gen='0';
this.mbno=0;
this.ycemail='0';
}
details6(cun:string,cpass:string,cypass:string,bday:string,gen:string,mbno:number,ycemail:string)
{
this.cun=cun
this.cpass=cpass
this.cypass=cypass
this.bday=bday
this.gen=gen
this.mbno=mbno
this.ycemail=ycemail
}
CGCdisplay()
{
console.log(this.fn,this.ln,this.cun,this.cpass,this.cypass);
console.log(this.bday,this.gen,this.mbno,this.ycemail);
}
}
let vari1=new cgacc("venkatesh","d b ");
vari1.details6("jvt","balu","balu","2-6-1986","male",9900367097,"venkatesh.db@gmail.com");
vari1.CGCdisplay();

class bankstate
{
    private bankname;date;
    public tim:string;atmnm:string;cdnum:string;brannm:string;txnum:number;respcde:number;withdrw:number;fromac:string;modrs:number;avbal:string;web:string;
constructor(bankname:string,date:string)
{
this.bankname=bankname
this.date=date
this.tim='0';
this.atmnm='0';
this.cdnum='0';
this.brannm='0';
this.txnum=0;
this.respcde=0;
this.withdrw=0;
this.fromac='0';
this.modrs=0;
this.avbal='0';
this.web='0';
}
details7(tim:string,atmnm:string,cdnum:string,brannm:string,txnum:number,respcde:number,withdrw:number,fromac:string,modrs:number,avbal:string,web:string)
{
this.tim=tim
this.atmnm=atmnm
this.cdnum=cdnum
this.brannm=brannm
this.txnum=txnum
this.respcde=respcde
this.withdrw=withdrw
this.fromac=fromac
this.modrs=modrs
this.avbal=avbal
this.web=web
}
BSdisplay()
{
console.log(this.bankname,this.date,this.tim,this.atmnm,this.cdnum,this.brannm,this.txnum)
console.log(this.respcde,this.withdrw,this.fromac,this.modrs,this.avbal,this.web)
}
}
let vari2=new bankstate("SBI bank","29/05/14");
vari2.details7("19:48","SJNBL48","xxxx xxxxx xxxx 0516","Banglr main brnch",2907,72,500,"xxxxxxxx05 xx01",0,"Rs.1000","www.statebankofindia.com");
vari2.BSdisplay();

