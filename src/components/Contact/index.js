import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
           
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_wjzqnfr',
            'template_i1hfg2o',
            refForm.current,
            'G6Dr93FO2qMmRqNEh'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    
    
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters  
                        letterClass={letterClass}
                        strArray={['C', 'o','n','t','a','c','t','','M','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue eget lectus nec aliquet. Donec vel ultricies nisl. Nulla sed leo varius, varius nunc nec, gravida magna. Nulla facilisi. Phasellus lectus lacus, vehicula id tincidunt in, feugiat quis eros. Vivamus lacinia lacinia dolor id laoreet. Nunc non velit blandit, accumsan tellus a, tempus sem. Morbi lacus arcu, venenatis ut consequat a, pulvinar hendrerit erat. Cras fermentum pellentesque facilisis. Praesent in ante dignissim, dapibus tellus nec, finibus urna. Vivamus in risus gravida tellus interdum laoreet id non urna. Vivamus sed purus egestas leo pharetra finibus. Aliquam dictum a sem non sagittis. Pellentesque mollis libero eget ligula sagittis, quis posuere turpis sodales. Proin mollis lorem sed volutpat iaculis. Vestibulum diam felis, hendrerit ac purus non, ultricies varius mi.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        <Loader type='ball-beat' />
        </>
    )

}

export default Contact