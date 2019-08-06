$(document).ready(function() {
    $(".genremenutoggle").click(function() {
        $(".genremenu").toggle(300);
    });
    
    $(".search").keyup(function(e) {
        if(e.keyCode == 13) {
           if(this.value == null || this.value == "") {
              window.location.reload();
              } else {
              var value = $(this).val().toLowerCase();
                  $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contentall").show();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
               $(".contentall .games .game h1").filter(function() {
                      $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
                });
              }
        }
    });
    
    $(".genremenu a").click(function() {
        $(".genremenu").toggle(300);
    });
    
    $(".action").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contentall").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").show();
        var value = "Action".toLowerCase();
        $(".contentaction .games .game .tags a[class='actiongenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".actiongenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contentall").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").show();
        var value = "Action".toLowerCase();
        $(".contentaction .games .game .tags a[class='actiongenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".adventure").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").show();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentall").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Adventure".toLowerCase();
        $(".contentadventure .games .game .tags a[class='adventuregenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".adventuregenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").show();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentall").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Adventure".toLowerCase();
        $(".contentadventure .games .game .tags a[class='adventuregenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".episodic").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").show();
        $(".contenthorror").hide();
        $(".contentall").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Episodic".toLowerCase();
        $(".contentepisodic .games .game .tags a[class='episodicgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".episodicgenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").show();
        $(".contenthorror").hide();
        $(".contentall").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Episodic".toLowerCase();
        $(".contentepisodic .games .game .tags a[class='episodicgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".horror").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").show();
        $(".contentall").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Horror".toLowerCase();
        $(".contenthorror .games .game .tags a[class='horrorgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".horrorgenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").show();
        $(".contentall").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Horror".toLowerCase();
        $(".contenthorror .games .game .tags a[class='horrorgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".openworld").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").show();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentall").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Open World".toLowerCase();
        $(".contentopenworld .games .game .tags a[class='openworldgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".openworldgenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").show();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentall").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Open World".toLowerCase();
        $(".contentopenworld .games .game .tags a[class='openworldgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".racing").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentall").hide();
        $(".contentracing").show();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Racing".toLowerCase();
        $(".contentracing .games .game .tags a[class='racinggenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".racinggenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentall").hide();
        $(".contentracing").show();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Racing".toLowerCase();
        $(".contentracing .games .game .tags a[class='racinggenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".sports").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentall").hide();
        $(".contentsports").show();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Sports".toLowerCase();
        $(".contentsports .games .game .tags a[class='sportsgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".sportsgenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentall").hide();
        $(".contentsports").show();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        var value = "Sports".toLowerCase();
        $(".contentsports .games .game .tags a[class='sportsgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".stealth").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").show();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentall").hide();
        $(".contentaction").hide();
        var value = "Stealth".toLowerCase();
        $(".contentstealth .games .game .tags a[class='stealthgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".stealthgenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").show();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentall").hide();
        $(".contentaction").hide();
        var value = "Stealth".toLowerCase();
        $(".contentstealth .games .game .tags a[class='stealthgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".sandbox").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").show();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        $(".contentall").hide();
        var value = "Sandbox".toLowerCase();
        $(".contentsandbox .games .game .tags a[class='sandboxgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".sandboxgenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").show();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        $(".contentall").hide();
        var value = "Sandbox".toLowerCase();
        $(".contentsandbox .games .game .tags a[class='sandboxgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".strategy").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").show();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        $(".contentall").hide();
        var value = "Strategy".toLowerCase();
        $(".contentstrategy .games .game .tags a[class='strategygenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".strategygenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").show();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        $(".contentall").hide();
        var value = "Strategy".toLowerCase();
        $(".contentstrategy .games .game .tags a[class='strategygenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".simulation").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").show();
        $(".contentaction").hide();
        $(".contentall").hide();
        var value = "Simulation".toLowerCase();
        $(".contentsimulation .games .game .tags a[class='simulationgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".simulationgenre").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").show();
        $(".contentaction").hide();
        $(".contentall").hide();
        var value = "Simulation".toLowerCase();
        $(".contentsimulation .games .game .tags a[class='simulationgenre']").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    
    $(".allgames").click(function() {
        $(".contenthome").hide();
        $(".contentadventure").hide();
        $(".contentepisodic").hide();
        $(".contenthorror").hide();
        $(".contentopenworld").hide();
        $(".contentracing").hide();
        $(".contentsports").hide();
        $(".contentstealth").hide();
        $(".contentsandbox").hide();
        $(".contentstrategy").hide();
        $(".contentsimulation").hide();
        $(".contentaction").hide();
        $(".contentall").show();
        var value = "Simulation".toLowerCase();
        $(".contentsimulation .games .game .tags a").filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});