import Image from 'next/image';
import styles from './ProductCard.module.css'

const ProductCard = ({product}) => {
    // console.log(product)
    return(
        <div className="container">
            <div className={styles.productCard}>
                <Image src={product.image} width={200} height={300}/>
                <div className={styles.title}>
                    <h5>{product.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProductCard