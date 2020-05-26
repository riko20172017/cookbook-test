import React, { useState } from "react";
import { recipes as recipesData } from "../../static/recipes";
import "./recipes.scss";

export default function Recipes() {
  const [recipt, setRecipt] = useState({});

  return (
    <div className="page-recieps">
      <div className="container mt-4">
        <div className="row">
          <div className="col col-md-3">
            <div className="recieps-sidebar">
              <div>
                <ul className="list-unstyled text-left">
                  {recipesData.map((item, i) => (
                    <li
                      className={
                        item.name === recipt.name
                          ? "recipt-item bg-primary text-white shadow"
                          : "recipt-item"
                      }
                      key={i}
                      onClick={() => setRecipt(item)}
                    >
                      <span className="p-2">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-md-9">
            <h5>{recipt.name}</h5>
            <p>{recipt.description}</p>
            <span>{recipt.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
