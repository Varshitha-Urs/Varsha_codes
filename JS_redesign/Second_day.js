class Visitcarddet
{
constructor(Vcname,Vcmailid,Vccntcno,Vccomname)
{
this.Vcname=Vcname
this.Vcmailid=Vcmailid
this.Vccntcno=Vccntcno
this.Vccomname=Vccomname
}
visitor(Ename,Enumber)
{
if(Ename==this.Vcname)
{
    if(Enumber==this.Vccntcno)
    {
        console.log(this.Vcname,this.Vccntcno,this.Vccomname)
    }
}
else
{
    console.log("Please enter vaild number or name")
}
}
}
let sitor=new Visitcarddet("naresh"," naresh.jvt@gmail.com","+919944860792","jvt")
sitor.visitor("naresh","+919944860792")

class Elecbill
{
constructor(Website,Tnebusername,ETnebusername,Password,EPassword,Consnum,EConsnum,Billstatus,username,Eusername,password,Epassword,choosebank,transnum,paystatus)
{
this.Website=Website
this.Tnebusername=Tnebusername
this.Password=Password
this.ETnebusername=ETnebusername
this.EPassword=EPassword
this.Consnum=Consnum
this.EConsnum=EConsnum
this.Billstatus=Billstatus
this.username=username
this.password=password
this.Eusername=Eusername
this.Epassword=Epassword
this.transnum=transnum
this.paystatus=paystatus
this.choosebank=choosebank
}
validation()
{
    if(this.ETnebusername==this.Tnebusername)
    {
        if(this.EPassword==this.Password)
        {
            console.log('Welcome please login to pay bill')
        }
    }
    else
    {
        console.log('Please enter valid data')
    }
}
vali()
{
    if(this.EConsnum==this.Consnum)
    {
        if(this.Eusername==this.username)
        {
            if(this.Epassword==this.password)
            {
                console.log('<br>')
                console.log(this.Consnum,this.Billstatus)
                console.log(this.username,this.transnum,this.paystatus)
            }
            else
            {
                console.log('Please enter password correctly')
            }
        }
        else
        {
            console.log('Please enter username correctly')
        }
    }
else 
{
    console.log('Please enter consumer number correctly')
}
}
}
let EB=new Elecbill("netbanking","aligan","aligan",1234567,1234567,23456123,23456123,"paid/unpaid"," kumar007"," kumar007",1234567,1234567,"sbi"," 18cv21828578437"," successful")
EB.validation()
EB.vali()

class Orderdress
{
constructor(brand,prodcode,colour,Ocolour,size,Osize,material,occassion,pattern,Opattern,sleeve,necktype,fit,Ofit,gender)
{
this.brand=brand
this.prodcode=prodcode
this.colour=colour
this.Ocolour=Ocolour
this.size=size
this.Osize=Osize
this.material=material
this.occassion=occassion
this.pattern=pattern
this.Opattern=Opattern
this.sleeve=sleeve
this.necktype=necktype
this.fit=fit
this.Ofit=Ofit
this.gender=gender
}
Oval()
{
    if(this.Opattern==this.pattern)
    {
        if(this.Ocolour==this.colour)
        {
            if(this.Osize==this.size)
            {
                if(this.Ofit==this.fit)
                {
                    console.log(this.brand,this.prodcode,this.colour,this.size,this.material,this.occassion,this.pattern,this.sleeve,this.necktype,this.fit)
                }
                else
                 {
                    console.log('File a return case')
                 }
            }
            else
             {
                console.log('File a return case')
             }
        }
        else
        {
        console.log('File a return case')
        }
    }
    else
    {
        console.log('File a return case')
    }
}
returndet(estimatedarrival)
{
this.estimatedarrival=estimatedarrival
this.returnpolicy=" Seller will accept returns within a 15 days from date of delivery of the item"
this.buyfor=" Rs.824"
this.effectiveprice=" Rs 453 after cashback"
}
display1()
{
//console.log("Sctt International","APPSCOTT-Interswit610835D77A441")
console.log('<br>',this.colour,this.size,this.material)
console.log(this.brand,"<br>",this.prodcode)
console.log(this.occassion,this.pattern,this.sleeve,this.necktype,this.fit,this.gender)
console.log(this.returnpolicy,this.buyfor,this.effectiveprice)
//console.log(this.colour,this.size,this.material)
}
}
//let vari6=new orderdress()
let OD=new Orderdress("Sctt International","APPSCOTT-Interswit610835D77A441","black","black","s","s","cotton"," Casual"," solid"," solid"," Full Sleeve"," Hooded"," Slim"," Slim"," Male")
OD.Oval()
OD.returndet("9days")
OD.display1()

