import profileIcon from '../asset/profileIcon.svg'


const Bio =()=>{
return (
    <section className="bio">
        <div className="profile-photo" role='button' title = 'click to edit photo'>
            <img src={profileIcon} alt="profile iCon"/>
        </div>
        <div className="profle-info">
            <p className="name"> StephenChiag</p>
            <p className="about"> Building instagramClone</p>
            <button>Edit</button>
            <form className="edit-bio-form">
                <input type ="text"  id="" placeholder='Your Name'/>
                <input type="text" id='' placeholder='About You'/>
            </form>
        </div>
    </section>
)
}

export default Bio;