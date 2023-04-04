import React ,{useState} from 'react'

const Round = ({ pareja, ronda, onSeleccion }) => {

 
        const [seleccion, setSeleccion] = useState("");
      
        function handleSeleccion(event) {
          setSeleccion(event.target.value);
        }
      
        function handleSubmit(event) {
          event.preventDefault();
          onSeleccion(pareja, seleccion, ronda);
        }
      
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <p>
                Enfrentamiento {pareja[0]} vs {pareja[1]}
              </p>
              <label>
                <input
                  type="radio"
                  name="seleccion"
                  value={pareja[0]}
                  checked={seleccion === pareja[0]}
                  onChange={handleSeleccion}
                />{" "}
                {pareja[0]}
              </label>
              <label>
                <input
                  type="radio"
                  name="seleccion"
                  value={pareja[1]}
                  checked={seleccion === pareja[1]}
                  onChange={handleSeleccion}
                />{" "}
                {pareja[1]}
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
        );
      }
      
 
export default Round