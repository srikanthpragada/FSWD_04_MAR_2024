import { useState } from 'react'


function ListSkills({ skills, deleteSkill }) {
    function deleteOneSkill(idx) {
        if (!window.confirm('Do you want to delete?'))
            return;
        deleteSkill(idx)  // call a function of parent 
    }
    return (

        <ul>
            {
                skills.map((s, idx) =>
                    <li key={idx}>
                        {s}  &nbsp;
                        <button onClick={() => deleteOneSkill(idx)}>Del</button>
                    </li>)
            }
        </ul>

    )
}

function AddSkill({ skills, addSkill }) {

    function addNewSkill() {
        let skill = document.getElementById("txtSkill").value
        // check whether skill is already present 
        if (skills.includes(skill)) {
            alert("Sorry! Dupliate Skill!")
            return
        }
        addSkill(skill)
    }

    return (
        <>
            Skill <input type="text" id="txtSkill" />
            <button onClick={addNewSkill}>Add</button>
        </>
    )
}

function ClearSkills({ skills, clearAll }) {
    return (
        <>
            {
                // Conditional rendering 
                skills.length > 0 ? <button className="btn btn-link"
                    onClick={clearAll}>Clear All</button> : ''
            }
        </>
    )
}

export default function Skills2() {
    let [skills, setSkills] = useState([])

    function addSkill(skill) {
        setSkills([...skills, skill])
    }

    function deleteSkill(idxToDelete) {
        setSkills(skills.filter((s, idx) => idx !== idxToDelete))
    }

    function clearAll() {
        setSkills([])
    }

    return (
        <>
            <h1>Skills</h1>
            <AddSkill skills={skills} addSkill={addSkill} />
            <p></p>
            <ListSkills skills={skills} deleteSkill={deleteSkill} />
            <p></p>
            <ClearSkills skills={skills} clearAll={clearAll} />
        </>
    )
}
