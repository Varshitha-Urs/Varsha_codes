class vehiclemaker extends vehicleregistration
{
constructor(regnum,ownername,swDo,padd,temadd,makername,numcyln,weight,wheelbase,seatcap,fuel,cubicclyn)
{
super(regnum,ownername,swDo,padd,temadd)
this.Makername=makername
this.Numcyln=numcyln
this.Weight=weight
this.Wheelbase=wheelbase
this.Seatcap=seatcap
this.Fuel=fuel
this.Cubicclyn=cubicclyn
}
printer(date,regnum,ownername,swDo,padd,temadd)
{
document.writeln(date,regnum,ownername,swDo,padd,temadd)
}
}
let tar=new vehiclemaker('TN 22 CY 2917','Sachin','Sirinivasan',"XXXX","XXXX",'Maruthi SuzUKI India LTD',3,740,2360,5,'petrol',796)

function grease(callback)
{
callback('<br>','2/03/20202',' TN 22 CY 2917',' Sachin',' Sirinivasan'," XXXX"," XXXX")
}
grease(tar.printer)

class driveinglicence extends vehiclemaker
{
constructor(regnum,ownername,swDo,padd,temadd,makername,numcyln,weight,wheelbase,seatcap,fuel,cubicclyn,licencestate,dlnum,lhname,lhsdw)
{
super(regnum,ownername,swDo,padd,temadd)
this.Licencestate=licencestate
this.Dlnum=dlnum
this.lhname=lhname
this.Lhsdw=lhsdw
}
licenceholder(regnum,ownername,swDo,padd,temadd,Lhadd,Lhdob,Licencefor,licenceprovideon,LHvalidity)
{
document.writeln(regnum,ownername,swDo,padd,temadd,Lhadd,Lhdob,Licencefor,licenceprovideon,LHvalidity)
}
}
let maker=new driveinglicence('TN 22 CY 2917','Sachin','Sirinivasan',"XXXX","XXXX",'Maruthi SuzUKI India LTD',3,740,2360,5,'petrol',796,'Tamil Nadu','TN-41230120012921','naresh','venkatesh')
function DLll(callback)
{
callback('<br>','TN 22 CY 2917','Sachin','Sirinivasan',"XXXX","XXXX",'#34 mian road,banglore highway','31/12/2000','M/cycl &LMV','02/05/2012','01/05/2032')
}
DLll(maker.licenceholder)

class Medicalbill
{
constructor(medicalname,billnum,billdate,pat,referdby)
{
this.Mname=medicalname
this.Mbillnum=billnum
this.Mbilldate=billdate
this.Mpatname=pat
this.Mreferedby=referdby
}
alerting()
{
document.writeln(this.Mname,this.Mbillnum,this.Mbilldate,this.Mpatname,this.Mreferedby)
}
}
let billmedical=new Medicalbill('Apollo Pramcy',35,'16.10.2012',':Manisha patel','Dr.Rawther Nithin')
billmedical.alerting()

function billdetails(name)
{
var qty=['2x1 ML','5x1 NA',10]
var decription=['Drops Ciplox-D','Blead Gallant Razor','Tablet Metatime-500MG']
var mfg=['CIPLA','BDF','MP']
var batch=['mz0014',1,'MTM025']
var expire=['05/13','01/14','03/13']
var amount=[19.8,150,9.9]
var totalamount=179.70
var DLNo=12133
document.writeln('<br>',name,qty[0],decription[0],mfg[0],batch[0],expire[0],amount[0],totalamount[0],DLNo[0])
document.writeln(qty[1],decription[1],mfg[1],batch[1],expire[1],amount[1],totalamount[1],DLNo[1])
document.writeln(qty[2],decription[2],mfg[2],batch[2],expire[2],amount[2],totalamount[2],DLNo[2])
}
function biller(callback)
{
callback('varshitha')
}
biller(billdetails)

let court={
	description:[' Butter Roti',' Masala PApad',' Paneer Kadai'],
    quantity:[' 4',' 3',' 1'],
    rate:[' 65',' 75',' 325'],
    AmountFC:[' 260',' 150',' 325']
}
document.writeln('<br>',court.description[0],court.quantity[0],court.rate[0],court.AmountFC[0])
document.writeln(court.description[1],court.quantity[1],court.rate[1],court.AmountFC[1])
document.writeln(court.description[2],court.quantity[2],court.rate[2],court.AmountFC[2])

class Ticketdetails
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
let small=new Ticketdetails(100000380284535,' 4115023549',' 56213 / TIRUPATI PASSR',' 14-Dec-2015',' SLEEPERCLASS')

