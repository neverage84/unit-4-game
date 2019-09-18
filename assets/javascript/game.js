

$(document).ready(function() {

    //Make our variables global
    var crystal_1 = Math.floor(Math.random() * 12) + 1;
    var crystal_2 = Math.floor(Math.random() * 12) + 1;
    var crystal_3 = Math.floor(Math.random() * 12) + 1;
    var crystal_4 = Math.floor(Math.random() * 12) + 1;
    $("#crystal-1").val(crystal_1); 
    $("#crystal-2").val(crystal_2);
    $("#crystal-3").val(crystal_3);
    $("#crystal-4").val(crystal_4);

    var wins = 0;
    var losses = 0;
    $("#WinNumber").text("Wins: " + wins);
    $("#LossNumber").text("Losses: " +  losses);

    var totalscore = 0;
    var targetscore = Math.floor(Math.random() * 101) + 19;
    $("#result").text(targetscore);

    function Reset() {
        var crystal_1 = Math.floor(Math.random() * 12) + 1;
        var crystal_2 = Math.floor(Math.random() * 12) + 1;
        var crystal_3 = Math.floor(Math.random() * 12) + 1;
        var crystal_4 = Math.floor(Math.random() * 12) + 1;
        $("#crystal-1").val(crystal_1); 
        $("#crystal-2").val(crystal_2);
        $("#crystal-3").val(crystal_3);
        $("#crystal-4").val(crystal_4);
        totalscore = 0;
        $("#YourScore").text(totalscore);
        targetscore = Math.floor(Math.random() * 101 + 19);
        $("#result").text(targetscore);
       
    }


    

  
    //What does each button do
  
    $(".crystal").on("click", function() {
        if (totalscore < targetscore) {
            totalscore += parseInt($(this).val());
            $("#YourScore").text(totalscore);
            if (totalscore === targetscore) {
                wins++;
                $("#WinNumber").text("Wins: " + wins);
                alert("You Win!");
                Reset();
            }
            else if (totalscore > targetscore) {
                losses++;
                $("#LossNumber").text("Losses: " +  losses);
                alert("You Lost!");
                Reset();
            }

        }

        else {
            Reset();
        }
    
        });
        


        

    
    
    
});
