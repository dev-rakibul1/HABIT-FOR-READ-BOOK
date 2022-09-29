const currentTime = (id, time) => {
  //   const time = setTime;
  //   console.log(key, setTime);

  const preserveTime = getTime();
  preserveTime[id] = time;
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
