const Cart = () =>{
    return (
        <div className="cart">
          <div className="block1">
            <img src="ESISH.jpg" alt="esish" />
          </div>
          <div className="block2">
          <div className="inside_block1">
            <p className="name">Shibendra</p>
            <p className="profession">Web Developers</p>
          </div>
         <div className="inside_block2">
             
            <div className="article1">
              <p className="articles">Articles</p>
              <p className="value">45</p>
            </div>

            <div className="article1">
              <p className="articles">Followers</p>
              <p className="value">5k</p>
            </div>

            <div className="article1">
              <p className="articles">Following</p>
              <p className="value">234</p>
            </div>
            </div>
          </div>
        </div>
    )
}

export default Cart;