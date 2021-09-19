// create circles
for (var i = 0; i < events.length; i++)
{
  var event = events[i];
  var name = event.key;
  var same = events.filter(function (x) { return x.key == name });

  var latestDate = new Date(Math.max.apply(null, same.map( x => { return x.datestart; })));

  // filter our events that are either aren't latest (some happen more than once), or happened last time long ago
  var isOld = (event.datestart.getFullYear() != latestDate.getFullYear()) || (event.datestart.getFullYear() < new Date().getFullYear() - 1);
  var circleClass = (isOld ? "circle circle_old" : "circle");

  for (var j = new Date(event.datestart); j <= event.dateend; j.setDate(j.getDate() + 1)){
    var dateelement = document.getElementById(months[j.getMonth()] + j.getDate());
    dateelement.innerHTML +=
      "<div class='" + event.key + " " + circleClass + "' data-year='" +
      event.datestart.getFullYear() + "' data-note='" +
      ((typeof event.note !== 'undefined') ? event.note : "") + "'></div>";
  }
};

function eventToggle()
{
  var circles = document.getElementsByClassName("circle_old");
  var checkBox = $("input:checkbox")[0];

  var opacity;
  if (checkBox.checked == true)
  {
      for (var i = 0; i < circles.length; i++)
      {
        circles[i].style.opacity = 0.0;
      }
  } else
  {
      for (var i = 0; i < circles.length; i++)
      {
        circles[i].style.opacity = "";
      }
  }

};
