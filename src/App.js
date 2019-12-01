import React,{Component} from 'react';
import moment from "moment-jalaali";
import _ from "lodash";
import get from 'lodash/get';
import './App.css';
console.log('dayyyy', moment('1398-11-29','jYYYY-jMM-jDD').format('jDDD'))
moment.loadPersian()
const persianNumb = (text)=>{
  const obj ={
    1:'۱',
    2:'۲',
    3:'۳',
    4:'۴',
    5:'۵',
    6:'۶',
    7:'۷',
    8:'۸',
    9:'۹',
    0:'۰',
  }
  let newStr = text.toString();
  for (let x in obj) {
    newStr = newStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  return newStr;
}
const Events = {
  1: [{
    fr: 'جشن نوروز',
    isHoliday: true
  }],
  2: [{
    fr: 'جشن نوروز',
    isHoliday: true
  }],
  3: [{
    fr: 'جشن نوروز',
    isHoliday: true
  }],
  4: [{
    fr: 'جشن نوروز',
    isHoliday: true
  }],
  6: [{
    fr: 'زادروز اشوزرتشت',
    isZHoliday: true,
  }],
  7: [{
    fr: 'زیارت پیر هریشت',
  }],
  8: [{
    fr: 'زیارت پیر هریشت',
  }],
  9: [{
    fr: 'زیارت پیر هریشت',
  }],
  10: [{
    fr: 'زیارت پیر هریشت',
  }],
  11: [{
    fr: 'زیارت پیر هریشت',
  }],
  13: [{
    fr: 'روز طبیعت',
    isHoliday: true
  }],
  19: [{
    fr: 'جشن فروردین گان (فرودوگ)',
    isZHoliday: true,
  }],
  33: [{
    fr: 'جشن اردیبهشت گان',
  }],
  41: [{
    fr: 'چهره میدیوزرم گاه',
    type: 'gahanbar'
  }],
  42: [{
    fr: 'چهره میدیوزرم گاه',
    type: 'gahanbar'
  }],
  43: [{
    fr: 'چهره میدیوزرم گاه',
    type: 'gahanbar'
  }],
  44: [{
    fr: 'چهره میدیوزرم گاه',
    type: 'gahanbar'
  }],
  45: [{
    fr: 'چهره میدیوزرم گاه',
    type: 'gahanbar'
  }],
  66: [{
    fr: 'جشن خوردادگان',
  }],
  86: [{
    fr: 'زیارت پیر سبز',
  }],
  87: [{
    fr: 'زیارت پیر سبز',
  }],
  88: [{
    fr: 'زیارت پیر سبز',
  }],
  89: [{
    fr: 'زیارت پیر سبز',
  }],
  90: [{
    fr: 'زیارت پیر سبز',
  }],
  91:[{
    fr: 'پرسه تیرماه',
  }],
  95: [{
    fr: 'زیارت پیر نارستانه',
  }],
  96: [{
    fr: 'زیارت پیر نارستانه',
  }],
  97: [{
    fr: 'زیارت پیر نارستانه',
  }],
  98: [{
    fr: 'زیارت پیر نارستانه',
  }],
  99: [{
    fr: 'زیارت پیر نارستانه',
  }],
  101: [{
    fr: 'چهره میدیوشهیمگاه',
    type: 'gahanbar'
  }],
  102: [{
    fr: 'چهره میدیوشهیمگاه',
    type: 'gahanbar'
  }],
  103: [{
    fr: 'چهره میدیوشهیمگاه',
    type: 'gahanbar'
  },{
    fr: 'جشن تیرگان',
  }],
  104: [{
    fr: 'چهره میدیوشهیمگاه',
    type: 'gahanbar'
  }],
  105: [{
    fr: 'چهره میدیوشهیمگاه',
    type: 'gahanbar'
  }],
  106: [{
    fr: 'زیارت پارس بانو',
  }],
  107: [{
    fr: 'زیارت پارس بانو',
  }],
  108: [{
    fr: 'زیارت پارس بانو',
  }],
  109: [{
    fr: 'زیارت پارس بانو',
  }],
  110: [{
    fr: 'زیارت پارس بانو',
  }],
  127: [{
    fr: 'جشن امردادگان',
  }],
  136: [{
    fr: 'زیارت پیرنارکی',
  }],
  137: [{
    fr: 'زیارت پیرنارکی',
  }],
  138: [{
    fr: 'زیارت پیرنارکی',
  }],
  139: [{
    fr: 'زیارت پیرنارکی',
  }],
  140: [{
    fr: 'زیارت پیرنارکی',
  }],
  154: [{
    fr: 'جشن شهریورگان',
  }],
  176: [{
    fr: 'چهره پیته شهیمگاه',
    type: 'gahanbar'
  }],
  177: [{
    fr: 'چهره پیته شهیمگاه',
    type: 'gahanbar'
  }],
  178: [{
    fr: 'چهره پیته شهیمگاه',
    type: 'gahanbar'
  }],
  179: [{
    fr: 'چهره پیته شهیمگاه',
    type: 'gahanbar'
  }],
  180: [{
    fr: 'چهره پیته شهیمگاه',
    type: 'gahanbar'
  }],
  196: [{
    fr: 'جشن مهرگان',
    isZHoliday: true,
  }],
  206: [{
    fr: 'چهره ایاسرم  گاه',
    type: 'gahanbar'
  }], 
  207: [{
    fr: 'چهره ایاسرم  گاه',
    type: 'gahanbar'
  }], 
  208: [{
    fr: 'چهره ایاسرم  گاه',
    type: 'gahanbar'
  }], 
  209: [{
    fr: 'چهره ایاسرم  گاه',
    type: 'gahanbar'
  }], 
  210: [{
    fr: 'چهره ایاسرم  گاه',
    type: 'gahanbar'
  }], 
  220: [{
    fr: 'جشن آبانگان',
  }],
  249: [{
    fr: 'جشن آذرگان',
  }],
  271: [{
    fr: 'جشن دیگان',
  }],
  278: [{
    fr: 'جشن دیگان',
  }],
  281: [{
    fr: 'سالروز درگذشت اشوزرتشت',
    isZHoliday: true,
  }],
  285: [{
    fr: 'جشن دیگان',
  }],
  286: [{
    fr: 'چهره میدیاریم گاه',
  }],
  287: [{
    fr: 'چهره میدیاریم گاه',
  }],
  288: [{
    fr: 'چهره میدیاریم گاه',
  }],
  289: [{
    fr: 'چهره میدیاریم گاه',
  }],
  290: [{
    fr: 'چهره میدیاریم گاه',
  }],
  293: [{
    fr: 'جشن دیگان',
  }],
  302: [{
    fr: 'جشن بهمنگان',
  }],
  316: [{
    fr: 'جشن سده',
    isZHoliday: true,
  }],
  331: [{
    fr: 'پرسه اسفندماه',
  }],
  335: [{
    fr: 'جشن اسفندگان',
  }]
}
const ZMonthlyEvents = {
  8: [{
    fr:'زیارت پیر مراد'
  }],
  15: [{
    fr: 'زیارت پیر مهر ایزد',
  }],  
  19: [{
    fr: 'زیارت شاورهرام ایزد',
  }], 
  25: [{
    fr: 'زیارت ستی پیر',
  }],
}
const ZMonthlyHoliday= [0,7,14,22];
const ZDays = [
  { en: "urmazd", fr: "اورمزد" },
  { en: "vahman", fr: "وهمن" },
  { en: "ardibehesht", fr: "اردیبهشت" },
  { en: "shahrivar", fr: "شهریور" },
  { en: "spandarmaz", fr: "سپندارمذ" },
  { en: "khordad", fr: "خرداد" },
  { en: "amordad", fr: "امرداد" },
  { en: "dey be azar", fr: "دی به آذر" },
  { en: "azar", fr: "آذر" },
  { en: "aban", fr: "آبان" },
  { en: "khor(khir)", fr: "خور" },
  { en: "mah", fr: "ماه" },
  { en: "tir", fr: "تیر" },
  { en: "goosh", fr: "گوش" },
  { en: "dey be mehr", fr: "دی به مهر" },
  { en: "mehr", fr: "مهر" },
  { en: "soroush", fr: "سروش" },
  { en: "rashn", fr: "رشن" },
  { en: "farvardin", fr: "فروردین" },
  { en: "verahram", fr: "ورهرام" },
  { en: "ram", fr: "رام" },
  { en: "bad", fr: "یاد" },
  { en: "dey be din", fr: "دی بدین" },
  { en: "din", fr: "دین" },
  { en: "ard ", fr: "ارد" },
  { en: "ashtad", fr: "اشتاد" },
  { en: "asman", fr: "آسمان" },
  { en: "zamiyad", fr: "زامیاد" },
  { en: "mantraspand", fr: "مانتره سپند" },
  { en: "anaram", fr: "انارام" },
  { en: "ahnavad", fr: "اهنود" },
  { en: "oshtavad", fr: "اشتود" },
  { en: "sepantamad", fr: "سپنتمد" },
  { en: "vahookhashatr", fr: "وهوخشتر" },
  { en: "vahooshtoesh", fr: "وهشتواش" },
  { en: "avardad", fr: "اورداد" },
];
const NaborsDay = [1, 11, 13, 20];
const today = moment();
const CurrentYear = today.format('jYYYY');
const DayOfYear= today.format('jDDD');
const isEven = (n) =>{
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}
const leapYearPassed = (years=[])=>{
  const sortedYear = years.sort();
  let leapYearPassed=0;
  for (let i=sortedYear[0] ; i<sortedYear[1] ; i++ ){
    if(moment.jIsLeapYear(i)){
      leapYearPassed++
    } 
  }
  return leapYearPassed;
}
const generateMonth = (fromCurrentMonth)=>{
  const selectedMonth = moment().add(fromCurrentMonth*30, 'day');
  const selectedDayOfYear = selectedMonth.format('jDDD');
  const selectedMonthOfYear = selectedMonth.format('jM');
  const isPanji = selectedMonthOfYear == 12;
  const thisYearFormat = selectedMonth.format('jYYYY');
  const year = thisYearFormat - CurrentYear;
  const isLeapYear = moment.jIsLeapYear(thisYearFormat);
  const leapPassed = leapYearPassed([parseInt(thisYearFormat) , parseInt(CurrentYear)]);
  let to = (Math.ceil(selectedDayOfYear/30)*30)+1 + (year*365) +leapPassed ;
  const from =  to-30;
  if(isPanji){
    to = to + (isLeapYear ? 6 :5)
  }
  const monthArr = _.range(from,to).map(day=>moment().add(day-DayOfYear,'day'));
    return {
      month: fromCurrentMonth,
      monthArr
    }
}
class App extends Component {
  state = {...generateMonth(0)}
  setMonth=(month)=>{
    this.setState({...generateMonth(month)})
  }
  nextMonth=()=>{
    const {month} = this.state;
    const newMonth = month +1;
   this.setMonth(newMonth)
  }  
  prevMonth=()=>{
    const {month} = this.state;
    const newMonth = month -1;
    this.setMonth(newMonth)
  }
  setDate = idx => {
    this.setState({ dateIdx: idx });
  };
  render() {
    const {monthArr} = this.state;
    const monthName = monthArr[monthArr.length-1].format('jMMMM');
    return (
      <div className="calcCont">
      <div className="navbar no-print">
        <button onClick={this.nextMonth}>&#x2039;</button>
        <button onClick={this.prevMonth}>&#x203A;</button>
      </div>
      <p className="monthName">{monthName}</p>
      <div className="calcRow calcHeader">
          <span className="dayIndex">روز</span>
          <span className="dayName">نام روز</span>
          <span className="weekName">هفته</span>
          <span className="solarDay">شمسی</span>
          <span className="mildadiDay">میلادی</span>
          <span className="eventDetails">رویدادها</span>
        </div>

      {monthArr.map((day,idx)=> {
        const dayIdx = day.format("jDDD");
        const events = get(Events,dayIdx);
        const monthlyEvent = get(ZMonthlyEvents,idx);
        const isZmonthlyHoliday = ZMonthlyHoliday.includes(idx);
        const isHoliday = day.format('d') ==  5;
        return (
          <div className={`calcRow${isEven(idx) ? ' even' : ''}${isZmonthlyHoliday ? ' zMonthlyHoliday': ''}${isHoliday ? ' holiday' : ''}`} key={'zDay'+idx}>
          <span className="dayIndex">{persianNumb(idx+1)}</span>
          <span className="dayName bold">{ZDays[idx].fr}</span>
          <span className="weekName">{day.format('dddd')}</span>
          <span className="solarDay"><span className="solarDayName">{persianNumb(day.format("jD"))}</span>{persianNumb(day.format("jMMMM jYYYY"))}</span>
          <span className="mildadiDay">{persianNumb(day.format('D MMMM YYYY'))}</span>
          <span className="eventDetails">
            {NaborsDay.includes(idx) && <span className="naborDay">نبر</span>}
            {idx>29 && <span className="panjiDay">پنجی</span>}
            {idx>29 && <span className="event">همس پت میدیم گاه</span>}
            {!!events && !!events.length && (
              events.map((event,eventIdx)=>(
                <span className={`event${event.isZHoliday ? ' zHoliday' : ''}`} key={idx+'event'+eventIdx}>{event.fr}</span>
              ))
            )}            
            {!!monthlyEvent && !!monthlyEvent.length && (
              monthlyEvent.map((event,eventIdx)=>(
                <span className="event" key={idx+'event'+eventIdx}>{event.fr}</span>
              ))
            )}
          </span>
        </div>
        )
      }
      )}
      </div>
    );
  }
}
export default App;