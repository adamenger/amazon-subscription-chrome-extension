$('.blackoutDate').waitUntilExists(function(){
  var total = 0;
  for (i = 0; i < document.getElementsByClassName('snsPrice').length; i++) {
    if (document.getElementsByClassName('snsPrice')[i].offsetParent == null) { 
    }
    else {
      total += parseFloat(document.getElementsByClassName('snsPrice')[i].innerText.replace(/\$/g, '')); }

  document.getElementsByClassName('blackoutDate')[0].append("Subscription total: "+total);
});
