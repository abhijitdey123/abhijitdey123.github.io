/*JS document*/

function preLoader(elem){
    setTimeout(function(){
        $(elem).fadeOut("slow");
        showNotification();
    }, 1500);
}
function showNotification()
{
    if(!window.Notification){
        alert('Notification Not supported!');
    }
    else{
        Notification.requestPermission()
        .then(function(perm){
            if(perm === 'granted'){
            
                var notify = new Notification('Demo Notification', {
                    body: 'Welcome to Edge Web Design',
                    icon: './img/icon.png'
                });
                setTimeout(function(){
                    notify.close();
                }, 10000);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
}