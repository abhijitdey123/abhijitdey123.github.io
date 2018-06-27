/*JS document*/

if(!window.Notification){
    alert('Notification Not supported!');
}
else{
    Notification.requestPermission()
    .catch(function(err){
        console.log(err);
    });
}
if(Notification.permission === 'granted'){
        
    var notify = new Notification('Demo Message', {
        body: 'Hello World!',
        icon: './img/icon.png'
    });
    setTimeout(notify.close().bind(notify), 2000);
}