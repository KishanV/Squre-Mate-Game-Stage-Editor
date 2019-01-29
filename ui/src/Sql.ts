var SQL = require('sql.js');
export class Sql {
    db:any;

    constructor() {
        var db = new SQL.Database();
        // Run a query without reading the results
        db.run("CREATE TABLE test (col1, col2);");
        // Insert two rows: (1,111) and (2,222)
        db.run("INSERT INTO test VALUES (?,?), (?,?)", [1,111,2,222]);

        // Prepare a statement
        var stmt = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
        stmt.bind({$start:0, $end:2});

        while(stmt.step()) { //
            var row = stmt.getAsObject();
            console.log(row.col1,row.col2);
        }
        console.log("table created");

        db.exec("DROP TABLE IF EXISTS employees;\n" +
            "CREATE TABLE employees( id          integer,  name    text,\n" +
            "                          designation text,     manager integer,\n" +
            "                          hired_on    date,     salary  integer,\n" +
            "                          commission  float,    dept    integer);\n" +
            "\n" +
            "  INSERT INTO employees VALUES (1,'JOHNSON','ADMIN',6,'1990-12-17',18000,NULL,4);\n" +
            "  INSERT INTO employees VALUES (2,'HARDING','MANAGER',9,'1998-02-02',52000,300,3);\n" +
            "  INSERT INTO employees VALUES (3,'TAFT','SALES I',2,'1996-01-02',25000,500,3);\n" +
            "  INSERT INTO employees VALUES (4,'HOOVER','SALES I',2,'1990-04-02',27000,NULL,3);\n" +
            "  INSERT INTO employees VALUES (5,'LINCOLN','TECH',6,'1994-06-23',22500,1400,4);\n" +
            "  INSERT INTO employees VALUES (6,'GARFIELD','MANAGER',9,'1993-05-01',54000,NULL,4);\n" +
            "  INSERT INTO employees VALUES (7,'POLK','TECH',6,'1997-09-22',25000,NULL,4);\n" +
            "  INSERT INTO employees VALUES (8,'GRANT','ENGINEER',10,'1997-03-30',32000,NULL,2);\n" +
            "  INSERT INTO employees VALUES (9,'JACKSON','CEO',NULL,'1990-01-01',75000,NULL,4);\n" +
            "  INSERT INTO employees VALUES (10,'FILLMORE','MANAGER',9,'1994-08-09',56000,NULL,2);\n" +
            "  INSERT INTO employees VALUES (11,'ADAMS','ENGINEER',10,'1996-03-15',34000,NULL,2);\n" +
            "  INSERT INTO employees VALUES (12,'WASHINGTON','ADMIN',6,'1998-04-16',18000,NULL,4);\n" +
            "  INSERT INTO employees VALUES (13,'MONROE','ENGINEER',10,'2000-12-03',30000,NULL,2);\n" +
            "  INSERT INTO employees VALUES (14,'ROOSEVELT','CPA',9,'1995-10-12',35000,NULL,1);\n" +
            "\n" +
            "SELECT designation,COUNT(*) AS nbr, (AVG(salary)) AS avg_salary FROM employees GROUP BY designation ORDER BY avg_salary DESC;\n" +
            "SELECT name,hired_on FROM employees ORDER BY hired_on;");
        console.log(db);
        console.log(db.exec("SELECT * FROM employees"));

    }
}

let db = [];
for(let i = 0;i < 100;i++) {
    db[i] = new Array(1000000);
}
console.log(db);