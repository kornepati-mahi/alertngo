<?php
require_once __DIR__ . '/config.php';

$defaultPrograms = [
    [
        "category" => "Forest Rights",
        "title" => "RoFR & Tribal Land Advocacy",
        "description" => "Securing individual (IFR) and community forest rights (CFR) for Adivasi families under the Forest Rights Act 2006, protecting over 15,000+ acres of ancestral forests.",
        "image_url" => "/uploads/PHOTO-2023-02-15-19-20-55_1.jpg",
        "details" => json_encode(["IFR & CFR Claims Documentation", "Gram Sabha Resolution Filing", "GPS Boundary Demarcation", "Title Deed (Patta) Distribution Support"])
    ],
    [
        "category" => "Governance",
        "title" => "Self-Governance & PESA Act 1996",
        "description" => "Mobilizing Adivasi hamlets to exercise sovereign powers vested in the Gram Sabha under PESA, curbing illegal land alienation and defending customary heritage.",
        "image_url" => "/uploads/PHOTO-2023-02-15-19-20-56.jpg",
        "details" => json_encode(["Gram Sabha Capacity Training", "PESA Rules Enforcement", "Dispute Resolution Through Tribal Elders", "Natural Resource Governance"])
    ],
    [
        "category" => "Polavaram PIP",
        "title" => "Land Acquisition (LA) & R&R Advocacy",
        "description" => "Defending rights of 1,05,000+ Project Displaced Families (PDFs) facing displacement from the Polavaram National Project under the RFCTLARR Act 2013.",
        "image_url" => "/uploads/submergence-area-map-1.jpg",
        "details" => json_encode(["Fair Market Land Valuation", "Adult Youth (18+) Package Claims", "Colony Amenities Monitoring", "High Court Litigation Support"])
    ],
    [
        "category" => "Women Cooperatives",
        "title" => "Antyodaya: Matsya Mithra Women Federation",
        "description" => "Empowering 3,500+ Yenadi tribal fisherwomen across 6 coastal mandals of Krishna District through sustainable fisheries, cold storage, and micro-credit.",
        "image_url" => "/uploads/The-formation-Meeting-of-Yanadi-Girijana-Women-fisheries-COOP-at-Machilipatnam-mandal-in-Krishna-District-150x150.jpg",
        "details" => json_encode(["Fisheries Cooperatives Management", "Micro-Savings & SHG Linkages", "Direct Market Fish Processing", "Leadership & Gender Justice"])
    ],
    [
        "category" => "Child Rights",
        "title" => "Child Interventions & Bare Acts",
        "description" => "Ensuring every Adivasi child enjoys statutory protection under RTE, Juvenile Justice, and POCSO Acts, supporting bilingual education and nutrition.",
        "image_url" => "/uploads/Children-reieved-shoes-1.jpg",
        "details" => json_encode(["Anti-Child Labor & Trafficking Vigilance", "Mother-Tongue Bilingual Learning", "Malnutrition Mitigation in Ashram Schools", "Child Bare Acts Community Workshops"])
    ],
    [
        "category" => "Disaster Relief",
        "title" => "Flood Relief Measures (2020 – 2023)",
        "description" => "Mobilizing emergency boat rescues, essential food provisions, sanitary supplies, and winter blankets for Godavari and Krishna river flood victims.",
        "image_url" => "/uploads/all2023.jpeg",
        "details" => json_encode(["Boat Rescue & Evacuation Teams", "Ration & Medical Kit Distribution", "Post-Flood Sanitation & Water Purification", "Housing Rehabilitation Assistance"])
    ],
    [
        "category" => "Clean Energy",
        "title" => "Community Solar & Green Energy",
        "description" => "Providing decentralized clean solar home lighting systems and solar street poles to remote, un-electrified hill habitations across the Eastern Ghats.",
        "image_url" => "/uploads/WhatsApp-Image-2021-09-16-at-7.50.55-PM-1024x461.jpeg",
        "details" => json_encode(["Solar Street Pole Installations", "Portable Solar Lantern Distribution", "Local Youth Technician Training", "Zero-Carbon Rural Electrification"])
    ],
    [
        "category" => "Agriculture",
        "title" => "Indigenous Millets & Seed Banks",
        "description" => "Reviving native heritage millet cultivation, bio-fertilizers, and community heirloom seed banks to guarantee food sovereignty and climate resilience.",
        "image_url" => "/uploads/ramavarampadu_11-08-2021-1024x461-640x480.jpeg",
        "details" => json_encode(["Traditional Millet Cultivation", "Community Indigenous Seed Banks", "Chemical-Free Organic Farming", "Soil & Water Conservation Works"])
    ]
];

if ($conn) {
    try {
        $stmt = $conn->query("SELECT * FROM programs ORDER BY id ASC");
        $programs = $stmt->fetchAll();
        if ($programs && count($programs) > 0) {
            echo json_encode(["success" => true, "data" => $programs]);
            exit;
        }
    } catch (PDOException $e) {}
}

echo json_encode(["success" => true, "data" => $defaultPrograms]);