function smal(callback)
{
callback(100000380284535,' 4115023549',' 56213 / TIRUPATI PASSR',' 14-Dec-2015',' SLEEPERCLASS')
}
smal(small.tdprint)
class tdpart2 extends Ticketdetails
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
let medium=new tdpart2('100000380284535',' 4115023549',' 56213 / TIRUPATI PASSR',' 14-Dec-2015',' SLEEPERCLASS',' general',' :04-Jan-2016',' KJM',' TPTY',' :KJM',' 04-Jan-2016',' TPTY',' 21:00 Hrs')
function meddical(callback)
{
callback('varshitha',' general',' :04-Jan-2016',' KJM',' TPTY',' :KJM',' 04-Jan-2016',' TPTY',' 21:00 Hrs')
}
meddical(medium.tddisplay)

function compny(name,age,gender)
{
document.writeln('<br>',name,age,gender)
}
function employ(name,age,gender,Email)
{
compny('JVT',5,'male')
document.writeln('<br>',name,age,gender,Email)
}
employ('venkatesh',23,'male','venkateshdb@gmail.com')
 
function trail1(CompanyAge)
 {
    var count=0;
 for(i=count;i<=CompanyAge;i++)
 {
    count++;
    document.writeln('<br>',count)
 }

 }
 trail1(5)
        
 function trail2(CompanyAge)
 {
 if(CompanyAge<10)
 {
  return 'valid';
 }
document.writeln(CompanyAge)
 }
trail2(20); 

class tickdetcall
{
constructor(trainnumnname,datebooking,classtc)
{
this.trainnumnname=trainnumnname
this.datebooking=datebooking
this.classtc=classtc
}
dply(name,trainnumnname,datebooking,classtc)
{
document.writeln('<br>',name,trainnumnname,datebooking,classtc)
}
}
let varsi23=new tickdetcall("56213 / TIRUPATI PASSR","14-Dec-2015","SLEEPERCLASS")
function TNJ(callback) 
{
callback("Venkatesh"," 56213 / TIRUPATI PASSR","14-Dec-2015","SLEEPERCLASS")
}
TNJ(varsi23.dply)

class trailer
{
DETAILS(name)
{
if(name==undefined)
{
return "invalid"
}
else 
{
return name
}
}
sliated(bod)
{
if(bod==1988)
{
return "valid"
}
else
{
document.writeln('<br>',bod)
}                   
}
}                              
let tap=new trailer()
var gap=tap.DETAILS('varshitha' )
document.writeln('<br>',gap)
var gap1=tap.sliated(2000)
document.writeln('<br>',gap1)

function corporate(companame,designation,salary,location)
{
document.writeln(companame,designation,salary,location)
}
function COMPANDET(CDname,CDeduqua,CDdob,CDadd)
{
document.writeln(CDname,CDeduqua,CDdob,CDadd)
}
function Compdetails(CDmnum,CDemail,CDtotalexp,CdSnRs,CDRM,CDpan)
{
if(true)
{
corporate('JVT',' Programmer ',230000,' Banglore')
COMPANDET('Jai Venkateshwara Technologies','B TECH MCA MBA BSC MSC','2/6/1988','233/3 Ground floor new thippasandra')
}
else if(!true)
{
document.writeln(9900367097,' venkatesh.db@gmail.com',' 1',' C,CPP all Lang & 1 years',' venkatesh',' asu675901f')
}
}
Compdetails(9900367097,' venkatesh.db@gmail.com',' 1',' C,CPP all Lang & 1 years',' venkatesh',' asu675901f')

class healthcarebloodtest
{
static test='Bloodtest'
constructor(Pname,PID,Pnum,Pbillnum,Page)
{
this.Pname=Pname
this.PIDPID=PID
this.Pnum=Pnum
this.Pbillnum=Pbillnum
this.Page=Page
}
HCpatientdet(Pdob,Pgender,Pfasting,Padd,Proomnum,Pdateofcollected,Penterdate,PrespondedDNT)
{
this.Pdob=Pdob
this.Pgender=Pgender
this.Pfasting=Pfasting
this.Padd=Padd
this.Proomnum=Proomnum
this.Pdateofcollected=Pdateofcollected
this.Penterdate=Penterdate
this.PrespondedDNT=PrespondedDNT
}
static HCst()
{
document.writeln(healthcarebloodtest.test)
}
HCprint(Pname)
{
document.writeln(this.Pname,this.PIDPID,this.Pbillnum,this.Page)
document.writeln(this.Pgender,this.Pfasting,this.Pdateofcollected,this.PrespondedDNT)
}
}
let fast=new healthcarebloodtest('sathish',' 10567890890',' 044 222738',' 56725',' 34')
fast.HCpatientdet('15/05/1991',' Male',' Yes',' 7f,kaveri road, velur',' 105',' 08/09/15 and 08:1',' 08/09/15',' 08/09/15 and 09:16')
healthcarebloodtest.HCst()

