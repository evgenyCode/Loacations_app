import express from "express";
import { ADD_LOCATION, 
         GET_LOCATION,
         GET_LOCATION_BY_ID,
         DELETE_LOCATION,
         GET_RANDOM_LOCATION
          } from "../controllers/locations.js";
import auth from '../middleware/auth.js'          


const router = express.Router();

router.get("/locations/random", GET_RANDOM_LOCATION); 
router.post('/locations',auth,  ADD_LOCATION);
router.get('/locations', GET_LOCATION);
router.get('/locations/:id', GET_LOCATION_BY_ID);
router.delete('/locations/:id',auth, DELETE_LOCATION);


  export default router;