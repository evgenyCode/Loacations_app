import mongoose from "mongoose";
import LocationModel from "../models/location.js"


const ADD_LOCATION = async (req, res) =>  {
  try{
  const location = new LocationModel ({
    latitude: Number (req.body.latitude),
    longitude: Number (req.body.longitude),
    location_photo_url: req.body.location_photo_url,
    title: req.body.title,
    description: req.body.description,
    owner_id: req.body.userID
  });

  const response =await location.save();

   return res.status(201).json({response: response});
}catch(err){ 
  console.log(err);
  return res.status(500).json({message: "Error happened"});
  

}
  };

  const GET_LOCATION = async (req, res) =>  {
    
  
    const locations =await LocationModel.find();
  
     return res.status(200).json({locations: locations});
    };

    const DELETE_LOCATION = async (req, res) =>  {
    
  
      const response = await LocationModel.deleteOne( {_id : req.params.id});
    
       return res.status(200).json({response: response});
      };

      
    const GET_LOCATION_BY_ID = async (req, res) =>  {
    
  
      const location = await LocationModel.findOne( {_id : req.params.id});
    
       return res.status(200).json({location: location});
      };

      const GET_RANDOM_LOCATION = async (req, res) => {
        try {
          const count = await LocationModel.countDocuments();
          const randomIndex = Math.floor(Math.random() * count);
          const randomLocation = await LocationModel.findOne().skip(randomIndex);
      
          return res.status(200).json({ location: randomLocation });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      };
      
      export {
        ADD_LOCATION,
        GET_LOCATION,
        DELETE_LOCATION,
        GET_LOCATION_BY_ID,
        GET_RANDOM_LOCATION  }
      

     


