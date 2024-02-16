const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { generatePDF } = require('./genratePdf');
const fileDirectory = './tmp';
const path = require('path');

app.use('/files', express.static(fileDirectory));
app.get('/download/:filename', (req, res) => {
   try {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'tmp', filename);

    res.download(filePath, (err) => {
        if (err) {
            res.status(500).send({
                massage: 'somthing went wrong',
                err
            });
        }
    });
   } catch (error) {
    
   }
});
app.get('/',async(req,res)=>{
    console.log('hello world');
    res.send({
        status:'success',
        msg:'server running'
    })
})
app.get('/genratePdfLink',async (req,res)=>{
        generatePDF(req,res);
})
const port  = 3001;
app.listen(port, async()=>{
    console.log(`server is running on http://localhost:${port}`);
})