class HCtable extends healthcarebloodtest
{
constructor(test,result,flag,Pname,PID,Pnum,Pbillnum,Page)
{
super(Pname,PID,Pnum,Pbillnum,Page)
this.test=test
this.result=result
this.flag=flag
}
HCdisplay()
{
document.writeln('<br>',this.test,this.result,this.flag)
}
}
let cap=new HCtable(' bloodtest',' soon',' mentioned','sathish',' 10567890890',' 044 222738',' 56725',' 34')
cap.HCdisplay()
cap.HCprint('sathish')

class carinsurance
{
constructor(CIname,CIadd,CIctcdet,CIemail,CIpolicynum,CIperiodofI,CIoccu)
{
this.CIname=CIname
this.CIadd=CIadd
this.CIctcdet=CIctcdet
this.CIemail=CIemail
this.CIpolicynum=CIpolicynum
this.CIperiodofI=CIperiodofI
this.CIoccu=CIoccu
}
Ciprint()
{
document.writeln('br>',this.CIname,this.CIadd,this.CIctcdetthis,this.CIemail,this.CIpolicynum,this.CIperiodofI,this.CIoccu)
}
}
let nest=new carinsurance(' Varshitha',' #23,LK main road',' varshitha@gmail.com',' 92027123311002120',' 110711700622',' from 00:00 Hrs on 14/07/2011 to 13/07/2012 on 23:59',' Software Engineer')

class CItable extends carinsurance
{
constructor(CIname,CIadd,CIctcdet,CIemail,CIpolicynum,CIperiodofI,CIoccu,regnum,model,Enginechasisnum,bodytype,cubiccap,manuyear,seatindcap,netpremium,IDV)
{
super(CIname,CIadd,CIctcdet,CIemail,CIpolicynum,CIperiodofI,CIoccu)
this.regnum=regnum
this.model=model
this.Enginechasisnum=Enginechasisnum
this.bodytype=bodytype
this.cubiccap=cubiccap
this.manuyear=manuyear
this.seatindcap=seatindcap
this.netpremium=netpremium
this.IDV=IDV
}
Cidisplay()
{
document.writeln('br>',this.regnum,this.model,this.Enginechasisnum,this.bodytype,this.cubiccap,this.manuyear,this.seatindcap,this.netpremium,this.IDV)
}
}
let lap=new CItable(' Varshitha',' #23,LK main road',' varshitha@gmail.com',' 92027123311002120',' 110711700622',' from 00:00 Hrs on 14/07/2011 to 13/07/2012 on 23:59',' Software Engineer',' TN07BH5551 Chennai South (Thiruvanmiyur)', ' FIAT LINEA/EMOTION PK 1.3MJD',' 0083414 MCA11071B090107869ENZ',' -',' 1248',' 2010',' 5',' 11,065.38')
lap.Ciprint()
lap.Cidisplay()

class Ccompany
{
constructor(Cname,yop,Cdesig,Cdepart,Cgrade,Cfamilysize)
{
this.Cname=Cname
this.yop=yop
this.Cdesig=Cdesig
this.Cdepart=Cdepart
this.Cgrade=Cgrade
this.Cfamilysize=Cfamilysize
}
CCprint()
{
document.writeln('<br>',this.Cname,this.yop,this.Cdesig,this.Cdepart,this.Cgrade,this.Cfamilysize)
}
}
let jag=new Ccompany(' Dennis Ritchie',' B.Tech. in 1965',' Programmer',' CCP',' 5',' 1') 

class Ccomponents extends Ccompany
{
constructor(Cname,yop,Cdesig,Cdepart,Cgrade,Cfamilysize,components,eligiblelimit,payroll,monthly)
{
super(Cname,yop,Cdesig,Cdepart,Cgrade,Cfamilysize)
this.components=components
this.eligiblelimit=eligiblelimit
this.payroll=eligiblelimit
this.monthly=monthly
}
CCdisplay()
{
document.writeln('<br>',this.components,this.eligiblelimit,this.eligiblelimit,this.monthly)
}
}
let jug=new Ccomponents(' Dennis Ritchie',' B.Tech. in 1965',' Programmer',' CCP',' 5',' 1',' Basesalary Leavetravelassis Medical-domiciliary Meals&Gift Fuel HouserentAllowences',' -------1monthsbase---------50%ofbase',' 216480 18048 15000 26400 23208 108240 ',' 18040 1504 1250 2200PM 1934PM 9020PM')
jug.CCdisplay()
jug.CCprint()

function planyourtrip(leavingfrom,goingto)
{
document.writeln(leavingfrom,goingto)
}
function OWRTPYT(departure,returning)
{
document.writeln(departure,returning)
}
function onewaytrip(adults,infants)
{
document.writeln(adults,infants)
}
function mix()
{
planyourtrip(' Banglore',' Mysore')
OWRTPYT(' 12/02/2000',' 23/02/2000')
onewaytrip(10,' 8')
}
mix()

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
let PDET=new pdet(' NagaLalithaKumaribezawada',' 18/02/1989',' 7.30-8PM',' Samalkota',' Rajahmundry')
PDET.pdetprint()