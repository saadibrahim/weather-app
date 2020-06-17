import { convertToFahrenheit } from "./units";

const PAGE_SIZE = 3;

export const addAverages = (dateWiseObj) => {
  const datesObj = Object.values(dateWiseObj);
  datesObj.forEach((dayObj) => {
    dayObj.avgTemp =
      dayObj.list.reduce((total, timeSlot) => total + timeSlot.temp, 0) /
      dayObj.list.length;
  });
  return datesObj;
};

export const createDateWiseObjWithAvg = (items, units) => {
  const dateWiseObj = [];
  items.forEach((item) => {
    let dateTime = item.dt_txt.split(" ");
    let date = dateTime[0];
    if (!dateWiseObj[date]) {
      dateWiseObj[date] = {
        date,
        list: [],
      };
    }
    dateWiseObj[date].list.push({
      time: dateTime[1],
      temp:
        units === "imperial"
          ? convertToFahrenheit(item.main.temp)
          : item.main.temp,
    });
  });
  return addAverages(dateWiseObj);
};

export const getTotalPagesCount = (data) => {
  return Math.ceil(data.length / PAGE_SIZE);
};

export const getSinglePageResults = (data, page) => {
  const pageNumber = page - 1;
  return data.slice(pageNumber * PAGE_SIZE, pageNumber * PAGE_SIZE + PAGE_SIZE);
};
