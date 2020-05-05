<?php


    $firstName =        $_GET ["first_name"];
    $lastName =         $_GET ["last_name"];
    $address =          $_GET ["address"];
    $phone =            $_GET ["phone"];

    $franceBool =       $_GET ["item1"];
    $lyonnaisBool =     $_GET ["item2"];
    $minnesotaBool =    $_GET ["item3"];
    $vikingBool =       $_GET ["item4"];

    $cardType =         $_GET ["card"];

    //Made substring for cardNumber to output the last 4
    $cardNumber =       $_GET ["credit_card"];
    $cardLast4 = substr($cardNumber, 15, 19);

    $cardExpiration =   $_GET ["exp_date"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 12 Submit</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="./assign12.css">
</head>
<body>
    <div class="alert alert-success" role="alert">
        <h2 class="alert-heading">Order Confirmation for
        <?php
            print "$firstName $lastName";
        ?>
        </h2>
        <p>Please carefully review your order information before you submit it</p>
    </div>
    <div class="confirmation-info">
        <div class="form-group row">
            <label for="staticFirst" class="col-sm-2 col-form-label">First Name</label>
            <div class="col-sm-5">
                <input type="text" readonly class="form-control-plaintext" id="staticFirst" value=
                <?php
                    print "\"$firstName\">";
                ?>
            </div>
        </div>
        <div class="form-group row">
            <label for="staticLast" class="col-sm-2 col-form-label">Last Name</label>
            <div class="col-sm-5">
                <input type="text" readonly class="form-control-plaintext" id="staticLast" value=
                <?php
                    print "\"$lastName\">";
                ?>
            </div>
        </div>
        <div class="form-group row">
            <label for="staticAddress" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-5">
                <input type="text" readonly class="form-control-plaintext" id="staticAddress" value=
                <?php
                    print "\"$address\">";
                ?>
            </div>
        </div>
        <div class="form-group row">
            <label for="staticPhone" class="col-sm-2 col-form-label">Phone Number</label>
            <div class="col-sm-5">
                <input type="text" readonly class="form-control-plaintext" id="staticPhone" value=
                <?php
                    print "\"$phone\">";
                ?>
            </div>
        </div>
        <div class="form-group row">
            <label for="staticCard" class="col-sm-2 col-form-label">Card Type</label>
            <div class="col-sm-5">
                <input type="text" readonly class="form-control-plaintext" id="staticCard" value=
                <?php
                    print "\"$cardType\">";
                ?>
            </div>
        </div>
        <div class="form-group row">
            <label for="staticCardNumber" class="col-sm-2 col-form-label">Card Number</label>
            <div class="col-sm-5">
                <input type="text" readonly class="form-control-plaintext" id="staticCardNumber" value=
                <?php
                    print "\"**** **** **** $cardLast4\">";
                ?>
            </div>
        </div>
        <div class="form-group row">
            <label for="staticExpiration" class="col-sm-2 col-form-label">Card Expiration</label>
            <div class="col-sm-5">
                <input type="text" readonly class="form-control-plaintext" id="staticExpiration" value=
                <?php
                    print "\"$cardExpiration\">";
                ?>
            </div>
        </div>
    </div>
    <h3 class="">Items purchased</h3>

    <div class="flex-box-items">
        <?php
                if (isset($franceBool)) {
                print "
                <div class=\"card shadow bg-white rounded\" style=\"width: 13rem;\">
                    <img class=\"card-img-top\" src=\"./franceJersey.jpeg\" alt=\"Card image cap\">
                    <div class=\"card-body\">
                        <p class=\"card-text\">A well known jersey that has sold well due to the recent win of the world cup. <b>$10</b></p>
                    </div>
                </div>";
            }
                if (isset($lyonnaisBool)) {
                print "
                <div class=\"card shadow bg-white rounded\" style=\"width: 13rem;\">
                    <img class=\"card-img-top\" src=\"./olShirt.jpg\" alt=\"Card image cap\">
                    <div class=\"card-body\">
                        <p class=\"card-text\">A jersey of a southern french soccer team known for a fantastic stadium. <b>$10</b></p>
                    </div>
                </div>";
            }
                if (isset($minnesotaBool)) {
                print "
                <div class=\"card shadow bg-white rounded\" style=\"width: 13rem;\">
                    <img class=\"card-img-top\" src=\"./UofMJersey.jpg\" alt=\"Card image cap\">
                    <div class=\"card-body\">
                        <p class=\"card-text\">Recently becoming one of the popular jerseys of CFB the gophers look to start another amazing season. <b>$10</b></p>
                    </div>
                </div>";
            }
                if (isset($vikingBool)) {
                print "
                <div class=\"card shadow bg-white rounded\" style=\"width: 13rem;\">
                    <img class=\"card-img-top\" src=\"./vikingsJersey.jpeg\" alt=\"Card image cap\">
                    <div class=\"card-body\">
                        <p class=\"card-text\">Playoff team that is looking to competely rebuild their team this year. <b>$10</b></p>
                    </div>
                </div>";
            }
        ?>
    </div>
    <div class="total">
        <?php
            $totalCost = 0;

            if (isset($franceBool))
                $totalCost = $totalCost + 10;
            if (isset($lyonnaisBool))
                $totalCost = $totalCost + 10;
            if (isset($minnesotaBool))
                $totalCost = $totalCost + 10;
            if (isset($vikingBool))
                $totalCost = $totalCost + 10;

            print "<h2>Your total is <b>$$totalCost</b></h2>";
        ?>
    </div>
    <form action="assign12_a.php" method="GET" class="buttons">
        <h3>Do you want to submit this order?</h3>
        <button type="submit" class="btn btn-success" name="btn-submit">Submit</button>
        <button type="submit" class="btn btn-danger" name="btn-cancel">Cancel</button>
    </form>
    
</body>
</html>