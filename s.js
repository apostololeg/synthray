var lightCount = 4,
    currentLight = 0,
    // частота создания лучей
    frequency = 1000;


function getLight( num ) {

    var light = $('<div>');
    light.addClass('light').addClass('light' + num);

    return light

}

function move( obj ) {

    var cls = obj.attr('class');

    // запилить ROTATE независимый от стилей конкретного луча

    // плавно появляем
    obj.fadeIn(500);
    setTimeout(function() {
        // light1
        // light1 light1_play_yes
        obj.addClass( 'light' + obj.attr('class').match(/light(\d)/)[1] + '_play_yes' );
    }, 1000)

};

function createLight( num ) {

    var light = getLight( num || currentLight++ );

    // выбираем тип луча
    if (currentLight == lightCount) { currentLight = 0; }

    // создаем луч и добавляем его в DOM
    $('body').append( light );

    // создавать много разнообразных лучей
    return light;

};

function _do( num ) {

    var light = createLight( num ),
        animationDuration = parseInt( light.css('-webkit-transition-duration')*1000 );

        console.log( parseInt( light.css('-webkit-transition-duration') ) );

    // задержка перед анимацией
    setTimeout(function() {

        move( light );
        // плавно потухаем
        setTimeout(function() { light.fadeOut(100) }, animationDuration - 1000);
        // удаляем
        setTimeout(function() { light.remove() }, animationDuration);

    }, frequency);

}

function getRnd() {

    var time = parseInt( (Math.random() * 10000).toFixed() );

    if (time < 7000) {
        return time + 3000;
    } else {
        return time + 1000;
    }

}

_do();
setInterval(function () {

    _do();

}, 7000);