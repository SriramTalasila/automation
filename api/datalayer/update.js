const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });


client.connect();
exports.update = (dataToupdate) => {
    
    var in_home;
    var device_name = dataToupdate.device;
    if (dataToupdate.status == "entered")
        in_home = true;
    else
        in_home = false;

    var query = "UPDATE \"Device\".mobile_devices_list SET in_home=" + in_home + " WHERE device_name='" + device_name + "';"
    console.log(query);
    client.query(query, (err, res) => {
        if (err) throw err;
        
    });

}

exports.get_status = (callback) => {
    var query = "SELECT id, device_name, in_home FROM \"Device\".mobile_devices_list;"
    console.log(query);
    var data = [];

    client.query(query, (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            data.push(row);
        }
        console.log(data);
        callback(data);
    });
}