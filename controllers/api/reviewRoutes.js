const router = require('express').Router();
const { User, Review, Comment, Anime } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

router.get('/', async(req, res)=>{
    try{
        const reviewData = await Review.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    include: {
                        model: User
                    }
                },
            ]
        });
        res.status(200).json(reviewData);
    }catch(err){
        res.status(500).json(err);
    };
});

router.get('/:id', async (req, res)=>{
    try{
        const reviewData = await Review.findByPk(req.params.id, {
            include:[
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    include:{
                        model: User
                    }
                },
            ]
        });
        if(!reviewData){
            res.status(404).json({message: 'No review found with this id!'});
            return;
        }else{
            res.status(200).json(reviewData)
        }
    }catch(err){
        res.status(500).json(err);
    };
});

router.post('/', withAuth, async (req, res)=>{
    try{
        const reviewData = await Review.update({
            title: req.body.title,
            review_text: req.body.review_text
        },
        {
            where:{
                id: req.params.id
            }
        });
        if(!reviewData){
            res.status(404).json({message: 'No review found with this id!'});
            return;
        }else{
            res.status(200).json(reviewData);
        };
    }catch(err){
        res.status(500).json(err);
    };
});

router.delete('/:id',withAuth, async(req,res)=>{
    try{
        const reviewData = await Review.destroy({
            where:{
                id: req.params.id
            }
        });
        if(!reviewData){
            res.status(404).json({message: 'No review found with this id!'});
            return;
        }else{
            res.status(200).json(reviewData);
        }
    }catch(err){
        res.status(500).json(err);
    };
});

module.exports = router;