const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let dd: string;
  let mm: string;
  let yyyy: string = year.toString();

  day < 10 ? dd = "0" + day : dd = day.toString();
  month < 10 ? mm = "0" + month : mm = month.toString();

  return dd + "/" + mm + "/" + yyyy;
}

export {
  formatDate
}
