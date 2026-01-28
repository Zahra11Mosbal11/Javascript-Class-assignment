let name = 

let recordBtn = document.getElementById('recordProductBtn');
let userRole = 'sales-agent';

recordBtn.addEventListener('click', function() {
  if (userRole === 'sales-agent') {
    console.log('Not Allowed');
  }});