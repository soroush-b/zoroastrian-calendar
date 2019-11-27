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
  { en: "anaram", fr: "انارام" }
];
const extraZdays = [
  { en: "ahnavad", fr: "اهنود" },
  { en: "oshtavad", fr: "اشتود" },
  { en: "sepantamad", fr: "سپنتمد" },
  { en: "vahookhashatr", fr: "وهوخشتر" },
  { en: "vahooshtoesh", fr: "وهشتواش" }
];
const NaborsDay = [1, 11, 13, 20];
const today = moment();
const DayOfYear= today.format('jDDD');
const currMonth = Math.ceil(DayOfYear/30);
const todayIdx = (DayOfYear-1) % 30;
const currMonthArr = (currMonth)=>  _.range((currMonth*30)-29,(currMonth*30)+1).map(day=>moment().add(day-DayOfYear,'day'))
const isEven = (n) =>{
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}
class App extends Component {
  state = {
    month: currMonth,
    monthArr:currMonthArr(currMonth)
  };
  setMonth=(month)=>{
    this.setState({
      month: month,
      monthArr:currMonthArr(month)
    })
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
      {monthArr.map((day,idx)=> (
        <div className={`calcRow${isEven(idx) ? ' even' : ''}`} key={'zDay'+idx}>
          <span className="wXSmall">{persianNumb(idx+1)}</span>
          <span className="wSmall">{ZDays[idx].fr}</span>
          <span className="wSmall">{day.format('dddd')}</span>
          <span className="wLarge">{persianNumb(day.format('D MMMM YYYY'))}</span>
          <span className="wMedium">{persianNumb(day.format("jD jMMMM jYY"))}</span>
          <span className="wLarge">{NaborsDay.includes(idx) && <p>نبر</p>}</span>
        </div>
      ))}
      </div>
    );
  }
}
export default App;