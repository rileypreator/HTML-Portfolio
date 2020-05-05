<?php

    //Variables to receive from the form
    $APR =      $_GET ["apr"];
    $term =     $_GET ["term"];
    $amount =   $_GET ["amount"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mortgage Calculator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="./assign11.css">
</head>
<body>
    <div class="formDiv">
        <div class="content">
            <h2>The form that you submitted along with the results</h2>
            <h3>
                <?php
                    print "APR: $APR<br>";
                    print "Term: $term<br>";
                    print "Amount: $amount<br>";

                    $rate = (float)$APR/100/12;
                    $totalTerm = $term*12;
                    $mortgage = ($amount*($rate*pow((1+$rate), $totalTerm))/(pow((1+$rate), $totalTerm)-1));
                ?>
            </h3>

            <h2>Your total mortgage is:</h2>
            <div class="alert alert-dark" role="alert">
                <h3>
                    <?php

                        $mortgageFinal = number_format($mortgage, 2, ".", "");
                        print "$mortgageFinal";
                    ?>
                </h3>
            </div>
        </div>
    </div>
        
</body>
</html>