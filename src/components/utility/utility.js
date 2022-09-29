const currentTime = (key, setTime) => {
  //   const time = setTime;

  const preserveTime = getTime();
  preserveTime[key] = setTime;
  localStorage.setItem("timeList", JSON.stringify(preserveTime));
};

const getTime = () => {
  let preserveTime = {};
  const getStoredTime = localStorage.getItem("timeList");
  if (getStoredTime) {
    preserveTime = JSON.parse(getStoredTime);
  }
  return preserveTime;
};

export { currentTime };
