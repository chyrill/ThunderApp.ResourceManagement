import City from './city.model';
import { Authorization } from '../../helpers/Authorization';
import Result from '../../helpers/Result';
import SearchResult from '../../helpers/SearchResult';
import { QueryFilters } from '../../helpers/QueryFilters';
import axios from 'axios';
import requestIp from 'request-ip';

export async function create(req, res) {
    var result = new Result();
    
    try {
        var ifAlreadyExist = await checkIfExist(req.body.Name);
        
        if (ifAlreadyExist.successful) {
            result.successful = false;
            result.model = req.body;
            result.message = ifAlreadyExist.message;
            
            return res.status(400).json(result);
        }
        
        var createRes = await City.create(req.body);
        
        result.successful = true;
        result.model = createRes;
        result.message = 'Successfully added record';
        
        return res.status(200).json(result);
    }
    catch (e) {
        result.successful = false;
        result.model = req.body;
        result.message = e.errmsg;
        
        return res.status(500).json(result);
    }
}

export async function getAll(req, res) {
    var result = new SearchResult();
    
    try {
        var searchItems = await City.find();
        
        result.items = searchItems;
        result.totalcount = searchItems.length;
        result.pages = 1;
        result.message = 'Succesfully retrieve records';
        result.successful = true;
        
        return res.status(200).json(result);
    }
    catch (e) {
        result.items = null;
        result.totalcount = 0;
        result.pages = 1;
        result.message = e.errmsg;
        result.successful = false;
        
        return res.status(500).json(result);
    }
}

async function checkIfExist(name) {
    var result = new Result();
    
    try {
        var cityRes = await City.find({ Name: name });
        
        if (cityRes.length > 0) {
            result.successful = true;
            result.message = 'City already Exist';
            return result;
        } 
        else {
            result.successful = false;
            result.message = 'City does not exist';
            
            return result;
        }
    }
    catch (e) {
        result.successful = false;
        result.message = e;
        
        return result;
    }
}