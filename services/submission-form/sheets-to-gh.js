
// replae this token from github
var ghToken = "fff5095b4b075bca8809b4ea8c13bb2ba12dec36";

function onFormSubmit(e) {

  var title = e.values[2]; // Name of business
  var type = "Submission";
  var categoryLetter = e.values[2].charAt(0).toUpperCase();
  var size =  if (e.values[3] == "1-10") {
                size = "small" 
              } else if (e.values[3] == "11-40") {
                size = "medium" 
              } else if (e.values[3] == "41-100") {
                size = "large"  
              } else {
                size = "huge" 
              };

  var body =  "* * * * * * * * * \n \n" +
              "You got a new submission, great job \n" +
              "Submitted by " + e.values[1] + " \n" +
              "*** *** *** \n" +
              "--- \n" +
              "title: \"" + e.values[2] + "\" \n" +
              "featuredImage: ./-hamburgers.png \n" +
              "website: \"" + e.values[5] + "\" \n" +
              "twit: \"" + e.values[6] + "\" \n" +
              "inst: \" \" \n" +
              "category: \"" + categoryLetter + "\" \n" +
              "tags: \"" + e.values[4] + "\" \n" +
              size
              "--- \n" +
              "Would you like to be on the show? \n" +
              "-" + e.values[8] + " \n" +
              "- \n"
              "Live recording? \n" +
              "-" + e.values[9] + " \n" +
              "- \n"
              "Buy a hard copy? \n" +
              "-" + e.values[10] + " \n" +
              "- \n"
              "Additional questions \n" +
              "-" + e.values[11] + " \n" +
              "- \n"
              "* * * * * * * * * \n \n";

  var payload = {
    "title": title,
    "body": body,
    "labels": type,
  };

  var options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };
  
  // eslint-disable-next-line no-undef
  var response = UrlFetchApp.fetch("https://github.com/jonmccon/api/v3/repos/seattle-creative-directory/issues?access_token="+ghToken, options)
}





// if you want to make a table of values
  // var type = e.values[6].toLowerCase(); for example: Bug, Enhancement, Question
  // var priority = "priority-" + e.values[7];
  // var body = "# Details \n" + e.values[3] + "\n\n" +
  //            "| Submitted by | Priority | URL | Screenshot | Viewport(s) | Device(s)/Browser(s) |\n" +
  //            "|---|---|---|---|---|---|\n" +
  //            "| " +e.values[8] + " | " + e.values[7] + " | " + e.values[1] + " | " + e.values[2] + " | " + e.values[4] + " | " + e.values[5] + " |\n\n";
