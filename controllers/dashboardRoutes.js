const router = require('express').Router();
const { User, Review, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');


router.get('/', withAuth, (req,res) => {
    Review.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id','title','review_text'],
        include:[
            {
                model: User,
                attributes: ['username']
            }
            // {
            //     // model: Comment,
            //     // attributes: ['id','comment_text','review_id','user_id'],
            //     // include: {
            //     //     model: User,
            //     //     attributes: ['username']
            //     // }
            // }
        ]
    })
    .then(dbReviewData =>{
        const reviews = dbReviewData.map(review => review.get({plain: true}));
        res.render('dashboard', {reviews, loggedIn: true});
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req,res)=> {
    Review.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id','title','review_text'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
            // {
            //     // model: Comment,
            //     // attributes: ['id','comment_text','review_id','user_id'],
            //     // include: {
            //     //     model: User,
            //     //     attributes: ['username']
            //     // }
            // }
        ]
    })
    .then(dbReviewData =>{
        if (!dbReviewData){
            res.status(404).json({message: 'No review found with this id'});
            return;
        }
        const review = dbReviewData.get({plain: true});
        req.render('edit-review',{
            review, 
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});
router.get('/create', withAuth, (req,res) =>{
    res.render('create-review');
})

module.exports = router;
// Amnider