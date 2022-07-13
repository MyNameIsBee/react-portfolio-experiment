import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
           
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return(
      <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero massa. Suspendisse ultricies bibendum euismod. In tellus ex, imperdiet vitae pharetra scelerisque, congue sed felis. Pellentesque mattis malesuada fermentum. Fusce efficitur eget risus vitae vestibulum. Sed felis ligula, congue at sagittis eu, gravida eget orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id rhoncus lectus. Vestibulum feugiat eu turpis at porta. Nulla rutrum maximus massa bibendum semper. Suspendisse in pretium erat. Donec ac accumsan eros. Aenean felis urna, porttitor nec dui ut, lobortis condimentum ex. Donec ut augue quis elit venenatis porttitor vel id libero. Quisque rutrum metus at erat malesuada, vitae ultricies elit suscipit. Pellentesque a tempus enim, eu dignissim diam.</p>
                <p>Praesent vel enim commodo, egestas orci ullamcorper, laoreet lorem. Ut vulputate massa ex, at laoreet elit vestibulum placerat. Vestibulum non consequat mauris. Mauris pulvinar urna at vestibulum sodales. Nam viverra nisl a efficitur vulputate. Proin varius urna a diam pharetra ornare. In id accumsan quam, id vulputate mi. Pellentesque efficitur rutrum ante at lacinia. Sed nec ipsum condimentum, luctus eros laoreet, mattis justo. Suspendisse potenti. Sed arcu augue, finibus ut imperdiet non, sollicitudin sed quam. Suspendisse sollicitudin volutpat augue. Curabitur sed enim nec nisi aliquet tincidunt. Praesent pretium quam metus, vel pulvinar augue hendrerit vel. Nam tincidunt eu turpis scelerisque vehicula. Donec sit amet libero sed lacus varius faucibus at in felis.</p>
                <p>Nullam faucibus faucibus dui, condimentum molestie purus ullamcorper eget. Phasellus ut elit odio. Aliquam viverra, quam vel tincidunt dignissim, purus risus euismod odio, sed tempus odio nulla gravida neque. Vivamus est libero, tempor lobortis posuere ullamcorper, pellentesque eget nibh. Vestibulum mollis convallis neque at porttitor. Sed malesuada erat eget tortor tincidunt consectetur. Pellentesque augue dolor, commodo non turpis quis, consectetur lacinia libero. Nullam porttitor mollis luctus. Duis lobortis pulvinar suscipit. Sed non nisi arcu. Nulla justo libero, scelerisque eu pretium sed, vulputate et magna. Aenean nec enim nec lacus rutrum tempus gravida nec justo. Maecenas erat velit, sodales non sapien eu, malesuada semper massa.</p>
            </div>


            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>

      <Loader type="ball-beat"></Loader>
      </>

    )
}

export default About