class Mupdate
{
constructor(Model,ReqModel,Manufactuer,Os,ReqOs,Processor,ReqProcessor,RAMMemory,ReqRAMMemory,Keyboard,onboardstorage,Flash,VideoCallcamera,VideoRecording,NoiceCancelling,Expandablestorage)
{

this.Model=Model
this.ReqModel=ReqModel
this.Manufactuer=Manufactuer
this.Os=Os
this.ReqOs=ReqOs
this.Processor=Processor
this.RAMMemory=RAMMemory
this.ReqProcessor=ReqProcessor
this.ReqRAMMemory=ReqRAMMemory
this.Keyboard=Keyboard
this.onboardstorage=onboardstorage
this.Flash=Flash
this.VideoCallcamera=VideoCallcamera
this.VideoRecording=VideoRecording
this.NoiceCancelling=NoiceCancelling
this.Expandablestorage=Expandablestorage
}
platform()
{
this.os="ios 9,upgradable to ios 9.2"
this.chipset="Apple A9"
this.CPU="Dual-core 1.84GHz Twister"
this.GPU="PowerVR GT7600 (six-core graphics)"
}
valid()
{
    if(this.ReqModel==this.Model)
    {
        if(this.ReqOs==this.Os)
        {
            if(this.ReqProcessor==this.Processor)
            {
                if(this.ReqRAMMemory==this.RAMMemory)
                {
                    console.log('<br>',this.Model,this.Manufactuer,this.Os,this.Processor,this.RAMMemory,this.Keyboard)
                    console.log(this.onboardstorage,this.Flash,this.VideoCallcamera,this.VideoRecording)
                    console.log(this.NoiceCancelling,this.Expandablestorage,this.os,this.chipset)
                    console.log(this.CPU,this.GPU,this.bat,this.standby,this.talktime,this.musicplay)
                    console.log(this.dimension,this.wght,this.sim)
                }
                else
                {
                    console.log('Required type is not available')
                }
            }
            else
            {
                console.log('Required type is not available')
            }
        }
        else
        {
            console.log('Required type is not available')
        }
    }
    else
    {
        console.log('Required type is not available')
    }
}
battery1_body1()
{
this.bat="Non-removable Li-Po 1715 mAh battery (6.9 Wh)"
this.standby="Up to 240 h (3G)"
this.talktime="Up to 14 h (3G)"
this.musicplay="Up to 50 h"
this.dimension="138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)"
this.wght=" 143 g (5.04 oz)"
this.sim="Nano-SIM"
}
}
let MUD=new Mupdate("iphone","iphone","Apple","ios 4.0","ios 4.0","1 GHZ","1 GHZ","512Mb","512Mb","Software","16GB/32Gb"," LED","VGA","720 F","2 microphones","No")
MUD.platform()
MUD.battery1_body1()
MUD.valid()

class Tv
{
constructor(Model,ReqModel,Ledlight,Sizes,ReqSizes,Type240,Wireless,Usb,ReqUsb,Builtvedio,Price)
{
this.Model=Model
this.ReqModel=ReqModel
this.Ledlight=Ledlight
this.Sizes=Sizes
this.ReqSizes=ReqSizes
this.Type240=Type240
this.Wireless=Wireless
this.Usb=Usb
this.ReqUsb=ReqUsb
this.Builtvedio=Builtvedio
this.Price=Price
}
TV_val()
{
    if(this.ReqModel==this.Model)
    {
        if(this.ReqSizes==this.Sizes)
        {
            if(this.ReqUsb==this.Usb)
            {
                console.log(this.Ledlight,this.Sizes,this.Type240,this.Wireless)
                console.log(this.Usb,this.Builtvedio,this.Price)
            }
            else
            {
                console.log('Required model is not avialable')
            }
        }
        else
            {
                console.log('Required model is not avialable')
            }
    }
    else
            {
                console.log('Required model is not avialable')
            }
}
}
let TV=new Tv("LG55LHX","LG55LHX","Backlight w/Local Dimming","55 inches","55 inches","scanning Backlight (240 HZ “effect”)","HDMI yes","USB 2.0 (pictures, music,videos)","USB 2.0 (pictures, music,videos)","service-youtube","RS.55000")
TV.TV_val()

