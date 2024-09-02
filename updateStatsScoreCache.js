/*
function updateStatsScoreCache(user) {

  var sconn = Jdbc.getConnection(url, username, password);
  var sstmt = sconn.createStatement();

    var scores_results = sstmt.executeQuery('select distinct id from wp_member_db where (FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= FROM_UNIXTIME(cc_attendance_noted_date/1000)) OR (FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= DATE(cc_compliance_last_date_of_climbing)) OR (FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= FROM_UNIXTIME(wc_last_active/1000)) OR scores_and_stats_cache_last_updated="" OR scores_and_stats_cache_last_updated IS NULL OR stats_attendance_overnight_attended_cached IS NULL order by wc_last_active desc,cc_attendance_noted_date desc,CAST(stats_attendance_attended_cached as unsigned integer) desc,id asc LIMIT 3');

 //       var scores_results = sstmt.executeQuery('select distinct id from wp_member_db where (FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= DATE(cc_compliance_last_date_of_climbing))  OR scores_and_stats_cache_last_updated="" OR scores_and_stats_cache_last_updated IS NULL order by id desc LIMIT 30');
  //var scores_results = sstmt.executeQuery('select distinct id from wp_member_db where (FROM_UNIXTIME(scores_and_stats_cache_last_updated/1000) <= DATE(NOW() - INTERVAL 14 DAY)  OR scores_and_stats_cache_last_updated="" OR scores_and_stats_cache_last_updated IS NULL) order by id asc LIMIT 20');
 //var scores_results = sstmt.executeQuery('select id from wp_member_db b join wp_member_db_stats a on a.user_id = b.id where  (b.stats_attendance_signups_cached<>a.attendance_signups) order by scores_and_stats_cache_last_updated asc LIMIT 10');


// var scores_results = sstmt.executeQuery('select id from wp_member_db b join wp_member_db_stats a on a.user_id = b.id where  (b.stats_attendance_outdoor_thursday_attended_cached<>a.attendance_outdoor_thursday_attended) order by scores_and_stats_cache_last_updated asc LIMIT 10');

//FROM_UNIXTIME(b.wc_last_active,"%d-%m-%Y")


 //var scores_results = sstmt.executeQuery('select distinct id from wp_member_db where stats_attendance_outdoor_thursday_attended_cached IS NULL order by id asc LIMIT 30');
  //select id,b.stats_attendance_signups_cached, a.attendance_signups from wp_member_db b join wp_member_db_stats a on a.user_id = b.id where b.stats_attendance_signups_cached<>a.attendance_signups;

//var scores_results = sstmt.executeQuery('select "2"');

  while (scores_results.next()) {

    scores_arr = [];
    for (var col = 0; col < 1; col++) {
      scores_arr.push(scores_results.getString(col + 1));
    }
    //console.log(scores_arr[0]);
    myPingScoresStats(scores_arr[0])



  }
  //conn.close();

  //console.log("done")
}
*/
