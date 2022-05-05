import React from 'react'
import { Link } from 'react-router-dom';
import { images } from '../constants';
import { useAuth } from '../context/auth';
import '../assets/styles/home-page.css';
import NavigationIcon from '@mui/icons-material/Navigation';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LayersIcon from '@mui/icons-material/Layers';
import BoltIcon from '@mui/icons-material/Bolt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SendIcon from '@mui/icons-material/Send';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
    const { user } = useAuth();
    return (
        <>
            <header class="header">
                <a href="#" class="logo">Covid Management</a>

                <a class="menu fas fa-bars"></a>

                <nav class="navbar">
                    { user ? <p></p> : <Link to='/signin'>Sign In</Link> }
                </nav>
            </header>
            <section id="home" class="home">
                <h1>
                    we are coders <br />
                    we create great stuff
                </h1><br/>
                <Link to='/user'>View Details</Link>
            </section>
            <section id="about" class="about">
                <div class="box-container">
                    <div class="box">
                        <h2 class="heading">company history</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quos, adipisci aliquid
                            similique saepe ipsa minus maxime alias libero nam quis officia eum impedit. At quisquam
                            reprehenderit cum hic enim?
                        </p>
                        <p>
                            Necessitatibus eligendi molestias similique tempore, optio nobis numquam temporibus
                            debitis cum aspernatur, eius, nihil soluta sapiente enim.
                        </p>
                    </div>

                    <div class="box">
                        <img src={images.hero} alt="" />
                    </div>
                </div>
            </section>
            <section id="team" class="team">
                <h2 class="heading">meet our team</h2>
                <div class="box-container">
                    <div class="box">
                        <div class="image">
                            <img src={images.person1} alt="" />
                        </div>
                        <div class="info">
                            <h3>mellisa howards</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae
                                amet.
                            </p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={images.person2} alt="" />
                        </div>
                        <div class="info">
                            <h3>mike richardson</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae
                                amet.
                            </p>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={images.person3} alt="" />
                        </div>
                        <div class="info">
                            <h3>mellisa howards</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae
                                amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" class="services">
                <h2 class="heading">our services</h2>
                <div class="box-container">
                    <div class="box">
                        <NavigationIcon id='ion-icon' />
                        <span>branding</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing elit.</p>
                    </div>

                    <div class="box">
                        <MilitaryTechIcon id='ion-icon' />
                        <span>web design</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing elit.</p>
                    </div>

                    <div class="box">
                        <LocalFireDepartmentIcon id='ion-icon' />
                        <span>app design</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing elit.</p>
                    </div>

                    <div class="box">
                        <LayersIcon id='ion-icon' />
                        <span>start up</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing elit.</p>
                    </div>

                    <div class="box">
                        <BoltIcon id='ion-icon' />
                        <span>branding</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing elit.</p>
                    </div>

                    <div class="box">
                        <EmojiObjectsIcon id='ion-icon' />
                        <span>creative design</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing elit.</p>
                    </div>

                    <div class="box">
                        <SendIcon id='ion-icon' />
                        <span>email marketing</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing elit.</p>
                    </div>

                    <div class="box">
                        <ShoppingBagOutlinedIcon id='ion-icon' />
                        <span>shopping cart</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing elit.</p>
                    </div>

                    <div class="box">
                        <RocketLaunchOutlinedIcon id='ion-icon' />
                        <span>start up</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing onsectetur adipisicing elit.</p>
                    </div>
                </div>
            </section>
            <section id="projects" class="projects">
                <h2 class="heading">our projects</h2>
                <div class="box-container">
                    <div class="box">
                        <div class="image">
                            <img src={images.work1} alt="" />
                            <div class="overlay">
                                <h3>project name here</h3>
                                <span>business</span>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={images.work2} alt="" />
                            <div class="overlay">
                                <h3>project name here</h3>
                                <span>business</span>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={images.work3} alt="" />
                            <div class="overlay">
                                <h3>project name here</h3>
                                <span>business</span>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={images.work4} alt="" />
                            <div class="overlay">
                                <h3>project name here</h3>
                                <span>business</span>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={images.work1} alt="" />
                            <div class="overlay">
                                <h3>project name here</h3>
                                <span>business</span>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={images.work2} alt="" />
                            <div class="overlay">
                                <h3>project name here</h3>
                                <span>business</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact">
                <h2 class="heading">contact us</h2>
                <div class="box-container">
                    <div class="box">
                        <div class="form-group">
                            <ion-icon name="location-outline"></ion-icon>
                            <span>Street Name, City </span>
                        </div>

                        <div class="form-group">
                            <ion-icon name="call-outline"></ion-icon>
                            <span>+1 242 4942 290</span>
                        </div>

                        <div class="form-group">
                            <ion-icon name="mail-outline"></ion-icon>
                            <span>info@yourdomain.com</span>
                        </div>
                    </div>

                    <div class="box">
                        <input type="text" placeholder="name" />
                        <input type="text" placeholder="email" />
                        <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
                        <button>submit</button>
                    </div>
                </div>
            </section>
            <section id="footer" class="footer">
                <div class="socials">
                    <GoogleIcon  id="ion-icon"/>
                    <TwitterIcon  id="ion-icon"/>
                    <YouTubeIcon  id="ion-icon"/>
                    <LinkedInIcon  id="ion-icon"/> 
                </div>

                <div class="copyright">
                    <p>Designed by Prasun||Rohit</p>
                </div>
            </section>

        </>
    )
}
