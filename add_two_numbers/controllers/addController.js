
    module.exports.addNumber= function(req, res) {        
    const firstNumber= parseInt(req.params.firstNumber);
    var secondNumber=0;
    if (req.query && req.query.secondNumber) {
         secondNumber=parseInt(req.query.secondNumber, 10);
        }
    const result=firstNumber+secondNumber;
    res.status(200).send("<h1>the sum of "+ firstNumber+ " and "+ secondNumber +" is ="+ result+"</h1>");
    }
    