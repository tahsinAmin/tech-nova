'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Story = () => {
    const [isProgressFixed, setIsProgressFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const pageWrapper = document.querySelector('.page-wrapper');
        if (pageWrapper) {
          const rect = pageWrapper.getBoundingClientRect();
          setIsProgressFixed(rect.top <= 0);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <section className="story page-wrapper">
        <div className="section-timeline-heading">
            <div className="container">
                <div className="padding-vertical-xlarge">
                    <div className="timeline-main_heading-wrapper">
                        <div className="margin-bottom-medium">
                            <h2>The rise of Novastack</h2>
                        </div>
                        <p className="description">
                            It wasn't always easy. Here's a short story. on how it all started. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-timeline">
            <div className="container">
                <div className="timeline_component">
                    <div className="timeline_progress">
                        <div className={`timeline_progress-bar ${isProgressFixed ? 'fixed h-50vh': ''}`}></div>
                    </div>
                    <div className="timeline_item">
                        <div className="timeline_left">
                            <div className="timeline_date-text">January 20, 2002</div>
                        </div>
                        <div className="timeline_center">
                            <div className="timeline_circle"></div>
                        </div>
                        <div className="timeline_right">
                            <div className="margin-bottom-xlarge">
                                <div className="timeline_text">
                                Novastack becomes Public Benefit Corporation
                                </div>
                            </div>
                            <div className="timeline_image-wrapper">
                                <Image loading="lazy" width="480" height="400" alt="Story"
                                    src="https://images.unsplash.com/photo-1689101298752-886c970ff200?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="timeline_item">
                        <div className="timeline_left">
                            <div className="timeline_date-text">March 05, 2008</div>
                        </div>
                        <div className="timeline_center">
                            <div className="timeline_circle"></div>
                        </div>
                        <div className="timeline_right">
                            <div className="margin-bottom-medium">
                                <div className="timeline_text">
                                Received ISO 9001 Certification
                                </div>
                            </div>
                            <div className="timeline_image-wrapper">
                                <Image loading="lazy" width="480" height="400" alt="Story"
                                    src="https://images.unsplash.com/photo-1689101298752-886c970ff200?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="timeline_item">
                        <div className="timeline_left">
                            <div className="timeline_date-text">March 07, 2020</div>
                        </div>
                        <div className="timeline_center">
                            <div className="timeline_circle"></div>
                        </div>
                        <div className="timeline_right">
                            <div className="margin-bottom-medium">
                                <div className="timeline_text">
                                    Offices Relocated to Gulshan Avenue. There's a new office in town.
                                </div>
                            </div>
                            <div className="timeline_image-wrapper">
                                <Image loading="lazy" width="480" height="400" alt="Story"
                                    src="https://images.unsplash.com/photo-1689101298752-886c970ff200?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="timeline_item">
                        <div className="timeline_left">
                            <div className="timeline_date-text">May 31, 2024</div>
                        </div>
                        <div className="timeline_center">
                            <div className="timeline_circle"></div>
                        </div>
                        <div className="timeline_right">
                            <div className="margin-bottom-medium">
                                <div className="timeline_text">
                                    50 Employees have been hired. It was a milestone for the company.
                                </div>
                            </div>
                            <div className="timeline_image-wrapper">
                                <Image loading="lazy" width="480" height="400" alt="Story"
                                    src="https://images.unsplash.com/photo-1689101298752-886c970ff200?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="overlay-fade-top"></div>
                    {/* <div className="overlay-fade-bottom"></div> */}
                </div>
            </div>
            {/* <div style={{height: '50vh'}}></div> */}
        </div>
    </section>
  )
}

export default Story