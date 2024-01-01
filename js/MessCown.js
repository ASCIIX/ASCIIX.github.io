/*
author: By: SakuraX
现已修复倒计时bug。
*/
function updateCountdown(targetDate, elementId) {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    const years = Math.max(0, targetDate.getFullYear() - currentDate.getFullYear());
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    //const countdownText = `距离${targetDate.getFullYear()}年元旦还有${years}年${days}天${hours}小时${minutes}分钟${seconds}秒`;
    //const countdownText = `距离${targetDate.getFullYear()}年元旦还有: ${days}天${hours}小时${minutes}分钟${seconds}秒`;
    const countdownText = `距离${targetDate.getFullYear()}年还有: ${days}天${hours}小时${minutes}分钟${seconds}秒`;
    document.getElementById(elementId).textContent = countdownText;
  }

  function getNextYearDate() {
    const currentYear = new Date().getFullYear();
    return new Date(currentYear + 1, 0, 1);
  }

  function getNextNextYearDate() {
    const currentYear = new Date().getFullYear();
    return new Date(currentYear + 2, 0, 1);
  }

  // 更新页面显示
  function updateCountdowns() {
    updateCountdown(getNextYearDate(), 'countdownNextYear');
    updateCountdown(getNextNextYearDate(), 'countdownNextNextYear');
  }

  updateCountdowns();

  // 每秒更新一次
  setInterval(updateCountdowns, 1000);
