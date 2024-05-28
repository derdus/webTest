var req = new XMLHttpRequest();

req.open('GET', '/dashboard', false);
req.send(null);

if(req.status == 200) {
   console.log(req.responseText);
}
