// import packages
// start or configure packages
// tell server to use JSON
// set up a port for the server by listening... 
// setup database pool
// create a root route
// ========================

// Route needed to READ data from database
// Route needed to CREATE data in the database
// below code is needed but I don't know how or why yet

app.post("/new-data", async (req, res)=>{
    const data = req.body;
    const query = await db.query(`INSERT INTO table_name (col, col2, col3,) VALUES ($1, $2, $3)`, //!the dark green is to be changed to the relevant field names
        [data.input1, data.input2, data.input3]
    );
    await res.json(query.rows);
})