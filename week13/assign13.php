<?php
    $performance =          $_POST ["performance"];
    $firstName  =           $_POST ["first_name"];
    $lastName =             $_POST ["last_name"];
    $studentID =            $_POST ["student_id"];
    $firstName2 =           $_POST ["first_name_2"];
    $lastName2 =            $_POST ["last_name_2"];
    $studentID2 =           $_POST ["student_id_2"];
    $skill =                $_POST ["skill"];
    $instrument =           $_POST ["instrument"];
    $location =             $_POST ["location"];
    $room_number =          $_POST ["room_number"];
    $time_slot =            $_POST ["time_slot"];

    $data = Array(
    "performance" =>           $performance,
    "first_Name"  =>           $firstName,
    "last_Name" =>             $lastName,
    "studentID" =>             $studentID,
    "first_Name2" =>           $firstName2,
    "last_Name2" =>            $lastName2,
    "studentID2" =>             $studentID2,
    "skill" =>                 $skill,
    "instrument" =>            $instrument,
    "location" =>              $location,
    "room" =>                  $room_number,
    "time" =>                  $time_slot,
    );

    $file = "data/data.txt";

    $current = [];

    if (file_exists($file)) {
        $current = file_get_contents($file);
        $current = json_decode($current);
    }

    $current[] = $data;
    $current = json_encode($current);
    file_put_contents($file, $current);

    echo $current;
?>
