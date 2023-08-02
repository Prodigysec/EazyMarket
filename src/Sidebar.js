import { useContext } from 'react';
import CartItem from './CartItem';
import { SidebarContext} from './SidebarContext';
import { CartContext}  from 'CartContext';

 const Sidebar = () => {
    const { isOpen, handleClose} = useContext(SidebarContext);
    const {cart } =useContext(CartContext);
    
    
    return <div>
      {cart.map((item)=> {
         return <CartItem item={item} key= {item.id}/>
      })}
      Sidebar
      </div>
 };

 export default Sidebar; 