const Express = require("express");
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const { JournalModel } = require("../models");

router.get('/practice', validateJWT, (req, res) => {
    res.send("Hey!! This is practice route!")
})

/* 
Journal Create
*/

router.post("/create", validateJWT, async(req, res) =>{
    const { title, date, entry } = req.body.journal
    const { id } = req.user;
    const journalEntry = {
        title,
        date,
        entry,
        owner: id
    }
    try {
        const newJournal = await JournalModel.create(journalEntry);
        res.status(200).json(newJournal)
    } catch (err) {
        res.status(500).json({ error:err });
    }
    // JournalModel.create(journalEntry)
})

router.get("/", async(req, res) => {
    try {
        const entries = await JournalModel.findAll();
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

router.get("/mine", validateJWT, async(req, res) => {
    const { id } = req.user;
    try {
        const userJournals = await JournalModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(userJournals);
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

router.get("/title", async(req,res) => {
    const { title } = req.params;
    try {
        const results = await JournalModel.findAll({
            where: { title: title}
        });
        res.status(200).json(results);
    } catch(err) {
        res.status(500).json({ error: err })
    }
})
router.get('/about', (req, res) => {
    res.send('This is the about route')
})

module.exports = router