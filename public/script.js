
/*Button event listeners*/
const homebutton = document.getElementById('home-button');
homebutton.addEventListener('click', () => {
    window.location.href = 'index.html';
});//When user clicks home button, redirect to homepage

const profilebutton = document.getElementById('profile-button');
profilebutton.addEventListener('click', ()=>{
    window.location.href='profile-page.html';
}); 


/*Calendar*/
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      dateClick: function(info) {
            document.getElementById(logModal).style.display = 'block';
            document.getElementById(SelectedDateText).textContent = info.dateStr;
            window.currentSelectedDate = info.dateStr;
      }
    });
    calendar.render();
  });

  









