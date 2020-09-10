// TODO: edit this file

// This is a list where your records should be stored. See `parseAndSave`.
let records = [];

// `parseAndSave(text)` is a function called with one argument `text`, the content of the babyname CSV file.
// It is invoked only once at the start of application.
// TODO: parse the csv text and save data records into the global variable `records` properly,
// so that the other functions use them with ease. After calling this function, `records` should
// contain the parsed data of every year like below.
//     e.g. records: [{year: 2001, rank: 1, name: "Jacob", gender: "M", rankChange: null},
//                    {year: 2001, rank: 2, name: "Michael", gender: "M", rankChange: null},
//                    ...]
// Note: a CSV text can end with trailing line-break character '\n'. Whether it exists or not,
// the function should parse `text` correctly. Also, records should be stored in the same order
// in which they appear in a csv text. You can assume that at the first line is always a csv header.
function parseAndSave(text) {
  text.split('\n').map((line) => {
    line = line.trim();
    var record = {
      year: parseInt(line.split(',')[0]),
      rank: parseInt(line.split(',')[1]),
      name: line.split(',')[2],
      gender: line.split(',')[3],
      rankChange: line.split(',')[4] === '' ? null : line.split(',')[4],
    };
    if (record.gender !== 'gender' && record.gender !== undefined) {
      records.push(record);
    }
  });
  //  console.log(records);
}

// `provideYearData(year)` is a function that receives a year and returns an array of data object corresponding to that year.
// Note that male and female record with the same rank should be joined together to form one object.
// TODO: return all data objects of a specific year, that are joined and organized by rank in an ascending order.
// The example of returned array is as follows.
//     e.g. [{rank: 1, male: "Jacob", maleRankChange: 0, female: "Isabella", femaleRankChange: 0},
//           {rank: 2, male: "Ethan", maleRankChange: 0, female: "Sophia", femaleRankChange: -2},
//           ...,
//           {rank: 1000, male: "Keshawn", maleRankChange: 113, female: "Karley", femaleRankChange: 17}]
function provideYearData(year) {
  // TODO: Fill in this function. (5 points)
  let = yearData = [];
  for (var i = 1; i < 1001; i++) {
    yearData.push({ rank: i });
  }
  // This is just a reference for the return value's format. Delete this and fill your own
  // proper code to return the correct data.
  records.map((record) => {
    if (record.year === year) {
      if (record.gender === 'M') {
        yearData[record.rank - 1].male = record.name;
        yearData[record.rank - 1].maleRankChange = record.rankChange;
      }
      if (record.gender === 'F') {
        yearData[record.rank - 1].female = record.name;
        yearData[record.rank - 1].femaleRankChange = record.rankChange;
      }
    }
  });
  //  console.log(yearData);
  return yearData;
}

// provideChartData(name, gender) is a function called when a user wants
// to see the chart showing the year-on-year change of rank of a specific name.
// TODO: return a list of all objects from 2001 to 2018 in the format of `{year: <year>, rank: <rank>}`
// of a specific name specified by the arguments, name and gender.
// If there are no records with the name and gender for some years,
// either you can set the values of the ranks to `undefined` or not return those records at all.
// The example of return data is as follow.
//     e.g. [{year: 2001, rank: undefined},
//           {year: 2002, rank: 613},
//           ...,
//           {year: 2018, rank: 380}]
// You can also return data excluding `undefined` value as below.
//     e.g. [{year: 2002, rank: 613},
//           ...,
//           {year: 2018, rank: 380}]
function provideChartData(name, gender) {
  // TODO: Fill in this function. (2 points)
  let chartData = [];

  records
    .filter((record) => record.name === name && record.gender === gender)
    .map((record) => {
      chartData.push({ year: record.year, rank: record.rank });
    });
  // This is just a reference for the return value's format. Delete this and fill your own
  // proper code to return the correct data.
  //  console.log(chartData);
  return chartData;
}

// `handleSignUpFormSubmit(form)` is called when a user submits the sign up form.
// `form` is the target HTML form element (L82~ in index.html).
// TODO: validate the form. (5 points)
function handleSignUpFormSubmit(form) {
  let alertMessage = 'Successfully Submitted!';
  let valid1 = true;
  let valid2 = true;
  let valid3 = true;
  let valid4 = true;
  let message1 = null;
  let message2 = null;
  let message3 = null;
  let message4 = null;
  if (!form['first-name'].value.match(/^[A-Z][a-z]+$/)) {
    message1 = 'Invalid first name';
    valid1 = false;
  }

  if (!form['last-name'].value.match(/^[A-Z][a-z]+$/)) {
    message2 = 'Invalid last name';
    valid2 = false;
  }

  if (!form['email'].value.match(/^[^@\s]+@[^@\s\.]+\.[a-zA-Z]{2,3}$/)) {
    message3 = 'Invalid email';
    valid3 = false;
  }

  if (
    !form['date-of-birth'].value.match(/^\d{4}-\d{2}-\d{2}$/) ||
    parseInt(form['date-of-birth'].value.split('-')[0]) > 2020 ||
    parseInt(form['date-of-birth'].value.split('-')[0]) < 1900 ||
    parseInt(form['date-of-birth'].value.split('-')[1]) > 12 ||
    parseInt(form['date-of-birth'].value.split('-')[1]) < 1 ||
    parseInt(form['date-of-birth'].value.split('-')[2]) < 1 ||
    parseInt(form['date-of-birth'].value.split('-')[2]) > 31
  ) {
    message4 = 'Invalid date of birth';
    valid4 = false;
  }

  if (!valid1 || !valid2 || !valid3 || !valid4) {
    alertMessage = 'You must correct:\n\n';
  }
  if (!valid1) {
    alertMessage = alertMessage + 'First Name\n';
  }
  if (!valid2) {
    alertMessage = alertMessage + 'Last Name\n';
  }
  if (!valid3) {
    alertMessage = alertMessage + 'Email\n';
  }
  if (!valid4) {
    alertMessage = alertMessage + 'Date of Birth\n';
  }
  // TODO: Fill in the rest of function to get the HTML form element as above.

  // Hint: you can use the `RegExp` class for matching a string.

  // The return data format is as follows. For the given `form` argument, you should
  // correctly process the validation, filling in `alertMessage`, and `validationResults`.
  // When you deal with `validationResults`, the values of `message` should be set to `null`
  // for the valid input fields. (See the example below.)
  // Below is just a reference for the return value's format. Delete this and fill your own
  // proper code to return the correct data.

  // IMPORTANT NOTE: You must use the argument `form` rather than directly using APIs such as `document.getElementId` or `document.querySelector`.
  //                 Plus, please do not call `alert` function here.
  //                 For debugging purpose, you can use `console.log`.

  return {
    alertMessage: alertMessage,
    validationResults: [
      { name: 'first-name', valid: valid1, message: message1 },
      { name: 'last-name', valid: valid2, message: message2 },
      { name: 'email', valid: valid3, message: message3 },
      { name: 'date-of-birth', valid: valid4, message: message4 },
    ],
  };
}
