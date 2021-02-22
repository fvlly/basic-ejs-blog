// const dateFormat = () => {
//     let d = new Date();

//     const options = {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     };

//     let today = d.toLocaleDateString("en-US", options);
// };

module.exports = getDate;

function getDate() {
  let d = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let today = d.toLocaleDateString("en-US", options);

  return today;
}
