<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Methods: GET");

$authHeader = $_SERVER["HTTP_AUTHORIZATION"] ?? null;


// Verify the token here, replace "i_am_verified" with your actual verification logic
$token = "i_am_verified";

// if ($authHeader !== "Bearer " . $token) {
// 	http_response_code(401);
// 	exit();
// }

$spacexApiUrl = "https://api.spacexdata.com/v3/capsules/{$serialNumber}";
$response = file_get_contents($spacexApiUrl);

if ($response === false) {
	http_response_code(500);
	exit();
}

header("Content-Type: application/json");
echo $response;
?>