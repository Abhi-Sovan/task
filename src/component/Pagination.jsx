import React from 'react'
import "../Style/Card.css"

export default function Pagination(props) {
    let {setPageSelected ,pageSelected} = props
    
    
    
  return (
<nav aria-label="Page navigation example">
  <div>

  <ul className="pagination ">
    <li className="page-item"><button className="page-link bg-dark text-light prev"><i className="fa fa-angle-left"  onClick={()=>{setPageSelected(pageSelected -1)}}></i></button></li>
    <li className="page-item"><button className="page-link bg-dark  pageNumb" onClick={() => {setPageSelected(1)}}>1</button></li>
    <li className="page-item"><button className="page-link bg-dark  pageNumb" onClick={() => {setPageSelected(2)}}>2</button></li>
    <li className="page-item"><button className="page-link bg-dark  pageNumb" onClick={() => {setPageSelected(3)}}>3</button></li>
    <li className="page-item"><button className="page-link bg-dark  pageNumb" onClick={() => {setPageSelected(4)}}>4</button></li>
    <li className="page-item"><button className="page-link bg-dark  pageNumb" onClick={() => {setPageSelected(5)}}>5</button></li>
    <li className="page-item"><button className="page-link bg-dark  pageNumb" onClick={() => {setPageSelected(6)}}>6</button></li>
    <li className="page-item"><button className="page-link bg-dark  text-light next"><i className="fa fa-angle-right" onClick={()=>{setPageSelected(pageSelected +1)}}></i></button></li>
  </ul>
  </div>

</nav>
  )
}
