var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");
var subject4 = prompt("Enter the name of the forth subject:");
var subject5 = prompt("Enter the name of the fifth subject:");
var subject6 = prompt("Enter the name of the sixth subject:");
var subject7 = prompt("Enter the name of the seventh subject:");

var totalMarksEach = 100;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
var obtainedMarks4 = parseInt(prompt("Enter obtained marks for " + subject4 + ":"));
var obtainedMarks5 = parseInt(prompt("Enter obtained marks for " + subject5 + ":"));
var obtainedMarks6 = parseInt(prompt("Enter obtained marks for " + subject6 + ":"));
var obtainedMarks7 = parseInt(prompt("Enter obtained marks for " + subject7 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3 + obtainedMarks4 + obtainedMarks5 + obtainedMarks6 + obtainedMarks7 ;
var totalMaxMarks = totalMarksEach * 7;
var percentage = (totalObtainedMarks / totalMaxMarks) * 100;

document.write("<h2>Marks and Percentage</h2>");
document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject4 + "</td><td>" + obtainedMarks4 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject5 + "</td><td>" + obtainedMarks5 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject6 + "</td><td>" + obtainedMarks6 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><td>" + subject7 + "</td><td>" + obtainedMarks7 + "</td><td>" + totalMarksEach + "</td></tr>");
document.write("<tr><th>Total</th><th>" + totalObtainedMarks + "</th><th>" + totalMaxMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");