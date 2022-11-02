const Pool= require('pg').Pool;
const pg_conn = new Pool({
    user: 'hjfhbuwojwjokv',
    host: 'ec2-54-163-34-107.compute-1.amazonaws.com',
    database: 'dcthotkaiivon3',
    password: '3d4c39283d15759af09fe2b482c4e39e0efa2804560bbd84521d7b9a87b65e59',
    port: 5432,
    ssl:{
            rejectUnauthorized:false,
    },
  })

module.exports= pg_conn;