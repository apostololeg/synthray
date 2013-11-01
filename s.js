var lightCount = 4,
    currentLight = 0,
    // частота создания лучей
    frequency = 13000;


function getLight( num ) {

    var light = $('<div>');
    light.addClass('light').addClass('light' + num);

    return light

}

function move( obj ) {

    var cls = obj.attr('class');

    // запилить ROTATE независимый от стилей конкретного луча

    setTimeout(function() {
        obj.addClass( 'play_yes' );
        obj.addClass( 'right' );
    }, 1000);

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
        animationDuration = parseInt( light.css('-webkit-transition-duration' ) )*1000;

    // задержка перед анимацией
    setTimeout(function() {

        move( light );
        // плавно потухаем
        setTimeout(function() { light.fadeOut(100) }, animationDuration - 1000);
        // удаляем
        setTimeout(function() { light.remove() }, animationDuration);

        setTimeout(_do, frequency);

    }, 1000);

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