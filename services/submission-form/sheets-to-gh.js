

// this token is bunk, the rest may work fine as is but you'll need a new key and don't store it here
// var ghToken = "XXX";


function onFormSubmit(e) {

  // eslint-disable-next-line no-undef
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (var i = 0; i < data.length; i++) {

  var title = data[i][2]; // Name of business
  var type = ['Submission', 'bot'];
  var categoryLetter = data[i][2].charAt(0).toUpperCase();
  var size = "look it up"
  
  if (data[i][3] == "1-10") {
    size = "small" 
  } else if (data[i][3] == "11-40") {
    size = "medium" 
  } else if (data[i][3] == "41-100") {
    size = "large"  
  } else if (data[i][3] == "100+") {
    size = "huge" 
  } else {
    size = "dunno"
  }

  var body =  "###### You got a new submission, great job \n" +
              "###### Submitted by " + data[i][1] + " \n" +
              "--- \n" +
              "title: \"" + data[i][2] + "\" \n" +
              "featuredImage: ./-hamburgers.png \n" +
              "website: \"" + data[i][5] + "\" \n" +
              "twit: \"" + data[i][6] + "\" \n" +
              "inst: \" \" \n" +
              "category: \"" + categoryLetter + "\" \n" +
              "tags: \"" + data[i][4] + "\" \n" +
              "" + size + "\n" +
              "--- \n" +
              "Would you like to be on the show? \n" +
              "-" + data[i][8] + " \n" +
              "\n" +
              "Live recording? \n" +
              "-" + data[i][9] + " \n" +
              "\n" +
              "Buy a hard copy? \n" +
              "-" + data[i][10] + " \n" +
              "\n" +
              "Additional questions \n" +
              "-" + data[i][11] + " \n" +
              "\n";
  }

  var payload = {
    "title": title,
    "body": body,
    "labels": type,
    "assignees": ['jonmccon'],
  };

  var options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };
  
  // eslint-disable-next-line no-undef
  var response = UrlFetchApp.fetch("https://api.github.com/repos/jonmccon/seattle-creative-directory/issues?access_token="+ghToken, options)
}