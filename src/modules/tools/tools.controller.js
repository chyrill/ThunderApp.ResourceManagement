import conversion from 'phantom-html-to-pdf';
import Result from '../../helpers/Result';
import request from 'request';
import pdf from 'html-pdf';

export async function convertHTMLtoPDF(req, res) {
    var result = new Result();
    
    try {
        var options = {
            "format": "A4",
            "orientation": "portrait",
            "border": {
                "top": "0.2in",
                "right": "0.2in",
                "bottom": "0.2in",
                "left": "0.2in"
            },
            "timeout": "120000"
         };
        
        var filename = req.body.filename + '-' + Date.now() + '.pdf';
        var path = './public/uploads/' + filename;
       
        pdf.create(req.body.Payload, options).toFile(path, (err, res) => {
            if (err) {
                console.log(err)
            }
            
            console.log(res)
        });
        result.successful = true;
        result.model = { Url: req.body.link + filename };
        result.message = 'Successfully converted html to pdf';
        return res.status(200).json(result);
    }
    catch (e) {
        console.log(e)
        result.successful = false;
        result.model = null;
        result.message = e.errmsg;
        
        return res.status(500).json(result);
    }
}