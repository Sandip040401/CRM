import React from "react";
import './Features.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser, 
    faChartLine, 
    faBullseye, 
    faEnvelope, 
    faFileAlt, 
    faMobileAlt, 
    faCalendarCheck, 
    faComments, 
    faTasks, 
    faDatabase, 
    faCogs, 
    faBell 
} from '@fortawesome/free-solid-svg-icons';

function Features() {
    const features = [
        { name: "Contact Management", icon: faUser },
        { name: "Sales Analytics", icon: faChartLine },
        { name: "Lead Tracking", icon: faBullseye },
        { name: "Email Integration", icon: faEnvelope },
        { name: "Reporting", icon: faFileAlt },
        { name: "Mobile Access", icon: faMobileAlt },
        { name: "Calendar Management", icon: faCalendarCheck },
        { name: "Communication Tools", icon: faComments },
        { name: "Task Management", icon: faTasks },
        { name: "Data Storage", icon: faDatabase },
        { name: "Automation", icon: faCogs },
        { name: "Notifications", icon: faBell }
    ];

    return (
        <div className="" style={{marginLeft:'10%',marginRight:'10%',marginTop:"100px"}}>
            <div className="row">
                {features.map((feature, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="feature-card">
                            <FontAwesomeIcon icon={feature.icon} className="feature-logo" style={{color:'blue'}} />
                            <span className="feature-name">{feature.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
