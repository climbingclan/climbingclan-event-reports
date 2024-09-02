
function reportThursdayAttendeesReport() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


 // select distinct product_id, order_item_name from wp_wc_order_product_augmented where order_item_name LIKE "%Wednesday%" order by product_id desc;
 //Wednesday
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Dashboard');
  //var cell = sheet.getRange('B4').getValues();

// Volunteer Report
//
var results = stmt.executeQuery('SELECT count(*) AS "attendees", order_item_name AS "event" FROM wp_order_product_customer_lookup WHERE ((order_item_name LIKE "%Thurs%") OR (memberbot_order_category LIKE "%outdoor%") OR (order_item_name LIKE "%Saturday Climbing%")) AND (cc_attendance="attended" OR cc_attendance IS NULL) AND order_created > DATE_SUB(CURRENT_DATE, INTERVAL 12 MONTH) GROUP BY product_id ORDER BY order_created ASC');

// var results = stmt.executeQuery('select count(*) AS "attendees" ,order_item_name "event" from wp_order_product_customer_lookup where ((order_item_name LIKE "%Thurs%") OR (memberbot_order_category LIKE "%outdoor%") OR (order_item_name LIKE "%Saturday Climbing%")) AND (cc_attendance="attended" OR cc_attendance IS NULL) group by product_id order by order_created asc');
  //console.log(results);
 var metaData=results.getMetaData();
  var numCols = metaData.getColumnCount();
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Thursday Event Report');
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


