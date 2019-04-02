var copingMechanisms = {meditation: 'Meditate more', exercise: 'Exercise more', substances: 'Avoid intensifiers', social: 'Seek social support', treatment: 'See a mental health professional'};

var calculateResult = function(score) {
  if(score < 4) {
    return '#low-stress';
  } else if (score > 5) {
    return '#high-stress';
  } else {
    return '#med-stress';
  }
};

//Front
$(document).ready(function(){
  $("form#stress-survey").submit(function(event){
    event.preventDefault();

    var scoreCounter = 0;
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      scoreCounter += 1;
    })
    $("input:checkbox[name=symptoms]:checked").each(function(){
      scoreCounter += 1;
    })
    var copingArray = [];
    $("input:checkbox[name=coping]:not(:checked)").each(function(){
      var userCopingMechanism = $(this).val();
      copingArray.push(userCopingMechanism);
    })
    copingArray.forEach(function(item){
      $('#recommendations').append('<li>' + copingMechanisms[item] + '</li>')
    });

    $(calculateResult(scoreCounter)).show();
    if(copingArray.length != 0){
      $('#advice-stress').show();
    }
  });

});
