class visitcarddet
{
constructor(name,mailid,vnum,vname)
{
this.Vcname=name
this.Vcmailid=mailid
this.Vccntcno=vnum
this.Vccomname=vname
}
visitor()
{
document.writeln(this.Vccntcno,this.Vccomname)
}
}
let sitor=new visitcarddet("naresh"," naresh.jvt@gmail.com","+919944860792","jvt")
sitor.visitor()

class elecbill
{
constructor(website,tnebusername,password,consnum,billstatus)
{
this.Website=website
this.Tnebusername=tnebusername
this.Password=password
this.Consnum=consnum
this.Billstatus=billstatus
}
details8(username,password,transnum,paystatus)
{
this.username=username
this.password=password
this.transnum=transnum
this.paystatus=paystatus
}
details9()
{
document.writeln('<br>')
document.writeln(this.Password,this.Consnum,this.Billstatus)
document.writeln(this.username,this.password,this.transnum,this.paystatus)
}
}
let vari5=new elecbill("netbanking","sbi",1234567,23456123,"paid/unpaid")
vari5.details8(" kumar007",1234567," 18cv21828578437"," successful")
vari5.details9()

class orderdress
{
constructor(brand,prodcode,colour,size,material)
{
this.brand=brand
this.procode=prodcode
this.colour=colour
this.size=size
this.material=material
}
details10()
{
this.occassion=" Casual"
this.pattern=" solid"
this.sleeve=" Full Sleeve"
this.necktype=" Hooded"
this.fit=" Slim"
this.gender=" Male"
}
shipping(estimatedarrival)
{
this.returnpolicy=" Seller will accept returns within a 15 days from date of delivery of the item"
this.buyfor=" Rs.824"
this.effectiveprice=" Rs 453 after cashback"
}
display1()
{
//document.writeln("Sctt International","APPSCOTT-Interswit610835D77A441")
document.writeln('<br>',this.colour,this.size,this.material)
document.writeln(this.brand,"<br>",this.procode)
document.writeln(this.occassion,this.pattern,this.sleeve,this.necktype,this.fit,this.gender)
document.writeln(this.returnpolicy,this.buyfor,this.effectiveprice)
//document.writeln(this.colour,this.size,this.material)
}
}
//let vari6=new orderdress()
let vari6=new orderdress("Sctt International","APPSCOTT-Interswit610835D77A441","black","s","cotton")
vari6.details10()
vari6.shipping("9days")
vari6.display1()

