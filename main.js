var daysE1 = document.getElementById('days');
var hoursE1 = document.getElementById('hours');
var minutesE1 = document.getElementById('minutes');
var secondsE1 = document.getElementById('seconds');

function countdownTimer()
{
    const countDownDate = new Date('05/07/2024').getTime()
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const interval = setInterval(()=>{},1000);
    const now = new Date().getTime()
    const distance= countDownDate - now
    daysE1.innerText = formatNumber (Math.round (distance/day))
    hoursE1.innerText = formatNumber (Math.round (distance % day)/hour)
    minutesE1.innerText = formatNumber (Math.round (distance % hour) / minute)
    secondsE1.innerText = formatNumber (Math.round (distance % minute) / second)


}
function formatNumber(number)
{
    if (number < 10)
    {
        return '0' + number
    }
    return number
}
countdownTimer()