// create nav list
var eventnames = events.map(item => item.key).filter((value, index, self) => self.indexOf(value) === index)
for (var i = 0; i < eventnames.length; i++){
  ev = "<li class='" + eventnames[i] + "'><span>" + eventNames[eventnames[i]] + "</span></li>";
  document.getElementsByTagName("ul")[0].innerHTML += ev;
};

// creating a table with dates
var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var monthdays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var days = Array.from(Array(31), (e,i)=>i+1);

// header with dates
var td = "<td></td>"
for (var i = 0; i < days.length; i++){
  td += "<td>" + days[i] + "</td>\n";
};
document.getElementsByTagName("tbody")[0].innerHTML = "<tr>" + td + "</tr>";

// assigning dates to cells
for (var i = 0; i < months.length; i++){
  var tr = "<tr id='" + months[i] + "'>\n";
  tr += "<td>" + months[i] + "</td>\n";

  for (var j = 0; j < days.length; j++){
    if (monthdays[i] < j+1)
    {
      tr += "<td></td>\n";
    }
    else
    {
      tr += "<td id='" + months[i] + days[j] + "'></td>\n";
    }
  }

  tr += "</tr>\n";
  document.getElementsByTagName("tbody")[0].innerHTML += tr;
};

var today = new Date();
var todayId = months[today.getMonth()] + today.getDate();
var todayCell = document.getElementById(todayId);
$(document.getElementById(todayId)).addClass("today_fixed");

// hover on cells
$("td").mouseenter(function(e){
  var parentTd = e.currentTarget;
  var parentTr = parentTd.parentElement;

  var monthName = $(parentTr).attr('id');
  if (monthName){
    var monthCell = $(parentTr).children("td:first")[0];
    $(monthCell).addClass('today');
  }

  var table = document.getElementsByTagName('tbody')[0];
  var dayId = $(parentTd).attr('id');
  if (dayId){
    var day = $(parentTd).attr('id').replace(monthName, '');
    var dayCell = $($(table).children('tr:first')[0]).children('td')[day];
    $(dayCell).addClass('today');
  }

  $(parentTd).addClass('today');
});

$("td").mouseleave(function(e){
  var parentTd = e.currentTarget;
  var parentTr = parentTd.parentElement;

  var monthName = $(parentTr).attr('id');
  if (monthName){
    var monthCell = $(parentTr).children("td:first")[0];
    $(monthCell).removeClass('today');
  }

  var table = document.getElementsByTagName('tbody')[0];
  var dayId = $(parentTd).attr('id');
  if (dayId){
    var day = $(parentTd).attr('id').replace(monthName, '');
    var dayCell = $($(table).children('tr:first')[0]).children('td')[day];
    $(dayCell).removeClass('today');
  }

  $(parentTd).removeClass('today');
});
