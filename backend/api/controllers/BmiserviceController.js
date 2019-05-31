/**
 * BmiserviceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    calculateBMI629: function(req, res) {
        var height = req.param('height');
        var weight = req.param('weight');
        var result = weight/(height*height);
        res.json(200, {bmi: result});
    }

};

