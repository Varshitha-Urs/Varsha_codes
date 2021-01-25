class tvds
{
deta(){
this.data1=['LG55LHX','Backlight w/Local Dimming','55 inches','scanning Backlight (240 HZ “effect”)']
this.data2=['yes','USB 2.0 (pictures, music,videos)','youtube','Rs.55000']
}
detal(){
document.writeln('<br>',this.data1[2],this.data2[1])
}
}
let srw=new tvds()
srw.deta()
srw.detal()

let oda={
	Name:'Varshitha',
    Pincode:560032,
    Address:'XXX',
    Landmark:'YYY',
    City:"banglore",
    State:'Karnataka',
    Country:'India',
    Phone:1234567890
    }
document.writeln('<br>',oda.Name,oda.Address,oda.Pincode)

let sp={
	PostofficeDetails:'New Thipasundra<423203>',
	trackingNumber:' EM423395510IN',
	CounterNo: 1,
    opcode:012,
    Fromaddress:' xxxxxx',
    ToAddress:' xxxxxx',
    wgt: '20grms',
    Amt : 39.00,
    dateTime:' 08/04/2013 16:01',
    Taxes:'Rs.4.00'
    }
document.writeln('<br>',sp.PostofficeDetails)

class medicine
{
constructor(mfg,comp)
{
this.mfg=mfg
this.comp=comp
}
cone()
{
this.form='tablet'
this.packsize=15
this.deliver='4-24hrs'
this.mrp='Rs. 33.46 Save upto 15%'
document.writeln('<br>',this.packsize,this.mrp)
}
}
new medicine("MICRO",'Paracetamol 650 MG')

function perfume(brand){
this.procode='AUTCOMBO-OF- CONVIVA67682242A608C'
this.prowgt='150 gm'
this.box='Pack Of 2 Perfumes'
this.quan='70 ml each'
this.effpr='Rs 194 after cashback'
document.writeln(brand)
}
perfume('Concept')

let per={
	brand:'Concept',
	procode:'AUTCOMBO-OF-CONVIVA67682242A608C',
	prowgt:'150 gm',
    perfume:{
    	box:'Pack Of 2 Perfumes',
		quan:'70 ml each',
		effpr:'Rs 194 after cashback'
        }
}
document.writeln('<br>',per.perfume.quan)

function dolo(tablet){
var mfg="MICRO"
var comp='Paracetamol 650 MG'
document.writeln(mfg,comp)
}
dolo("Dolo")

function dolo1()
{
this.form="tablet"
this.packsize='15 (Units)'
this.deltime="4 - 24 HR"
this.MRP='Rs. 33.46 Save upto 15%'
}
document.write('<br>',this.form)

function licncedrive(licncestate,DLNO)
{
	Name="varshitha"
	if(licncestate=="KARNATAKA"){
	return "valid licence"
	}
    else{
    document.writeln('<br>',licncestate,DLNO)
    }
}

function calling(callback){
callback("Tamilnadu"," TN-41230120012921")
}
calling(licncedrive)

function datamb(MNo1,PID1)
{
var PIDNo1="g3839975"
document.writeln('<br>',MNo1, PID1, PIDNo1)
}
function call(callback){
callback(09900367097,"Passport")
}
call(datamb)

function tvspec(model)
{
ledlight="Backlight w/Local Dimming"
document.writeln(model,ledlight)
}
function horse(callback)
{
callback("LG55LHX")
}
horse(tvspec)

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
function mouse(callback)
{
callback('www.tnebnet.org','agilan')
}
Ebill('www.tnebnet.org','agilan')
mouse(Ebill)

function film(screen)
{
MN="JVT[c, CPP]"
MC="U"
CLS="First"
PPT="Rs.1050.00"
NOT=5
SN="c1,c2,c3.c4,c5"
TA="Rs.750.00"
document.writeln('<br>',screen,MN,MC,CLS,TA)
return 0
}
var ret=new film("PSS multiplex")
function rat(callback)
{
callback("PSS multiplex")
}
rat(film)

function CopInfo(name)
{
this.compname="JVT"
this.Desig="Programmer"
this.salary=230000
this.loctn="banglaore"
document.writeln('<br>',this.compname)
}
function cat(callback)
{
callback("JVT")
}
cat(CopInfo)

function vcd(name)
{
data=['naresh.jvt@gmail.com','+91 9944860792','jvt','programmer','230/3 2nd floor hal3rd stage new thippasandra bangalore-560075']
document.writeln('<br>',data[0])
}
function mat(callback)
{
callback("naresh")
}
mat(vcd)

