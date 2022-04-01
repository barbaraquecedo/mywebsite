import './cv.css';
import React from 'react';
import CvDetailBox from './cv-detail-box';


function Cv({}) {
    return (
        <div className="cv-container">
            <div className="personal-info">
                <h2 className='description text-center'>
                    <br />
                    innovative and entrepreneurial spirit
                    <br />
                    growth | product
                    <br/>
                    <br/>
                    <br/>
                </h2>
            </div>
            <>

                <div className='experience-grid-1'>
                    <div>
                        <CvDetailBox
                            id='12'
                            title='Growth Product Marketing Manager'
                            startDate="Nov '21"
                            endDate=''
                            enterprise={{
                                name: 'Electronic IDentification (eID)',
                                logo: 'https://startupxplore.com/uploads/228d131547cbf47b0147d147507f004d-large.png'
                            }}
                            roleDescription={
                <p>Electronic IDentification is the only provider offering an end-to-end solution with a Qualified Electronic Signature based on a remote and asynchronous video identification, that allows a Digital Onboarding all over Europe in less than a minute.
                Leading Demand Generation campaigns all over Europe.</p>}
                />
                    </div>
                    <div>
                        <i class="icon-1 fa fa-briefcase" aria-hidden="true"></i>
                    </div>
                    <div>
                    </div>

                </div>
                <div className='experience-grid-1'>
                    <div>
                    </div>
                    <div>
                        <i class="icon fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <CvDetailBox
                        id='11'
                        title='Web Development Bootcamp'
                        startDate="Oct '21"
                        endDate="Apr '22"
                        enterprise={{
                            name: 'Ironhack',
                            logo: 'https://w7.pngwing.com/pngs/341/547/png-transparent-ironhack-hd-logo-thumbnail.png'
                        }}
                        roleDescription=''
                    />
                </div>
                <div className='experience-grid-1'>
                    <CvDetailBox
                        id='10'
                        title='Marketing Integration Manager'
                        startDate="Apr '21"
                        endDate="Oct '21"
                        enterprise={{
                            name: 'Ironhack Global',
                            logo: 'https://w7.pngwing.com/pngs/341/547/png-transparent-ironhack-hd-logo-thumbnail.png'
                        }}
                        roleDescription={
                            <ul>
                                <li>Developing cross-functional projects and helping local teams develop their growth strategy.</li>
                                <li>Launching marketing experiments at a global scale to help markets achieve their targets.</li>
                                <li>New financing product launch: Deferred tuition - pay 15% upfront and the rest once you land a job or 8 months after graduation. May 2021.</li>
                            </ul>} />
                    <div>
                        <i class="icon-1 fa fa-briefcase" aria-hidden="true"></i>
                    </div>
                    <div>
                    </div>

                </div>
                <div className='experience-grid-1'>
                    <div>
                    </div>
                    <div>
                        <i class="icon fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <CvDetailBox
                        id='9'
                        title='UX/UI Bootcamp'
                        startDate="Apr '20"
                        endDate="Oct '20"
                        enterprise={{
                            name: 'Ironhack',
                            logo: 'https://w7.pngwing.com/pngs/341/547/png-transparent-ironhack-hd-logo-thumbnail.png'
                        }}
                        roleDescription={
                            <ul>
                                <li>Lean UX, Agile, Scrum, GV Sprints, Design Thinking.</li>
                                <li>UX/UI Product Design: Sketch, Figma, InVision, Principle, Wireframing, Prototyping.</li>
                                <li>HTML, CSS.</li>
                            </ul>} />
                </div>
                <div className='experience-grid-1'>
                    <CvDetailBox
                        id='8'
                        title='Global Growth Manager'
                        startDate="May '20"
                        endDate="Apr '21"
                        enterprise={{
                            name: 'Ironhack Global',
                            logo: 'https://w7.pngwing.com/pngs/341/547/png-transparent-ironhack-hd-logo-thumbnail.png'
                        }}
                        roleDescription={
                            <ul>
                                <li>Launched new product across the European market: Remote campus in June 2020.</li>

                                <li>Hit alltime record in sales during Covid in September 2020.</li>

                                <li>Launched new product across the European market: Cybersecurity Bootcamp in October 2020.</li>

                                <li>Project owner for the inclusion of women in tech (http://thealgorithmisfemale.org).</li>

                                <li>Reached a community of 10,000+ followers on Ironhack's Official Instagram within the first 5 months.</li>
                                <li>Project managed 3+ Influencer campaigns in different markets across Europe and the USA.</li>

                                <li>Designed and executed 10+ Lead Acquisition and Performance marketing campaigns on Organic
                                    channels.</li>

                                <li>Launched Ironhack's first Book Club with 300+ members within the first 3 editions.</li>

                                <li>Product manager and responsible of CRO for Affiliate campaigns.</li>

                                <li>Developed Ironhack's international brand with the Creative Director.</li>

                                <li>Managed 5+ international campus accounts on Social Media.</li>

                                <li>Grew up to 106k followers across all Social Media accounts.</li>

                                <li>Strategic lead nurturing through email marketing in numerous campaigns.</li>

                                <li>Reached 160% of the KPI's in 2020.</li>

                                <li>Directly reported to the VP of marketing.</li>
                            </ul>} />

                </div>
                <div className='experience-grid-1'>
                    <div>
                    </div>
                    <div>
                        <i class="icon-1 fa fa-briefcase" aria-hidden="true"></i>
                    </div>
                    <CvDetailBox
                        id='7'
                        title='Growth Marketer Madrid Campus'
                        startDate="Jan '19"
                        endDate="Apr '20"
                        enterprise={{
                            name: 'Ironhack Madrid',
                            logo: 'https://w7.pngwing.com/pngs/341/547/png-transparent-ironhack-hd-logo-thumbnail.png'
                        }}
                        roleDescription={
                            <ul>
                                <li>Most profitable campus in 2019.</li>

                                <li>Traffic generated from social networks in 2019 in Spain increased by 98% vs.the previous year.</li>
                                <li>Community of 7k followers on Ironhack Madrid's Instagram.</li>

                                <li>Creative and content creator mainly for YouTube and Instagram.</li>
                            </ul>} />
                </div>
                <div className='experience-grid-1'>
                    <CvDetailBox
                        id='6'
                        title='MBA in Digital Business'
                        startDate="Oct '17"
                        endDate="Jul '18"
                        enterprise={{
                            name: 'ESDEN Business School',
                            logo: 'https://esden.es/wp-content/uploads/2021/09/logo-esden-250.png'
                        }}
                        roleDescription=''
                    />
                    <div>
                        <i class="icon fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='experience-grid-1'>
                    <div>
                    </div>
                    <div>
                    </div>
                    <CvDetailBox
                        id='5'
                        title='Founder'
                        startDate="June '14"
                        endDate="Sept '17"
                        enterprise={{
                            name: 'Tailor Clothing',
                            logo: 'data:image/png;base64,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'
                        }}
                        roleDescription={
                            <ul>
                                <li>Founder of Tailor Clothing brand.</li>
                                <li>B2C and B2B online sales management with a turnover of € 100,000 within 2 years.</li>

                            </ul>} />
                </div>
                <div className='experience-grid-1'>
                    <CvDetailBox
                        id='4'
                        title='Business Developer'
                        startDate="Apr '15"
                        endDate="Oct '15"
                        enterprise={{
                            name: 'Chispum',
                            logo: 'data:image/png;base64,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'
                        }}
                        roleDescription={
                            <p>
                                - Based on Design Thinking | developed Chispum's B2B line to humanize spaces. Example: We designed
                                an ambulance for children and a whole department at San Joan de Deu's hospital to improve kids'
                                experience.
                            </p>} />
                    <div>
                    </div>
                </div>
                <div className='experience-grid-1'>
                    <div>
                    </div>
                    <div>
                    </div>
                    <CvDetailBox
                        id='3'
                        title='Co-Founder'
                        startDate="Jul '13"
                        endDate="Sep '17"
                        enterprise={{
                            name: 'Amuna Beach Bar',
                            logo: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605be70b3d853800015beea2/picture'
                        }}
                        roleDescription={
                            <ul>
                                <li>A beach bar based in the touristic city of San Sebastián.</li>

                                <li>+25k € profits.</li>
                            </ul>} />
                </div>
                <div className='experience-grid-1'>
                    <CvDetailBox
                        id='2'
                        title='Co-Founder'
                        startDate="Sep '11"
                        endDate="June '15"
                        enterprise={{
                            name: 'Kibber',
                            logo: 'https://image.isu.pub/131107154603-e0a6b639de20d93e53d6037fd3d2f199/jpg/page_1.jpg'
                        }}
                        roleDescription={
                            <ul>
                                <li>Customer and Communication leader.</li>
                                <li>Project developer within the scope of innovation consulting at national and international levels
                                    (Shanghai and Pune).</li>
                                <li>Turnover of € 200,000 in 4 years.</li>
                            </ul>} />
                    <div>
                        <i class="icon-1 fa fa-briefcase" aria-hidden="true"></i>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='experience-grid-1'>
                    <div>
                    </div>
                    <div>
                        <i class="icon fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <CvDetailBox
                        id='1'
                        title='Entrepreneurial, Leadership and Innovation Degree (LEINN)'
                        startDate="Oct '11"
                        endDate="Jul '15"
                        enterprise={{
                            name: 'Mondragon Unibertsitatea',
                            logo: 'data:image/png;base64,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'
                        }}
                        roleDescription=
                            'El Grado Internacional oficial “Liderazgo Emprendedor e Innovación” (LEINN) afronta uno de los mayores retos de la sociedad actual: educar para las necesidades de las personas, las empresas y la sociedad del siglo 21. Para lograrlo basa su estrategia en un cambio radical en la metodología de estudios universitarios. Ésta se basa en tres pilares básicos: aprender haciendo (de modo que las empresas creadas por los estudiantes sean su herramienta de aprendizaje desarrollando proyectos reales); emprender en equipo (desarrollando competencias esenciales para …); y a través de viajes de aprendizaje internacionales (la relación y el trabajo en entornos culturales diversos). LEINN aplica las metodologías que Team Academy en Finlandia ha desarrollado con éxito durante las dos últimas décadas y que se han convertido por lo tanto en un referente internacional en educación superior.'
                    />
                </div>


                {/*<div className="skills">
                    <h3> skills </h3>
                    <ul>
                        <li>HTML 8 CSS</li>

                        <li>UX/UI</li>

                        <li>Strategy</li>

                        <li>Creative thinking to
                            solve problems in a
                            lean way</li>

                        <li>Innovation</li>

                        <li>Project Development
                            and Management</li>

                        <li>Leadership</li>

                        <li>Teamwork</li>

                        <li>Familiar to working
                            with different
                            stakeholders</li>

                        <li>Descision supported
                            by data</li>

                        <li>Technical abilities</li>

                        <li>Passion for new

                            technologies and tools</li>
                    </ul>
                    <h3>Tools</h3>
                    <ul>
                        <li>Google Analytics</li>
                        <li>Data Studio</li>
                        <li>Figma</li>

                        <li>ClickUp</li>
                        <li>Asana</li>

                        <li>Notion</li>

                        <li>Pardot</li>
                        <li>HubSpot</li>
                    </ul>
                    <h3>Certificates</h3>
                    <ul>
                        <li> C1 English level</li>
                        <li> Google Analytics
                            Certificate</li>

                    </ul>

                    </div>*/}
            </>

        </div >
    )
}

export default Cv;