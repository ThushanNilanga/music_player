const wrapper = document.querySelector(".wrapper"),
logBtn = wrapper.querySelector(".button"),
loginform = wrapper.querySelector("#login"),
logusername = wrapper.querySelector("#login #username"),
logpassword = wrapper.querySelector("#login #password"),
createform = wrapper.querySelector("#create"),
linkcreate = wrapper.querySelector("#linkcreate"),
linklogin = wrapper.querySelector("#link_login"),
username =  wrapper.querySelector("#create .username"),
email =  wrapper.querySelector("#create .email"),
password =  wrapper.querySelector("#create .password"),
conpassword =  wrapper.querySelector("#create .conpassword"),
createbutton = wrapper.querySelector("#create #createbutton"),
arraydisplay = wrapper.querySelector("#create .arraydisplay"),
arraydisplayname = wrapper.querySelector("#create .nameshow"),
loginbutton = wrapper.querySelector("#login #loginbutton");
let accs = []



linkcreate.addEventListener("click",()=>{

    loginform.classList.add("hidden");
    createform.classList.remove("hidden");

});
linklogin.addEventListener("click",()=>{

    loginform.classList.remove("hidden");
    createform.classList.add("hidden");

});
createbutton.addEventListener("click" , ()=>{

    addaccount();
    arraydisplayname.innerText = `${accs[0].name}  ${accs[0].e_mail}`;
});


const addaccount = (ev)=>{

    
    let accountin = {

        name:username.value,
        e_mail:email.value,
        password:password.value

    }
    accs.push(accountin);
    document.forms[0].reset();


    console.log(accs);
   /* console.warn('added' , {accs});*/

}

function pasw(){
    password.classList.add("active");
}

loginbutton.addEventListener("click",()=>{
   
    let user = logusername.value; 
    accs.find(user);

    if( accs.find(user).isempty() ){

        logusername.classList.add("correct");
        wrapper.querySelector("#login .message_up_error").innerText = "";
    }
    else{

        wrapper.querySelector("#login .message_up_error").innerText = "Incorrect username"
    }


});






