var is_current_old = false;

// hover on circles
$(".circle").mouseenter(function(e){
  var etarget = e.currentTarget;
  var eclass = $(etarget).attr('class');
  var eyear = $(etarget).attr('data-year');
  var emonth = $(etarget).attr('data-month');
  var eday = $(etarget).attr('data-day');
  var enote = $(etarget).attr('data-note');

  var weekDay = new Date(eyear, emonth, eday);
  console.log(eyear + " " + emonth + " " + eday);
  console.log(weekDay);
  console.log(weekDay.toLocaleDateString('en-US'));
  var weekDayName = weekDay.toLocaleDateString('en-US', {weekday: 'long'});

  var class_name = eclass.split(' ')[0];
  var events = document.getElementsByClassName(class_name);
  for (var i = 0; i < events.length; i++){
    $(events[i]).addClass('event_hover');
  }

  is_current_old = $(etarget).hasClass('circle_old');
  $(etarget).removeClass('circle_old');

  var ename = eventNames[class_name];
  etarget.innerHTML = "<span class='tooltip'>" + enote + " " + ename + " " + eyear + " (" + weekDayName + ")</span>";
});

$(".circle").mouseleave(function(e){
  var etarget = e.currentTarget;
  var eclass = $(etarget).attr('class');

  var class_name = eclass.split(' ')[0];
  var events = document.getElementsByClassName(class_name);

  for (var i = 0; i < events.length; i++){
    $(events[i]).removeClass('event_hover');
  }

  if (is_current_old)
  {
    $(etarget).addClass('circle_old');
    is_current_old = false;
  }

  (etarget).innerHTML = "";
});

// hover on list
$("li").mouseenter(function(e){
  var etarget = e.currentTarget;
  var class_names = $(etarget).attr('class');

  if (class_names){
    var class_name = class_names.split(' ')[0];
    var events = document.getElementsByClassName(class_name);

    for (var i = 0; i < events.length; i++){
      $(events[i]).addClass('event_hover');
    }
  }
});

$("li").mouseleave(function(e){
  var etarget = e.currentTarget;
  var class_names = $(etarget).attr('class');

  if (class_names){
    var class_name = class_names.split(' ')[0];
    var events = document.getElementsByClassName(class_name);

    for (var i = 0; i < events.length; i++){
      $(events[i]).removeClass('event_hover');
    }
  }
});
