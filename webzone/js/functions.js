var intEvt = null;
var timeLeft = -1;

function playMsc() {
    var player  = document.getElementById( "msc_player" );
    player.innerHTML = '<embed type="audio/mpeg" src="msc/SMS_Mystery.mp3" allowfullscreen="false" allowscriptaccess="always" style="height:0px;width:0px;visibility:hidden" />';
}

function runTimer( inVal ) {
    aMinute = 60;
    anHour  = 3600;
    aDay    = 86400;
    inval   = parseInt( inVal );

    if ( inVal < 0 || inVal > aDay ) return;
    var curVal  = inVal;
    // console.log( curVal );

    hour    = Math.floor( curVal/anHour );
    curVal  -= curVal >= anHour ? hour * anHour : 0;
    minute  = Math.floor( curVal/aMinute );
    curVal  -= curVal >= aMinute ? minute * aMinute : 0;

    var output  = "";
    if ( hour > 9 ) {
        output += hour + ":";
    } else if ( hour > 0) {
        output += "0" + hour + ":";
    }

    if ( minute > 9 ) {
        output += minute + ":";
    } else {
        output += "0" + minute + ":";
    }

    if ( curVal > 9 ) {
        output += curVal;
    } else {
        output += "0" + curVal;
    }

    if ( inVal == 0 ) {
        output = "Time Up!";
        playMsc();
    }
    // console.log(output);
    var span = document.getElementById("curTimer").innerText = output;
}

function startInterval() {
    return setInterval( function() { if ( timeLeft >= 0 ) { runTimer(timeLeft); timeLeft--; } }, 1000 );
}

function startTimer( left ) {
    aDay        = 86400;
    if ( left == null ) left = 1500;

    left    = parseInt( left );

    if ( left < 0 || left > aDay ) return;

    timeLeft    = left;

    intEvt  = startInterval();
}

function checkSpaceKeyCode() {
    // console.log( timeLeft );
    if ( event.keyCode == 32 ) {
        if ( intEvt != null ) {
            clearInterval( intEvt );
            intEvt  = null;
        } else {
            intEvt  = startInterval();
        }
    }
}
