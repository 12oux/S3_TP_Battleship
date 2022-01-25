import React, { useState } from 'react';
import { useDrag, useDrop, canDrop } from 'react-dnd';
import { render } from 'react-dom';




export default function AircraftCarrier({ isDragging, color,position,onDrop, stateCouleur }) {
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

    const [boatSquares, setSquares] = useState(Array(5).fill(null));
    const [ isXNext, setIsXNext] = useState(true);
    const changeColor = isXNext ? "X" : "O";
    const[isActive, setActive] = useState("false");
    const handleToggle = () => {
      setActive(!isActive);
    };
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
          accept: "SHIP",
          drop: (item) => onDrop(position, item, stateCouleur),
          collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
          })
        }),[stateCouleur])
    
    function BoatSquare({value, click, color}) {
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

    function fabriqueAC(position) {
        return (<BoatSquare value={boatSquares[position]}click={() => onClickBoat(position)}/>);
    }

    return(

        <div className="boat">
            <div className="aircraft" ref={dragRef} style={{ opacity, backgroundColor:color}}>
                <div className={isActive ? "boat-row" : "boat-col"} >
                    {fabriqueAC(0)}
                    {fabriqueAC(1)}
                    {fabriqueAC(2)}
                    {fabriqueAC(3)}
                    {fabriqueAC(4)}
                </div>
            </div>
            <button onClick={handleToggle}>Rotate</button>
        </div>
    );
  };
