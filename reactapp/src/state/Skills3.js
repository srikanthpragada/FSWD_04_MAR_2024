import React, { useState } from 'react'

function AddSkill({ addSkill }) {
    let [skill, setSkill] = useState({ title: '', rating: -1 })

    function updateTitle(e) {
        // update title property with new value entered in textbox 
        setSkill({ ...skill, title: e.target.value })
    }

    function updateRating(e) {
        // update rating property with new value entered in textbox 
        setSkill({ ...skill, rating: e.target.value })
    }

    function processForm(e) {
        e.preventDefault()
        if (skill.rating == -1)
            alert("Please select rating for the skill!")
        else
            addSkill(skill)   // call function in parent 
    }


    return (
        <>
            <h4>Add New Skill</h4>
            <form onSubmit={processForm}>
                Skill <br />
                <input type="text" required value={skill.title}
                    onChange={updateTitle} />
                <p></p>
                Rating <br />
                <select value={skill.rating} onChange={updateRating}>
                    <option value="-1">Select Rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <p></p>
                <button>Add</button>
            </form>
        </>
    )
}

function ListSkills({ skills, deleteSkill }) {

    return (
        <>
            <h4>List of Skills</h4>

            <table className="table table-bordered">
                <tr className="bg-danger text-white">
                    <th>Title</th>
                    <th>Rating</th>
                    <th></th>
                </tr>
                {
                    skills.map((s, idx) =>
                        <tr key={idx}>
                            <td>{s.title}</td>
                            <td>{s.rating}</td>
                            <td>
                                <button className="btn btn-danger"
                                   onClick={ () => deleteSkill(idx) }>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </table>
        </>
    )

}

export default function Skills3() {
    let [skills, setSkills] = useState([])

    function addSkill(skill) {
        setSkills([...skills, skill])
    }

    function deleteSkill(idxToDelete) {
        setSkills(skills.filter ( (s,idx) => idx != idxToDelete))
    }
    return (
        <>
            <h1>Skills</h1>
            <hr />
            <div className="row">
                <div className="col-sm-6">
                    <AddSkill addSkill={addSkill} />
                </div>
                <div className="col-sm-6">
                   { skills.length > 0 ? <ListSkills skills={skills} deleteSkill={deleteSkill} /> : '' }
                </div>
            </div>
        </>
    )
}