class mupdate
{
constructor(Model,Manufactuer,Os,Processor,RAMMemory,Keyboard,onboardstorage,Flash,VideoCallcamera,VideoRecording,NoiceCancelling,Expandablestorage)
{

this.Model=Model
this.Manufactuer=Manufactuer
this.Os=Os
this.Processor=Processor
this.RAMMemory=RAMMemory
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
battery1()
{
this.bat="Non-removable Li-Po 1715 mAh battery (6.9 Wh)"
this.standby="Up to 240 h (3G)"
this.talktime="Up to 14 h (3G)"
this.musicplay="Up to 50 h"
}
body1()
{
this.dimension="138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)"
this.wght=" 143 g (5.04 oz)"
this.sim="Nano-SIM"
}
display2()
{
document.writeln('<br>',this.Model,this.Manufactuer,this.Os,this.Processor,this.RAMMemory,this.Keyboard)
document.writeln(this.onboardstorage,this.Flash,this.VideoCallcamera,this.VideoRecording)
document.writeln(this.NoiceCancelling,this.Expandablestorage,this.os,this.chipset)
document.writeln(this.CPU,this.GPU,this.bat,this.standby,this.talktime,this.musicplay)
document.writeln(this.dimension,this.wght,this.sim)
}
}
let vari7=new mupdate('<br>',"iphone","Apple","ios 4.0","1 GHZ","512Mb","Software","16GB/32Gb"," LED","VGA","720 F","2 microphones","No")
vari7.platform()
vari7.battery1()
vari7.body1()
vari7.display2()

class tv
{
constructor(model,ledlight,sizes,type240,wireless,usb,builtvedio,price)
{
this.Model=model
this.Ledlight=ledlight
this.Sizes=sizes
this.Type240=type240
this.Wireless=wireless
this.Usb=usb
this.Builtvedio=builtvedio
this.Price=price
}
display3()
{
document.writeln('<br>')
document.writeln(this.Ledlight,this.Sizes,this.Type240,this.Wireless)
document.writeln(this.Usb,this.Builtvedio,this.Price)
}
}
let vari8=new tv("Backlight w/Local Dimming","55 inches","scanning Backlight (240 HZ “effect”)","HDMI yes","USB 2.0 (pictures, music,videos)","service-youtube","RS.55000")
vari8.display3()

class laptop
{
constructor(mod,OS,procs,ram,screen)
{
this.mod=mod
this.OS=OS
this.procs=procs
this.ram=ram
this.screen=screen
}
cont()
{
this.res="1366*76"
this.weht="4.28 pound"
this.stor="320GB"
this.grap="ntel HD Graphics"
this.netwo="802.11 b/g/n,bluetooth 3.0"
this.batlife="6-cell Battery"
this.cost="Rs.50,000"
}
display4()
{
document.writeln('<br>',this.mod,this.OS,this.procs,this.ram,this.screen)
document.writeln(this.res,this.weht,this.stor,this.grap)
document.writeln(this.netwo,this.batlife,this.cost)
}
}
let vari9=new laptop("LGp430","Windows 7 home base, Premium or professional","Second Generation Intel Core i3,i5 or i7 processor","upto 8GB","14.0 inch HD-LCD -backlit")
vari9.cont()
vari9.display4()

class library
{
bookdetail()
{
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
display5()
{
document.writeln('<br>',this.BookID,this.Bookname,this.author,this.issued)
document.writeln(this.due,this.IDno,this.uname,this.return,this.fine)
}
}
var vars1=new library()
vars1.bookdetail()
vars1.display5()

class speedpost
{
constructor(postofficedetails,tracknum,countnum,opcode)
{
this.postofficedetails=postofficedetails
this.tracknum=tracknum
this.countnum=countnum
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
disp()
{
document.writeln('<br>',this.postofficedetails)
document.writeln('<br>',this.tracknum,this.countnum,this.opcode,this.from)
document.writeln(this.toadd,this.wgt,this.amt,this.datentime,this.taxes,this.trackadd)
}
}
var vars2=new speedpost("New Thipasundra<423203>",": EM423395510IN",1,12)
vars2.addresspost()
vars2.disp()

class elebill
{
constructor(selacc,billdate,subdiv,RRnum)
{
this.selacc=selacc
this.billdate=billdate
this.subdiv=subdiv
this.RRnum=RRnum
}
det()
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
document.writeln('<br>',this.selacc,this.billdate,this.subdiv,this.RRnum)
document.writeln(this.name,this.add,this.reading,this.duedate)
document.writeln(this.unitcon,this.billamt,this.paydet,this.paydamt)
}
}
var varsha=new elebill("1-121-008-54","20/06/2012",1,12100854)
varsha.det()
varsha.des()

function travbustick(transdet){
	if(transdet==undefined){
	return "travelling not possible"
	}
BusDepoName="Kanchipuram/01"
TicketNumber=00086655
Datentime="06/11/2014 14:58:47"
From="Chennai"
To="pondichery"
Qty=2
cost=33.00
Total=33.00
BusNo="TN 01 N 2454"
return BusNo
}
var travdet=travbustick("TNST" )
if(travdet!=undefined)
{
document.writeln(travdet)
}

function licncedrive(licncestate,DLNO)
{
	Name="varshitha"
	if(licncestate=="KARNATAKA"){
	return "valid licence"
	}
    else{
    document.writeln('<br>',licncestate,"<br>",DLNO)
    }
}
licncedrive("Tamilnadu","<br>"," TN-41230120012921")

class vehregCB
{
constructor(regnum,ownername,swdo,peradd,tempadd,dealer,chassisno,engineno)
{
this.regnum=regnum
this.ownername=ownername
this.swdo=swdo
this.peradd=peradd
this.tempadd=tempadd
this.dealer=dealer
this.chassisno=chassisno
this.engineno=engineno
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
document.writeln('<br>',this.ownername,this.swdo,this.peradd,this.tempadd,this.dealer)
document.writeln(this.chassisno,this.engineno,this.classofvehle,this.makername)
document.writeln(this.numofcylnd,this.wghtkg,this.wheelbase,this.seatcap)
document.writeln(this.fuel,this.cubiccyl)
}
}
var varsha1=new vehregCB("TN 22 CY 2917","Sachin","Srinivasan","XXXX","XXXX","Murugan Vehicles& Services Limited",5793603,"0G3N72505757")
varsha1.contueddet()
varsha1.dispy()

class licpolicy
{
constructor( branchcode,date,add,totalcost,name)
{
this.branchcode=branchcode
this.date=date
this.add=add
this.totalcost=totalcost
this.name=name
}
conde()
{
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
document.writeln('<br>',this.branchcode,this.date,this.add,this.totalcost,this.name)
document.writeln(this.polynum,this.doc,this.dudat,this.premamt,this.latefee)
document.writeln(this.loanint,this.total,this.nxtdue)
}
}
var varshi=new licpolicy(309,"07/11/2013-12:51","XXXX","Rs.6713.00","mr/Mrs: saravanan")
varshi.conde()
varshi.deply()

function faredet(dist){
ditance="323KM"
    if(dist>=500){
    return "invalid"
    }
ticketfare="Rs.420.00"
servicecharge="Rs.22.90"
Totalfare="Rs.442.90"
return servicecharge
}
  var accno= faredet(200)
if(accno!=undefined){
document.writeln(servicecharge)  
}

function passeenger(status){
name=["venkatesh "," "," naveen RM"]
	if(name[1]==undefined){
    return "invalid"
    }
age=[27,27,23]
gender=["make","male","male"]
seat=[7,8,9]
return age
}
var PD=passeenger("RLWL")
if(PD!=undefined){
document.writeln('<br>',age[0])
}

class tickdet
{
constructor(TransID,PNRNo,trainnumnname,datebooking,Tclass)
{
this.TransID=TransID
this.PNRNo=PNRNo
this.trainnumnname=trainnumnname
this.datebooking=datebooking
this.Tclass=Tclass
}
nxt()
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
document.writeln('<br>',this.trainnumnname,this.datebooking,this.Tclass)
document.writeln(this.datejourney,this.from,this.to,this.boarding,this.dateboard)
document.writeln(this.reserve,this.schdepart)
}
}
var varsi=new tickdet(100000380284535,411502354,"56213 / TIRUPATI PASSR","14-Dec-2015","SLEEPERCLASS")
varsi.nxt()
varsi.dply()

function clglab(slno){
components=["UJT","Resistor","Cpacitor","CRO","Function generator","regulated power supply"]
	if(components[3]==undefined){
    return "valid details please"
    }
specifications=["2N 2646","220ohms or 66kohms","0.01uf","20MHZ","1MHZ","(0-30V),1A"]
quantity=[2,4,5,1,1,1]
return quantity
}
var varhit=clglab("1,2,3,4,5,6")
if(varhit!=6){
document.writeln('<br>',quantity[0],quantity[1],quantity[2],quantity[3],quantity[4],quantity[5])
}

class persondet
{
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
document.write('<br>',this.name,this.dob,this.pob,this.tob,this.native)
document.write(this.matstatus,this.religion,this.commun,this.caste,this.subsec)
document.write(this.mothertongue,this.gothram,this.star,this.height,this.complexion)
document.write(this.qual,this.uni,this.bloodgrp)
}
}
let dha=new persondet()
dha.person()
dha.personcont()
dha.persondet()
dha.dply()

let c={
	compname:"JVT",
    desg:"programmer",
    salary:230000,
    locatn:"Banglore",
    displaying()
    {
    document.writeln('<br>',this.compname,this.desg,this.salary,this.locatn)
    }
    }
c.displaying()

let p={
	accnum:11354797,
    broadbanduserID:111285550,
    IPAdd:"10.245.97.123",
    totalMBdwnld:"21.26 GB",
    Mdwnldspeed:"30.05 mbps",
    mupldspeed:"32.06 mbps"
    }
p.method=function ( ){
document.writeln('<br>',this.accnum,this.broadbanduserID,this.IPAdd)
document.writeln(this.totalMBdwnld,this.Mdwnldspeed,this.mupldspeed)
}
p.method()

let dh=[11354797,111285550,"10.245.97.123","21.26 GB","30.05 mbps","32.06 mbps"]
document.writeln(dh.length)
document.writeln(dh[dh.length-1])

let dates=[21,22,23,24,25,26]
document.writeln(dates[3])
document.writeln(dates[dates.length])
