const express = require('express') ;
require("./mongoose/mongoose");
const StudentList = require("./db/db");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())

app.post("/students" , async (req,res) =>{
    try {
        const user = new StudentList(req.body);
        const result = await user.save();
        const postdata = result ? res.status(201).send(result) : res.status(404).send("mission failed");
        console.log(result)
        
    } catch (error) {
        res.status(201).send(error)
    }
})


app.get("/students" , async (req,res) =>{
    try {

        const results = await StudentList.find();
        const getdatas = results ? res.status(201).send(results) : res.status(404).send("mission failed");
        console.log(getdatas);
        
    } catch (error) {
        res.status(201).send(error)
    }
})

// app.get('/students/:id' , async(req,res) =>{
//     try {
//         const _id = req.params.id;
//         const studentdatas = await StudentList.findById({_id : _id});
//         const clgdata = !studentdatas ? res.status(404).send("not send") : res.status(201).send(studentdatas);
//         console.log(clgdata)

//     } catch (error) {
//         res.status(404).res(error)
//     }
// })

app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const idresult = await StudentList.findById(_id);
        const clgdata = idresult ? res.status(201).send(idresult) : res.status(404).send("mission failed");
        console.log(clgdata)

    } catch (error) {
        res.status(404).send(error)
    }
})


app.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result4 = await StudentList.findByIdAndUpdate({_id : _id}, req.body, {
            new : true
        });
        const clgdatas = result4 ? res.status(201).send(result4) : res.status(404).send("mission failed");
        console.log(clgdatas)

    } catch (error) {
        res.status(404).send(error)
    }
})


app.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedata = await StudentList.findByIdAndDelete(_id);
        const deleteclgdata = deletedata ? res.status(201).send(deletedata) : res.status(404).send("mission failed");
        console.log(deleteclgdata);

    } catch (error) {
        res.status(404).send(error)
    }
})

app.listen(port , () => {
    console.log(`express server port is ${port}`)
});