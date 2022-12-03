CLASESS = ["Analyse", "Scan", "Document"]
ScanLen = 20

PATTERNS = {
    "Analyse": lambda text: "analyses" in text,
    "Scan": lambda text: len(text) < ScanLen,
    "Document": lambda text: True,
}

TARGETS = [
    "Subject",
    "Sex",
    "Age",
    "History",
    "Family_history",
    "Sign_symptom",
    "Color",
    "Disease_disorder",
    "Therapeutic_procedure",
    "Duration",
    "Medication",
    "Biological_structure",
]
