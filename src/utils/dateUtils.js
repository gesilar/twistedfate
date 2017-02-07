// format date to "yyyy-MM-dd";
export const dateFormate = function(date) {
    date = new Date(date);
    let dd = date.getDate();
    if (dd < 10) {
        dd = `0${dd}`;
    }
    return `${date.getFullYear()}-${date.getMonth()+1}-${dd}`
}