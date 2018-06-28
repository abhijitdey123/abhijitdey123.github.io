/*JS document*/

function preLoader(elem){
    setTimeout(function(){
        $(elem).fadeOut("slow");
    }, 1500);
}

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
    setTimeout(function(){
        notify.close();
    }, 10000);
}