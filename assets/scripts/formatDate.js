const formatCapDate = (x, lz, del) => {
  if (x === "../../....") {
    let day = "..",
      month = "..",
      numMonth = "..",
      year = "....";
    return {
      day,
      month,
      year,
      numMonth,
      fullNum: `${day}${del}${numMonth}${del}${year}`,
      fullCap: `${day} ${month} ${year}`,
    };
  } else {
    const numMonth =
      x.split("/")[0] < 10 ? `0${x.split("/")[0]}` : x.split("/")[0];
    const [
      { value: day },
      ,
      { value: month },
      ,
      { value: year },
    ] = new Intl.DateTimeFormat(lz, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).formatToParts(new Date(x));

    return {
      day,
      month,
      year,
      numMonth,
      fullNum: `${day}${del}${numMonth}${del}${year}`,
      fullCap: `${day} ${month} ${year}`,
    };
  }
};

class formatedDate {
  constructor(dateItem, delim) {
    const fmt = formatCapDate(dateItem, "ru", delim ? delim : ".");
    this.fullDate = fmt.fullNum;
    this.fullCap = fmt.fullCap;
    this.day = fmt.day;
    this.monthCap = fmt.month;
    this.month = fmt.numMonth;
    this.year = fmt.year;
    this.dayMonthCap = `${this.day} ${this.monthCap}`;
  }
}

module.exports = formatedDate;
