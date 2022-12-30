//Import sqlite3 module
const sqlite3 = require('sqlite3').verbose();
let sql;

//Connect to database
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

//Create table: DONE
// sql = 'CREATE TABLE STATS (alamo_screen, keral_screen, moore_screen, xavier_screen)';
// db.run(sql);

function increaseAlamoCounter(){
    sql = 'UPDATE STATS SET alamo_screen = ? WHERE times = ?';
    db.run(sql, ["alamo_screen", 1], (err) => {
        if (err) return console.error(err.message);
    });
}

function increaseXavierCounter(){
    sql = 'UPDATE STATS SET xavier_screen = ? WHERE times = ?';
    db.run(sql, ["xavier_screen", 1], (err) => {
        if (err) return console.error(err.message);
    });
}

function increaseKeralCounter(){
    sql = 'UPDATE STATS SET keral_screen = ? WHERE times = ?';
    db.run(sql, ["keral_screen", 1], (err) => {
        if (err) return console.error(err.message);
    });
}

function increaseMooreCounter(){
    sql = 'UPDATE STATS SET moore_screen = ? WHERE times = ?';
    db.run(sql, ["moore_screen", 1], (err) => {
        if (err) return console.error(err.message);
    });
}

function showAlamoData(){
    //Query data
    sql = 'SELECT alamo_screen, times FROM STATS';
    db.all(sql,[],(err, rows) => {
        if (err) return console.error(err.message);
        rows.forEach((row) => {
            console.log(row);
        });
    });
}

function showKeralData(){
    //Query data
    sql = 'SELECT keral_screen, times FROM STATS';
    db.all(sql,[],(err, rows) => {
        if (err) return console.error(err.message);
        rows.forEach((row) => {
            console.log(row);
        });
    });
}

function showMooreData(){
    //Query data
    sql = 'SELECT moore_screen, times FROM STATS';
    db.all(sql,[],(err, rows) => {
        if (err) return console.error(err.message);
        rows.forEach((row) => {
            console.log(row);
        });
    });
}

function showXavierData(){
    //Query data
    sql = 'SELECT xavier_screen, times FROM STATS';
    db.all(sql,[],(err, rows) => {
        if (err) return console.error(err.message);
        rows.forEach((row) => {
            console.log(row);
        });
    });
}

//Delete data
// sql = 'DELETE FROM STATS WHERE times = ?';
// db.run(sql, [1], (err) => {
//     if (err) return console.error(err.message);
// });

