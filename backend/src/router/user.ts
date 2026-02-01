import express from "express";
import {contentModel, linkModel, userModel} from "../db.js";
import jwt from 'jsonwebtoken'
import { authMiddleware } from "../middleware/authMiddleware.js";
import { random } from "../utils.js";
import dotenv from 'dotenv';
dotenv.config();

if(!process.env.JWT_PASS){
     throw new Error("Missing JWT_PASS in .env");
}

const JWT_SECRET =process.env.JWT_PASS ;

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  //add zod validation
  try {
    const {username,password}=req.body;

    const existingUser = await userModel.findOne({
      username,
    });
    if (existingUser) {
      res.json({message:"Username Already exits"});
    }else{
      await userModel.create({
        username:username,
        password:password
      })
      res.json({message:"User registered"})
    }
  } catch (error) {
    res.json({error:"Error in signup"+error});
  }
});

userRouter.post("/signin", async (req, res) => {
    const {username,password}=req.body;
    
    const user = await userModel.findOne({
        username,
        password
    });

    if(!user){
        res.json({message:"Invalid credentials"})
    }else{
        const token = jwt.sign({
            id:user?._id

        },JWT_SECRET);
        res.json({token:token});
    }
    
});

userRouter.post("/content",authMiddleware, async (req, res) => {
    const userId=req.userId;
    const {title,link,type}= req.body;
    await contentModel.create({
        title:title,
        link:link,
        type:type,
        userId:userId,
        tags:[]
    })
    res.json({message:"Content added"});
});

userRouter.get("/content",authMiddleware, async (req, res) => {
    const userId=req.userId;
    const content = await contentModel.find({
        userId:userId
    }).populate("userId","username");
    res.json(content);
});

userRouter.delete("/content",authMiddleware,async  (req, res) => {
    const contentId=req.body.contentId;

    await contentModel.deleteMany({
        id:contentId,

    })


});

userRouter.post("/brain/share", async (req, res) => {
  const share = req.body.share;
    if (share) {
            const existingLink = await linkModel.findOne({
                userId: req.userId
            });

            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                })
                return;
            }
            const hash = random(10);
            await linkModel.create({
                userId: req.userId,
                hash: hash
            })

            res.json({
                message:"/share/"+hash
            })
    } else {
        await linkModel.deleteOne({
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
      }
});

userRouter.get("/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;

    const link = await linkModel.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }
    // userId
    const content = await contentModel.find({
        userId: link.userId
    })

    console.log(link);
    const user = await userModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })

});

export default userRouter;
