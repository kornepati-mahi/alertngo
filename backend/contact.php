<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed. Use POST."]);
    exit();
}

$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON payload"]);
    exit();
}

$name    = isset($input['name']) ? trim($input['name']) : '';
$email   = isset($input['email']) ? trim($input['email']) : '';
$phone   = isset($input['phone']) ? trim($input['phone']) : '';
$subject = isset($input['subject']) ? trim($input['subject']) : 'General Inquiry';
$message = isset($input['message']) ? trim($input['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => "Name, email and message are required."]);
    exit();
}

try {
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, phone, subject, message) VALUES (:name, :email, :phone, :subject, :message)");
    $stmt->execute([
        ':name'    => $name,
        ':email'   => $email,
        ':phone'   => $phone,
        ':subject' => $subject,
        ':message' => $message
    ]);

    http_response_code(201);
    echo json_encode([
        "success" => true,
        "message" => "Your message has been received. Our team will contact you shortly.",
        "inquiry_id" => $conn->lastInsertId()
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to save message: " . $e->getMessage()]);
}
