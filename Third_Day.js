let p1={
	name:"Jai Venkateswara Technologies",
    eduqua:"B TECH MCA MBA BSC MSC",
    dob:"2/6/1988",
    commadd:"233/3 Ground floor new thippasandra",
    resnum:08025216666,
    mnum:9900367097,
    email:"venkatesh.db@gmail.com",
    totalITexp:"1 year",
    skillnexp:"C,CPP all Lang & 1 years",
    repomana:"Venkatesh",
    pancard:'asu675901f'
    }
document.writeln('<br>',p1.name,p1.eduqua,p1.dob,p1.commadd,p1.resnum)
document.writeln(p1.mnum,p1.email,p1.totalITexp,p1.skillnexp,p1.repomana,p1.pancard)

let arr=[1135497,11128550,"10.245.97.123"]
document.writeln(arr[2])

let h={
	travelname:"GreenLine Travels And Holidays",
    departtime:"11:30 PM -05:30 AM",
    duration:"06:00 Hrs",
    seats:18,
    fare:"4700 delhi agra",
    desply( ){
    document.writeln('<br>',h.travelname,h.departtime,h.duration,h.seats,h.fare)
    }
    }
h.  desply( )

let personaldetails=['Venkatesh db','Director','JAI Venkateswara Technologies Private Limited...',':http://www.jvtechnologies.co.in/']
document.writeln(personaldetails[3])

function numval(num){
	if(num==undefined)
    {
    return "please enter number"
    }
accnum=1025489139
billnum=969648942
billperiod="17-Dec-2012 to 16-jan-2015"
return billnum
}
var dany=numval(9845042214)
if(dany!=undefined)
{
document.writeln(dany)
}

function IA(period){
if(period>= 30 ){
return "invalid application"
}
invoicenum=7411172
servtype="Internet Access"
descp="Monthly Subscription charges"
pack="ACT Blaze"
rate=1049.00
unit="Per Month"
quan="30days"
amt=1,049.00
tax=140.71
total=1189.71
return [servtype,rate,amt,tax,total]
}
var dani=IA(27)
if(dani!=undefined){
document.writeln(dani)
}

function sys(drive){
det=["Local Disk","97.5 GB","59.2 GB"]
if(det[0]==undefined){
return "invalid"
}
return det[2]
}
let dane=sys('c')
if(dane!=undefined){
document.writeln(dane)
}

function SP(countnum){
countnum=[1,2,3,4]
if(countnum[0]==1)
{
return "valid"
}
POdet="New Thipasundra<423203>"
Tracknum='EM423395510IN'
opcode=012
}
var darn=SP(1)
if(darn!=undefined){
document.writeln('<br>',darn)
}

function SPcont(){
tax=4
if(tax==4){
return "valid"
}
fromadd="XXXX"
toadd="XXXX"
wgt="20grms"
amt=39
dnt="08/04/2013 16:01"
taxes="Rs.4.00"
webadd="Track on www.indiapost.gov.in"
}
var darni=SPcont()
if(darni!=undefined){
document.writeln('<br>',darni)
}

let lib={
	bookID:12345634,
    bookauth:'Dennis Ritche',
    bookname:'C Programming',
    issuedate:'14/01/2012',
    duedate:'13/02/2012',
    libcont:{
    IDnum:"2008Ec027",
    NAME:"saravan",
    returnon:"25/02/2012",
    fine:12
    },
    dsply( )
    {
    document.writeln('<br>',lib.bookID)
    }
   }
  lib.dsply()
  
class ordering
{
constructor(name,pincode,add,landmark)
{
this.name=name
this.pincode=pincode
this.add=add
this.landmark=landmark
}
cont()
{
this.city="Mysore"
this.state="karnataka"
this.country="India"
}
dsply99()
{
document.writeln('<br>',this.name,this.city)
}
}
let varshitha=new ordering("venkatesh",570004,"XXXXXX","YYYY")
varshitha.cont()
varshitha.dsply99()

let laptp={
	model:'LGp430',
    os:'Windows 7 home base, Premium or professional',
     proc:'Second Generation Intel Core i3,i5 or i7 processor',
    ram:'upto 8GB',
    screen:'14.0 inch HD-LCD -backlit',
    resotn:'1366*768',
    wgt:'4.28 pound',
    conu:{
    store:'320GB',
    graph:'Intel HD Graphics',
    net:'802.11 b/g/n,bluetooth 3.0',
    batlife:'6-cell Battery',
    cost:'Rs.50,000',
    },
    dsply99(){
    document.writeln(laptp.os)
    }
}
laptp.dsply99() 

function tvspec(model,ledlight)
{
this.model=model
this.ledlight=ledlight
document.writeln('<br>',this.model,this.ledlight)
}
tvspec("LG55LHX","Backlight w/Local Dimming")

