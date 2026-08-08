import { Handle, Position } from "reactflow";


export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  style = {},
}) => {

  return (

    <div

      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "12px",
        background: "#ffffff",
        minWidth: "180px",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        fontFamily: "sans-serif",
        position: "relative",

        ...style,
      }}

    >



      {/* Target Handles (Inputs on Left) */}

      {
        inputs.map((input, idx) => (

          <Handle

            key={
              input.id ||
              `input-${idx}`
            }

            type="target"

            position={
              input.position ||
              Position.Left
            }

            id={input.id}


            style={{

              top:
                input.top ||
                `${((idx + 1) * 100) /
                (inputs.length + 1)}%`,


              ...input.style,

            }}

          />

        ))
      }





      {/* Header */}

      <div

        style={{

          fontWeight: "600",

          marginBottom: "8px",

          fontSize: "14px",

          color: "#1f2937",

        }}

      >

        {title}

      </div>





      {/* Body Content */}

      <div

        style={{

          display: "flex",

          flexDirection: "column",

          gap: "8px",

        }}

      >

        {children}

      </div>





      {/* Source Handles (Outputs on Right) */}

      {
        outputs.map((output, idx) => (

          <Handle

            key={
              output.id ||
              `output-${idx}`
            }


            type="source"


            position={
              output.position ||
              Position.Right
            }


            id={output.id}



            style={{

              top:
                output.top ||
                `${((idx + 1) * 100) /
                (outputs.length + 1)}%`,


              ...output.style,

            }}

          />

        ))
      }



    </div>

  );

};