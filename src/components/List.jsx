
function List(){

    const itemList = [  {id: 1, name: "Mobile", price: 30000}, 
                {id: 2, name: "Laptop", price: 180000},
                {id: 3, name: "Bike", price: 300000},
                {id: 4, name: "Ipad", price: 100000}] 

    // const itemList = props.items
    const heading = "Wish List"
    
    const items = itemList.map(item =>  
                                        <div>
                                            <li>{item.name}: {item.price}</li>
                                        </div>
                                    )

    return( <>
                <h2 className="list-header">{heading}</h2>
                <ol className="list-items">{items}</ol>
            </>
    );
}

export default List