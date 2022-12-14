export function isEmptyObject(obj: any) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export function includeArray(array: any, key: any) {
  return array.indexOf(key) !== -1;
}

export const dateConvert = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000);
  return (
    time.getFullYear() +
    "-" +
    time.getMonth() +
    "-" +
    time.getDate() +
    " " +
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2)
  );
};

export const dateToType = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000);
  const month = new Array(12);
  month[0] = "JAN";
  month[1] = "FEB";
  month[2] = "MAR";
  month[3] = "APR";
  month[4] = "MAY";
  month[5] = "JUN";
  month[6] = "JUL";
  month[7] = "AUG";
  month[8] = "SEP";
  month[9] = "OCT";
  month[10] = "NOV";
  month[11] = "DEC";
  return (
    time.getDate() +
    " " +
    month[time.getMonth()] +
    " " +
    time.getFullYear() +
    ", " +
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2)
  );
};

export const isoDatetoString = (newDate: any) => {
  let date = new Date(newDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  return year + "-" + month + "-" + dt;
};

export const addCommas = (nStr: any) => {
  var inputValue = nStr.toString();
  var x = inputValue.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  x2 = x2 === ".0" ? " " : x2;
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
};

export const addSpace = (nStr: any) => {
  nStr += "";
  var x = nStr.split(",");
  var x1 = x[0];
  var x2 = x[1];
  x1 = x1 + " , ";
  return x1 + x2;
};

export const getCoords = (x: number | string, y: number | string) =>
  `${x},${y}`;