function perfume(brand){
this.procode='AUTCOMBO-OF- CONVIVA67682242A608C'
this.prowgt='150 gm'
this.box='Pack Of 2 Perfumes'
this.quan='70 ml each'
this.effpr='Rs 194 after cashback'
return 0
}
function bat(callback)
{
callback('Concept')
}
bat(perfume)

function dolo(tablet){
var mfg="MICRO"
var comp='Paracetamol 650 MG'
document.writeln('<br>',mfg,comp)
}
function eat(callback)
{
callback('Dolo')
}
eat(dolo)

function dolo1(con)
{
this.form="tablet"
this.packsize='15 (Units)'
this.deltime="4 - 24 HR"
this.MRP='Rs. 33.46 Save upto 15%'
document.write('<br>',this.form)
}
function fat(callback)
{
callback('650Mg')
}
fat(dolo1)

function watch(type)
{
var Case=' Fibre Case with Steel Back'
var Dial=' Round Dial'
var Strap=' Fibre'
var ClaspType= 'Buckle'
var Occasion=' Casual'
var Movement=' PC21 Movement'
var Others='One Year Warranty'
document.writeln('<br>',type,Case)
}
new watch("analog watch")

function car11(city,fueltype)
{
var kmsdriven=29479
var colour="brown"
var owners=1
var powersteering='yes'
return [kmsdriven,colour,owners]
}
new car11('kolkata','petrol')

function watch(type)
{
var Case=' Fibre Case with Steel Back'
var Dial=' Round Dial'
var Strap=' Fibre'
var ClaspType= 'Buckle'
var Occasion=' Casual'
var Movement=' PC21 Movement'
var Others='One Year Warranty'
document.writeln('<br>',type,Case)
}
function gat(callback)
{
callback('analog watch')
}
gat(watch)

function car1(city,fueltype)
{
var kmsdriven=29479
var colour="brown"
var owners=1
var powersteering='yes'
return [kmsdriven,colour,owners]
}
var give=car1('kolkata','petrol')
function iat(callback)
{
callback('kolkata','petrol')
}
iat(car1)

function cat1cont(insutype)
{
var insuexp='n/a'
var manuyear=2012
var datereg='25-march-2012'
document.writeln('<br>',insuexp,manuyear,datereg)
}

function car1con(count)
{
var regtype='individual'
var rtoloctn='beltala'
document.writeln(rtoloctn)
}

function cat1cont(insutype)
{
var insuexp='n/a'
var manuyear=2012
var datereg='25-march-2012'
document.writeln('<br>',insuexp,manuyear,datereg)
}

function jat(callback)
{
callback('expired')
}
jat(cat1cont)

function car1con(count)
{
var regtype='individual'
var rtoloctn='beltala'
document.writeln('<br>',rtoloctn)
}
function kat(callback)
{
callback('India')
}
kat(car1con)

function FTB(filmname)
{
this.lang='telugu'
this.type='2D'
this.num=2
return [this.lang,this.type,this.num]
}
var jat=FTB('nannaku prematho')

function FTBcon(time)
{
var add='gopalan drand mall,old madras road'
var screennum=3
var ticket='Gold-e19,e20'
var datentim='wed,13 jan 2016'
}
FTBcon("10:00pm")

function FTB(filmname)
{
this.lang='telugu'
this.type='2D'
this.num=2
return [this.lang,this.type,this.num]
}
var jat=FTB('nannaku prematho')
function lat(callback)
{
callback('nannaku prematho')
}
lat(FTB)

function FTBcon(time)
{
var add='gopalan drand mall,old madras road'
var screennum=3
var ticket='Gold-e19,e20'
var datentim='wed,13 jan 2016'
}
function lat1(callback)
{
callback("10:00pm")
}
lat1(FTBcon)

function travelers(title)
{
var name="venkatesh"
var mobilenumb=9900367097
var depart='chennai'
var arrival='bangalore'
document.writeln('<br>',title,name)
}
new travelers('Mr')

function trvlers(flightnum)
{
var duration='1h 10m'
var flightname='Jet Airways'
var aircrafttype='ATR 72'
var meals='Breakfast'
var depDnT='fri 19 feb 2016   5:35'
var arrDnT='fri 19 feb 2016   6:45'
document.writeln('<br>',flightnum,flightname)
}
new trvlers('9W2735')

