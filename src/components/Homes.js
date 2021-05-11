import HomeCard from './HomeCard';

const Homes = () => {
    const homes = [
        {
            img: '1',
            name: 'Beautiful Family House',
            location: 'USA',
            rooms: '5',
            area: '325',
            price:'1,200,000'
        },
        {
            img: '2',
            name: 'Modern Glass Villa',
            location: 'Canada',
            rooms: '6',
            area: '450',
            price:'2,750,000'
        },
        {
            img: '3',
            name: 'Cozy Country House',
            location: 'UK',
            rooms: '4',
            area: '250',
            price:'850,000'
        },
        {
            img: '4',
            name: 'Large Country Villa',
            location: 'Portugal',
            rooms: '6',
            area: '480',
            price:'1,950,000'
        },
        {
            img: '5',
            name: 'Majestic Mansion',
            location: 'Germany',
            rooms: '18',
            area: '4230',
            price:'9,500,000'
        },
        {
            img: '6',
            name: 'Modern Family Apartment',
            location: 'Italy',
            rooms: '3',
            area: '180',
            price:'600,000'
        }
    ]


    return (
        <section className="homes">
            {homes.map(home => {
                return (
                    <HomeCard details={home} />
                )
            })}
        </section>
     );
}
 
export default Homes;