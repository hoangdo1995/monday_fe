export const getValueById = (id)=>{
    return  document.getElementById(id).value.trim();
}

//hàm kiểm tra năm nhuận
export function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


//hàm setting allow notification
export const showEnableShowNotification = ()=>{
    // Check if the browser supports notifications
    if ('Notification' in window) {
        // Request permission for notifications
        Notification.requestPermission()
        .then(function(permission) {
            if (permission === 'granted') {
            } else {
            // Notification permission denied
            console.log('Notification permission denied');
            }
        })
        .catch(function(error) {
            console.error('Error requesting notification permission:', error);
        });
    } else {
        // Browser does not support notifications
        console.log('Notifications not supported');
    }
}

export const setActiveBySelector =(selector,event)=>{
        const listChild = document.querySelectorAll(selector);
        listChild.forEach(element => {
            element.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
}

export function roundToDecimalPlace(number, decimalPlaces) {
    let factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
  }
