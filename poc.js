var req = new XMLHttpRequest();

req.open('GET', '/admin/information', false);
req.send(null);

if(req.status == 200) {
   console.log(req.responseText);
}
