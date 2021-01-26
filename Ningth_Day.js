let corpooffer={
compname:'JVT ',
desig:' Programmer',
salary:' Rs.230000',
location:' banglore',
set (CMPname)
{
this.compname=CMPname
},
get ()
{
return this.salary
}
}
corpooffer.compname='Jai Venkateshwara Technologies'
document.writeln(corpooffer.compname)
document.writeln(corpooffer.salary)

class CO
{
constructor(COname,COdesig,COsalary)
{
this.COname=COname
this.COdesig=COdesig
this.COsalary=COsalary
}
set (CN)
{
this.COname=CN
}
get ()
{
return this.COdesig
}
CNdisplay()
{
document.writeln(this.COname,this.COsalary)
}
}
let corp=new CO('JVT','Programmer',' Rs.230000')
corp.set('Jai Venkateshwara Tech')
document.writeln('<br>',corp.get())
corp.CNdisplay()

let internetusage={
 accnum :1135497,
 broadbanduserID:11128550,
 IPaddress:' 10.245.97.123',
 totalmbdownled:'21.26GB',
 mdwnldspee:'20.05mbps',
 mupldspee:' 32.06mbps',
 set IU(ipadd)
{
this.IPaddress=ipadd
},
get ()
{
return this.accnum
}
}
internetusage.ipadd='10.245.97.321'
document.writeln(internetusage.ipadd)
document.writeln(internetusage.accnum)

class Capll
{
static name='JaiVenkateshTech'
constructor(name,eq,dob,cadd,resnum,mnum)
{
this.name=name
this.eq=eq
this.dob=dob
this.cadd=cadd
this.resnum=resnum
this.mnum=mnum
}
cap_det(email,texp,skillnyoexp,repman,pancard)
{
this.email=email
this.texp=texp
this.skillnyoexp=skillnyoexp
this.repman=repman
this.pancard=pancard
}
static funct()
{
document.writeln(Capll.name)
}
set (Mnum)
{
this.mnum=Mnum
}
get ()
{
return this.skillnyoexp
}
cap_display()
{
document.writeln(this.name,this.texp)
}
}
let CAP=new Capll('venkatesh','B TECH MCA MBA BSC MSC','2/6/1988','233/3 Ground floor new thippasandra','08025216666','9900367097')
CAP.cap_det('venkatesh.db@gmail.com',' 1',' C,CPP all Lang & 1 years',' Venkatesh',' asu675901f')
Capll.funct()
CAP.set('9876543210')
document.writeln(CAP.get())
CAP.cap_display()

let  delivermail={
from:'Siva Prasad',
to:'D B Venkatesh',
date:'Fri, Nov 27, 2015 at 12:05 AM',
subject:'Request to forward the Resumes',
mailedby:'<kasi.sivap@gmail.com>',
signedby:'<venkatesh.db@gmail.com>',
msg:':Important mainly because of the people in the conversation',
set (FROM )
{
this.from=FROM
},
get ()
{
return this.to
}
}
delivermail.from='Varshitha varshitha@gmail.com'
document.writeln('<br>', delivermail.from)
document.writeln(delivermail.to)

class piligrimvisit
{
constructor(Ttype,Tdate,Tday,Ttime,Tperslot,Tbookingnum,Pvname,PVordernum,PVemail,PVamt,PVproofID,PVbookdatentime)
{
this.Ttype=Ttype
this.Tdate=Tdate
this.Tday=Tday
this.Ttime=Ttime
this.Tperslot=Tperslot
this.Tbookingnum=Tbookingnum
this.Pvname=Pvname
this.PVordernum=PVordernum
this.PVemail=PVemail
this.PVamt=PVamt
this.PVproofID=PVproofID
this.PVbookdatentime=PVbookdatentime
}
PV_det()
{
document.writeln('<br>',this.Ttype,this.Tbookingnum,this.PVproofID)
}
set (pvEmail)
{
this.PVemail=pvEmail
}
get ()
{
return this.PVbookdatentime
}
}
let pilvis=new piligrimvisit(' Special Entry Darshan',' Dec 1st',' Tuesday',' 3:30 Am',' 2000',' IS151110080016',' venkatesh',' 010600013554',' venkateshprofessional7@gmail.com',' Rs.220.00',' Aadhaar Card 733498928758',' 11062015 11:36:46')
pilvis.PV_det()
pilvis.set('venkateshdb@gmail.com')
document.writeln(pilvis.get())