class Laptop
{
constructor(mod,OS,Emod,EOS,procs,screen,ram,batlife,Eram,Ebatlife,cost)
{
this.mod=mod
this.OS=OS
this.Emod=Emod
this.EOS=EOS
this.procs=procs
this.screen=screen
this.ram=ram
this.batlife=batlife
this.Eram=Eram
this.Ebatlife=Ebatlife
this.cost=cost
}
LAP_DET()
{
this.res="1366*76"
this.weht="4.28 pound"
this.stor="320GB"
this.grap="ntel HD Graphics"
this.netwo="802.11 b/g/n,bluetooth 3.0"

}
LAP_val()
{
    if(this.mod==this.Emod)
    {
        if(this.EOS==this.OS)
        {
            if(this.Eram==this.ram & this.batlife==this.Ebatlife)
            {
                console.log('<br>',this.mod,this.OS,this.procs,this.ram,this.screen)
                console.log(this.res,this.weht,this.stor,this.grap)
                console.log(this.netwo,this.batlife,this.cost)
            }
            else 
            {
                console.log('required type is not available')
            }
        }
        else 
            {
                console.log('required type is not available')
            }
    }
    else 
        {
            console.log('required type is not available')
        }
}
}
let LSpec=new Laptop("LGp430","Windows 7 home base, Premium or professional","LGp430","Windows 7 home base, Premium or professional","Second Generation Intel Core i3,i5 or i7 processor","14.0 inch HD-LCD -backlit","upto 8GB","6-cell Battery","upto 8GB","6-cell Battery","Rs.50,000")
LSpec.LAP_DET()
LSpec.LAP_val()

class Library
{
bookdetail(EBookID,EIDno)
{
this.EBookID=EBookID
this.EIDno=EIDno
this.BookID=123456
this.Bookname="C Programming"
this.author="Dennis Ritche"
this.issued="14/01/2012"
this.due="13/02/2012"
this.IDno="2008Ec027"
this.uname="Name"
this.return="25/02/2012"
this.fine=12
}
LIB_val()
{
if(this.BookID==this.EBookID)
{
    if(this.EIDno==this.IDno)
    {
        console.log('Return accepted')
        console.log('<br>',this.BookID,this.Bookname,this.author,this.issued)
        console.log(this.due,this.IDno,this.uname,this.return,this.fine)
    }
    else 
{
    console.log('Different book return')
}
}
else 
{
    console.log('Different book return')
}
}
}
var lib=new Library()
lib.bookdetail(123456,"2008Ec027")
lib.LIB_val()

class Speedpost
{
constructor(postofficedetails,tracknum,Etracknum,counternum,opcode)
{
this.postofficedetails=postofficedetails
this.tracknum=tracknum
this.Etracknum=Etracknum
this.counternum=counternum
this.opcode=opcode
}
addresspost()
{
this.from="xxxxxx"
this.toadd="xxxxxx"
this.wgt="20grms"
this.amt=39.00
this.datentime="08/04/2013 16:01"
this.taxes=":Rs.4.00"
this.trackadd="Track on www.indiapost.gov.in"
}
set (newtracknum)
{
    this.tracknum=newtracknum
}
get()
{
    return this.tracknum
}
disp()
{
    if(this.Etracknum==this.tracknum)
    {
        console.log('<br>',this.postofficedetails)
        console.log('<br>',this.tracknum,this.counternum,this.opcode,this.from)
        console.log(this.toadd,this.wgt,this.amt,this.datentime,this.taxes,this.trackadd)
    }
else
{
    console.log('Please enter valid tracknumber')
}
}
}
var SPost=new Speedpost("New Thipasundra<423203>","EM423395510IN","EM1234567890",1,12)
SPost.addresspost()
SPost.set("EM1234567890")
SPost.get()
SPost.disp()

class Elebill
{
constructor(selacc,Eselacc,billdate,subdiv,RRnum,ERRnum)
{
this.selacc=selacc
this.Eselacc=Eselacc
this.billdate=billdate
this.subdiv=subdiv
this.RRnum=RRnum
this.ERRnum=ERRnum
}
Ebilldet()
{
this.name="XXXXX"
this.add="XXXXX"
this.reading=42260
this.duedate="21/06/2012"
this.unitcon=1310
this.billamt="Rs.6498"
this.paydet="30/06/2012"
this.paydamt="Rs.6498"
}
des()
{
if(this.Eselacc==this.selacc)
{
    if(this.ERRnum==this.RRnum)
    {
        console.log('<br>',this.selacc,this.billdate,this.subdiv,this.RRnum)
        console.log(this.name,this.add,this.reading,this.duedate)
        console.log(this.unitcon,this.billamt,this.paydet,this.paydamt)
    }
    else 
    {
        console.log('Enter correct RRnumber')
    }
}
else 
{
    console.log('Enter correct account number')
}
}
}
var Electricbill=new Elebill("1-121-008-54","1-121-008-54","20/06/2012",1,12100854,12100854)
Electricbill.Ebilldet()
Electricbill.des()

