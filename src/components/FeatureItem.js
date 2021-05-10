import { BiWorld, BiTrophy, BiLineChart, BiLock } from "react-icons/bi";

const FeatureItem = (props) => {
    return (
        <div className="feature">
            <div className="feature__icon">
                {props.icon}
            </div>

            <h4 className={`heading-4 ${props.modifire}`}>{ props.heading}</h4>
            
            <p className="feature__text">{props.featureText}</p>
        </div>
     );
}
 
export default FeatureItem;