// create circles
for (var i = 0; i < events.length; i++){
  var event = events[i];
  var name = event.key;
  var same = events.filter(function (x) { return x.key == name });

  var latestDate = new Date(Math.max.apply(null, same.map( x => { return x.datestart; })));

  var dateStart = new Date(event.datestart);
  var dateelement = document.getElementById(months[dateStart.getMonth()] + dateStart.getDate());
  dateelement.innerHTML +=
    "<div class='" + event.key + " circle' " +
    "data-year='" + dateStart.getFullYear() + "' " +
    "data-month='" + dateStart.getMonth() + "' " +
    "data-day='" + dateStart.getDate() + "' " +
    "data-note='" +
    ((typeof event.note !== 'undefined') ? event.note.replace("'", "&#39") : "") + "'></div>";
};
