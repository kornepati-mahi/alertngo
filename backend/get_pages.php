<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

$dataFile = __DIR__ . '/../src/data/all_site_pages.json';

if (file_exists($dataFile)) {
    $json = file_get_contents($dataFile);
    $data = json_decode($json, true);
    
    // Optional category filter
    $category = isset($_GET['category']) ? trim($_GET['category']) : null;
    $results = [];
    
    foreach ($data as $slug => $page) {
        if ($category && strtolower($page['category']) !== strtolower($category)) {
            continue;
        }
        $results[] = [
            'slug' => $page['slug'],
            'title' => $page['title'],
            'category' => $page['category'],
            'tables_count' => count($page['tables']),
            'images_count' => count($page['images']),
            'downloads_count' => count($page['downloads']),
            'url' => $page['url']
        ];
    }
    
    echo json_encode([
        "success" => true,
        "total" => count($results),
        "data" => $results
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} else {
    http_response_code(404);
    echo json_encode(["success" => false, "message" => "Pages data file not found."]);
}
