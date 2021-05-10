import React from 'react-dom';
import FeatureItem from './FeatureItem'
import { BiWorld, BiTrophy, BiLineChart, BiLock,BiBeenHere ,BiKey} from "react-icons/bi";


const Features = () => {
    return (
        <section className="features">
            <FeatureItem
                featureText={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'}
                icon={<BiWorld />}
                heading={'World\'s best luxary homes'}
                modifire={'header-4--light'}
                
            />
            <FeatureItem
                featureText={'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'}
                icon={<BiTrophy />}
                heading={'Only the best properties'}
                modifire={'header-4--light'}
                
            />
            <FeatureItem
                featureText={'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'}
                icon={<BiBeenHere />}
                heading={'All homes in top locations'}
                modifire={'header-4--light'}
                
            />
            <FeatureItem
                featureText={'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}
                icon={<BiKey />}
                heading={'New home in one week'}
                modifire={'header-4--light'}
                
            />
            <FeatureItem
                featureText={'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'}
                icon={<BiLineChart />}
                heading={'Top 1% realtors'}
                modifire={'header-4--light'}
                
            />
            <FeatureItem
                featureText={'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.'}
                icon={<BiLock />}
                heading={'Secure payments on XXX'}
                modifire={'header-4--light'}
                
            />
            
        </section>
     );
}
 
export default Features;