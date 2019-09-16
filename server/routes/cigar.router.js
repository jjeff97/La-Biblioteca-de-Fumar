const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = 'SELECT id, name FROM cigar';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT cigars query', err);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const newCigar = req.body;
    const queryText = `INSERT INTO cigars "brand", "cigar_name", "size_type", "ring_gauge", "filler", "binder", "wrapper" )
VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newCigar.brand,
        newCigar.cigar_name,
        newCigar.size_type,
        newCigar.ring_gauge,
        newCigar.filler,
        newCigar.binder,
        newCigar.wrapper
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(210); })
        .catch((err) => {
            console.log('Error completing SELECT cigar query', err);
            res.sendStatus(500);
        });
});




module.exports = router;