//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.get('/homepage',(req,res)=> res.render('homepage'))
router.get('/404',(req,res)=> res.render('404'))
router.get('/500',(req,res)=> res.render('500'))
router.get('/accessibility',(req,res)=> res.render('accessibility'))
router.get('/cookies',(req,res)=> res.render('cookies'))
router.get('/privacy',(req,res)=> res.render('privacy'))
router.get('/roadmap',(req,res)=> res.render('roadmap'))
router.get('/terms-and-conditions',(req,res)=> res.render('terms-and-conditions'))

router.get('/dataset/id1', (req,res) => res.render("dataset-details") )
