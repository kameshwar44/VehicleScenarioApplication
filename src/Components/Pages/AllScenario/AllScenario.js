import React, { useEffect, useState } from "react";
import "./AllScenario.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import axios from "axios";

function AllScenario() {
  const [scenarioData, setScenarioData] = useState([]);
  const [editableScenarioId, setEditableScenarioId] = useState(null);
  const [editedScenario, setEditedScenario] = useState({
    ScenariosName: "",
    ScenariosTime: "",
    NumberOfVechiles: "",
  });

  useEffect(() => {
    axios
      .get("https://apexdbjsong.onrender.com/Scenarios")
      .then((res) => setScenarioData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (scenarioId) => {
    setEditableScenarioId(scenarioId);

    const scenario = scenarioData.find((scenario) => scenario.id === scenarioId);
    if (scenario) {
      setEditedScenario({
        ScenariosName: scenario.ScenariosName,
        ScenariosTime: scenario.ScenariosTime,
        NumberOfVechiles: scenario.NumberOfVechiles,
      });
    }
  };

  const handleSave = () => {
    // Perform save operation here, such as sending editedScenario to the API
    // For simplicity, let's assume you have an updateScenario API endpoint that accepts the editedScenario data

    axios
      .put(`https://apexdbjsong.onrender.com/Scenarios/${editableScenarioId}`, editedScenario)
      .then((res) => {
        console.log("Scenario updated successfully!");
        setEditableScenarioId(null); // Reset editableScenarioId after successful save
      })
      .catch((err) => {
        console.error("Failed to update scenario:", err);
        // Handle error state or show error message to the user
      });
  };

  const handleCancel = () => {
    setEditableScenarioId(null); // Reset editableScenarioId
  };

  const handleDelete = (scenarioId) => {
    // Perform delete operation here, such as sending a DELETE request to the API
    // For simplicity, let's assume you have a deleteScenario API endpoint that accepts the scenarioId

    axios
      .delete(`https://apexdbjsong.onrender.com/Scenarios/${scenarioId}`)
      .then((res) => {
        console.log("Scenario deleted successfully!");
        // Update the scenarioData state by removing the deleted scenario from the array
        setScenarioData((prevData) => prevData.filter((scenario) => scenario.id !== scenarioId));
      })
      .catch((err) => {
        console.error("Failed to delete scenario:", err);
        // Handle error state or show error message to the user
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedScenario((prevScenario) => ({
      ...prevScenario,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="table-wrapper">
        
        <h1 style={{ color: "white" }}>All Scenarios</h1>
        <div className="button-containers">
          <button id="Newbtn">New Vehicle</button>
          <button id="Addbtn">Add Vehicle</button>
          <button id="resetbtn">Delete Vehicle</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Scenario Id</th>
              <th>Scenario Name</th>
              <th>Scenario Time</th>
              <th>Number of Vehicles</th>
              <th>Add Vehicle</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {scenarioData.map((scenario) => (
              <tr key={scenario.id}>
                <td>
                  <span>
                    <span className="fi fi-af"></span>
                  </span>
                  <span>{scenario.id}</span>
                </td>
                <td>
                  {editableScenarioId === scenario.id ? (
                    <input
                      type="text"
                      name="ScenariosName"
                      value={editedScenario.ScenariosName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    scenario.ScenariosName
                  )}
                </td>
                <td>
                  {editableScenarioId === scenario.id ? (
                    <input
                      type="text"
                      name="ScenariosTime"
                      value={editedScenario.ScenariosTime}
                      onChange={handleInputChange}
                    />
                  ) : (
                    scenario.ScenariosTime
                  )}
                </td>
                <td>
                  {editableScenarioId === scenario.id ? (
                    <input
                      type="text"
                      name="NumberOfVechiles"
                      value={editedScenario.NumberOfVechiles}
                      onChange={handleInputChange}
                    />
                  ) : (
                    scenario.NumberOfVechiles
                  )}
                </td>
                <td>
                  <AiFillPlusCircle />
                </td>
                <td>
                  {editableScenarioId === scenario.id ? (
                    <>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <BsFillPencilFill onClick={() => handleEdit(scenario.id)} />
                  )}
                </td>
                <td>
                  <AiFillDelete onClick={() => handleDelete(scenario.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllScenario;
