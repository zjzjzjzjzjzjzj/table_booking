import styles from './Testimonials.module.css';

//assets
import person1 from '../assets/person1.jpeg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpeg'
import person4 from '../assets/person4.jpeg'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Testimonials() {

    const star  = <FontAwesomeIcon icon={faStar} fade style={{color: "#F4CE14",}} />

    const testi = [
        {name: "Anna",
        pic:person1,
        rating: '5/5',
        remarks: "One of the best restaurants in Chicago"},

        {name: "Josh",
        pic:person2,
        rating: "4/5",
        remarks: "The brushcetta is simply amazing"},

        {name: "Bez",
        pic:person3,
        rating: "5/5",
        remarks: "The dining experience and the service is impeccable"},
        
        {name: "Elo",
        pic:person4,
        rating: "4.5/5",
        remarks: "I've been to many great restaurants, but this one is simply my favorite"},
    ]

    return (
    <div className={styles.Testimonial}>
        <h2 className={styles.header}>Testimonials</h2>
        <div label="container with 4 boxes" className={styles.container}>

            <div className={styles.box} label="1">
                {/* Recurrent here */}
                <div label = "subcontainer1" className={styles.boxSub1}>
                    <h4> Rating :</h4>
                    <h4 className={styles.boxSub_h4}>{testi[0].rating} {star} </h4>
                </div>
                <div label = "subcontainer2" className={styles.boxSub2}>
                    <img src={testi[0].pic} className={styles.img} />
                    <h4 className={styles.boxSub_h4}>{testi[0].name}</h4>
                </div>
                <p className={styles.desc_p}> "{testi[0].remarks}"</p>
                {/* Recurrent here */}
            </div>

            <div className={styles.box} label="2">
                {/* Recurrent here */}
                <div label = "subcontainer1" className={styles.boxSub1}>
                    <h4> Rating :</h4>
                    <h4 className={styles.boxSub_h4}>{testi[1].rating} {star} </h4>
                </div>
                <div label = "subcontainer2" className={styles.boxSub2}>
                    <img src={testi[1].pic} className={styles.img} />
                    <h4 className={styles.boxSub_h4}>{testi[1].name}</h4>
                </div>
                <p className={styles.desc_p}> "{testi[1].remarks}"</p>
                {/* Recurrent here */}
            </div>

            <div className={styles.box} label="3">
                {/* Recurrent here */}
                <div label = "subcontainer1" className={styles.boxSub1}>
                        <h4> Rating :</h4>
                        <h4 className={styles.boxSub_h4}>{testi[2].rating} {star} </h4>
                    </div>
                    <div label = "subcontainer2" className={styles.boxSub2}>
                        <img src={testi[2].pic} className={styles.img} />
                        <h4 className={styles.boxSub_h4}>{testi[2].name}</h4>
                    </div>
                    <p className={styles.desc_p}> "{testi[2].remarks}"</p>
                {/* Recurrent here */}
                </div>

            <div className={styles.box} label="4">
                {/* Recurrent here */}
                <div label = "subcontainer1" className={styles.boxSub1}>
                        <h4> Rating :</h4>
                        <h4 className={styles.boxSub_h4}>{testi[3].rating} {star} </h4>
                    </div>
                    <div label = "subcontainer2" className={styles.boxSub2}>
                        <img src={testi[3].pic} className={styles.img} />
                        <h4 className={styles.boxSub_h4}>{testi[3].name}</h4>
                    </div>
                    <p className={styles.desc_p}> "{testi[3].remarks}"</p>
                {/* Recurrent here */}
            </div>
        </div>
    </div>
    );

}

export default Testimonials;