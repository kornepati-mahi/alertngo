<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

$slug = isset($_GET['slug']) ? trim($_GET['slug']) : '';

if (!$slug) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Page slug parameter is required."]);
    exit;
}

$dataFile = __DIR__ . '/../frontend/src/data/all_site_pages.json';

if (file_exists($dataFile)) {
    $json = file_get_contents($dataFile);
    $data = json_decode($json, true);
    
    // Exact or normalized match
    $matched = null;
    $slugClean = strtolower($slug);
    
    if (isset($data[$slugClean])) {
        $matched = $data[$slugClean];
    } else {
        foreach ($data as $k => $v) {
            if (strtolower($k) === $slugClean || strtolower($v['slug']) === $slugClean) {
                $matched = $v;
                break;
            }
        }
    }
    
    if ($matched) {
        echo json_encode([
            "success" => true,
            "data" => $matched
        ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    } else {
        http_response_code(404);
        echo json_encode(["success" => false, "message" => "Page with slug '{$slug}' not found."]);
    }
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Pages data file not found."]);
}
