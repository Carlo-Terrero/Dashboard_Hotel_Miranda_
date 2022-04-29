import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "Lunes",
    Affiliate: 10,
    Social: 20,
    Media: 30
  },
  {
    name: "Martes",
    Affiliate: 20,
    Social: 40,
    Media: 60
  },
  {
    name: "miercoles",
    Affiliate: 30,
    Social: 45,
    Media: 80
  },
  {
    name: "Jueves",
    Affiliate: 40,
    Social: 60,
    Media: 100
  },
  {
    name: "Viernes",
    Affiliate: 50,
    Social: 80,
    Media: 120
  },
  {
    name: "Sabadp",
    Affiliate: 40,
    Social: 65,
    Media: 100
  },
  {
    name: "Domingo",
    Affiliate: 50,
    Social: 80,
    Media: 120
  }
];

const apellido = [
  {
    apellido: "apellido 1",
    Affiliate: 10,
    Social: 20,
    Media: 30
  },
  {
    apellido: "apellido 2",
    Affiliate: 20,
    Social: 40,
    Media: 60
  },
  {
    apellido: "apellido 3",
    Affiliate: 30,
    Social: 45,
    Media: 80
  },
  {
    apellido: "apellido 4",
    Affiliate: 40,
    Social: 60,
    Media: 100
  },
  {
    apellido: "Brapellidoand 5",
    Affiliate: 50,
    Social: 80,
    Media: 120
  }
];

const allKeys = ["Affiliate", "Social", /* "Media" */];

const colors = {
  Affiliate: "green",
  Social: "red",
  //Media: "rgba(255, 199, 128, 0.8)"
};

export const D3BarGraph = () => {
  const [keys, setKeys] = useState(allKeys);

  return (
    <div style={{marginTop: '2rem'}}>
      <label style={{color: 'green', marginRight: '4rem'}}>Check In 753</label>
      <label style={{color: 'red'}}>Check Out 516</label>
      {/* <div className="fields" style={{ display: "flex" }}>
        {allKeys.map((key) => (
          <div key={key} className="field" style={{ display: "flex" }}>
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={(e) => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter((_key) => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div> */}
      <StackedBarGraph datasets={data} colors={colors} keys={keys} apellido={apellido} />

    </div>
  );
};
