import React from 'react';
import emailjs from 'emailjs-com';
import '../utils/css/mail_form.css'


const Mail = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_j81421f','template_kctqz7p',e.target,'user_2OgWLWSWy8JcAucWckR5W')
        .then((result)=>{
            console.log(result.text);
            alert('감사합니다! 빠른 답변 드리겠습니다.')
            window.location.reload();
        },(error) =>{
            console.log(error.text);
            alert('정상적인 제출이 이루어지지 않았습니다. 다시 시도해주세요!')
        });
    }
      
    return (
        <div className="contact_wrap " id="contact">
        <div className="weight_box"></div>
        <div className="contact_title fadeInDown wow">
            <h2 className="">Contact</h2>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />

            <label>이름</label>
            <input type="text" name="name" required />

            <label>이메일 </label>
            <input type="email" name="email" required />

            <label className="textarea_title">메세지</label>
            <textarea name="message" required></textarea>

            <input type="submit" value="관심표현하기" />
        </form>

    </div>
    );
};

export default Mail;