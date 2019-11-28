import React,{Component} from 'react';
import moment from "moment-jalaali";
import _ from "lodash";
import './App.css';
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
const ZDays = [
  { en: "urmazd", fr: "اورمزد" },
  { en: "vahman", fr: "بهمن" },
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
  { en: "mantraspand", fr: "مانترسپند" },
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
console.log( moment().add(-1,'month'),'sgjkshagak')
const generateMonth = (fromCurrentMonth)=>{
  const selectedMonth = moment().add(fromCurrentMonth*30, 'day');
  const selectedDayOfYear = selectedMonth.format('jDDD');
  const selectedMonthOfYear = selectedMonth.format('jM');
  const isPanji = selectedMonthOfYear == 12;
  const thisYearFormat = selectedMonth.format('jYYYY');
  const year = thisYearFormat - CurrentYear;
  let to = (Math.ceil(selectedDayOfYear/30)*30)+1 + (year*365);
  const from =  to-30;
  if(isPanji){
    const isLeapYear = moment.jIsLeapYear(thisYearFormat)
    console.log('leapYear',isLeapYear )
    to = to + (isLeapYear ? 6 :5)
  }
  const monthArr = _.range(from,to).map(day=>moment().add(day-DayOfYear,'day'));
  // console.log('monthhhhh',isLeapYear, isPanji, selectedMonthOfYear, fromCurrentMonth,selectedMonth,selectedDayOfYear, from, to, year )
    return {
      month: fromCurrentMonth,
      monthArr,
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
    return (
      <div className="calcCont">
      <div className="navbar">
        <button onClick={this.nextMonth}>بعدی</button>
        <button onClick={this.prevMonth}>قبلی</button>
      </div>
      <div className="calcRow calcHeader">
          <span className="dayIndex">روز</span>
          <span className="wSmall">نام روز</span>
          <span className="wSmall">هفته</span>
          <span className="wLarge">میلادی</span>
          <span className="wLarge">شمسی</span>
          <span className="wLarge">روادید</span>
        </div>

      {monthArr.map((day,idx)=> (
        <div className={`calcRow${isEven(idx) ? ' even' : ''}`} key={'zDay'+idx}>
          <span className="dayIndex">{persianNumb(idx+1)}</span>
          <span className="wSmall">{ZDays[idx].fr}</span>
          <span className="wSmall">{day.format('dddd')}</span>
          <span className="wLarge">{persianNumb(day.format('D MMMM YYYY'))}</span>
          <span className="wLarge">{persianNumb(day.format("jD jMMMM jYYYY"))}</span>
          <span className="wLarge">
            {NaborsDay.includes(idx) && <span className="naborDay">نبر</span>}
            {idx>29 && <span className="panjiDay">پنجی</span>}
          </span>
        </div>
      ))}
      </div>
    );
  }
}
export default App;