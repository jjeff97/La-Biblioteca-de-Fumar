const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM cigars';
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
    const queryText = `INSERT INTO cigars ("brand", "country", "strength", "cigar_name", "size_type", "ring_gauge", "filler", "binder", "wrapper" )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
    const queryValues = [
        newCigar.brand,
        newCigar.country,
        newCigar.strength,
        newCigar.cigar_name,
        newCigar.size_type,
        newCigar.ring_gauge,
        newCigar.filler,
        newCigar.binder,
        newCigar.wrapper
    ];
    pool.query(queryText, queryValues )
        .then(() => { res.sendStatus(210); })
        .catch((err) => {
            console.log('Error completing SELECT cigar query', err);
            res.sendStatus(500);
        });
});
router.put('/cigar/:id', (req, res) => {
    const newCigarData = req.body;
    const cigarId = req.params.id;
    const queryText = `UPDATE "cigars" SET "brand" = $1, "country" = $2, "strength" = $3,
    "cigar_name" = $4, "size_type" = $5, "ring_gauge" = $6, "filler" = $7, "binder" = $8,
    "wrapper" = $9
    WHERE "id" = $10;`;

    pool.query(queryText, [newCigarData.brand, newCigarData.country, newCigarData.strength,
        newCigarData.cigar_name, newCigarData.size_type, newCigarData.ring_gauge,
        newCigarData.filler, newCigarData.binder, newCigarData.wrapper])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('Error with PUT (single): ', err);
            res.sendStatus(500);
        });
});




module.exports = router;