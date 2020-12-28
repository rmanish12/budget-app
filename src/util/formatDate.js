export function formatDate(fullDate) {
    let date = fullDate.getDate();
    let month = fullDate.getMonth() + 1;
    let year = fullDate.getFullYear();

    if (date < 10) {
      date = "0" + date;
    }

    if (month < 10) {
      month = "0" + month;
    }

    const formattedDate = `${year}-${month}-${date}`;
    return formattedDate;
}

export function getFirstAndLastDate() {
  const date = new Date();
  const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const startDate = formatDate(firstDate);
  const endDate = formatDate(lastDate);

  return {
    startDate,
    endDate,
  };
}