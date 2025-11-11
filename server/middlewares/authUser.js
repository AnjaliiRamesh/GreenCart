// import jwt from 'jsonwebtoken';


// const authUser = async (req, res, next)=>{
//     const {token} = req.cookies;

//     if(!token){
//       return res.json({success: false, message: 'Not Authorized'});
//     }
//     try{
      
//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
//         if(tokenDecode.id){
//             req.body.userId = tokenDecode.id;
//         }else{
//             return res.json({success: false, message: 'Not Authorized'})
//         }
//         next();
//     }catch(error){
//         res.json({ success: false, message: error.message});
//     }
    
// }
// export default authUser;


//updated version
import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized — No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.status(401).json({ success: false, message: "Not Authorized — Invalid token" });
    }

    req.userId = decoded.id; // ✅ FIXED
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authUser;
