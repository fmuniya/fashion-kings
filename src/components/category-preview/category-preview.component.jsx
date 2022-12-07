
import { Fragment } from 'react';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({category}) => {

    const { title, items } = category;

        return (
            <div className='category-preview-container'>
                <h2>
                    <span>{ title.toUpperCase() }</span>
                </h2>

                <div className='preview'>
                    {
                        items.filter((_, index) => index < 4)
                        .map((product, idx) => <ProductCard key = { idx } product = { product }/>)
                    }

                </div>
            </div>
        )
}

export default CategoryPreview;