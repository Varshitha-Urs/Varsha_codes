var name="Jai Venkateshwara technologies"
console.log(name)

class JVT
{
constructor(age,gender,address,email,id,city,state,pin,country)
{
this.age=age
this.gender=gender
this.address=address
this.email=email
this.id=id
this.city=city
this.state=state
this.pin=pin
this.country=country
}
company_vali(regmail,mail,photoproof,photo,regname,name)
{
this.regmail=regmail
this.mail=mail
this.photoproof=photoproof
this.photo=photo
this.regname=regname
this.name=name
    if(regmail==mail){
        if(photoproof==photo)
        {
            if(regname==name)
            {
                console.log('access granted '+this.name+" Welcome to JVT")
            }
        }
    }
}
}
let CV=new JVT(25,'male',"BEML Main Road","info@jvtchnologies.co.in","ASUPB590F","Bangalore","Karnataka","560075","India")
CV.company_vali("venkatesh.db@gmail.com","venkatesh.db@gmail.com","Voter ID","Voter ID","Mr. Venkatesh","Mr. Venkatesh")

function Passport(MNo,regPID,PID)
{
var PIDNo="G3839975"
if(regPID==PID)
{
    console.log(PIDNo)
}
else{
console.log('Please enter the data with proper case')
console.log('Please register the proof')
}
}
Passport(9900367097,"Passport","Passport")

class Bank
{
constructor(regcreditcard,creditcard,minimum,outstand)
{
this.regcreditcard=regcreditcard
this.creditcard=creditcard
this.minimum=minimum
this.outstand=outstand
if(regcreditcard==creditcard)
{
    console.log(regcreditcard)
    console.log('<br>',this.minimum)
}
else
{
    console.log('Please enter valid creditcard number') 
}
}
}
new Bank(6146496758938152, 6156496758938152, 272.36,571.36)

class DrivingLicense
{
constructor(lname,fname,mname)
{
this.lname=lname
this.fname=fname
this.mname=mname
}
dl_val(regdlnum,dlnum,dlstate,dlcountry,dltype,dlholder,dldob,regdlhcitybirth,dlhcitybirth)
{
this.regdlnum=regdlnum
this.dlnum=dlnum
this.dlstate=dlstate
this.dlcountry=dlcountry
this.dltype=dltype
this.dlholder=dlholder
this.dldob=dldob
this.regdlhcitybirth=regdlhcitybirth
this.dlhcitybirth=dlhcitybirth
if(regdlnum==dlnum)
{   
    if(regdlhcitybirth==dlhcitybirth)
        {
            console.log('<br>',this.lname,this.fname,this.mname)
            console.log(this.dlnum,this.dlstate,this.dlcountry)
            console.log(this.dltype,this.dlholder,this.dldob,this.dlhcitybirth)
        }
        else{
            console.log('Please enter valid  birth city')
        }
    }
else{
    console.log('Please enter valid DL number')
}
}
}
var DL=new DrivingLicense("kumar",'Pavan','Bijjjavaram')
DL.dl_val("KA50201500006939","TN50201500006939","karnataka","India","Around India","Software Engineer","12-07-1992","Rajampet","Telengana")

function Appearence(weight,height)
{
Eyecolour="brown"
Gender="Male"
Hadd="#6/96,rajampet,kadapa."
Hph=975545445
Mno=8553577745
st="andhrapradesh"
country="India"
}
Appearence(55,8)
console.log('<br>',Eyecolour,Gender,Hadd,Hph,Mno,st,country)

class Vehicleinfo
{
details_Vinfo(Vehicletype,Colour,regEngineNo,regChassisNo,EngineNo,ChassisNo,Company)
{
this.Vehicletype=Vehicletype
this.Colour=Colour
this.regEngineNo=regEngineNo
this.regChassisNo=regChassisNo
this.EngineNo=EngineNo
this.ChassisNo=ChassisNo
this.Company=Company
if(regEngineNo==EngineNo)
{
    if(regChassisNo==ChassisNo)
    {
        console.log('<br>',this.Vehicletype,this.Colour,this.Company)
    }
else
{
    console.log('This is not your vehicle')
}
}
else
{
    console.log('Enter corrcet engine number')
}
}
}
var VI=new Vehicleinfo()
VI.details_Vinfo("light motor vehicle- car","Red","kp98gtyihh457797","tc5678898335r45","kp98gtyihh457797","tc5678898335r45","BMW")

