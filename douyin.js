<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>glitch</title>
    <style>
    .glitch {
        color: black;
        font-size: 6em;
        font-weight: bold;
        position: relative;
        width: 7.5em;
        margin: 0;
        padding: 0;
        position: fixed;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
    }

    @keyframes noise-anim {
        0% {
            clip: rect(40px, 9999px, 35px, 0);
        }
        5% {
            clip: rect(64px, 9999px, 50px, 0);
        }
        10% {
            clip: rect(27px, 9999px, 26px, 0);
        }
        15% {
            clip: rect(72px, 9999px, 55px, 0);
        }
        20% {
            clip: rect(74px, 9999px, 53px, 0);
        }
        25% {
            clip: rect(16px, 9999px, 30px, 0);
        }
        30% {
            clip: rect(7px, 9999px, 52px, 0);
        }
        35% {
            clip: rect(21px, 9999px, 70px, 0);
        }
        40% {
            clip: rect(55px, 9999px, 19px, 0);
        }
        45% {
            clip: rect(28px, 9999px, 31px, 0);
        }
        50% {
            clip: rect(25px, 9999px, 94px, 0);
        }
        55% {
            clip: rect(46px, 9999px, 54px, 0);
        }
        60% {
            clip: rect(82px, 9999px, 15px, 0);
        }
        65% {
            clip: rect(29px, 9999px, 82px, 0);
        }
        70% {
            clip: rect(22px, 9999px, 21px, 0);
        }
        75% {
            clip: rect(46px, 9999px, 66px, 0);
        }
        80% {
            clip: rect(26px, 9999px, 73px, 0);
        }
        85% {
            clip: rect(33px, 9999px, 11px, 0);
        }
        90% {
            clip: rect(50px, 9999px, 25px, 0);
        }
        95% {
            clip: rect(88px, 9999px, 23px, 0);
        }
        100% {
            clip: rect(19px, 9999px, 67px, 0);
        }
    }

    .glitch:after {
        content: attr(data-text);
        position: absolute;
        left: 2px;
        text-shadow: -1px 0 red;
        top: 0;
        color: black;
        background: #fff;
        overflow: hidden;
        clip: rect(0, 900px, 0, 0);
        animation: noise-anim 2s infinite linear alternate-reverse;
    }

    @keyframes noise-anim-2 {
        0% {
            clip: rect(41px, 9999px, 25px, 0);
        }
        5% {
            clip: rect(57px, 9999px, 17px, 0);
        }
        10% {
            clip: rect(84px, 9999px, 8px, 0);
        }
        15% {
            clip: rect(70px, 9999px, 26px, 0);
        }
        20% {
            clip: rect(53px, 9999px, 16px, 0);
        }
        25% {
            clip: rect(39px, 9999px, 14px, 0);
        }
        30% {
            clip: rect(14px, 9999px, 78px, 0);
        }
        35% {
            clip: rect(68px, 9999px, 74px, 0);
        }
        40% {
            clip: rect(78px, 9999px, 100px, 0);
        }
        45% {
            clip: rect(85px, 9999px, 17px, 0);
        }
        50% {
            clip: rect(12px, 9999px, 65px, 0);
        }
        55% {
            clip: rect(46px, 9999px, 24px, 0);
        }
        60% {
            clip: rect(55px, 9999px, 4px, 0);
        }
        65% {
            clip: rect(23px, 9999px, 2px, 0);
        }
        70% {
            clip: rect(10px, 9999px, 59px, 0);
        }
        75% {
            clip: rect(38px, 9999px, 92px, 0);
        }
        80% {
            clip: rect(22px, 9999px, 93px, 0);
        }
        85% {
            clip: rect(93px, 9999px, 100px, 0);
        }
        90% {
            clip: rect(1px, 9999px, 23px, 0);
        }
        95% {
            clip: rect(65px, 9999px, 6px, 0);
        }
        100% {
            clip: rect(56px, 9999px, 98px, 0);
        }
    }

    .glitch:before {
        content: attr(data-text);
        position: absolute;
        left: -2px;
        text-shadow: 1px 0 blue;
        top: 0;
        color: black;
        background: #fff;
        overflow: hidden;
        clip: rect(0, 900px, 0, 0);
        animation: noise-anim-2 3s infinite linear alternate-reverse;
    }
    </style>
</head>
<body>
    <main role="main" class="error">
        <audio src="https://hacdias.com/assets/interference.mp3" autoplay loop hidden="true"></audio>
        <div class="glitch" data-text="404 Not Found">404 Not Found</div>
    </main>
</body>
</html>