export const getDates = ()=>{

    // Get current date
    var currentDate = new Date();

    // Get first day of the month
    var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    var formattedFirstDay = formatDate(firstDayOfMonth);

    // Get last day of the month
    var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    var formattedLastDay = formatDate(lastDayOfMonth);

    // Function to format date as YYYY-MM-DD
    function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
    var day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    return year + '-' + month + '-' + day;
    }

    return [formattedFirstDay,formattedLastDay];

}
