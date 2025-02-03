// Simulate visitor counts
let todayVisitorCount = localStorage.getItem("todayCount") || 0;
let totalVisitorCount = localStorage.getItem("totalCount") || 500;

// Increment counts
todayVisitorCount = parseInt(todayVisitorCount) + 1;
totalVisitorCount = parseInt(totalVisitorCount) + 1;

// Save updated counts to LocalStorage
localStorage.setItem("todayCount", todayVisitorCount);
localStorage.setItem("totalCount", totalVisitorCount);

// Reset today's count if it's a new day
const lastVisitDate = localStorage.getItem("lastVisitDate");
const currentDate = new Date().toDateString();
if (lastVisitDate !== currentDate) {
    todayVisitorCount = 1; // Reset today's count
    localStorage.setItem("todayCount", 1);
    localStorage.setItem("lastVisitDate", currentDate);
}

// Update the counter in the DOM
document.getElementById("today-count").textContent = formatNumber(todayVisitorCount);
document.getElementById("total-count").textContent = formatNumber(totalVisitorCount);

// Format numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
}
