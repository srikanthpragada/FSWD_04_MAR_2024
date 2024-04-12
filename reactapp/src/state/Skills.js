import { useState } from 'react'

export default function Skills() {
    let [skills, setSkills] = useState([])

    function addSkill() {
        let skill = document.getElementById("txtSkill").value
        // check whether skill is already present 
        if (skills.includes(skill)) {
            alert("Sorry! Dupliate Skill!")
            return
        }

        setSkills([...skills, skill])
    }

    function deleteSkill(idxToDelete) {
        if (!window.confirm('Do you want to delete?'))
            return;

        setSkills(skills.filter((s, idx) => idx !== idxToDelete))
    }

    function clearAll() {
        setSkills([])
    }

    return (
        <>
            <h1>Skills</h1>
            Skill <input type="text" id="txtSkill" />
            <button onClick={addSkill}>Add</button>
            <p></p>
            <ul>
                {
                    skills.map((s, idx) =>
                        <li key={idx}>
                            {s}  &nbsp;
                            <button onClick={() => deleteSkill(idx)}>Del</button>
                        </li>)
                }
            </ul>
            <p></p>
            {
                // Conditional rendering 
                skills.length > 0 ? <button className="btn btn-link"
                    onClick={clearAll}>Clear All</button> : ''
            }
        </>
    )
}