function Travbustick(transdet){
	if(transdet==undefined){
	return "travelling not possible"
	}
BusDepoName="Kanchipuram/01"
TicketNumber=86655
Datentime="06/11/2014 14:58:47"
From="Chennai"
To="pondichery"
Qty=2
cost=33.00
Total=33.00
BusNo="TN 01 N 2454"
return BusNo
}
var travdet=Travbustick("TNST" )
if(travdet!=undefined)
{
console.log(travdet)
}

function Licncedrive(licncestate,DLNO)
{
	Name="varshitha"
	if(licncestate=="KARNATAKA"){
	return "valid licence"
	}
    else{
    console.log('<br>',licncestate,"<br>",DLNO)
    }
}
Licncedrive("Tamilnadu","<br>"," TN-41230120012921")

class VehregCB
{
constructor(regnum,ownername,Eregnum,Eownername,swdo,peradd,tempadd,dealer,chassisno,engineno,Echassisno,Eengineno)
{
this.regnum=regnum
this.ownername=ownername
this.Eregnum=Eregnum
this.Eownername=Eownername
this.swdo=swdo
this.peradd=peradd
this.tempadd=tempadd
this.dealer=dealer
this.chassisno=chassisno
this.engineno=engineno
this.Echassisno=Echassisno
this.Eengineno=Eengineno
}
contueddet()
{
this.classofvehle="LMV (CAR)"
this.makername="Maruthi SuzUKI India LTD"
this.numofcylnd=3
this.wghtkg=740
this.wheelbase="2360"
this.seatcap=5
this.fuel="Petrol"
this.cubiccyl=796
}
dispy()
{
if(this.regnum==this.Eregnum)
    {
        if(this.ownername==this.Eownername)
        {
            console.log('<br>',this.ownername,this.swdo,this.peradd,this.tempadd,this.dealer)
        }
        else
        {
        console.log('Please enter valid data')
        }
    }
else if(this.engineno==this.Eengineno)
{
    if(this.chassisno==this.Echassisno)
    {
        console.log(this.chassisno,this.engineno,this.classofvehle,this.makername)
        console.log(this.numofcylnd,this.wghtkg,this.wheelbase,this.seatcap)
        console.log(this.fuel,this.cubiccyl)
    }
    else
    {
    console.log('Please enter valid data')
    }
}
else
{
    console.log('Please enter valid data')
}
}
}
var Vreg=new VehregCB("TN 22 CY 2917","sachin","TN 22 CY 2917","Sachin","Srinivasan","XXXX","XXXX","Murugan Vehicles& Services Limited",5793603,"G3N72505757",5793603,"G3N72505757")
Vreg.contueddet()
Vreg.dispy()

class Licpolicy
{
constructor( branchcode,date,add,totalcost,name)
{
this.branchcode=branchcode
this.date=date
this.add=add
this.totalcost=totalcost
this.name=name
}
LP_det(Epolynum)
{
this.Epolynum=Epolynum
this.polynum=364164915
this.doc="02/04/200"
this.dudat="04/1"
this.premamt=6426
this.latefee=287.20
this.loanint="Due 00/0000 to 00/0000"
this.total="Rs: 6713.20"
this.nxtdue="04/2014"
}
deply()
{
    if(this.Epolynum==this.polynum)
    {
        console.log('<br>',this.branchcode,this.date,this.add,this.totalcost,this.name)
        console.log(this.polynum,this.doc,this.dudat,this.premamt,this.latefee)
        console.log(this.loanint,this.total,this.nxtdue)
    }
    else 
    {
        console.log('Please enter valid policy number')
    }
}
}
var LP=new Licpolicy(309,"07/11/2013-12:51","XXXX","Rs.6713.00","mr/Mrs: saravanan")
LP.LP_det(364164915)
LP.deply()

function Faredet(dist){
ditance="323KM"
    if(dist>=500){
    return "invalid"
    }
ticketfare="Rs.420.00"
servicecharge="Rs.22.90"
Totalfare="Rs.442.90"
return servicecharge
}
  var accno= Faredet(200)
if(accno!=undefined){
console.log(servicecharge)  
}

function Passeenger(status){
name=["venkatesh "," "," naveen RM"]
	if(name[1]==undefined){
    return "invalid"
    }
age=[27,27,23]
gender=["make","male","male"]
seat=[7,8,9]
return age
}
var PD=Passeenger("RLWL")
if(PD!=undefined){
console.log('<br>',age[0])
}

