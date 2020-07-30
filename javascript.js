var total = 0;
var message = "";
var psy_cost = 10
var career_cost = 15;
var relation_cost = 10;
var event_cost = 15;
var hasUrged = false;

$(document).ready(function(){
  $(document).mouseleave(function(){
    if(!hasUrged) {
      hasUrged = true;
      alert("Don't leave until you buy something!");
    }
  });


  $("#checkbox_psy").click(function(){
    if($(this).prop("checked") == true){
      message = "checkbox_psy was checked";
      total = total + psy_cost;
    }
    else if($(this).prop("checked") == false){
      message = "checkbox_psy was unchecked";
      total = total - psy_cost;
    }
    document.getElementById("total").innerHTML = "$" + total;
    //document.getElementById("message").innerHTML = message;
  });


  $("#checkbox_career").click(function(){
    if($(this).prop("checked") == true){
      message = "checkbox_career was checked";
      total = total + career_cost;
    }
    else if($(this).prop("checked") == false){
      message = "checkbox_career was unchecked";
      total = total - career_cost;
    }
    document.getElementById("total").innerHTML = "$" + total;
    //document.getElementById("message").innerHTML = message;
  });


  $("#checkbox_relation").click(function(){
    if($(this).prop("checked") == true){
      message = "checkbox_relation was checked";
      total = total + relation_cost;
    }
    else if($(this).prop("checked") == false){
      message = "checkbox_relation was unchecked";
      total = total - relation_cost;
    }
    document.getElementById("total").innerHTML = "$" + total;
    //document.getElementById("message").innerHTML = message;
  });


  $("#checkbox_event").click(function(){
    if($(this).prop("checked") == true){
      message = "checkbox_event was checked";
      total = total + event_cost;
    }
    else if($(this).prop("checked") == false){
      message = "checkbox_event was unchecked";
      total = total - event_cost;
    }
    document.getElementById("total").innerHTML = "$" + total;
    //document.getElementById("message").innerHTML = message;
  });
});