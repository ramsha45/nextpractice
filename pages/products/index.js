import ProductCard from "../../components/ProductCard/ProductsCard";
import styles from "../../styles/products.module.css"

export const getStaticProps = async() => {
    var res = await fetch("https://fakestoreapi.com/products")
    var data = await res.json();

    return{
        props:{
            products: data
        }
    }
}

const Products = ({products}) => {
    // console.log(products)
    return(
        <div className={styles.productList}>
             {
                products.map((pro) => (
                    <ProductCard key={pro.id} product={pro}/>
                ))
            }
        </div>
    )
}

export default Products;