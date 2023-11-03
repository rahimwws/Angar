import { ProductInfo } from '@/shared/ProductInfo/ProductInfo'
import { ProductBlockImage, ProductMainImage } from '@/shared/ProductPageImages'
import { ProductPagePrice } from '@/shared/ProductPagePrice/ProductPagePrice'


import "./style.scss"

type Props = {}

export const ProductPageMain = (props: Props) => {
  return (
    <div className='product-page-main'>
      <div className="images">
        <div className="blocks">
          <ProductBlockImage />
          <ProductBlockImage />
          <ProductBlockImage />

        </div>
        <ProductMainImage />
      </div>
      <ProductInfo />
      <ProductPagePrice />
    </div>
  )
}