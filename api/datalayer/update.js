const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});



exports.update = (dataToupdate) => {
    client.connect();
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
        client.end();
    });

}