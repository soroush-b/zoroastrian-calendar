import React,{Component} from 'react';
import moment from "moment-jalaali";
import _ from "lodash";
import './App.css';

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
class App extends Component {
  state = {
    month: 0
  };
  setDate = idx => {
    this.setState({ dateIdx: idx });
  };
  render() {
    // const { dateIdx } = this.state;
    // const date = moment().add(dateIdx, "day");
    // const dayInYear = parseInt(date.format("jDDD"));
    // const ZDayName = dayInYear > 360 ? extraZdays[dayInYear % 5] : ZDays[dayInYear % 30];
    // const isNabor = NaborsDay.includes(ZDayName);
    // console.log(dayInYear, "sffsakgjha");
    return (
      <div className="calcCont">
      {ZDays.map((day,idx)=> (
        <div className="calcRow" key={'zDay'+idx}>
          <span>{idx+1}</span>
          <span>{day.fr}</span>
        </div>
      ))}
      </div>
    );
  }
}
export default App;