class Tickdet
{
constructor(TransID,PNRNo,EPNRNo,trainnumnname,datebooking,Tclass)
{
this.TransID=TransID
this.PNRNo=PNRNo
this.EPNRNo=EPNRNo
this.trainnumnname=trainnumnname
this.datebooking=datebooking
this.Tclass=Tclass
}
lctn()
{
this.datejourney="04-Jan-2016"
this.from="KJM"
this.to="TPTY"
this.boarding="KJM"
this.dateboard="04-Jan-2016"
this.reserve="TPTY"
this.schdepart="21:00 Hrs"
}
dply()
{
    if(this.PNRNo==this.EPNRNo)
    {
        console.log('<br>',this.trainnumnname,this.datebooking,this.Tclass)
        console.log(this.datejourney,this.from,this.to,this.boarding,this.dateboard)
        console.log(this.reserve,this.schdepart)
    }
else
{
    console.log('Please enter valid PNR number')
}
}
}
var Tdetails=new Tickdet(100000380284535,411502354,411502354,"56213 / TIRUPATI PASSR","14-Dec-2015","SLEEPERCLASS")
Tdetails.lctn()
Tdetails.dply()

function Clglab(slno){
components=["UJT","Resistor","Cpacitor","CRO","Function generator","regulated power supply"]
	if(components[3]==undefined){
    return "valid details please"
    }
specifications=["2N 2646","220ohms or 66kohms","0.01uf","20MHZ","1MHZ","(0-30V),1A"]
quantity=[2,4,5,1,1,1]
return quantity
}
var varhit=Clglab("1,2,3,4,5,6")
if(varhit!=6){
console.log('<br>',quantity[0],quantity[1],quantity[2],quantity[3],quantity[4],quantity[5])
}

class Persondet
{
constructor(Ename,Edob,Ebloodgrp)
{
this.Ename=Ename
this.Edob=Edob
this.Ebloodgrp=Ebloodgrp
}
person()
{
this.name="Naga Lalitha Kumari Bezawada"
this.dob="18-02-198"
this.pob="Samalkota"
this.tob="7.30-8PM"
this.native="Rajahmundry"
}
personcont()
{
this.matstatus="UnMarried"
this.religion="Hindu"
this.commun="Telugu"
this.caste="Balija"
this.subsec="Krishna Balija"
}
persondet()
{
this.mothertongue="Telugu"
this.gothram="Mathala"
this.star="Pushyami 3,4P"
this.height="5'1''"
this.complexion="Medium"
this.qual="B.Tech(CS)"
this.uni="KIET,Kakinada"
this.bloodgrp="B+ve"
}
dply()
{
if(this.Ename==this.name)
{
    if(this.Edob==this.dob & this.Ebloodgrp==this.bloodgrp)
        {
            console.log('<br>',this.name,this.dob,this.pob,this.tob,this.native)
            console.log(this.matstatus,this.religion,this.commun,this.caste,this.subsec)
            console.log(this.mothertongue,this.gothram,this.star,this.height,this.complexion)
            console.log(this.qual,this.uni,this.bloodgrp)
        }
        else
        {
            console.log('Please enter valid details')
    }
}
else
{
    console.log('Please enter valid details')
}
}
}
let PDet=new Persondet("Naga Lalitha Kumari Bezawada","18-02-198","B+ve")
PDet.person()
PDet.personcont()
PDet.persondet()
PDet.dply()

let C={
	compname:"JVT",
    desg:"programmer",
    salary:230000,
    locatn:"Banglore",
    displaying: function()
    {
        if(C.compname!=undefined)
    console.log('<br>',C.compname,C.desg,C.salary,C.locatn)
    }
    }
C.displaying()

let P={
	accnum:11354797 ,
    broadbanduserID:111285550,
    IPAdd:"10.245.97.123",
    totalMBdwnld:"21.26 GB",
    Mdwnldspeed:"30.05 mbps",
    mupldspeed:"32.06 mbps",
    valida:function()
    {
        if(P.accnum!=undefined)
        {
            return P.accnum
        }
    }
    }
P.method=function ( ){
console.log('<br>',this.accnum,this.broadbanduserID,this.IPAdd)
console.log(this.totalMBdwnld,this.Mdwnldspeed,this.mupldspeed)
}
P.method()
P.valida();

let Month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
Month.sort();
console.log(Month.length)
console.log(Month[Month.length-1])

let Dates=[21,22,23,24,25,26]
Dates.toString();
console.log(Dates[3])
console.log(Dates.length)
