const express = require("express");
const router = express.Router();
const stripe = require('stripe')('sk_test_51FdSTfCVrGs6pjiVYXxLC1tuqOGvSp5XnMXpM63fQTaZuuMt80b9EgAU4wBC4RhHcccyVIGY7YqIZ0v9odPUXgEb00vPpwLB37');


router.get("/", async (req, res, next) => {
    res.status(200).send({
        data: { message: "api is running" },
    });
});


router.post("/stripe-init", async (req, res, next) => {
    try {
        const result = await stripe.paymentIntents.create({ amount: req.body.amount, currency: 'USD' });

        res.status(200).send({
            data: { paymentIntent: result.client_secret },
        });

    } catch (err) {
        res.status(500).send({
            data: { message: err },
        });
    }

});


module.exports = router;