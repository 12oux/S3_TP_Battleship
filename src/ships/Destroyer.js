import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

export default function Destroyer({ isDragging, color, position,onDrop, stateCouleur }) {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
          type: "SHIP",
          item: { color },
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
          })
        }),
        []
      )

    const [boatSquares, setSquares] = useState(Array(2).fill(null));
    const [ isXNext, setIsXNext] = useState(true);
    const changeColor = isXNext ? "X" : "O";
    const[isActive, setActive] = useState("false");
    const handleToggle = () => {
      setActive(!isActive);
    };
    const [{ isOver, canDrop }, drop] = useDrop(
      () => ({
        accept: "SHIP",
        drop: (item) => onDrop(position, item,stateCouleur),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop()
        })
      }),[stateCouleur])
  
    function BoatSquare({value, click,  color}) {
        const [mesClasses, setClasses] = useState("Square");
        
        return (
        <div>
          <div className="ship-square" onClick={click}>{value}</div>
          <td className={mesClasses} onClick={()=> setClasses("Square")} style={{backgroundColor: isOver ? "black" : color}} ref={drop}>      
          </td>
        </div>
        );
      }

    function onClickBoat(position) {
        let monBoat = boatSquares.slice();
        monBoat[position] = changeColor;
        setSquares(monBoat);
        setIsXNext(!isXNext);
    }   

    function fabriqueDestroyer(position) {
        return (<BoatSquare value={boatSquares[position]} click={() => onClickBoat(position)}/>);
    }

    return(
        <div className="boat">
            <div className="destroyer" ref={dragRef} style={{ opacity, backgroundColor:color}}>
                <div className={isActive ? "boat-row" : "boat-col"} >
                    {fabriqueDestroyer(0)}
                    {fabriqueDestroyer(1)}
                </div>
            </div>
            <button onClick={handleToggle}>Rotate</button>
        </div>
    );
}