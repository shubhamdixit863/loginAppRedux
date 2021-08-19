import jwt_decode from "jwt-decode";


class Auth
{

constructor()
{
    this.authenticated=false;
}




isAuthenticated(role)
{


let token=localStorage.getItem("token");

if(!token)
{

    return false;
}
else{



let decoded = jwt_decode(token);
   /*

    if (Date.now() >= decoded.exp * 1000) {
        return false;
      }
      */
      let _userRole=decoded.role;
      console.log(_userRole);
      if(role===_userRole) return true;
      else{
        return false;
      }

      
}


}




}

export default new Auth();