class mobileapple
{
constructor(OS,chipset,cpu,gpu,model,manu,Os,proc,ramem,kb,oBstore,flash,VCC,VR,NC,exStore)
{
this.OS=OS
this.chipset=chipset
this.cpu=cpu
this.gpu=gpu
this.model=model
this.manu=manu
this.Os=Os
this.proc=proc
this.ramem=ramem
this.kb=kb
this.oBstore=oBstore
this.flash=flash
this.VCC=VCC
this.VR=VR
this.NC=NC
this.exStore=exStore
}
platform()
{
this.OS='iOS 9, upgradable to iOS 9.2'
this.Chipset='Apple A9'
this.CPU='Dual-core 1.84 GHz Twister'
this.GPU='PowerVR GT7600 (six-core graphics)'
}
battery()
{
this.bat='Non-removable Li-Po 1715 mAh battery (6.9 Wh)'
this.Standby='Up to 240 h (3G'
this.Talktime='Up to 14 h (3G)'
this.Musicplay='Up to 50 h'
}
networktech()
{
this.net='GSM / CDMA / HSPA / EVDO / LTE'
this.Dimensions='138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)'
this.Weight='143 g (5.04 oz)'
this.SIM='Nano-SIM'
}
}
let shri=new mobileapple("iOS 9, upgradable to iOS 9.2",'Apple A9',"Dual-core 1.84 GHz Twister","PowerVR GT7600 (six-core graphics)",": iphone","Apple","ios 4.0",'1 GHZ','512Mb',"Software",'16GB/32Gb','LED','VGA','720 F',': 2 microphones',"No")
shri.platform()
shri.battery()
shri.networktech()

let probuy={
	Brand:": Scott International",
    ProductCode:"APPSCOTT-INTERNSWIT610835D77A441",
    Color:"Black",
    size:"S",
    material:'cotton',
    occasion:'casual',
    pattern:"solid",
    sleeve:"full",
    neck:"hooded",
    fit:"slim",
    gen:"men",
    ret()
    {
    document.writeln(probuy.Brand)
    },
    fitness()
    {
    document.writeln(probuy.fit)
    }
}
probuy.ret()
probuy.fitness()

function Ebill(web,username){
var password=':1234567'
var consnum=':23456123'
var billstatus='paid/unpaid'
var modeofpay=':netbanking'
var choosebank='sbi'
var username='kumar007'
var transnnum='18cv21828578437'
var paymentstatus='successful'
document.writeln('<br>',modeofpay,username,paymentstatus)
}
Ebill('www.tnebnet.org','agilan')

let vc={
	name:':naresh',
    mailid:'naresh.jvt@gmail.com',
    ctcnum:"+91 9944860792",
    comname:'jvt',
    designation:'programmer',
    add:
    {
    address:"230/3 2nd floor hal3rd stage new thippasandra bangalore-560075."
      }
}
document.writeln('<br>',vc.name,vc.designation,vc.add.address)

let comupsspecs={
model:"exide-digital600",
IPVLTG:"230v ac",
OPVLTG:'230v ac',
freq:"50hz",
battype:"-sealed maintenance free",
batcap:"-12volt 7Ah",
batbkup:"-12 to 20 mints",
retime:'-5 to 6 hours',
WGHT:"-6.1 kg",
diplaying()
{
document.writeln('<br>',comupsspecs.model)
}
}
comupsspecs.diplaying()

let bankstatement={
	BN:"SBI Bank",
    Date:"29/05/14",
    Time: "19:48",
    ATMNo : "SJNBL48",    
	CARDNo: "xxxx xxxxx xxxx 0516",
    res:{
    BRANCHNAME:"Bangalore Main Branch",
    TxnNo:"2907",
    Responsecode : 072,
    WithDrawl : 500.00
    },
    desply(){
    document.writeln('<br>',bankstatement.res.WithDrawl)
    }
}
bankstatement. desply()

class CGA 
{
constructor(FN,LN,CUN,CAPWD,CUPWD,BDAY,gender,mnum,YCMID)
{
this.FN=FN
this.LN=LN
this.CUN=CUN
this.CAPWD=CAPWD
this.CUPWD=CUPWD
this.BDAY=BDAY
this.gender=gender
this.mnum=mnum
this.YCMID=YCMID
}
displaying1()
{
document.writeln(this.FN)
}
}
var shree=new CGA("venkatesh","D B","jvt","balu","balu","2-6-1986","male",9900367097,"venkatesh.db@gmail.com")
shree.displaying1()

function film()
{
screen="PSS multiplex"
MN="JVT[c, CPP]"
MC="U"
CLS="First"
PPT="Rs.1050.00"
NOT=5
SN="c1,c2,c3.c4,c5"
TA="Rs.750.00"
return 0
}
var ret=new film()
document.writeln('<br>',screen,MN,MC,CLS,TA)

let atm={
	OTSNG:"Total: Rs. 571.36 Unbilled: Rs. 0",
    LPM:"Amount: Rs. 0 Date:07/07/2007",
    CLM:"Total: Rs. 18,000 Available: Rs. 17,428.64",
    utilise:"3%",
    cashlimit:'Total: Rs. 3,600 Available: Rs. 3,600',
    dly(){
    document.writeln(atm.cashlimit)
    }
}
atm.dly()

