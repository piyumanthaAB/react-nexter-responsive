import { BiHeartCircle,BiBeenHere,BiGroup,BiHomeSmile,BiKey } from "react-icons/bi";

const HomeCard = (props) => {
    return (
        <div className='home'>
            <img src={`img/house-${props.details.img}.jpeg`} alt="img-1" className="home__img" />
            <div className="home__like"> <BiHeartCircle /> </div>
            <h5 className="home__name">{props.details.name }</h5>

            <div className="home__location">
                <BiBeenHere className='home__location-icon' />
                <p>{props.details.location }</p>
            </div>
            <div className="home__rooms">
                <BiGroup className='home__rooms-icon' />
                <p>{props.details.rooms } rooms</p>
            </div>
            <div className="home__area">
                <BiHomeSmile className='home__area-icon' />
                <p>{props.details.area } m<sup>2</sup></p>
            </div>
            <div className="home__price">
                <BiKey className='home__price-icon' />
                <p>${props.details.price }</p>
            </div>

            <button className="btn home__btn">Contact Realtor</button>

        </div>
     );
}
 
export default HomeCard;