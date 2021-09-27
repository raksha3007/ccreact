import React,{useState} from "react";

const Form = () => {
    const [fullName, setFullName] = useState({
        uname:"",
        email:"",
        phone:"",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const { value, name } = event.target;

        setFullName((preValue) => {
            if (name === "uName"){
                return{
                    uname:value,
                    email:preValue.email,
                    phone:preValue.phone,
                };
           
            } else if (name ==="email"){
                return {
                    uname:preValue.uname,
                    email:value,
                    phone:preValue.phone,

                };
            } else if (name ==="phone"){
                return {
                    uname:preValue.uname,
                    email:preValue.email,
                    phone:value,

                };
            }
        });
        
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert("form submitted");
    };

    return(
       <>
         <div>
            <form onSubmit={onSubmit}>
           
              <div className="main_div">
                 <h1>HI {fullName.uname} 
              </h1>
              <p>{fullName.email}</p>
              <p>{fullName.phone}</p>
             <input 
             type="text"  
             placeholder="enter user name"
             name="uName"
             onChange={inputEvent}
             value={fullName.uname}
                /><br/>  
            
            <input 
             type="text"  
             placeholder="enter email"
             name="email"
             onChange={inputEvent}
             value={fullName.email}
                /> 
                <input 
             type="number"  
             placeholder="enter phone number"
             name="phone"
             onChange={inputEvent}
             value={fullName.phone}
                /> 
            

           
            <button type="submit"> Submit</button>
        </div>
        </form>
        </div>
        </>
    );
};
export default Form;