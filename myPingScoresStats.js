function myPingScoresStats(user) {

  var mpconn = Jdbc.getConnection(url, username, password);
  var mpstmt = mpconn.createStatement();
  console.log(user + " User stats")


  //var user = 1

  var results = mpstmt.executeQuery('select * from wp_member_db_stats where user_id=' + user);
  //console.log(results);
  var metaData = results.getMetaData();
  var numCols = metaData.getColumnCount();

//console.log(toString.results)

  var headers = [];
  for (var col = 0; col < numCols; col++) {
    headers.push(metaData.getColumnName(col + 1));
  }

  while (results.next()) {
    arr = [];
    for (var col = 0; col < numCols; col++) {
      arr.push(results.getString(col + 1));
    }


    //console.log("Stats Headers" + headers);
    //console.log("Stats results" + arr);
    //conn.close();

    var msconn = Jdbc.getConnection(url, username, password);
    var msstmt = msconn.createStatement();
    var scores_results = msstmt.executeQuery('select * from wp_member_db_scores where user_id=' + user);
    var scores_metaData = scores_results.getMetaData();
    var scores_numCols = scores_metaData.getColumnCount();

//console.log(scores_results);

    var scores_headers = [];
    for (var col = 0; col < scores_numCols; col++) {
      scores_headers.push(scores_metaData.getColumnName(col + 1));
      
    }
    while (scores_results.next()) {
      scores_arr = [];
      for (var col = 0; col < scores_numCols; col++) {
        scores_arr.push(scores_results.getString(col + 1));

      }
/*
Logger.log(headers)
Logger.log(arr)
Logger.log(scores_headers)
Logger.log(scores_arr)
*/



      var user_id = arr[0];

      //console.log("Scores Headers" + scores_headers);
      //console.log("Stats results" + scores_arr);

      let currentUnixTime  = Date.now() ;

      var data = {
        "meta_data": [
          {
            "key": "stats_" + headers[1] + "_cached",
            "value": arr[1]
          },
          {
            "key": "stats_" + headers[2] + "_cached",
            "value": arr[2]
          },
          {
            "key": "stats_" + headers[3] + "_cached",
            "value": arr[3]
          },
          {
            "key": "stats_" + headers[4] + "_cached",
            "value": arr[4]
          },
          {
            "key": "stats_" + headers[5] + "_cached",
            "value": arr[5]
          },
          {
            "key": "stats_" + headers[6] + "_cached",
            "value": arr[6]
          },
          {
            "key": "stats_" + headers[7] + "_cached",
            "value": arr[7]
          },
          {
            "key": "stats_" + headers[8] + "_cached",
            "value": arr[8]
          },
          {
            "key": "stats_" + headers[9] + "_cached",
            "value": arr[9]
          },
          {
            "key": "stats_" + headers[10] + "_cached",
            "value": arr[10]
          },
          {
            "key": "stats_" + headers[11] + "_cached",
            "value": arr[11]
          },
          {
            "key": "stats_" + headers[11] + "_cached",
            "value": arr[12]
          },
          {
            "key": "stats_" + headers[11] + "_cached",
            "value": arr[13]
          },
          {
            "key": "stats_" + headers[11] + "_cached",
            "value": arr[14]
          },
          {
            "key": "scores_" + scores_headers[1] + "_cached",
            "value": scores_arr[1]
          },
          {
            "key": "scores_" + scores_headers[2] + "_cached",
            "value": scores_arr[2]
          },
          {
            "key": "scores_" + scores_headers[3] + "_cached",
            "value": scores_arr[3]
          },
          {
            "key": "scores_and_stats_cache_last_updated",
            "value": currentUnixTime
          },
        ]
      };

     Logger.log(data);


      pokeToWordpress(data, user_id);


    }
  }
 // mpconn.close();
 // msconn.close();
  //mpstmt.close();
 // msstmt.close();



}