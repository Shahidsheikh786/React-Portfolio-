import "./styles/Contact.scss";

const Contact = () => {
    return (
        <div className="Contact">
            <div className="side-content">
                <h3> Let's connect </h3>
                <p>
    I'm currently looking for new opportunities, my inbox is always open,
    Whether you have a question or just want to say hi, I'll try to my best to
    get back you  
                </p>

          <div className="icons">
        <a href="https://www.linkedin.com/in/the-mohammad-shahid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">   
        <i class="fa-brands fa-linkedin"></i> </a>
        
           <i class="fa-brands fa-github"></i>
         </div>
            </div>
            
          <form action="https://formspree.io/f/xbjvezye"
          method="post"
         onSubmit={(e)=>{e.target.value == ""}}
          className="contact-form">
               
          <label>Your Email</label>
       <input type="email" placeholder="abcd@gmail.com" name="email" required/>
               
              
                    <label>Subject</label>
       <input type="text" placeholder="just saying hi" name="Subject" required />
               
                
                    <label>Message</label>
     <textarea rows="5" placeholder="Lets talk about" name="message"  required></textarea>
                    
                <button>Send message</button>
              
            </form>
           
        </div>
    );
};

export default Contact;
