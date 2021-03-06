const router = require('express').Router();
const { User, Review, Comment, Anime } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

router.get('/',async (req,res)=>{
    try{
        const commentData = await Comment.findaAll();
        res.status(200).json(commentData);
    }catch(err){
        res.status(500).json(err);
    };
});

router.get('/:id', async(req,res)=>{
    try{
        const commentData = await Comment.findByPK(req.params.id);

        if(!commentData){
            res.status(404).json({message: 'No Comment found with this id!'});
            return; 
        }else{
            res.status(200).json(commentData);
        };
    }catch(err){
        res.status(500).json(err);
    };
});

router.post('/', withAuth, async (req, res)=>{
    try{
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(commentData);
    }catch(err){
        res.status(500).json(err);
    };
});

router.delete('/:id',withAuth, async(req, res)=>{
    try{
        const commentData = await Comment.destroy({
            where:{
                id: req.params.id
            }
        });
        if(!commentData){
            res.status(404).json({message: 'No comment found with this id!'});
            return;
        }else{
            res.status(200).json(commentData);
        };
    }catch(err){
        res.status(500).json(err);
    };
});

module.exports = router;