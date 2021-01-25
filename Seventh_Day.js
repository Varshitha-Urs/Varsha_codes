class pdet
{
constructor(name,dob,tob,pob,native)
{
this.name=name
this.dob=dob
this.tob=tob
this.pob=pob
this.native=native
}
pdetprint()
{
document.writeln('<br>',this.name,this.dob,this.tob,this.pob,this.native)
}
}
class Pdeta extends pdet
{
constructor(name,dob,tob,pob,native,martialstatus,religion,community,caste,subsect,mothertounge,gothram,star)
{
super(name,dob,tob,pob,native)
this.martialstatus=martialstatus
this.religion=religion
this.community=community
this.caste=caste
this.subsect=subsect
this.mothertounge=mothertounge
this.gothram=gothram
this.star=star
}
Pdet()
{
document.writeln(this.martialstatus,this.religion,this.community,this.caste,this.subsect,this.mothertounge,this.gothram,this.star)
}
}
class PDetail extends Pdeta
{
constructor(name,dob,tob,pob,native,martialstatus,religion,community,caste,subsect,mothertounge,gothram,star,height,complex,qual,university,Bgroup)
{
super(name,dob,tob,pob,native,martialstatus,religion,community,caste,subsect,mothertounge,gothram,star)
this.height=height
this.complex=complex
this.qual=qual
this.university=university
this.Bgroup=Bgroup
}
PDetaildisplay()
{
document.writeln(this.height,this.complex,this.qual,this.university,this.Bgroup)
}
}
let Huge=new PDetail(' NagaLalithaKumaribezawada',' 18/02/1989',' 7.30-8PM',' Samalkota',' Rajahmundry',' UnMarried',' Hindu',' Telugu',' Balija',' Krishna Balija',' Telugu',' Mathala',' Pushyami 3,4P',' 5.1',' Medium',' B.Tech(CS)',' KIET,Kakinada',' B+ve')
Huge.pdetprint()
Huge.Pdet()
Huge.PDetaildisplay()

class Ticketdetails1
{
constructor(trasacid,pnrnum,trainnum,dbook,trainclass)
{
this.trasacid=trasacid
this.pnrnum=pnrnum
this.trainnum=trainnum
this.dbook=dbook
this.trainclass=trainclass
}
tdprint(trasacid,pnrnum,trainnum,dbook,trainclass)
{
document.writeln('<br>',trasacid,pnrnum,trainnum,dbook,trainclass)
}
}
let smaller=new Ticketdetails1(100000380284535,' 4115023549',' 56213 / TIRUPATI PASSR',' 14-Dec-2015',' SLEEPERCLASS')

function smal(callback)
{
callback(100000380284535,' 4115023549',' 56213 / TIRUPATI PASSR',' 14-Dec-2015',' SLEEPERCLASS')
}
smal(smaller.tdprint)
class tdpartner extends Ticketdetails1
{
constructor(trasacid,pnrnum,trainnum,dbook,trainclass,qouta,from,to,boarding,Dateboard,reseveupto,schedule)
{
super(trasacid,pnrnum,trainnum,dbook,trainclass)
this.qouta=qouta
this.from=from
this.to=to
this.boarding=boarding
this.Dateboard=Dateboard
this.reseveupto=reseveupto
this.schedule=schedule
}
tddisplay(name,qouta,from,to,boarding,Dateboard,reseveupto,schedule)
{
document.writeln('<br>',name,qouta,from,to,boarding,Dateboard,reseveupto,schedule)
}
}
let medim=new tdpartner('100000380284535',' 4115023549',' 56213 / TIRUPATI PASSR',' 14-Dec-2015',' SLEEPERCLASS',' general',' :04-Jan-2016',' KJM',' TPTY',' :KJM',' 04-Jan-2016',' TPTY',' 21:00 Hrs')
function meddical(callback)
{
callback('varshitha',' general',' :04-Jan-2016',' KJM',' TPTY',' :KJM',' 04-Jan-2016',' TPTY',' 21:00 Hrs')
}
meddical(medim.tddisplay)

class Passdetails
{
constructor(name,age,gender,status,coach,seat)
{
this.name=name
this.age=age
this.gender=gender
this.status=status
this.coach=coach
this.seat=seat
}
Pdetdisplay()
{
document.writeln('<br>',this.name,this.age,this.gender,this.status,this.coach,this.seat)
}
}
class fare_details extends Passdetails
{
constructor(name,age,gender,status,coach,seat,distance,ticfare,servcharge,totafare)
{
super(name,age,gender,status,coach,seat)
this.distance=distance
this.ticfare=ticfare
this.servcharge=servcharge
this.totafare=totafare
}
fddisplay()
{
document.writeln('<br>',this.distance,this.ticfare,this.servcharge,this.totafare)
}
}
let fair=new fare_details(' venkatesh',' 27',' male',' RLWL',' SC',' 7',' 323KM',' Rs.420',' Rs.22.90',' Rs.442.90')
fair.fddisplay()
fair.Pdetdisplay()

class platform1
{
constructor(OS,chipset,CPU,GPU)
{
this.OS=OS
this.chipset=chipset
this.CPU=CPU
this.GPU=GPU
}
PT()
{
document.writeln(this.OS,this.chipset,this.CPU,this.GPU)
}
}
class batteryy extends platform1
{
constructor(OS,chipset,CPU,GPU,NR,Standby,Talktime,Musicplay)
{
super(OS,chipset,CPU,GPU)
this.NR=NR
this.Standby=Standby
this.Talktime=Talktime
this.Musicplay=Musicplay
}
BT()
{
document.writeln(this.OS,this.chipset,this.CPU,this.GPU)
}
}
class nwkttech extends batteryy
{
constructor(NR,Standby,Talktime,Musicplay,Ntype,Bdimen,Bwght,BSim)
{
super(NR,Standby,Talktime,Musicplay)
this.Ntype=Ntype
this.Bdimen=Bdimen
this.Bwght=Bwght
this.BSim=BSim
}
NT()
{
document.writeln('<br>',this.OS,this.chipset,this.CPU,this.GPU)
}
}
let specifications_1=new nwkttech(' iOS 9, upgradable to iOS 9.2',' Apple A9',' Dual-core 1.84 GHz Twister',' PowerVR GT7600 (six-core graphics)',' Non-removable Li-Po 1715 mAh battery (6.9 Wh)',' Up to 240 h (3G)',' Up to 14 h (3G)',' Up to 50 h',' GSM / CDMA / HSPA / EVDO / LTE',' 138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)',' 143 g (5.04 oz)',' Nano-SIM')
specifications_1.PT()
specifications_1.BT()
specifications_1.NT()

let library_program={
	LPname:'venkatesh',
    LPphone:' 9876543210',
    LPadd:{
    LPpincode:' 560 042',
    LPaddress:' #43 Lproad',
    LPlandmark:' school',
    LPcity:'Banglore',
    LPstate:'Karnataka',
    LPcountry:'India'
   }
};
document.writeln(library_program.LPname,library_program.LPphone)
document.writeln(library_program.LPadd.LPaddress)