class System_requirement
{
constructor(Rating,Processor,InstalledMem)
{
this.Rating=Rating
this.Processor=Processor
this.InstalledMem=InstalledMem
}
systype(SystemType,Penntouch,Comname)
{
this.SystemType=SystemType
this.Penntouch=Penntouch
this.Comname=Comname
}
sysdet(Comdes,Windedit,requiredWindedit,WindproID)
{
this.Comdes=Comdes
this.Windedit=Windedit
this.WindproID=WindproID
this.requiredWindedit=requiredWindedit
if(requiredWindedit==Windedit)
{
console.log(this.Rating,this.Processor,this.InstalledMem)
console.log(this.SystemType,this.Penntouch,this.Comname)
console.log(this.Comdes,this.WindproID)
}
else
{
    console.log('Your requirement will be fulfilled at earliest')
}
}
}
let SR=new System_requirement('<br>',4.5,"IntelCore i5-2450 CPU","4.00GB")
SR.systype("64bit Operating Sys","No pen or touch","BALU-PC")
SR.sysdet("WORKGROUP","Windows 7 Ultimate","Windows 7 Ultimate","00426-OEM-8992662-00497")

class Theatre
{
static tname ="PSS multiplex"
constructor(Tmn,Tsc)
{
this.Tmn=Tmn
this.Tsc=Tsc
}
movie_cert (Moviecert)
{
this.Moviecert=Moviecert
if(Moviecert=='U')
{
    console.log('This movie is for all')
}
else if(Moviecert=='U/A')
{
    console.log('This movie is for Adults')
}
else if(Moviecert=='A')
{
    console.log('This movie is strictly for Adults')
}
else if(Moviecert=='S')
{
    console.log('This movie is for specified group')
}
else 
{
    console.log('Cannot display this movie ')
}
}
movie_class(clas,ptp,not,total)
{
    this.clas=clas
    if(clas=='First')
    {
        this.ptp=ptp[0]
        this.not=not
        this.seat=this.not
        this.total=(this.ptp*this.seat)
        console.log('<br>',this.Moviecert,this.clas,this.ptp,this.not,this.seat,this.total)
    }
    else if(clas=='Second')
    {
        this.ptp=ptp[1]
        this.not=not
        this.seat=this.not
        this.total=(this.ptp*this.seat)
        console.log('<br>',this.Moviecert,this.clas,this.ptp,this.not,this.seat,this.total)
    }
    else if(clas=='Balcony')
    {
        this.ptp=ptp[2]
        this.not=not
        this.seat=this.not
        this.total=(this.ptp*this.seat)
        console.log('<br>',this.Moviecert,this.clas,this.ptp,this.not,this.seat,this.total)
    }
    else
    {
        console.log('<br>',this.Moviecert,this.clas,this.ptp,this.not,this.seat,this.total)
    }
}
static td( )
{
console.log('<br>',Theatre.tname)
}
}
let Tdet=new Theatre("JVT[C CPP]","screen 3")
Tdet.movie_cert('U')
Tdet.movie_class('Balcony',[150,320,80],5)
Theatre.td()

