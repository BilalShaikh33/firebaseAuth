// function signUp(){
//     var email = document.getElementById("email").value
//     var password = document.getElementById("password").value

//     if (email== "" || password== "") {
//         alert("Enter Email or password")
        
//     }
//     else{
//         const auth = firebase.auth();
//         auth.createUserWithEmailAndPassword(email,password)
//         .then( (userdata) => {
//             console.log(userdata.user.uid)
//         } )
//         .catch( (e) => {
//             console.log(e)
//         });
//     }
// }

function login(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (email== "" || password== "") {
        alert("Enter Email or password")
        
    }
    else{
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email,password)
        .then( (userdata) => {
            console.log(userdata.user.uid)
        } )
        .catch( (e) => {
            console.log(e)
        });
    }
}





























//try ,catch ,finally=>
    // try{

    //     console.log("test1")
    //     console.log("test2")
    //     console.log(adasd) //crash 

    // }catch(ERROR){
    //     console.log("Error", ERROR)
    // }finally{
    //     console.log("ok")

    // }