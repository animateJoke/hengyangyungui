function createConn(str,json,fn){
    var mysql = require('mysql');
    //创建连接对象
    var connection = mysql.createConnection({
        host: '101.200.60.236',
        user: 'root',
        password: '',
<<<<<<< HEAD
        database: 'yungui'
=======
        database: 'hengyangyungui'
>>>>>>> 2570fceddce41ed3964d4cc51aa5ac7c80f85011
    });
    connection.connect();

    //执行sql语句查询
    connection.query(str,json,function(error, results, fields) {
        if(error) throw error;
        // console.log('The solution is: ', results);
<<<<<<< HEAD
        if(typeof fn=="function"){
=======
        if(typeof(fn)=="function"){
>>>>>>> 2570fceddce41ed3964d4cc51aa5ac7c80f85011
            fn(results);
        }
        //执行关闭
        connection.end();
    });
}
module.exports = createConn;