function travelers(title)
{
var name="venkatesh"
var mobilenumb=9900367097
var depart='chennai'
var arrival='bangalore'
document.writeln('<br>',title,name)
}
function nat(callback)
{
callback('Mr')
}
nat(travelers)

function trvlers(flightnum)
{
var duration='1h 10m'
var flightname='Jet Airways'
var aircrafttype='ATR 72'
var meals='Breakfast'
var depDnT='fri 19 feb 2016   5:35'
var arrDnT='fri 19 feb 2016   6:45'
document.writeln('<br>',flightnum,flightname)
}

function oat(callback)
{
callback('9W2735')
}
oat(trvlers)

function onwardjourney (DnT)
{
var dest='Banglore'
var arr='coimbatore'
var addbook='marthalli airtel 4g shop'
var seats=33
var bustype='Volvo A/C seater multi'
var busname="SRS"
}
new onwardjourney('thu jan14 2016   11:15am')

function returnjourney(DnT)
{
var dest='coimbatore'
var arr='Banglore'
var addbook='ramnagar'
var seats=15
var bustype='non A/C seater multi'
var busname="kavi"
}
new returnjourney('thu jan14 2016   11:15am')

function paymentsummary(total)
{
var onwardfare='Rs.1000'
var returnfare='Rs.800'
var tax='Rs.58'
returnjourney();
document.writln('<br>',dest,onwardfare)
onwardjourney();
}
new paymentsummary('Rs.1858')

function onwardjourney (DnT)
{
var dest='Banglore'
var arr='coimbatore'
var addbook='marthalli airtel 4g shop'
var seats=33
var bustype='Volvo A/C seater multi'
var busname="SRS"
}
function pat (callback)
{
callback('thu jan14 2016   11:15am')
}
pat(onwardjourney)

function returnjourney(DnT)
{
var dest='coimbatore'
var arr='Banglore'
var addbook='ramnagar'
var seats=15
var bustype='non A/C seater multi'
var busname="kavi"
}
function pat1(callback)
{
callback('<br>','thu jan14 2016   11:15am')
}
pat1(returnjourney)

function paymentsummary(total)
{
var onwardfare='Rs.1000'
var returnfare='Rs.800'
var tax='Rs.58'
}
function pat2(callback)
{
callback('Rs.1858')
}
pat2(paymentsummary)

function LImodes(mode1)
{
var prem=11215
var sertax=393
var total=11608
}
new LImodes('yearly')

function LIModes(mode2)
{
var prem=5666
var sertax=198
var total=5864
}
new LIModes('halfyearly')

function LIMOdes(mode3)
{
var prem=2863
var sertax=100
var total=2963
}
new LIMOdes('quaterly')

function LIMODes(mode4)
{
var prem=2863
var sertax=100
var total=2963
}
new LIMODes('monthly')

function LIC(plan)
{
var term='20'
var age=26
var sumassured=200000
}
new LIC('0815 New Jeevan Anand')

function LImodes(mode1)
{
var prem=11215
var sertax=393
var total=11608
}

function qat(callback)
{
callback('yearly')
}
qat(LImodes)

function LIModes(mode2)
{
var prem=5666
var sertax=198
var total=5864
}
function qaat(callback)
{
callback('halfyearly')
}
qaat(LIModes)

function LIMOdes(mode3)
{
var prem=2863
var sertax=100
var total=2963
}
function qata(callback)
{
callback('quaterly')
}
qata(LIMOdes)

function LIMODes(mode4)
{
var prem=2863
var sertax=100
var total=2963
}
function qaata(callback)
{
callback('monthly')
}
qaata(LIMODes)

function LIC(plan)
{
var term='20'
var age=26
var sumassured=200000
}
function Tom(callback)
{
callback('0815 New Jeevan Anand')
}
Tom(LIC)

function homeloan(amt)
{
this.interest=10.5
this.loantenure='20 Yr or Months'
this.loanemi=49919
}
new homeloan(5000000)

function HL(TIpay)
{
this.totalpay=11980559
this.personalloanamt=350000
this.interestrate=17.5
}
new HL(6980559)

function loan(LT)
{
var LTn='3Yr'
var LEMI=12566
var TIP=102366
var tpayment=452366
}
new loan(5)

function homeloan(amt)
{
this.interest=10.5
this.loantenure='20 Yr or Months'
this.loanemi=49919
}
function Jerry(callback)
{
callback(5000000)
}
Jerry(homeloan)

function HL(TIpay)
{
this.totalpay=11980559
this.personalloanamt=350000
this.interestrate=17.5
}
function RR(callback)
{
callback(6980559)
}
RR(HL)





