
// replae this token from github
var ghToken = "fff5095b4b075bca8809b4ea8c13bb2ba12dec36";

function onFormSubmit(e) {



  var title = e.values[X]; // Name of business
  var type = "Submission";
  // var categoryLetter = stringify this value e.values[X] and pull the first letter



  var body =  "* * * * * * * * * \n \n" +
              "You got a new submission, great job \n" +
              "Submitted by " + e.values[X] + " \n" +
              "*** *** *** \n" +
              "--- \n" +
              "title: \"" + e.values[X] + "\" \n" +
              "featuredImage: ./-hamburgers.png \n" +
              "website: \"" + e.values[X] + "\" \n" +
              "twit: \"" + e.values[X] + "\" \n" +
              "inst: \"" + e.values[X] + "\" \n" +
              "category: \"" + categoryLetter + "\" \n" +
              "tags: \"" + e.values[X] + "\" \n" +
              "--- \n" +
              "Description \n" +
              " bonus q&a " + e.values[X] + " \n" +
              "* * * * * * * * * \n \n";



  // var type = e.values[6].toLowerCase(); for example: Bug, Enhancement, Question
  // var priority = "priority-" + e.values[7];
  // var body = "# Details \n" + e.values[3] + "\n\n" +
  //            "| Submitted by | Priority | URL | Screenshot | Viewport(s) | Device(s)/Browser(s) |\n" +
  //            "|---|---|---|---|---|---|\n" +
  //            "| " +e.values[8] + " | " + e.values[7] + " | " + e.values[1] + " | " + e.values[2] + " | " + e.values[4] + " | " + e.values[5] + " |\n\n";




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
  
  // replace this with my repo address
  var response = UrlFetchApp.fetch("https://github.com/jonmccon/api/v3/repos/seattle-creative-directory/issues?access_token="+ghToken, options)
}
