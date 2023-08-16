<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
// header("Access-Control-Allow-Headers: Authorization, Content-Type");

// $authHeader = $_SERVER["HTTP_AUTHORIZATION"] ?? $_SERVER["REDIRECT_HTTP_AUTHORIZATION"];
// $authToken = str_replace("Bearer ", "", $authHeader);
// $token = "i_am_verified";

// if ($authToken !== $token) {
// 	http_response_code(401);
// }

$spacexApiUrl = "https://api.spacexdata.com/v3/capsules";
$response = file_get_contents($spacexApiUrl);

if ($response === false) {
	http_response_code(500);
	exit();
}

header("Content-Type: application/json");
echo $response;
?>