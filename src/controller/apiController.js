import loginRegister from "../service/loginRegister"

const testApi = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "testApi",
  });
};
const registerApi = async(req, res) => {
    
  try {
    //check data
    if (!req.body.email || !req.body.password || !req.body.phone) {
      return res.status(200).json({
        EM: "Missing required parameters", //error message
        EC: "1", //error code
        DT: "", //data
      });
    }

    if(req.body.password && req.body.password.length < 4) {
        return res.status(200).json({
            EM: "Your password must be at least 4 characters", //error message
            EC: "1", //error code
            DT: "", //data
          });
    }
    //create user
    let data = await loginRegister.login(req.body)

    return res.status(200).json({
        EM:data.EM, //
        EC:data.EC, //
        DT:""
    });
  } catch (error) {

    return res.status(500).json({
        EM:"error from server",
        EC:"-1",
        DT:""
    });
  }
};
const handleLogin = async (req, res) => {
    console.log(req.body);
    return res.status(200).json({
        message:"ok",
        data: "test api"
    })
}
module.exports = { testApi, registerApi ,handleLogin};
