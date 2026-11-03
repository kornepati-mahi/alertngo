<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

$gallery = [
    ["src" => "/uploads/reel-1-dhimsa.mp4", "poster" => "/uploads/reel-1-dhimsa.jpg", "type" => "video", "duration" => "0:08", "title" => "Dhimsa Dance at a Community Gathering", "cat" => "Community"],
    ["src" => "/uploads/reel-2-learning.mp4", "poster" => "/uploads/reel-2-learning.jpg", "type" => "video", "duration" => "0:08", "title" => "Digital Learning Reaches Agency Schools", "cat" => "Education"],
    ["src" => "/uploads/reel-3-school-kits.mp4", "poster" => "/uploads/reel-3-school-kits.jpg", "type" => "video", "duration" => "0:08", "title" => "School Kits for Children in Hill Villages", "cat" => "Education"],
    ["src" => "/uploads/reel-4-women.mp4", "poster" => "/uploads/reel-4-women.jpg", "type" => "video", "duration" => "0:08", "title" => "Yenadi Women's Federation Convention", "cat" => "Women"],
    ["src" => "/uploads/PHOTO-2023-02-15-19-20-55_1.jpg", "title" => "Adivasi Community Meeting & Rights Dialogue", "cat" => "Community"],
    ["src" => "/uploads/PHOTO-2023-02-15-19-20-56_2-1.jpg", "title" => "Gram Sabha Forest Rights Documentation", "cat" => "Forest Rights"],
    ["src" => "/uploads/PHOTO-2023-02-15-19-20-52_1.jpg", "title" => "Tribal Elders Council Resolution", "cat" => "Community"],
    ["src" => "/uploads/PHOTO-2023-02-15-19-20-56.jpg", "title" => "Field Survey in Polavaram Basin", "cat" => "Field Work"],
    ["src" => "/uploads/PHOTO-2023-02-15-19-21-00_1.jpg", "title" => "Women Livelihood Group Discussion", "cat" => "Women"],
    ["src" => "/uploads/laptop1.jpeg", "title" => "Digital Literacy & Youth Skill Training", "cat" => "Education"],
    ["src" => "/uploads/lp.jpeg", "title" => "Computer Lab & Online Grievance Filing", "cat" => "Education"],
    ["src" => "/uploads/lp2.jpeg", "title" => "Youth Community Informatics Workshop", "cat" => "Education"],
    ["src" => "/uploads/l-1.jpg", "title" => "Ashram School Children Digital Education", "cat" => "Education"],
    ["src" => "/uploads/lp3.jpeg", "title" => "Skill Certification in Tribal Mandal", "cat" => "Education"],
    ["src" => "/uploads/DR.png", "title" => "Disaster Relief Operations & Provisioning", "cat" => "Relief"],
    ["src" => "/uploads/DR2.png", "title" => "Essential Food Ration Distribution", "cat" => "Relief"],
    ["src" => "/uploads/FR.png", "title" => "Flood Water Rescue & Hamlets Support", "cat" => "Relief"],
    ["src" => "/uploads/PL.png", "title" => "Polavaram Resettlement Colony Inspection", "cat" => "Field Work"],
    ["src" => "/uploads/fire1-1.jpg", "title" => "Solar Micro-Grid & Lantern Commissioning", "cat" => "Energy"],
    ["src" => "/uploads/fire3-1.jpg", "title" => "Solar Street Pole Erection Drive", "cat" => "Energy"],
    ["src" => "/uploads/firee-1.jpg", "title" => "Evening Lighting in Off-Grid Hamlet", "cat" => "Energy"],
    ["src" => "/uploads/fire4-1.jpg", "title" => "Clean Energy Transition Workshop", "cat" => "Energy"],
    ["src" => "/uploads/fire5-1.jpg", "title" => "Community Solar Battery Maintenance", "cat" => "Energy"],
    ["src" => "/uploads/fire6-1.jpg", "title" => "Renewable Energy Celebration in Tribal Village", "cat" => "Energy"],
    ["src" => "/uploads/WhatsApp-Image-2021-08-19-at-6.48.06-PM-1024x768.jpeg", "title" => "Flood Affected Families Evacuation Base", "cat" => "Relief"],
    ["src" => "/uploads/WhatsApp-Image-2021-08-23-at-11.23.52-AM-1024x768.jpeg", "title" => "Emergency Medical Kit Handover", "cat" => "Relief"],
    ["src" => "/uploads/PHOTO-2022-10-20-17-25-29-2.jpg", "title" => "Relief Boat Launch in Godavari Basin", "cat" => "Relief"],
    ["src" => "/uploads/PHOTO-2022-10-20-17-25-30.jpg", "title" => "Dry Provisions Distribution in Cut-Off Village", "cat" => "Relief"],
    ["src" => "/uploads/The-formation-Meeting-of-Yanadi-Girijana-Women-fisheries-COOP-at-Machilipatnam-mandal-in-Krishna-District-150x150.jpg", "title" => "Yanadi Girijana Women Fisheries Cooperative Formation", "cat" => "Women"],
    ["src" => "/uploads/Children-reieved-shoes-1.jpg", "title" => "Tribal Ashram School Children Footwear & Education Drive", "cat" => "Education"],
    ["src" => "/uploads/Love-then-Serve.jpg", "title" => "Love Then Serve: Community Elders Convocation", "cat" => "Community"],
    ["src" => "/uploads/Kotarugommu-18-9-21-1-rotated-1-1024x461-640x480.jpeg", "title" => "Kotarugommu Flood Relief Field Intervention", "cat" => "Relief"],
    ["src" => "/uploads/ramavarampadu_11-08-2021-1024x461-640x480.jpeg", "title" => "Ramavarampadu Emergency Provisioning Camp", "cat" => "Relief"],
    ["src" => "/uploads/WhatsApp-Image-2021-09-16-at-7.50.55-PM-1024x461.jpeg", "title" => "Decentralized Solar System Testing in Habitation", "cat" => "Energy"],
    ["src" => "/uploads/all2023.jpeg", "title" => "Godavari Flood Relief Unified Operation Base", "cat" => "Relief"]
];

echo json_encode([
    "success" => true,
    "total" => count($gallery),
    "data" => $gallery
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
