import style from './style.module.scss'
import { NewItemType } from '../../types/items'


interface IProps {
    item: NewItemType;
}
function Information({ item }: IProps) {
    console.log(item, "item");
  return (
    <div className={style.information}>
      <div className={style.imageContainer}>
        items
      </div>
    </div>
  )
}

export default Information;