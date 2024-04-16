import React, { useState } from 'react'

function AddSkill({ skills, addSkill }) {
    let [skill, setSkill] = useState({ title: '', rating: -1 })
    let [message, setMessage] = useState("")

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
        setMessage("")
        if (skill.rating == -1)
            setMessage("Please select rating first!")
        else {
            // check whether skill is unique 

            let firstSkill = skills.find((s) => s.title === skill.title)
            if (!firstSkill)  // unique 
                addSkill(skill)   // call function in parent 
            else
                setMessage("Duplicate Skill!")
        }
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
                <p></p>
                <h5 className="text-danger">{message}</h5>
            </form>
        </>
    )
}

function ListSkills({ skills, deleteSkill }) {
    function avgerageRating() {
        var total = 0
        for (let s of skills) {
            total += parseInt(s.rating)
        }

        return  total / skills.length 
    }
    
    function deleteOneSkill(idx) {
        if (window.confirm("Do you want to delete?"))
            deleteSkill(idx)
    }
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
                                    onClick={() => deleteOneSkill(idx)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </table>
            <h4>Average Rating : {avgerageRating()} </h4>
        </>
    )

}

export default function Skills3() {
    let [skills, setSkills] = useState([])

    function addSkill(skill) {
        setSkills([...skills, skill])
    }

    function deleteSkill(idxToDelete) {
        setSkills(skills.filter((s, idx) => idx != idxToDelete))
    }
    return (
        <>
            <h1>Skills</h1>
            <hr />
            <div className="row">
                <div className="col-sm-6">
                    <AddSkill skills={skills} addSkill={addSkill} />
                </div>
                <div className="col-sm-6">
                    {skills.length > 0 ? <ListSkills skills={skills} deleteSkill={deleteSkill} /> : ''}
                </div>
            </div>
        </>
    )
}