class Cgoogleacc
{
constructor(fn,ln)
{
this.fn=fn
this.ln=ln
}
details(com,cpass,cypass,bday,gen,mbno)
{
this.com=com
this.cpass=cpass
this.cypass=cypass
this.bday=bday
this.gen=gen
this.mbno=mbno
if(cpass==cypass)
{
    console.log("Please complete the form")
}
else
{
    console.log("Please enter valid password with number,alphabets and symbols")
}
}
acc_creation(ycemail,prevemail)
{
this.ycemail=ycemail
this.prevemail=prevemail
if(this.ycemail==this.prevemail)
    {
    console.log("Account created successfully")
    console.log('<br>',this.fn,this.ln,this.com)
    console.log(this.bday,this.gen,this.mbno,this.ycemail)
    }
else
    {
    console.log("This mail ID already exists")
    }
}
}
let GAC=new Cgoogleacc("venkatesh","d b ")
GAC.details("jvt","balu","balu","2-6-1986","male",9900367097)
GAC.acc_creation("venkatesh.db@gmail.com","venkatesh.db@gmail.com")

var access=false
class Bankstate
{
constructor(cardnum,date,time,web,modRs,branchname,txnum,responsecode)
{
this.modRs=modRs
this.date=date
this.time=time
this.web=web
this.cardnum=cardnum
this.branchname=branchname
this.txnum=txnum
this.responsecode=responsecode
}
detail_bank(bankname,entercustomerID,customerID,ATMnum,EATMnum,Eac,fromac,avbal,total)
{
this.customerID=customerID
this.entercustomerID=entercustomerID
this.bankname=bankname
this.ATMnum=ATMnum
this.EATMnum=EATMnum
this.avbal=avbal
this.total=total
if(customerID==entercustomerID)
{
    if(Eac==fromac)
    {
        if(EATMnum==ATMnum)
        {
            if(access==true)
            console.log('<br>',this.bankname,this.date,this.time,this.ATMnum,this.cardnum,this.branchname,this.txnum)
            console.log(this.responsecode,this.modRs,this.web)
        }
        else
        {
            console.log('Please enter valid ATM number')
        }
    }
    else
    {
        console.log('Please enter valid account number')
    }
}
else
{
    console.log('Please enter valid customer ID')
}
}
set (wd){
    this.withdrw=wd
    }
get (){
    return this.withdrw
    }
setbalancev(){
    this.avbal=this.total-this.withdrw
}
getbalance(){
    return this.avbal
}
bankStatement()
{
    if(access==true){
    this.avbal=this.total-this.withdrw;}
    return this.avbal;
}
}
let bankstate=new Bankstate("xxxx xxxxx xxxx 0516","29/05/14","19:48","www.statebankofindia.com",0,"Banglr main brnch",2907,"072")
bankstate.detail_bank("SBI bank","1234567890","1234567890","SJNBL48","SJNBL48","xxxxxxxx05 xx01","xxxxxxxx05 xx01",0,10000)
bankstate.set(2500)
bankstate.setbalancev()
//console.log(bankstate.get())
bankstate.bankStatement()
bankstate.get()
bankstate.getbalance()
console.log('balance:'+ bankstate.bankStatement())

class Comupsspec
{
constructor(Ipvtg,Feq,Opvtg,Battype,Batcap,Batbackup,Rechargetime,Weight)
{
this.Ipvtg=Ipvtg
this.Feq=Feq
this.Opvtg=Opvtg
this.Battype=Battype
this.Batcap=Batcap
this.Batbackup=Batbackup
this.Rechargetime=Rechargetime
this.Weight=Weight
}
computer(Model,reqmodel)
{
this.Model=Model
this.reqmodel=reqmodel
if(reqmodel==Model)
{
    console.log('<br>',this.Model,this.Ipvtg,this.Feq,this.Opvtg,this.Battype)
    console.log(this.Batcap,this.Batbackup,this.Rechargetime,this.Weight)
}
else
{
    console.log("Required model is out of stock")
}
}
}
let puter=new Comupsspec("-230v ac","50Hz","-230v","sealed maintain free","12volt 7Ah","12 to 20mints","5 to 6 hrs","6.1 kg")
puter.computer("exide-digital600","exide-digital600");

function Fdd(distn,ticfare,servercharge,Tfare)
{
console.log(distn,ticfare,servercharge,Tfare)
}
function Detailsfare()
{
Fdd('323 KM','Rs. 420.00',':Rs. 22.90',':Rs. 442.90')
}
Detailsfare()