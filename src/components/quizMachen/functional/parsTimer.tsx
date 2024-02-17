  const parsTimer = (time: string) => {
    const [hours, minutes] = time.split(":");
    return parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60;
};
  
export default parsTimer;