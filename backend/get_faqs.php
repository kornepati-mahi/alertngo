<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

$faqs = [
    [
        "q" => "What is ALERT and what is its primary mission in Andhra Pradesh?",
        "a" => "ALERT (Association for Land and Livelihood, Environment, Research and Training) is a registered non-governmental organization (Reg. No. 307/2004) dedicated to championing the constitutional rights, forest tenure, self-governance, and sustainable livelihoods of Adivasi and coastal fishing communities in Andhra Pradesh."
    ],
    [
        "q" => "How does ALERT assist Project Displaced Families (PDFs) of the Polavaram Project?",
        "a" => "ALERT assists displaced families across 371 habitations by providing legal advocacy under the RFCTLARR Act 2013, facilitating accurate asset valuation award copies, tracking adult youth (18+) resettlement entitlements, verifying 25 basic colony amenities (Schedule 3), and filing formal appeals before Land Acquisition & Resettlement authorities."
    ],
    [
        "q" => "What is the Recognition of Forest Rights (RoFR) Act 2006, and how does ALERT support claims?",
        "a" => "The Forest Rights Act 2006 recognizes the pre-existing customary land rights of forest-dwelling Scheduled Tribes (FDST) and Other Traditional Forest Dwellers (OTFD). ALERT trains Gram Sabhas, assists in boundary GPS demarcation, compiles documentary evidence for Individual Forest Rights (IFR) and Community Forest Rights (CFR), and contests wrongful rejections."
    ],
    [
        "q" => "What is the Antyodaya Project for Yenadi tribal fisherwomen?",
        "a" => "Supported by Brot für die Welt (BftW), Germany, the Antyodaya initiative organizes over 3,500 Yenadi tribal women across 6 coastal mandals into 50+ self-managed Matsya Mithra Cooperatives. It provides cold-storage linkages, government identification documentation, micro-credit access, and sustainable pond fisheries training."
    ],
    [
        "q" => "Are donations to ALERT eligible for income tax exemption?",
        "a" => "Yes. ALERT is registered under Section 12A and Section 80G of the Indian Income Tax Act. Donors receive a formal 80G tax receipt allowing them to claim up to a 50% deduction on their taxable income as permitted under Indian tax laws."
    ],
    [
        "q" => "How can individuals or organizations volunteer or collaborate with ALERT?",
        "a" => "We welcome interns, legal researchers, environmental scientists, and volunteers. Opportunities include field research in tribal mandals, documentation of oral histories, child education initiatives, and disaster relief logistics. You can reach out through our Contact page or write directly to director@alertngo.in."
    ],
    [
        "q" => "How does ALERT fund its community initiatives and ensure transparency?",
        "a" => "ALERT is funded through individual philanthropic contributions, institutional donor grants, and corporate CSR partnerships. Our accounts are audited annually by statutory chartered accountants, filed with the Registrar of Societies, and submitted under FCRA guidelines to ensure absolute financial integrity."
    ]
];

echo json_encode([
    "success" => true,
    "total" => count($faqs),
    "data" => $faqs
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
