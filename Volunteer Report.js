
function reportVolunteerReport() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


 // select distinct product_id, order_item_name from wp_wc_order_product_augmented where order_item_name LIKE "%Wednesday%" order by product_id desc;
 //Wednesday
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Dashboard');
  var cell = sheet.getRange('B4').getValues();

// Volunteer Report
//

 var results = stmt.executeQuery('select b.nickname "FB Name", b.scores_volunteer_value_cached "Net Value", b.scores_volunteer_score_cached "Receptiveness Score",b.stats_volunteer_for_denominator_cached "opportunities to volunteer", b.`cc_member` "Member", FROM_UNIXTIME(b.wc_last_active,"%d-%m-%Y") "Last on website",b.`committee_current` "Committee",   b.id "user ID" from  wp_member_db b WHERE FROM_UNIXTIME(b.wc_last_active) >= DATE_SUB(CURDATE(), INTERVAL 90 day) order by CAST(b.`scores_volunteer_value_cached` AS UNSIGNED INTEGER) DESC , CAST(b.stats_volunteer_for_denominator_cached AS UNSIGNED INTEGER) DESC limit 150');
  //console.log(results);
 var metaData=results.getMetaData();
  var numCols = metaData.getColumnCount();
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Volunteer Report');
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
