# NC BACKEND ARCHITECTURE

## Assets

### FDate

```js
{
  {
    "fullDate": "23.12.2019",
    "fullCap": "23 дек. 2019",
    "day": "23",
    "monthCap": "дек.",
    "month": "12",
    "year": "2019",
    "dayMonthCap": "23 дек."
  } = const FDate
}
```

## Entry

```js
{
    "_id": String,
    "createdAt": Date,
    "partnerName": String,
    "documentsCount": Number,
    "translatorCost": Number,
    "notariusCost": Number,
    "totalAmount": Number,
    "manager": Number,
    "seller": Number,
    "hhold": Number
} = const Entry
```

## Day

### Day stats

```js
{
  "dayDocuments": Number,
  "dayExpense": {
    "translation": Number,
    "notarization": Number,
    "manager": Number,
    "courier": Number,
    "seller": Number,
    "total": Number
  },
  "dayRevenue": Number,
  "dayIncome": Number
} = const DayStats
```

### Day

```js
{
  "createdAt": FDate,
  "dayEntryData": [Entry],
  "dayStats": DayStats,
} = const Day
```

## Week

### Week stats

```js
{
  "weekDocuments": Number,
  "weekExpense": {
    "translation": Number,
    "notarization": Number,
    "manager": Number,
    "courier": Number,
    "seller": Number,
    "total": Number
  },
  "weekRevenue": Number,
  "weekIncome": Number
} = const WeekStats
```

### Week

```js
{
  "periodFrom": FDate,
  "periodTill": FDate,
  "weekEntryData": [Day],
  "weekStats": WeekStats,
  "finished": true
} = const Week
```

## Analytics

```js
{
    "WD": [Number],
    "WI": [Number],
    "WE": [Number],
    "WR": [Number],
    "WK": [FDate],
} = const Analytics
```

## ArrayOFWeeks + Analytics

```js
{
    "arrayOfWeeks": [Week],
    "anatytics": Analytics
} = const AOW
```

# AppData

```js
{
  "appData": AOW
}
```
