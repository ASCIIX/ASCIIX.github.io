let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
const monthAndYearText = document.getElementById("monthAndYearText");

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendarBody");

    // 清空之前的内容
    tbl.innerHTML = "";

    // 显示月份和年份
    monthAndYearText.innerHTML = months[month] + " " + year;

    // 生成日期行
    let date = 1;
    for (let i = 0; i < 6; i++) {  // 最多显示 6 行
        let row = document.createElement("tr");

        // 生成每一行中的日期单元格
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                cell.innerHTML = "";
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("today");
                }

                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }

        tbl.appendChild(row); // 把行添加到表格中
    }
}

// 切换到下个月
function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

// 切换到上个月
function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

// 初始化显示当前月的日历
showCalendar(currentMonth, currentYear);
