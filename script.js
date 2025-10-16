/* Mastering Continue Statements */
console.log("Example 1");
const names = ["Alex", "", "Jordan", "Priya", ""];

for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

console.log("Example 2");
const scores = [85, -1, 92, 100, -1, 76];

for (let i = 0; i < scores.length; i++) {
  console.log("Valid score:", scores[i]);
}

console.log("Example 3");
const students = ["Alex", "Jordan", "Priya", "You", "Sam"];

for (let i = 0; i < students.length; i++) {
  console.log("Calling:", students[i]);
}


/* Mastering Break */
console.log("Example 4");
const numbers = [2, 5, 8, 12, 15, 20];
numberToFind = 12;
for (let i = 0; i < numbers.length; i++) {
  console.log("🔍 Checking:", numbers[i]);  // <— always runs
  if (numbers[i] === 12) {
    console.log("🎯 Found 12!");
  }
  console.log(`Still searching...`);  // <— only runs if not found yet
}

console.log("✅ Search complete!");


console.log("Example 5");
// Sample dataset: files in a folder (some normal, one contains "virus")
const files = [
  "readme.txt",
  "photo1.jpg",
  "report.pdf",
  "notes.txt",
  "suspect_file.exe", // maybe suspicious
  "virus_signature.bin", // <-- the 'virus' marker we will treat as virus
  "more_docs.docx",
  "archive.zip"
];



let foundIndex = -1;

console.log("🔎 Starting scan of files...");

for (let i = 0; i < files.length; i++) {
  // Always show what we're checking (helps students trace the loop)
  console.log(`Scanning index ${i}: ${files[i]}`);

  // Only runs when file is clean
  console.log("✅ Clean. Continuing scan...");
}

if (foundIndex === -1) {
  console.log("✅ Scan finished — no virus found.");
} else {
  console.log(`🛑 Scan aborted at index ${foundIndex}. Take action (isolate/delete/quarantine).`);
}


/* REDUCE Function - sum up the scores array*/
console.log("Example 6");


/* OBJECTS */
let student1Name = "Alex";
let student1Age = 20;
let student1Score = 88;

let student2Name = "Daniel";
let student2Age = 21;
let student2Score = 95;

let student3Name="Jordan";
let student3Age= 19;
let student3Score= 80;


