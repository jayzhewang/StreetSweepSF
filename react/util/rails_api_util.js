export const fetchSchedules = (address, success) => {
  $.ajax({
    method: 'GET',
    url: `https://sssf.herokuapp.com/schedules/`,
    data: {address},
    success: success
  });
};
