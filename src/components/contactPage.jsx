import { send } from 'emailjs-com';
import { useState } from "react";


export function ContactPage(){
  //service : https://dashboard.emailjs.com
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    
    send("service_6qkkssd","template_qq6him7",{
      ...toSend,
      
      },'user_NAhdafrF6ykfkwctZZZQb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return( 
    
    <form onSubmit={onSubmit} className='text-bordeau placeholder-bordeau grid grid-cols-5'>
  <label htmlFor="from_name" className=''>From: </label>
  <input
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
    className=' col-span-4 p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto text-bordeau'
  />
  <label htmlFor="to_name">To: </label>
  <input
    type='text'
    name='to_name'
    placeholder='to name'
    value={toSend.to_name}
    onChange={handleChange}
    className='col-span-4 p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto text-bordeau'
  />
  <label htmlFor="message">message: </label>
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
    className='col-span-4 p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto text-bordeau'
  />
  <label htmlFor="reply_to">Your mail: </label>
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
    className='col-span-4 p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto text-bordeau'
  />
  <button type="Submit"
  className='col-span-5 p-8 border-2 border-b-4 border-bordeau max-w-full m-4 rounded-xl bg-roze max-h-auto text-bordeau col-span-2'>Send</button>
</form>
    
  )
}