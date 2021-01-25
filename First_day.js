var name="Jai Venkateshwara technologies"
document.writeln(name)

class JVT
{
constructor(age,gender,mail,address,email){
this.Age=age
this.Gender=gender
this.Mail=mail
this.Address=address
this.Email=email
}
compemp(photo,id,name,city,state,pin,country)
{
this.Photo="Voter ID"
this.ID="ASUPB590F"
this.Name="Mr. Venkatesh"
this.City="Bangalore"
this.State="Karnataka"
this.Pin="560075"
this.Country="India"
this.Data=["Bangalore","Karnataka","560075","India"]
}
print()
{
document.writeln('<br>',this.Age,this.Gender,this.Mail,this.Address,this.Email)
document.writeln(this.Photo,this.ID,this.Name,this.City,this.State,this.Pin,this.Country)
document.writeln(this.Data[0],this.Data[this.Data.length-1])
}
}
let smile=new JVT(12,'male',"venkatesh.db@gmail.com","BEML Main Road","info@jvtchnologies.co.in")
smile.compemp("Voter ID","ASUPB590F","Mr. Venkatesh","Bangalore","Karnataka","560075","India")
smile.print()

function data(MNo,PID)
{
var PIDNo="g3839975"
document.writeln('<br>',MNo, PID, PIDNo)
}
data(09900367097,"Passport")

class bank
{
constructor(creditcard,minimum,outstand)
{
this.Creditcard=creditcard
this.Minimum=minimum
this.Outstand=outstand
}
that()
{
document.write('<br>',this.Outstand)
}
}
let taht=new bank(6146496758938152, 272.36,571.36)
taht.that();

class DrivingLicense
{
constructor(lname,fname,mname)
{
this.Lname=lname
this.Fname=fname
this.Mname=mname
}
detail(dlnum,dlstate,dlcountry,dltype,dlholder,dldob,dlhcitybirth)
{
this.DLNo=dlnum
this.DLState=dlstate
this.DLCont=dlcountry
this.CivilType=dltype
this.Emptype=dlholder
this.DOB=dldob
this.CityodBirth=dlhcitybirth
}
display()
{
document.writeln('<br>',this.Lname,this.Fname,this.Mname)
document.writeln(this.DLNo,this.DLState,this.DLCont)
document.writeln(this.CivilType,this.Emptype,this.DOB,this.CityodBirth)
}
}
var V1=new DrivingLicense("kumar",'Pavan','Bijjjavaram')
V1.detail("KA50201500006939","karnataka","India","Around India","Software Engineer","12-07-1992","Rajampet")
V1.display()

function appearence(weight,height)
{
Eyecolour="brown"
Gender="Male"
Hadd="#6/96,rajampet,kadapa."
Hph=975545445
Mno=8553577745
st="andhrapradesh"
country="India"
}
appearence(55,8)
document.writeln('<br>',Eyecolour,Gender,Hadd,Hph,Mno,st,country)

class Vehicleinfo
{
details1()
{
this.Vehicletype="light motor vehicle- car"
this.Colour="Red"
this.EngineNo="kp98gtyihh457797"
this.ChassisNo="tc5678898335r45"
this.Company="BMW"
}
details2()
{
document.writeln('<br>',this.Vehicletype,this.Colour,this.EngineNo,this.ChassisNo,this.Company)
}
}
var vars=new Vehicleinfo()
vars.details1()
vars.details2()

class Systemproperties
{
constructor(Rating,Processor,InstalledMem)
{
this.rate=Rating
this.proc=Processor
this.install=InstalledMem
}
details3(SystemType,Penntouch,Comname)
{
this.sys=SystemType
this.pt=Penntouch
this.cn=Comname
}
details4(Comdes,Windedit,WindproID)
{
this.com=Comdes
this.wind=Windedit
this.windid=WindproID
}
printy()
{
document.writeln(this.rate,this.proc,this.install)
document.writeln(this.sys,this.pt,this.cn)
document.writeln(this.com,this.wind,this.windid)
}
}
let varsh=new Systemproperties('<br>',4.5,"IntelCore i5-2450 CPU","4.00GB")
varsh.details3("64bit Operating Sys","No pen or touch","BALU-PC")
varsh.details4("WORKGROUP","Windows 7 Ultimate","00426-OEM-8992662-00497")
varsh.printy()

class Theatre
{
static tname ="PSS multiplex"
constructor(Tmn,Tsc){
this.mn=Tmn
this.sc=Tsc
}
details5 (Moviecert,clas,ppt,not,sn,ta)
{
this.mc="U"
this.cl="first"
this.pt="1050.00"
this.nt=5
this.seat="c1,c2,c3,c4,c5"
this.total="Rs.750.00"
document.writeln('<br>',this.mc,this.cl,this.pt,this.nt,this.seat,this.total)
}
static td( )
{
document.writeln('<br>',Theatre.tname)
}
}
let vari=new Theatre("JVT[C CPP]","screen 3")
vari.details5()
Theatre.td()

class cgacc
{
constructor(fn,ln)
{
this.fn1=fn
this.ln1=ln
}
details6()
{
this.cun="jvt"
this.cpass="balu"
this.cypass="balu"
this.bday="2-6-1986"
this.gen="male"
this.mbno=9900367097
this.ycemail="venkatesh.db@gmail.com"
document.writeln('<br>',this.fn1,this.ln1,this.cun,this.cpass,this.cypass)
document.writeln(this.bday,this.gen,this.mbno,this.ycemail)
}
}
let vari1=new cgacc("venkatesh","d b ")
vari1.details6()

class bankstate
{
constructor(bankname,date)
{
this.bnme=bankname
this.dt=date
}
details7()
{
this.tim="19:48"
this.atmnm="SJNBL48"
this.cdnum="xxxx xxxxx xxxx 0516"
this.brannm="Banglr main brnch"
this.txnum=2907
this.respcde="072"
this.withdrw=500
this.fromac="xxxxxxxx05 xx01"
this.modrs=0
this.avbal="Rs.1000"
this.web="www.statebankofindia.com"
document.writeln('<br>',this.bnme,this.dt,this.tim,this.atmnm,this.cdnum,this.brannm,this.txnum)
document.writeln(this.respcde,this.withdrw,this.fromac,this.modrs,this.avbal,this.web)
}
}
let vari2=new bankstate("SBI bank","29/05/14")
vari2.details7()

class comupsspec
{
constructor(Model,Ipvtg,Feq,Opvtg,Battype,Batcap,Batbackup,Rechargetime,Weight)
{
this.model=Model
this.ipvtg=Ipvtg
this.feq=Feq
this.opvtg=Opvtg
this.battype=Battype
this.batcap=Batcap
this.batbackup=Batbackup
this.rechargetime=Rechargetime
this.weight=Weight
}
computer()
{
document.writeln('<br>',this.model,this.ipvtg,this.feq,this.opvtg,this.battype)
document.writeln(this.batcap,this.batbackup,this.rechargetime,this.weight)
}
}
let puter=new comupsspec("exide-digital600","-230v ac","50Hz","-230v","sealed maintain free","12volt 7Ah","12 to 20mints","5 to 6 hrs","6.1 kg")
puter.computer();

function Fdd(distn,ticfare,servercharge,Tfare)
{
document.writeln(distn,ticfare,servercharge,Tfare)
}
function detailsfare()
{
Fdd('323 KM','Rs. 420.00',':Rs. 22.90',':Rs. 442.90')
}