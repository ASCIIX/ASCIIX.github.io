document.addEventListener("DOMContentLoaded", function() {
    function createCalendar(elem, year, month) {
            let mon = month - 1; // 月份从 0 开始
            let d = new Date(year, mon);
            let today = new Date(); // 获取今天的日期
            let table = `<table>
                            <tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>`;
            // 添加空单元格，前置至周一
            for (let i = 0; i < getDay(d); i++) {
                table += '<td></td>';
            }
            // 填充当前月的日期
            while (d.getMonth() === mon) {
                let day = d.getDate();
                let isToday = (d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && day === today.getDate());
                // 显示公历日期
                table += `<td class="${isToday ? 'today' : ''}">
                            ${day}
                          </td>`;
                if (getDay(d) % 7 === 6) { // 换行
                    table += '</tr><tr>';
                }
                d.setDate(d.getDate() + 1);
            }
            // 补全最后一行
            if (getDay(d) !== 0) {
                for (let i = getDay(d); i < 7; i++) {
                    table += '<td></td>';
                }
            }
            table += '</tr></table>';
            elem.innerHTML = table;
        }
        function getDay(date) {
            let day = date.getDay();
            if (day === 0) day = 7; // 将星期天调整为第七列
            return day - 1;
        }
        // 生成当前月份的日历
        createCalendar(document.getElementById("calendar"), new Date().getFullYear(), new Date().getMonth() + 1);
    });