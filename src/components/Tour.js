import Card from './Card.js';
function Tour({tours,removetour})
{   
     return (<div>
        <h1 className="heading">Plan Your Tour</h1>
       <div className="wrapper">
        {tours.map((item)=> 
            <Card key={item.id} {...item} removetour={removetour}/>
        )}
        </div> 
     </div>);
}
export default Tour;