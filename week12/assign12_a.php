<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

</head>
<body>
<?php
    if (isset($_GET["btn-submit"])) {
        print 
        "<div class=\"alert alert-success rounded\" role=\"alert\">
        <h4 class=\"alert-heading\">Success!</h4>
        <p>Your order was submitted! If you have any questions about your order, feel free to call (555)-555-5555</p>
      </div>";
    }
    else {
        print 
        "<div class=\"alert alert-danger rounded\" role=\"alert\">
            <h4 class=\"alert-heading\">Your order was cancelled</h4>
            <p>Your order was cancelled. If you were not meaning to the cancel you can go to the previous page and resubmit your order</p>
            <hr>
            <p class=\"mb-0\">If you have any questions you can call us at (555)-555-5555</p>
        </div>";
    }
?>
</body>
</html>