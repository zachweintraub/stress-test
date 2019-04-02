var copingMechanisms = {meditation: 'Meditate more', exercise: 'Exercise more', substances: 'Avoid intensifiers', social: 'Seek social support', treatment: 'See a mental health professional'};

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

  });

});
