<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>PlayTorrents - Download Games for Free</title>
        <link href="css/stil.css" type="text/css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <script src="https://kit.fontawesome.com/9fd2a29a81.js"></script>
    </head>
    <body>
        <div class="searchbar">
            <i class="fas fa-search"></i>
            <input class="search" type="text" placeholder="Search for a game...">
        </div>
        <div class="container">
            <?php include "gamewindows.php"; ?>
            <div class="sidebar">
                <a href="home.php">
                    <i class="fas fa-gamepad"></i>
                </a>
                <a href="#" class="allgames">
                    <i class="fas fa-headset"></i>
                    All Games
                </a>
                <a href="#" class="genremenutoggle">
                    <i class="fas fa-theater-masks"></i>
                    Genre
                </a>
                <a href="upcoming.php">
                    <i class="far fa-eye"></i>
                    Upcoming
                </a>
                <a href="request.php">
                    <i class="fas fa-box-open"></i>
                    Request games
                </a>
                <a href="faq.php">
                    <i class="fas fa-question"></i>
                    F.A.Q
                </a>
                <a href="copyright.php">
                    <i class="far fa-copyright"></i>
                    Copyright
                </a>
                <a href="donate.php">
                    <i class="fas fa-hand-holding-usd"></i>
                    Donate
                </a>
            </div>
            <div class="sidebarunder">
            </div>
            <div class="content">
                <div class="genremenu genremenuhide">
                    <a class="action" href="#">Action</a>
                    <a class="adventure" href="#">Adventure</a>
                    <a class="episodic" href="#">Episodic</a>
                    <a class="horror" href="#">Horror</a>
                    <a class="openworld" href="#">Open World</a>
                    <a class="racing" href="#">Racing</a>
                    <a class="sports" href="#">Sports</a>
                    <a class="stealth" href="#">Stealth</a>
                    <a class="sandbox" href="#">Sandbox</a>
                    <a class="strategy" href="#">Strategy</a>
                    <a class="simulation" href="#">Simulation</a>
                </div>
                <div class="contenthome">
                    <div class="title">
                        <h1>Newest Games</h1>
                    </div>
                    <div class="games newest newest2">
                        <?php include "allgames.php"; ?>
                    </div>
                    <div class="title">
                        <h1>Upcoming Games</h1>
                    </div>
                    <div class="games upcoming">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentall">
                    <div class="title">
                        <h1>All Games</h1>
                    </div>
                    <div class="games">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentaction">
                    <div class="title">
                        <h1>Action games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentadventure newest">
                    <div class="title">
                        <h1>Adventure games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentepisodic newest">
                    <div class="title">
                        <h1>Episodic games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contenthorror newest">
                    <div class="title">
                        <h1>Horror games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentopenworld newest">
                    <div class="title">
                        <h1>Open world games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentracing newest">
                    <div class="title">
                        <h1>Racing games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentsports newest">
                    <div class="title">
                        <h1>Sports games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentstealth newest">
                    <div class="title">
                        <h1>Stealth games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentsandbox newest">
                    <div class="title">
                        <h1>Sandbox games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentstrategy newest">
                    <div class="title">
                        <h1>Strategy games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
                <div class="contentsimulation newest">
                    <div class="title">
                        <h1>Simulation games</h1>
                    </div>
                    <div class="games newest">
                        <?php include "allgames.php"; ?>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/navigation.js"></script>
        <script src="js/games.js"></script>
    </body>
</html>