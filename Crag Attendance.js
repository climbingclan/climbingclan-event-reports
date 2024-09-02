
function reportCragAttendance() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


 // select distinct product_id, order_item_name from wp_wc_order_product_augmented where order_item_name LIKE "%Wednesday%" order by product_id desc;
 //Wednesday
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Dashboard');
  var cell = sheet.getRange('B4').getValues();

// Volunteer Report
//

 var results = stmt.executeQuery('select count(*) AS "attendees" ,cc_outdoor_location "crag" from wp_order_product_customer_lookup where ((order_item_name LIKE "%Thurs%") OR (memberbot_order_category LIKE "%outdoor%") OR (order_item_name LIKE "%Saturday Climbing%")) AND cc_attendance="attended" AND cc_outdoor_location IS NOT NULL AND cc_outdoor_location<>"none" AND order_created > DATE_SUB(CURRENT_DATE, INTERVAL 6 MONTH) group by cc_outdoor_location order by attendees desc');
  //console.log(results);
 var metaData=results.getMetaData();
  var numCols = metaData.getColumnCount();
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Crag Attendance');
 sheet.clearContents();
 var arr=[];
  for (var col = 0; col < numCols; col++) {
   arr.push(metaData.getColumnLabel(col + 1));
 }
 // https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js 
  sheet.appendRow(arr);
 while (results.next()) {
 arr=[];
 for (var col = 0; col < numCols; col++) {
   arr.push(results.getString(col + 1));
 }
 sheet.appendRow(arr);
 }
sheet.autoResizeColumns(1, numCols+1);





//close SQL
results.close();
stmt.close();



//end read data function
} 


//ScriptApp.newTrigger('readData')
//.timeBased()
//.everyMinutes(30)
//.create();
