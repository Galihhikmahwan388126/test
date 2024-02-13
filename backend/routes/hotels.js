import express from "express";
import Hotel from "../models/Hotel.js"
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", async(req,res)=>{

    const newHotel = new Hotel(req.body)

    try{
     const savedHotel = await newHotel.save()
     res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", async(req,res)=>{
    try{
     const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body})
     res.status(200).json(updateHotel);
    }catch(err){
        res.status(500).json(err);
    }
})
//DELETE
router.delete("/find/:id"   ,deleteHotel);
//GET

router.get("/:id",getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);


 export default router;
