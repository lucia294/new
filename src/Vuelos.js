import React,{useState, useRef, useEffect} from 'react';
import PanelVuelo from './PanelVuelo.js'
import NuevoVuelo from './NuevoVuelo.js'
import './Vuelo.css'


function Vuelos()
{
    const [vuelos, setVuelos]= useState([]);
    const [selectedFlight, setSelectedFlight] = useState({})

    const obtenerVuelos =async()=> 
        {
            let response = await fetch('./vuelos.json');
            let data = await response.json();
            data.map((destination) => destination.flights.map((vuelo) => {vuelo["plazas disponibles"] = vuelo.seats; vuelo["plazas ocupadas"] = 0;vuelo["destino"] = destination.destination;}));
            setVuelos(data);  

        };
    

    useEffect( ()=>{

        if(vuelos.length==0)
            {
                obtenerVuelos(); 
            }  

        }, []);


    const ocuparPlaza=(id) =>{
        let aux = vuelos;
        let i = 0;
        for(i=0;i<aux.length;i++)
        {
                aux[i].flights.map((vuelo) =>{ 
                    if(vuelo["number"]==id) { 
                        if(vuelo["plazas ocupadas"]<vuelo["seats"]) {
                            vuelo["plazas ocupadas"]=vuelo["plazas ocupadas"]+1;
                            vuelo["plazas disponibles"]=vuelo["plazas disponibles"]-1;
                            setSelectedFlight({"destino": vuelo["destino"], "number": vuelo["number"], "date": vuelo["date"],"seats":vuelo["seats"], "plazas ocupadas": vuelo["plazas ocupadas"], "plazas disponibles": vuelo["plazas disponibles"]});
                        }
                        }});
        }
        setVuelos(aux);  
    }    

    const liberarPlaza=(id) =>{
        let aux = vuelos;
        let i = 0;
        for(i=0;i<aux.length;i++)
        {
                aux[i].flights.map((vuelo) =>{ 
                    if(vuelo["number"]==id) { 
                        if(vuelo["plazas ocupadas"]<=vuelo["seats"] && vuelo["plazas ocupadas"]>0)  {
                            vuelo["plazas ocupadas"]=vuelo["plazas ocupadas"]-1;
                            vuelo["plazas disponibles"]=vuelo["plazas disponibles"]+1;
                            setSelectedFlight({"destino": vuelo["destino"], "number": vuelo["number"], "date": vuelo["date"],"seats":vuelo["seats"], "plazas ocupadas": vuelo["plazas ocupadas"], "plazas disponibles": vuelo["plazas disponibles"]});
                            }                            

                        }});
        }
        setVuelos(aux);  
        
    }    
    const checkUniqueId=(id)=>{
        let flag = true;
        let i=0;
        for(i=0;i<vuelos.length;i++)
            {
                    vuelos[i].flights.map((vuelo) =>{ 
                        if(vuelo["number"]==id)  flag= false;})
            }
        return flag;    

    }

    const anadirVuelo=(destination,date,time,number,seats)=>{

        if (checkUniqueId(number)) 
        {
            let nuevoVuelo = {"destino": destination, "number": number, "date": date,"seats":seats, "plazas ocupadas": 0, "plazas disponibles": seats, "time":time};
            let aux = vuelos;
            let i = 0;
            let flag = false;
            for(i=0;i<aux.length;i++)
                { 
                    if (aux[i].destination == destination)
                    {
                        aux[i].flights= [...aux[i].flights, nuevoVuelo];
                        flag = true;
                    }
                }  
            if (!flag)   
            {
                aux = [...vuelos,{ "destination":destination , "flights" :[nuevoVuelo]}];
            }
            setVuelos([...aux]);
        }
    }


    const eliminarVuelo=(number)=>{
        let aux = vuelos;
        let i = 0;
        for(i=0;i<aux.length;i++)
            { 
                let j=0;
                for(j=0;j<aux[i].flights.length;j++)
                if (aux[i].flights[j] == number)
                {
                    aux[i].flights= aux[i].flights.splice(j);
                }
            }    
        setVuelos([...aux]);
    }

    return(
       <>
        <h1> Vuelos</h1>
        <div className='container item-left'>
        <ul>
            { vuelos.map((destino) => <ul class="flight-list">
                                    <span class="flight-destination"><strong>{destino.destination} </strong></span> {
                                    destino.flights.map ((vuelo) => <li key={vuelo.number}> 
                                                                    <span class="flight-date">{vuelo.date} </span> 
                                                                    <span class="flight-number"> {vuelo.number}</span>
                                                                    <button onClick={()=>setSelectedFlight(vuelo)}>Seleccionar</button>
                                                                    <button onClick={()=>eliminarVuelo(vuelo)}>Eliminar</button>
                                                                    </li>) }
                                    </ul>) }
        </ul>
        
        </div>
        <div className="bottomDiv">
           <NuevoVuelo handler={anadirVuelo}></NuevoVuelo>
           </div>  
        <div className='container item-right'>
                                                          
           {selectedFlight!=undefined && !Object.keys(selectedFlight).length==0 && <PanelVuelo item={selectedFlight} handlerIncrementar={ocuparPlaza} handlerDecrementar={liberarPlaza}></PanelVuelo> }                  
        </div>
        
        </> 
    );

}

export default Vuelos;