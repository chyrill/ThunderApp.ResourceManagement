import Result from '../../helpers/Result';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req,file,cb){
    cb(null,file.originalname.substring(0,file.originalname.indexOf(path.extname(file.originalname)))+'-'+ Date.now()+path.extname(file.originalname));
  }
});
//req.file.orginalname+'-'+Date.now()+path.extname(file.originalname)
const Upload = multer({storage:storage}).single('uploaddata');

export async function upload(req,res) {
  var result = new Result();
    Upload(req,res, (err)=>{
      console.log(req.file);
      if(err){
        result.message = err;
        result.successful = false;
        result.model = null;

        return res.status(400).json(result);
      }
      else {
        result.message = 'Successfully uploaded file';
        result.successful = true;
        result.model ='http://' +req.get('host')+'/uploads/'+req.file.filename;

        return res.status(200).json(result);
      }
    })
}

export async function bulkUpload(req,res) {
  try {

  }
  catch (e){

  }
}
