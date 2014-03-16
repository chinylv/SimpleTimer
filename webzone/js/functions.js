function playMsc() {
    var player  = document.getElementById( "msc_player" );
    player.innerHTML = '<embed type="audio/mpeg" src="msc/Crystal.mp3" allowfullscreen="false" allowscriptaccess="always" style="height:0px;width:0px;visibility:hidden" />';
}

function runTimer( inVal ) {
    aMinute = 60;
    anHour  = 3600;
    aDay    = 86400;
    inval   = parseInt( inVal );

    if ( inVal < 0 || inVal > aDay ) return;
    var curVal  = inVal;
    // console.log(curVal);

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

function startTimer( timeLeft ) {
    aDay        = 86400;
    if ( timeLeft == null ) timeLeft = 1500;
    
    timeLeft    = parseInt(timeLeft);
    
    if ( timeLeft < 0 || timeLeft > aDay) return;

    var si = setInterval( function() { if ( timeLeft >= 0 ) { runTimer(timeLeft); timeLeft--; } }, 1000 );
}