class piligrimvisitV
{
constructor(numpersons,nameseva,reportime,peformdNt,Privtoseva,bookedtime,accomtype,avail,numoftick,rate)
{
this.numpersons=numpersons
this.nameseva=nameseva
this.reportime=reportime
this.peformdNt=peformdNt
this.Privtoseva=Privtoseva
this.bookedtime=bookedtime
this.accomtype=accomtype
this.avail=avail
this.numoftick=numoftick
this.rate=rate
}
PV_detV()
{
document.writeln('<br>',this.numpersons,this.nameseva,this.Privtoseva)
}
set (Ntick)
{
this.numoftick=Ntick
}
get ()
{
return this.reportime
}
}
let pilvisV=new piligrimvisitV(' 1',' Archana',' 4:00 AM',' 12012015 AM 4:30:00',' Two Small Laddu',' 11:36:46',' Rs 500 Tirumala',' 350',' 1',' 50 to 2000')
pilvisV.PV_detV()
pilvisV.set(' 5')
document.writeln(pilvisV.get())

class CCDet
{
constructor(CCN,outstanding,min)
{
this.CCN=CCN
this.outstanding=outstanding
this.min=min
}
CCN_display()
{
document.writeln('<br>',this.CCN,this.outstanding,this.min)
}
set (MIN )
{
this.min=MIN
}
get ( )
{
return this.min
}
}
let ccn=new CCDet(' 6146496758938152',' prevmin 571.36',' 272.36')
ccn.CCN_display()
ccn.set(' changemin 100')
document.writeln(ccn.get())

let dl_det={
lastname:'Kumar',
firstname:' Pavan',
midlename:' Bijjavaram',
DLnum:' ka50201500006939',
DLstate:' karnataka',
DLcountry:' India',
civiliantype:' around india',
employeetype:' software engineer',
dob:' 12-07-1992',
cob:' rajampet',
set (COB )
{
this.cob=COB
},
get ( )
{
return this.cob
}
}
document.writeln(dl_det.firstname,dl_det.midlename,dl_det.lastname)
dl_det.cob=' Nizamabad'
document.writeln(dl_det.cob)

let appinfo={
weight:' 55',
height:'pre 5.8',
eyecolour:' brown',
gender:' male',
homeadd:' :#6/96,rajampet,kadapa',
homeph:' 975545445',
mobile:' 8553577745',
state:' andhrapradesh',
country:' India',
set (Height)
{
this.height=Height
},
get ( )
{
return this.height
}
}
document.writeln('<br>',appinfo.height,appinfo.weight,appinfo.gender,appinfo.mobile)
appinfo.height='ch 6.1'
document.writeln(appinfo.height)

let veinfo={
vehitype:' light motor vehicle- car',
colour:'pre red',
enginenum:' :kp98gtyihh457797',
chasisnum:' :tc5678898335r45',
company:' BMW',
set (COLOUR )
{
this.colour=COLOUR
},
get ( )
{
return this.colour
},
VI_display( )
{
document.writeln(this.vehitype,this.enginenum,this.chasisnum,this.company)
}
}
document.writeln(veinfo.colour)
veinfo.VI_display( )
veinfo.colour='exis Green'
document.writeln(veinfo.colour)

class movie
{
constructor(theatrename,screen,moviename,moviecert,mclass,ppt,nt,seatnum,totamt)
{
this.theatrename=theatrename
this.screen=screen
this.moviename=moviename
this.moviecert=moviecert
this.mclass=mclass
this.ppt=ppt
this.nt=nt
this.seatnum=seatnum
this.totamt=totamt
}
M_display()
{
document.writeln('<br>',this.theatrename,this.moviename,this.seatnum)
}
set (Tname)
{
this.theatrename=Tname
}
get ()
{
return this.theatrename
}
}
let MT=new movie(' prev PSS multiplex',' screen 3',' JVT [ C,CPP]',' U',' first',' Rs.1050.00',' 5',' :c1,c2,c3,c4,c5',' Rs.750.00')
MT.M_display()
MT.set(' curr Inox')
document.writeln(MT.get())

let CCA={
firstname:' Venkatesh', 
lastname:' D B',
chooseusername:' JVT',
createpassword:' Balu',
confirmpassword:' Balu',
birthday:' 2/06/1986',
gender:' male',
mobile:' 9900367097',
currmailadd:' venkatesh.db@gmail.com',
set (PASSWORD )
{
this.createpassword=PASSWORD
this.confirmpassword=PASSWORD
},
get ( )
{
return this.createpassword
},
CCA_display()
{
document.writeln(this.firstname,this.chooseusername,this.currmailadd,this.mobile)
}
}
CCA.createpassword=' BALU'
CCA.confirmpassword=' BALU'
document.writeln(CCA.createpassword)
CCA.CCA_display()