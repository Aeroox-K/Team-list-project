import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: { ninjas: data }
    }

}

const Ninjas = ({ ninjas }) => {
    return ( 
        <div>
            <h1 className="text-xl font-bold">All Exclusive Members</h1>
            {ninjas.map((ninja) => (
                <Link href={'/exclusives/' + ninja.id} key = {ninjas.id}>
                    <div className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;