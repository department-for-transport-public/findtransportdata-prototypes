//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

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
router.get('/admin/manage-publishers/pending',(req,res)=>res.render('pending-publishers'))
router.get('/admin/manage-publishers/success',(req,res)=>res.render('pending-publishers-after-approve'))
router.get('/admin/manage-publishers/reject/:id',(req,res)=>res.render('rejection-form'))
router.get('/browse/filter',(req,res)=> res.render('browseFilter'))
router.get('/dataset/id_1', (req,res) => res.render("dataset-details") )

router.get('/admin/dashboard',(req,res)=> res.render('admin-dashboard'))
router.get('/login',(req,res)=> res.render('login'))
router.get('/login/error',(req,res)=> res.render('login-errors'))

router.get('/user/dashboard',(req,res)=> res.render('dashboard'))
router.get('/publisher-requested', (req,res) => res.render("publisher-requested"))

router.get('/dataset/edit/2',(req,res)=> res.render("dataset-edit"))

