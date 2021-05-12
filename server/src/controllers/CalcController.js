export default class CalcController {
  async calcule(req, res) {
    console.log(req.body);

    return res.status(200).json({
      success: ok
    });
  }
}