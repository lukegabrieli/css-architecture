var current = document.getElementById('page').getElementsByTagName('a');

function Active() {
  for (var i=0; i < current.length; i++) {
    if (document.location.href == current[i].href) {
      current[i].classList.add('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', Active, false);