class mailcon
{
det()
{
this.FADD="Siva Prasad <kasi.sivap@gmail.com>"
this.TADD="D B Venkatesh <venkatesh.db@gmail.com>"
this.date="Fri, Nov 27, 2015 at 12:05 A"
this.sub='Request to forward the Resumes'
this.mby='gmail.com'
this.sby="gmail.com"
}
ply()
{
document.writeln('<br>',this.FADD,this.TADD,"Important mainly because of the people in the conversation")
}
}
var sree=new mailcon()
sree.det()
sree.ply()

function HC(PN,PID,BN){
if(age>=34){
return "more carefull"
}
var age=40
var dob='15/05/1991'
var gen='male'
var pa='7f,kaveri road, velur.'
var rnum="105"
var DatetimeBlood="08/09/15 and 08:15"
var Enterdate="08/09/15"
return [age,rnum,DatetimeBlood,Enterdate]
}
var SK=new HC()
if(SK!=undefined){
document.writeln('<br>',SK)
}

function CopInfo()
{
this.compname="JVT"
this.Desig="Programmer"
this.salary=230000
this.loctn="banglaore"
document.writeln(this.compname)
}
new CopInfo()

let arr1=['JVT','programmer',230000,"Bangalore"]
document.writeln(arr1.length)
document.writeln(arr1[arr1.length-2])

let COMPdet={
	name:"Jai Venkateswara Technologies",
    eduqua:'B TECH MCA MBA BSC MSC',
    dob:'2/6/1988',
    comadd:'233/3 Ground floor new thippasandra',
    resnum:08025216666,
    mobile:9900367097,
    rest:{
    email:'venkatesh.db@gmail.com',
    exp:'1',
    sk:'C,CPP all Lang & 1 years',
    rm:'V',
    pc:'asu675901f',
    },
    dsplng(){
    document.writeln('<br>',COMPdet.name,COMPdet.rest.sk)
    }
    }
COMPdet.dsplng()

function credit()
{
credit=[6146496758938152,571.36,272.36]
document.writeln(credit[0],credit[1])
}
credit()

let perdet={
Name:'Mr. venkatesh',
Age: 25,
Gender:' Male',
EmailAddress:' venkatesh.db@gmail.com',
Address :'BEML Main Road',
City:' Bangalore',
cont:{
State:' Karnataka',
ZiprPincode: 560075,
Country:" India",
MobileNo: 09900367097,
PhotoID:' Passport',
PhotoIDNo:' G3839975',
},
dply(){
document.writeln('<br>',perdet.Name,perdet.cont.MobileNo)
}
}
perdet.dply()

class DL1
{
constructor(Lastname,Firstname,Middlename,Driverslicensenumber,Driverslicensestate,Driverslicensecountry)
{
this.Lastname=Lastname
this.Firstname=Firstname
this.Middlename=Middlename
this.Driverslicensenumber=Driverslicensenumber
this.Driverslicensestate=Driverslicensestate
this.Driverslicensecountry=Driverslicensecountry

}
pdet()
{
this.Civiliantype='around india'
this.Employeetype='software engineer'
this.Dateofbirth='12-07-1992'
this.Cityofbirth="rajampet"
}
displayed()
{
document.writeln(this.Lastname,this.Firstname,this.Middlename)
document.writeln('<br>',this.Driverslicensenumber)
}
}
let DLR=new DL1('kumar','Pavan','Bijjavaram','ka50201500006939','karnataka','India')
DLR.pdet()
DLR.displayed()

class appearance1
{
constructor(Weight,Height,Eyecolour)
{
this.wgt=Weight
this.hgt=Height
this.ec=Eyecolour
}
detl(Gender,Homeaddres,Homephone)
{
this.g=Gender
this.ha=Homeaddres
this.hp=Homephone
}
detl1(Mobile,State,County)
{
this.m=Mobile
this.s=State
this.c=County
}
getdetails()
{
document.writeln('<br>',this.g,this.m)
}
}
let harsh=new appearance1(55,5.8,"brown")
harsh.detl('men','#6/96,rajampet,kadapa.',975545445)
harsh.detl1(8553577745,'andhrapradesh','india')
harsh.getdetails()

let vehicleinformation={
	Vehicletype:'light motor vehicle- car ',
    Colour:'red ',
    Enginenumber:'kp98gtyihh457797 ',
    Chassisnumber:'tc5678898335r45 ',
    Company:'BMW'
    }
document.writeln('<br>',vehicleinformation.Vehicletype,vehicleinformation.Enginenumber)

function vcd(name)
{
data=['naresh.jvt@gmail.com','+91 9944860792','jvt','programmer','230/3 2nd floor hal3rd stage new thippasandra bangalore-560075']
document.writeln('<br>',data[0])
}
new vcd('naresh')

function passendetails(Slnum)
{
data=['venkatesh','27','male','RLWL','2']
document.writeln('<br>',data[0])
}
new vcd(1)
